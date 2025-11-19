/**
 * API Service Layer
 * Unified API handling with error management, retry logic, and caching
 */

class ApiService {
    constructor() {
        this.config = {
            timeout: 15000,
            retryAttempts: 3,
            retryDelay: 1000,
            cacheDuration: 30 * 60 * 1000, // 30 minutes
            rateLimitDuration: 60000, // 1 minute
            maxRequestsPerMinute: 10
        };
        
        this.cache = new Map();
        this.requestHistory = [];
        this.activeRequests = new Map();
    }

    /**
     * Check rate limiting
     */
    checkRateLimit() {
        const now = Date.now();
        this.requestHistory = this.requestHistory.filter(
            time => now - time < this.config.rateLimitDuration
        );
        
        if (this.requestHistory.length >= this.config.maxRequestsPerMinute) {
            const waitTime = Math.ceil(
                (this.config.rateLimitDuration - (now - this.requestHistory[0])) / 1000
            );
            return {
                allowed: false,
                waitTime: waitTime
            };
        }
        
        return { allowed: true };
    }

    /**
     * Record request for rate limiting
     */
    recordRequest() {
        this.requestHistory.push(Date.now());
    }

    /**
     * Get cached data if available and not expired
     */
    getCached(key) {
        const cached = this.cache.get(key);
        if (!cached) return null;
        
        const now = Date.now();
        if (now - cached.timestamp > this.config.cacheDuration) {
            this.cache.delete(key);
            return null;
        }
        
        return cached.data;
    }

    /**
     * Cache data
     */
    setCache(key, data) {
        this.cache.set(key, {
            data: data,
            timestamp: Date.now()
        });
    }

    /**
     * Clear cache
     */
    clearCache(key = null) {
        if (key) {
            this.cache.delete(key);
        } else {
            this.cache.clear();
        }
    }

    /**
     * Cancel active request
     */
    cancelRequest(requestId) {
        const request = this.activeRequests.get(requestId);
        if (request && request.cancel) {
            request.cancel();
            this.activeRequests.delete(requestId);
        }
    }

    /**
     * Create timeout promise
     */
    createTimeoutPromise(timeout) {
        return new Promise((_, reject) => {
            setTimeout(() => {
                reject(new Error(`Request timeout after ${timeout}ms`));
            }, timeout);
        });
    }

    /**
     * Retry with exponential backoff
     */
    async retryWithBackoff(fn, attempts = 0) {
        try {
            return await fn();
        } catch (error) {
            const retryableErrors = [
                'unavailable',
                'deadline-exceeded',
                'resource-exhausted',
                'aborted',
                'internal',
                'network-error',
                'timeout'
            ];
            
            const shouldRetry = 
                retryableErrors.some(code => 
                    error.code === code || 
                    error.message?.toLowerCase().includes(code) ||
                    error.message?.toLowerCase().includes('timeout')
                ) && 
                attempts < this.config.retryAttempts;
            
            if (shouldRetry) {
                const delay = this.config.retryDelay * Math.pow(2, attempts);
                console.log(`Retrying request (attempt ${attempts + 1}/${this.config.retryAttempts}) after ${delay}ms...`);
                await new Promise(resolve => setTimeout(resolve, delay));
                return this.retryWithBackoff(fn, attempts + 1);
            }
            
            throw error;
        }
    }

    /**
     * Firestore: Add document with retry and timeout
     */
    async addDocument(collection, data, options = {}) {
        const requestId = `${collection}-${Date.now()}-${Math.random()}`;
        
        // Rate limiting check
        const rateLimitCheck = this.checkRateLimit();
        if (!rateLimitCheck.allowed) {
            throw new Error(`Rate limit exceeded. Please wait ${rateLimitCheck.waitTime} seconds.`);
        }

        // Check cache if enabled
        if (options.useCache) {
            const cacheKey = `${collection}-${JSON.stringify(data)}`;
            const cached = this.getCached(cacheKey);
            if (cached) {
                return cached;
            }
        }

        // Get Firestore instance
        const db = this.getFirestore();
        if (!db) {
            throw new Error('Firestore not initialized');
        }

        // Prepare data with metadata
        const documentData = {
            ...data,
            createdAt: new Date().toISOString()
        };

        // Add server timestamp if available
        try {
            if (window.firebase?.firestore?.FieldValue) {
                documentData.timestamp = window.firebase.firestore.FieldValue.serverTimestamp();
            }
        } catch (error) {
            console.warn('Could not set serverTimestamp:', error);
        }

        // Execute with retry and timeout
        const executeRequest = async () => {
            const timeoutPromise = this.createTimeoutPromise(
                options.timeout || this.config.timeout
            );
            
            const firestorePromise = db.collection(collection).add(documentData);
            
            const result = await Promise.race([firestorePromise, timeoutPromise]);
            
            // Record successful request
            this.recordRequest();
            
            // Cache if enabled
            if (options.useCache) {
                const cacheKey = `${collection}-${JSON.stringify(data)}`;
                this.setCache(cacheKey, result);
            }
            
            return result;
        };

        try {
            const result = await this.retryWithBackoff(executeRequest);
            return result;
        } catch (error) {
            this.handleError(error, 'addDocument', { collection, data });
            throw error;
        }
    }

    /**
     * Firestore: Get documents with caching
     */
    async getDocuments(collection, queryOptions = {}, options = {}) {
        const cacheKey = `${collection}-${JSON.stringify(queryOptions)}`;
        
        // Check cache
        if (options.useCache !== false) {
            const cached = this.getCached(cacheKey);
            if (cached) {
                return cached;
            }
        }

        // Rate limiting check
        const rateLimitCheck = this.checkRateLimit();
        if (!rateLimitCheck.allowed) {
            throw new Error(`Rate limit exceeded. Please wait ${rateLimitCheck.waitTime} seconds.`);
        }

        // Get Firestore instance
        const db = this.getFirestore();
        if (!db) {
            throw new Error('Firestore not initialized');
        }

        const executeRequest = async () => {
            let query = db.collection(collection);
            
            // Apply query options
            if (queryOptions.where) {
                queryOptions.where.forEach(condition => {
                    query = query.where(condition.field, condition.operator, condition.value);
                });
            }
            
            if (queryOptions.orderBy) {
                queryOptions.orderBy.forEach(order => {
                    query = query.orderBy(order.field, order.direction || 'asc');
                });
            }
            
            if (queryOptions.limit) {
                query = query.limit(queryOptions.limit);
            }
            
            const timeoutPromise = this.createTimeoutPromise(
                options.timeout || this.config.timeout
            );
            
            const firestorePromise = query.get();
            
            const result = await Promise.race([firestorePromise, timeoutPromise]);
            
            // Record successful request
            this.recordRequest();
            
            // Extract data from snapshot
            const data = result.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            
            // Cache result
            if (options.useCache !== false) {
                this.setCache(cacheKey, data);
            }
            
            return data;
        };

        try {
            const result = await this.retryWithBackoff(executeRequest);
            return result;
        } catch (error) {
            this.handleError(error, 'getDocuments', { collection, queryOptions });
            throw error;
        }
    }

    /**
     * Firestore: Update document
     */
    async updateDocument(collection, docId, data, options = {}) {
        // Rate limiting check
        const rateLimitCheck = this.checkRateLimit();
        if (!rateLimitCheck.allowed) {
            throw new Error(`Rate limit exceeded. Please wait ${rateLimitCheck.waitTime} seconds.`);
        }

        // Get Firestore instance
        const db = this.getFirestore();
        if (!db) {
            throw new Error('Firestore not initialized');
        }

        // Prepare update data
        const updateData = {
            ...data,
            updatedAt: new Date().toISOString()
        };

        const executeRequest = async () => {
            const timeoutPromise = this.createTimeoutPromise(
                options.timeout || this.config.timeout
            );
            
            const firestorePromise = db.collection(collection).doc(docId).update(updateData);
            
            const result = await Promise.race([firestorePromise, timeoutPromise]);
            
            // Record successful request
            this.recordRequest();
            
            // Clear cache for this collection
            if (options.clearCache !== false) {
                this.clearCache(`${collection}-`);
            }
            
            return result;
        };

        try {
            const result = await this.retryWithBackoff(executeRequest);
            return result;
        } catch (error) {
            this.handleError(error, 'updateDocument', { collection, docId, data });
            throw error;
        }
    }

    /**
     * Firestore: Delete document
     */
    async deleteDocument(collection, docId, options = {}) {
        // Rate limiting check
        const rateLimitCheck = this.checkRateLimit();
        if (!rateLimitCheck.allowed) {
            throw new Error(`Rate limit exceeded. Please wait ${rateLimitCheck.waitTime} seconds.`);
        }

        // Get Firestore instance
        const db = this.getFirestore();
        if (!db) {
            throw new Error('Firestore not initialized');
        }

        const executeRequest = async () => {
            const timeoutPromise = this.createTimeoutPromise(
                options.timeout || this.config.timeout
            );
            
            const firestorePromise = db.collection(collection).doc(docId).delete();
            
            const result = await Promise.race([firestorePromise, timeoutPromise]);
            
            // Record successful request
            this.recordRequest();
            
            // Clear cache for this collection
            if (options.clearCache !== false) {
                this.clearCache(`${collection}-`);
            }
            
            return result;
        };

        try {
            const result = await this.retryWithBackoff(executeRequest);
            return result;
        } catch (error) {
            this.handleError(error, 'deleteDocument', { collection, docId });
            throw error;
        }
    }

    /**
     * Get Firestore instance
     */
    getFirestore() {
        if (window.db) {
            return window.db;
        }
        
        if (window.firebase?.firestore) {
            return window.firebase.firestore();
        }
        
        return null;
    }

    /**
     * Handle errors with detailed logging and user-friendly messages
     */
    handleError(error, operation, context = {}) {
        console.error(`API Error in ${operation}:`, error);
        console.error('Context:', context);
        
        // Error code mapping
        const errorMessages = {
            'permission-denied': 'İzin hatası! Firebase kurallarını kontrol edin.',
            'unavailable': 'Bağlantı hatası. İnternet bağlantınızı kontrol edin ve tekrar deneyin.',
            'deadline-exceeded': 'İstek zaman aşımına uğradı. Lütfen tekrar deneyin.',
            'resource-exhausted': 'Kaynak tükenmiş. Lütfen daha sonra tekrar deneyin.',
            'aborted': 'İstek iptal edildi.',
            'internal': 'Sunucu hatası. Lütfen daha sonra tekrar deneyin.',
            'not-found': 'Kayıt bulunamadı.',
            'already-exists': 'Bu kayıt zaten mevcut.',
            'failed-precondition': 'İşlem ön koşulları sağlanmadı.',
            'out-of-range': 'Geçersiz değer aralığı.',
            'unimplemented': 'Bu özellik henüz uygulanmadı.',
            'unauthenticated': 'Kimlik doğrulama gerekli.',
            'network-error': 'Ağ hatası. İnternet bağlantınızı kontrol edin.',
            'timeout': 'İstek zaman aşımına uğradı. Lütfen tekrar deneyin.'
        };
        
        // Get user-friendly error message
        let userMessage = 'Bir hata oluştu. Lütfen tekrar deneyin.';
        
        if (error.code && errorMessages[error.code]) {
            userMessage = errorMessages[error.code];
        } else if (error.message) {
            const messageLower = error.message.toLowerCase();
            for (const [key, value] of Object.entries(errorMessages)) {
                if (messageLower.includes(key)) {
                    userMessage = value;
                    break;
                }
            }
        }
        
        // Add user-friendly message to error
        error.userMessage = userMessage;
        
        return error;
    }

    /**
     * Validate and sanitize input
     */
    validateInput(data, schema) {
        const errors = [];
        const sanitized = {};
        
        for (const [key, rules] of Object.entries(schema)) {
            const value = data[key];
            
            // Required check
            if (rules.required && (value === undefined || value === null || value === '')) {
                errors.push(`${key} alanı zorunludur.`);
                continue;
            }
            
            // Skip if value is empty and not required
            if (!rules.required && (value === undefined || value === null || value === '')) {
                continue;
            }
            
            // Type check
            if (rules.type && typeof value !== rules.type) {
                errors.push(`${key} alanı ${rules.type} tipinde olmalıdır.`);
                continue;
            }
            
            // Min/Max length check
            if (rules.type === 'string') {
                if (rules.minLength && value.length < rules.minLength) {
                    errors.push(`${key} alanı en az ${rules.minLength} karakter olmalıdır.`);
                }
                if (rules.maxLength && value.length > rules.maxLength) {
                    errors.push(`${key} alanı en fazla ${rules.maxLength} karakter olmalıdır.`);
                }
            }
            
            // Min/Max value check
            if (rules.type === 'number') {
                if (rules.min !== undefined && value < rules.min) {
                    errors.push(`${key} alanı en az ${rules.min} olmalıdır.`);
                }
                if (rules.max !== undefined && value > rules.max) {
                    errors.push(`${key} alanı en fazla ${rules.max} olmalıdır.`);
                }
            }
            
            // Sanitize
            if (rules.sanitize) {
                if (rules.type === 'string') {
                    sanitized[key] = value
                        .trim()
                        .substring(0, rules.maxLength || 1000)
                        .replace(/<[^>]*>/g, '') // Remove HTML tags
                        .replace(/[<>]/g, ''); // Remove remaining angle brackets
                } else {
                    sanitized[key] = value;
                }
            } else {
                sanitized[key] = value;
            }
        }
        
        return {
            valid: errors.length === 0,
            errors: errors,
            data: sanitized
        };
    }
}

// Create singleton instance
const apiService = new ApiService();

// Make available globally
window.apiService = apiService;

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = apiService;
}

