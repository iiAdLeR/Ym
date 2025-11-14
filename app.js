// Uygulama durumu
let currentQuestionIndex = 0;
let selectedAnswer = null;
let answerRevealed = false;
let stats = {
    correct: 0,
    wrong: 0
};

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
    loadQuestions();
});

// Soruları yükle
function loadQuestions() {
    const courseId = localStorage.getItem('currentCourse');
    const chapterId = localStorage.getItem('currentChapter');
    
    if (!courseId || !chapterId) {
        // Eğer course/chapter bilgisi yoksa Chapter 1'e yönlendir
        localStorage.setItem('currentCourse', 'yapay-zeka');
        localStorage.setItem('currentChapter', 'chapter-1');
        loadQuestionFile('Kurslar/yapay zeka bölümleri/1bölümsorular.js');
        return;
    }
    
    // Course ve chapter bilgisini bul
    const course = coursesData.courses.find(c => c.id === courseId);
    if (!course) {
        loadQuestionFile('Kurslar/yapay zeka bölümleri/1bölümsorular.js');
        return;
    }
    
    const chapter = course.chapters.find(ch => ch.id === chapterId);
    if (!chapter || !chapter.questionsFile) {
        loadQuestionFile('Kurslar/yapay zeka bölümleri/1bölümsorular.js');
        return;
    }
    
    // Başlık ve açıklamayı güncelle
    document.querySelector('header h1').textContent = `${course.icon} ${course.name} - ${chapter.title}`;
    document.querySelector('.subtitle').textContent = chapter.description || 'Vize/Final Seviyesi Çoktan Seçmeli Sorular';
    
    // Soru dosyasını yükle
    loadQuestionFile(chapter.questionsFile);
}

// Soru dosyasını dinamik olarak yükle
function loadQuestionFile(filePath) {
    const script = document.createElement('script');
    script.src = filePath;
    script.onload = function() {
        initializeApp();
        setupEventListeners();
        displayQuestion(0);
        updateStats();
    };
    script.onerror = function() {
        console.error('Soru dosyası yüklenemedi:', filePath);
        alert('Soru dosyası yüklenemedi. Lütfen tekrar deneyin.');
    };
    document.head.appendChild(script);
}

// Uygulamayı başlat
function initializeApp() {
    if (typeof questions === 'undefined' || !questions || questions.length === 0) {
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
    if (index < 0 || index >= questions.length) {
        return;
    }
    
    currentQuestionIndex = index;
    selectedAnswer = null;
    answerRevealed = false;
    
    const question = questions[index];
    
    // Soru başlığı ve numarası
    document.getElementById('question-number').textContent = `Soru ${index + 1}`;
    document.getElementById('question-counter').textContent = `Soru ${index + 1} / ${questions.length}`;
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
    document.getElementById('next-btn').disabled = (index === questions.length - 1);
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
    const question = questions[currentQuestionIndex];
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
    if (currentQuestionIndex < questions.length - 1) {
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
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * questions.length);
    } while (randomIndex === currentQuestionIndex && questions.length > 1);
    
    displayQuestion(randomIndex);
}

// Toplam soru sayısını güncelle
function updateTotalQuestions() {
    document.getElementById('total-questions').textContent = questions.length;
}

// İstatistikleri güncelle
function updateStats() {
    document.getElementById('correct-count').textContent = stats.correct;
    document.getElementById('wrong-count').textContent = stats.wrong;
}

