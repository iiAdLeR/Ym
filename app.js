// Uygulama durumu
let currentQuestionIndex = 0;
let selectedAnswer = null;
let answerRevealed = false;
let stats = {
    correct: 0,
    wrong: 0
};

// Global questions getter (question files define questions as const, so we can't reassign)
// This getter ensures we always access the current questions array
function getQuestions() {
    // Try window.questions first (set by us), then global questions (from loaded files)
    return window.questions || (typeof questions !== 'undefined' ? questions : []);
}

// Configuration constants
const QUESTION_LOAD_CONFIG = {
    TIMEOUT: 15000, // 15 seconds
    RETRY_ATTEMPTS: 2,
    RETRY_DELAY: 2000, // 2 seconds
    CACHE_DURATION: 30 * 60 * 1000 // 30 minutes in milliseconds
};

// Questions cache
const questionsCache = new Map();

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
    loadQuestions();
});

// Get cached questions if available and not expired
function getCachedQuestions(filePath) {
    const cached = questionsCache.get(filePath);
    if (!cached) return null;
    
    const now = Date.now();
    if (now - cached.timestamp > QUESTION_LOAD_CONFIG.CACHE_DURATION) {
        questionsCache.delete(filePath);
        return null;
    }
    
    return cached.questions;
}

// Cache questions
function cacheQuestions(filePath, questions) {
    questionsCache.set(filePath, {
        questions: questions,
        timestamp: Date.now()
    });
}

// Load question file with timeout and retry
function loadQuestionFileWithRetry(filePath, attempts = 0) {
    return new Promise((resolve, reject) => {
        // Check cache first
        const cachedQuestions = getCachedQuestions(filePath);
        if (cachedQuestions) {
            console.log('Loading questions from cache:', filePath);
            resolve(cachedQuestions);
            return;
        }
        
        // Remove any existing script with same src to prevent duplicates
        const existingScript = document.querySelector(`script[src="${filePath}"]`);
        if (existingScript) {
            existingScript.remove();
        }
        
        const script = document.createElement('script');
        script.src = filePath;
        
        let resolved = false;
        
        // Timeout handling
        const timeoutId = setTimeout(() => {
            if (!resolved) {
                resolved = true;
                script.remove();
                if (attempts < QUESTION_LOAD_CONFIG.RETRY_ATTEMPTS) {
                    console.log(`Retrying question file load (attempt ${attempts + 1}/${QUESTION_LOAD_CONFIG.RETRY_ATTEMPTS}):`, filePath);
                    setTimeout(() => {
                        loadQuestionFileWithRetry(filePath, attempts + 1)
                            .then(resolve)
                            .catch(reject);
                    }, QUESTION_LOAD_CONFIG.RETRY_DELAY);
                } else {
                    reject(new Error(`Timeout: Question file took too long to load (${filePath})`));
                }
            }
        }, QUESTION_LOAD_CONFIG.TIMEOUT);
        
        script.onload = function() {
            if (resolved) return;
            clearTimeout(timeoutId);
            
            // Wait a small delay to ensure script execution is complete
            setTimeout(() => {
                if (resolved) return;
                
                // Check if questions variable is available (try both window.questions and global questions)
                const loadedQuestions = window.questions || (typeof questions !== 'undefined' ? questions : null);
                
                if (!loadedQuestions || !Array.isArray(loadedQuestions) || loadedQuestions.length === 0) {
                    script.remove();
                    if (!resolved) {
                        resolved = true;
                        reject(new Error('Questions not found or empty in file: ' + filePath));
                    }
                    return;
                }
                
                if (resolved) return;
                resolved = true;
                
                // Cache the questions
                cacheQuestions(filePath, loadedQuestions);
                console.log('Questions loaded and cached:', filePath);
                resolve(loadedQuestions);
            }, 50); // Small delay to ensure script execution
        };
        
        script.onerror = function() {
            if (resolved) return;
            resolved = true;
            clearTimeout(timeoutId);
            script.remove();
            
            if (attempts < QUESTION_LOAD_CONFIG.RETRY_ATTEMPTS) {
                console.log(`Retrying question file load after error (attempt ${attempts + 1}/${QUESTION_LOAD_CONFIG.RETRY_ATTEMPTS}):`, filePath);
                setTimeout(() => {
                    loadQuestionFileWithRetry(filePath, attempts + 1)
                        .then(resolve)
                        .catch(reject);
                }, QUESTION_LOAD_CONFIG.RETRY_DELAY);
            } else {
                reject(new Error('Failed to load question file: ' + filePath));
            }
        };
        
        document.head.appendChild(script);
    });
}

// Soruları yükle
function loadQuestions() {
    const courseId = localStorage.getItem('currentCourse');
    const chapterId = localStorage.getItem('currentChapter');
    
    let questionFilePath = 'Kurslar/yapay zeka bölümleri/1bölümsorular.js';
    
    if (!courseId || !chapterId) {
        // Eğer course/chapter bilgisi yoksa Chapter 1'e yönlendir
        localStorage.setItem('currentCourse', 'yapay-zeka');
        localStorage.setItem('currentChapter', 'chapter-1');
    } else {
        // Course ve chapter bilgisini bul
        const course = coursesData.courses.find(c => c.id === courseId);
        if (course) {
            const chapter = course.chapters.find(ch => ch.id === chapterId);
            if (chapter && chapter.questionsFile) {
                questionFilePath = chapter.questionsFile;
                
                // Başlık ve açıklamayı güncelle
                const headerH1 = document.querySelector('header h1');
                const subtitle = document.querySelector('.subtitle');
                if (headerH1) {
                    headerH1.textContent = `${course.icon} ${course.name} - ${chapter.title}`;
                }
                if (subtitle) {
                    subtitle.textContent = chapter.description || 'Vize/Final Seviyesi Çoktan Seçmeli Sorular';
                }
            }
        }
    }
    
    // Soru dosyasını yükle
    loadQuestionFile(questionFilePath);
}

// Soru dosyasını dinamik olarak yükle
async function loadQuestionFile(filePath) {
    try {
        // Show loading indicator if exists
        const loadingIndicator = document.getElementById('loading-indicator');
        if (loadingIndicator) {
            loadingIndicator.style.display = 'block';
        }
        
        // Load questions with retry and caching
        const loadedQuestions = await loadQuestionFileWithRetry(filePath);
        
        // Set global questions variable (for backward compatibility)
        // Note: question files define questions as const, so we use window.questions
        window.questions = loadedQuestions;
        
        // Initialize app
        initializeApp();
        setupEventListeners();
        displayQuestion(0);
        updateStats();
        
        // Hide loading indicator
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
        }
    } catch (error) {
        console.error('Error loading questions:', error);
        
        // Hide loading indicator
        const loadingIndicator = document.getElementById('loading-indicator');
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
        }
        
        // Show user-friendly error message
        const errorMessage = error.message.includes('Timeout') 
            ? 'Soru dosyası yüklenirken zaman aşımı oluştu. Lütfen sayfayı yenileyin.'
            : 'Soru dosyası yüklenemedi. Lütfen sayfayı yenileyin veya daha sonra tekrar deneyin.';
        
        alert(errorMessage);
        
        // Try to load default questions as fallback
        if (filePath !== 'Kurslar/yapay zeka bölümleri/1bölümsorular.js') {
            console.log('Attempting to load default questions as fallback...');
            setTimeout(() => {
                loadQuestionFile('Kurslar/yapay zeka bölümleri/1bölümsorular.js');
            }, 1000);
        }
    }
}

// Uygulamayı başlat
function initializeApp() {
    const q = getQuestions();
    if (!q || q.length === 0) {
        console.error('Sorular yüklenemedi');
        return;
    }
    updateTotalQuestions();
}

// Event listener'ları kur
function setupEventListeners() {
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('prev-btn').addEventListener('click', previousQuestion);
    document.getElementById('random-question').addEventListener('click', randomQuestion);
    document.getElementById('show-answer').addEventListener('click', showAnswer);
    document.getElementById('reset-question').addEventListener('click', resetQuestion);
}

// Soruyu göster
function displayQuestion(index) {
    const q = getQuestions();
    if (index < 0 || index >= q.length) {
        return;
    }
    
    currentQuestionIndex = index;
    selectedAnswer = null;
    answerRevealed = false;
    
    const question = q[index];
    
    // Soru başlığı ve numarası
    document.getElementById('question-number').textContent = `Soru ${index + 1}`;
    document.getElementById('question-counter').textContent = `Soru ${index + 1} / ${q.length}`;
    document.getElementById('question-text').textContent = question.question;
    
    // Şıkları oluştur
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, idx) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.dataset.value = String.fromCharCode(65 + idx); // A, B, C, D, E
        optionDiv.innerHTML = `
            <span class="option-label">${String.fromCharCode(65 + idx)})</span>
            <span class="option-text">${option}</span>
        `;
        
        optionDiv.addEventListener('click', function() {
            if (!answerRevealed) {
                selectOption(String.fromCharCode(65 + idx));
            }
        });
        
        optionsContainer.appendChild(optionDiv);
    });
    
    // Cevap bölümünü gizle
    document.getElementById('answer-section').style.display = 'none';
    document.getElementById('show-answer').style.display = 'block';
    document.getElementById('reset-question').style.display = 'none';
    
    // Navigation butonlarını güncelle
    document.getElementById('prev-btn').disabled = (index === 0);
    document.getElementById('next-btn').disabled = (index === q.length - 1);
}

// Şık seç
function selectOption(value) {
    if (answerRevealed) return;
    
    selectedAnswer = value;
    
    // Tüm şıklardan seçili sınıfını kaldır
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Seçilen şıka sınıf ekle
    document.querySelector(`.option[data-value="${value}"]`).classList.add('selected');
}

// Cevabı göster
function showAnswer() {
    if (answerRevealed) return;
    
    answerRevealed = true;
    const q = getQuestions();
    const question = q[currentQuestionIndex];
    const correctAnswer = question.correctAnswer;
    
    // Cevap bölümünü göster
    document.getElementById('answer-section').style.display = 'block';
    document.getElementById('correct-answer-label').textContent = correctAnswer;
    document.getElementById('explanation-text').textContent = question.explanation;
    
    // Yanlış şıkların açıklamalarını göster
    const wrongExplanationsContainer = document.getElementById('wrong-explanations');
    wrongExplanationsContainer.innerHTML = '';
    
    if (question.wrongExplanations && question.wrongExplanations.length > 0) {
        const wrongHeader = document.createElement('h4');
        wrongHeader.textContent = '❌ Yanlış Şıklar:';
        wrongHeader.style.marginBottom = '15px';
        wrongHeader.style.color = '#495057';
        wrongExplanationsContainer.appendChild(wrongHeader);
        
        question.wrongExplanations.forEach(item => {
            const wrongDiv = document.createElement('div');
            wrongDiv.className = 'wrong-explanation-item';
            wrongDiv.innerHTML = `
                <div class="option-name">${item.option}) ${question.options[item.option.charCodeAt(0) - 65]}</div>
                <div style="color: #6c757d; margin-top: 5px;">${item.reason}</div>
            `;
            wrongExplanationsContainer.appendChild(wrongDiv);
        });
    }
    
    // Şıkları renklendir
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
        if (opt.dataset.value === correctAnswer) {
            opt.classList.add('correct');
        } else if (selectedAnswer && opt.dataset.value === selectedAnswer && opt.dataset.value !== correctAnswer) {
            opt.classList.add('incorrect');
        }
    });
    
    // İstatistikleri güncelle
    if (selectedAnswer === correctAnswer) {
        stats.correct++;
    } else if (selectedAnswer) {
        stats.wrong++;
    }
    updateStats();
    
    // Butonları güncelle
    document.getElementById('show-answer').style.display = 'none';
    document.getElementById('reset-question').style.display = 'block';
}

// Soruyu sıfırla
function resetQuestion() {
    answerRevealed = false;
    selectedAnswer = null;
    
    // Şıkları sıfırla
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected', 'correct', 'incorrect');
    });
    
    // Cevap bölümünü gizle
    document.getElementById('answer-section').style.display = 'none';
    document.getElementById('show-answer').style.display = 'block';
    document.getElementById('reset-question').style.display = 'none';
}

// Sonraki soru
function nextQuestion() {
    const q = getQuestions();
    if (currentQuestionIndex < q.length - 1) {
        displayQuestion(currentQuestionIndex + 1);
    }
}

// Önceki soru
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        displayQuestion(currentQuestionIndex - 1);
    }
}

// Rastgele soru
function randomQuestion() {
    const q = getQuestions();
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * q.length);
    } while (randomIndex === currentQuestionIndex && q.length > 1);
    
    displayQuestion(randomIndex);
}

// Toplam soru sayısını güncelle
function updateTotalQuestions() {
    const q = getQuestions();
    document.getElementById('total-questions').textContent = q.length;
}

// İstatistikleri güncelle
function updateStats() {
    document.getElementById('correct-count').textContent = stats.correct;
    document.getElementById('wrong-count').textContent = stats.wrong;
}

