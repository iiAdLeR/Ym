// Firebase feedback functionality
// Configuration constants
const FEEDBACK_CONFIG = {
    RETRY_ATTEMPTS: 3,
    RETRY_DELAY: 1000, // milliseconds
    TIMEOUT: 10000, // 10 seconds
    RATE_LIMIT_DURATION: 60000, // 1 minute
    MAX_SUBMISSIONS_PER_MINUTE: 3
};

// Rate limiting storage
let submissionHistory = [];

// Wait for DOM and Firebase to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for Firebase to initialize
    setTimeout(initFeedbackForm, 500);
});

// Rate limiting check
function checkRateLimit() {
    const now = Date.now();
    // Remove old entries (older than RATE_LIMIT_DURATION)
    submissionHistory = submissionHistory.filter(time => now - time < FEEDBACK_CONFIG.RATE_LIMIT_DURATION);
    
    // Check if exceeded limit
    if (submissionHistory.length >= FEEDBACK_CONFIG.MAX_SUBMISSIONS_PER_MINUTE) {
        const waitTime = Math.ceil((FEEDBACK_CONFIG.RATE_LIMIT_DURATION - (now - submissionHistory[0])) / 1000);
        return {
            allowed: false,
            waitTime: waitTime
        };
    }
    
    return { allowed: true };
}

// Add submission to history
function recordSubmission() {
    submissionHistory.push(Date.now());
}

// Input validation and sanitization
function validateAndSanitizeInput(name, message, rating) {
    const errors = [];
    const sanitized = {
        name: '',
        message: '',
        rating: null
    };
    
    // Validate rating
    if (!rating) {
        errors.push('Lütfen bir değerlendirme seçin!');
    } else {
        const ratingNum = parseInt(rating);
        if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
            errors.push('Geçersiz değerlendirme değeri!');
        } else {
            sanitized.rating = ratingNum;
        }
    }
    
    // Sanitize name (max 100 characters, remove HTML)
    if (name && name.trim() !== '') {
        const sanitizedName = name.trim().substring(0, 100)
            .replace(/<[^>]*>/g, '') // Remove HTML tags
            .replace(/[<>]/g, ''); // Remove remaining angle brackets
        sanitized.name = sanitizedName || 'İsimsiz';
    } else {
        sanitized.name = 'İsimsiz';
    }
    
    // Sanitize message (max 1000 characters, remove HTML)
    if (message && message.trim() !== '') {
        const sanitizedMessage = message.trim().substring(0, 1000)
            .replace(/<[^>]*>/g, '') // Remove HTML tags
            .replace(/[<>]/g, ''); // Remove remaining angle brackets
        sanitized.message = sanitizedMessage;
    }
    
    return {
        valid: errors.length === 0,
        errors: errors,
        data: sanitized
    };
}

// Retry function with exponential backoff
async function submitWithRetry(db, feedbackData, attempts = 0) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Timeout: Request took too long')), FEEDBACK_CONFIG.TIMEOUT);
    });
    
    const firestorePromise = db.collection('feedbacks').add(feedbackData);
    
    try {
        const docRef = await Promise.race([firestorePromise, timeoutPromise]);
        return docRef;
    } catch (error) {
        // Retry on certain errors
        const retryableErrors = ['unavailable', 'deadline-exceeded', 'resource-exhausted', 'aborted'];
        const shouldRetry = retryableErrors.includes(error.code) && attempts < FEEDBACK_CONFIG.RETRY_ATTEMPTS;
        
        if (shouldRetry) {
            const delay = FEEDBACK_CONFIG.RETRY_DELAY * Math.pow(2, attempts); // Exponential backoff
            console.log(`Retrying submission (attempt ${attempts + 1}/${FEEDBACK_CONFIG.RETRY_ATTEMPTS}) after ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            return submitWithRetry(db, feedbackData, attempts + 1);
        }
        
        throw error;
    }
}

function initFeedbackForm() {
    const feedbackForm = document.getElementById('feedback-form');
    const submitBtn = document.getElementById('submit-feedback');
    
    if (!feedbackForm || !submitBtn) {
        console.error('Form or submit button not found');
        return;
    }
    
    // Get Firebase db - try different methods
    let db;
    if (typeof firebase !== 'undefined' && firebase.firestore) {
        db = firebase.firestore();
        console.log('Firebase initialized successfully');
    } else if (window.db) {
        db = window.db;
        console.log('Firebase initialized via window.db');
    } else {
        console.error('Firebase not initialized');
        showMessage('Firebase bağlantısı kurulamadı. Lütfen sayfayı yenileyin.', 'error');
        submitBtn.disabled = true;
        return;
    }
    
    feedbackForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Rate limiting check
        const rateLimitCheck = checkRateLimit();
        if (!rateLimitCheck.allowed) {
            showMessage(`Çok fazla gönderim yaptınız. Lütfen ${rateLimitCheck.waitTime} saniye sonra tekrar deneyin.`, 'error');
            return;
        }
        
        // Disable submit button immediately
        submitBtn.disabled = true;
        const submitSpan = submitBtn.querySelector('span');
        const originalText = submitSpan ? submitSpan.textContent : 'Gönder';
        
        // Update button text
        if (submitSpan) {
            submitSpan.textContent = 'Gönderiliyor...';
        } else {
            submitBtn.textContent = 'Gönderiliyor...';
        }
        
        // Get form values
        const nameInput = document.getElementById('feedback-name');
        const messageInput = document.getElementById('feedback-message-text');
        const ratingInput = document.querySelector('input[name="rating"]:checked');
        
        const name = nameInput ? nameInput.value.trim() : '';
        const rating = ratingInput ? ratingInput.value : null;
        const message = messageInput ? messageInput.value.trim() : '';
        
        console.log('Form values:', { name, rating, message });
        
        // Validate and sanitize input
        const validation = validateAndSanitizeInput(name, message, rating);
        if (!validation.valid) {
            console.log('Validation failed:', validation.errors);
            showMessage(validation.errors[0], 'error');
            resetSubmitButton(submitBtn, submitSpan, originalText);
            return;
        }
        
        try {
            // Prepare feedback data
            const feedbackData = {
                rating: validation.data.rating,
                createdAt: new Date().toISOString()
            };
            
            // Add name
            feedbackData.name = validation.data.name;
            
            // Add message only if provided
            if (validation.data.message) {
                feedbackData.message = validation.data.message;
            }
            
            // Add timestamp using serverTimestamp if available
            try {
                if (firebase && firebase.firestore && firebase.firestore.FieldValue) {
                    feedbackData.timestamp = firebase.firestore.FieldValue.serverTimestamp();
                }
            } catch (timestampError) {
                console.warn('Could not set serverTimestamp:', timestampError);
                // Continue without serverTimestamp
            }
            
            console.log('Sending feedback data:', feedbackData);
            
            // Add feedback to Firestore with retry logic and timeout
            const docRef = await submitWithRetry(db, feedbackData);
            console.log('Feedback added successfully with ID:', docRef.id);
            
            // Record successful submission for rate limiting
            recordSubmission();
            
            // Success message
            showMessage('Değerlendirmeniz başarıyla gönderildi! Teşekkür ederiz. 🙏', 'success');
            
            // Reset form immediately after successful submission
            resetForm(feedbackForm);
            
            // Reset submit button
            resetSubmitButton(submitBtn, submitSpan, originalText);
            
            console.log('Form reset completed');
            
        } catch (error) {
            console.error('Error submitting feedback:', error);
            console.error('Error details:', {
                code: error.code,
                message: error.message
            });
            
            let errorMessage = 'Bir hata oluştu. Lütfen tekrar deneyin.';
            
            // More specific error messages
            if (error.code === 'permission-denied') {
                errorMessage = 'İzin hatası! Firebase kurallarını kontrol edin.';
            } else if (error.code === 'unavailable' || error.message === 'Timeout: Request took too long') {
                errorMessage = 'Bağlantı hatası. İnternet bağlantınızı kontrol edin ve tekrar deneyin.';
            } else if (error.message && error.message.includes('Timeout')) {
                errorMessage = 'İstek zaman aşımına uğradı. Lütfen tekrar deneyin.';
            } else if (error.message) {
                errorMessage = `Hata: ${error.message}`;
            }
            
            showMessage(errorMessage, 'error');
            resetSubmitButton(submitBtn, submitSpan, originalText);
        }
    });
    
    // Star rating interaction
    const starInputs = document.querySelectorAll('.star-rating input[type="radio"]');
    const starLabels = document.querySelectorAll('.star-rating label');
    
    // Make labels clickable and update visual state
    starLabels.forEach((label) => {
        label.addEventListener('click', function(e) {
            e.preventDefault();
            // Get the corresponding input
            const inputId = label.getAttribute('for');
            const input = document.getElementById(inputId);
            if (input) {
                input.checked = true;
                updateStarDisplay(parseInt(input.value));
            }
        });
    });
    
    // Update display when input changes
    starInputs.forEach((input) => {
        input.addEventListener('change', function() {
            updateStarDisplay(parseInt(this.value));
        });
        
        // Hover effect on label
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (label) {
            label.addEventListener('mouseenter', function() {
                const rating = parseInt(input.value);
                updateStarHover(rating, true);
            });
        }
    });
    
    // Reset hover when mouse leaves rating area
    const starRating = document.querySelector('.star-rating');
    if (starRating) {
        starRating.addEventListener('mouseleave', function() {
            const checked = document.querySelector('.star-rating input:checked');
            if (checked) {
                updateStarDisplay(parseInt(checked.value));
            } else {
                updateStarHover(0, false);
            }
        });
    }
}

// Reset form function
function resetForm(form) {
    console.log('Resetting form...');
    
    // Reset form
    form.reset();
    
    // Reset star rating visual state
    const starInputs = document.querySelectorAll('.star-rating input[type="radio"]');
    const starLabels = document.querySelectorAll('.star-rating label');
    
    // Uncheck all radio inputs
    starInputs.forEach(input => {
        input.checked = false;
    });
    
    // Reset all labels visually
    starLabels.forEach(label => {
        label.classList.remove('active');
        label.style.filter = 'grayscale(100%) opacity(0.4)';
        label.style.transform = 'scale(1)';
    });
    
    // Clear input fields manually to ensure they're empty
    const nameInput = document.getElementById('feedback-name');
    const messageInput = document.getElementById('feedback-message-text');
    
    if (nameInput) {
        nameInput.value = '';
    }
    
    if (messageInput) {
        messageInput.value = '';
    }
    
    console.log('Form reset completed');
}

// Reset submit button function
function resetSubmitButton(submitBtn, submitSpan, originalText) {
    console.log('Resetting submit button to:', originalText);
    
    // Enable button
    submitBtn.disabled = false;
    
    // Restore original text
    if (submitSpan) {
        submitSpan.textContent = originalText;
    } else {
        submitBtn.textContent = originalText;
    }
    
    console.log('Submit button reset completed');
}

// Update star display based on rating
function updateStarDisplay(rating) {
    const starLabels = document.querySelectorAll('.star-rating label');
    starLabels.forEach((label, index) => {
        const labelRating = index + 1;
        if (labelRating <= rating) {
            label.classList.add('active');
            label.style.filter = 'grayscale(0%) opacity(1)';
            label.style.transform = 'scale(1.2)';
        } else {
            label.classList.remove('active');
            label.style.filter = 'grayscale(100%) opacity(0.4)';
            label.style.transform = 'scale(1)';
        }
    });
}

// Update star hover state
function updateStarHover(rating, isHovering) {
    const starLabels = document.querySelectorAll('.star-rating label');
    if (!isHovering) {
        // Reset to checked state
        const checked = document.querySelector('.star-rating input:checked');
        if (checked) {
            updateStarDisplay(parseInt(checked.value));
        } else {
            starLabels.forEach(label => {
                label.classList.remove('active');
                label.style.filter = 'grayscale(100%) opacity(0.4)';
                label.style.transform = 'scale(1)';
            });
        }
        return;
    }
    
    starLabels.forEach((label, index) => {
        const labelRating = index + 1;
        if (labelRating <= rating) {
            label.style.filter = 'grayscale(0%) opacity(1)';
            label.style.transform = 'scale(1.3)';
        } else {
            label.style.filter = 'grayscale(100%) opacity(0.4)';
            label.style.transform = 'scale(1)';
        }
    });
}

// Show message function
function showMessage(text, type) {
    const messageDiv = document.getElementById('feedback-status');
    if (messageDiv) {
        messageDiv.textContent = text;
        messageDiv.className = `feedback-status ${type}`;
        messageDiv.style.display = 'block';
        
        // Scroll to message
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Hide message after 5 seconds
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
        
        console.log('Message shown:', text);
    } else {
        // Fallback: use alert if element not found
        alert(text);
    }
}
