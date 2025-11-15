// Bölümler sayfası için JavaScript
document.addEventListener('DOMContentLoaded', function() {
    loadChapters();
});

function loadChapters() {
    // URL parametresinden ders ID'sini al
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('course');

    if (!courseId) {
        window.location.href = 'Kurslar/courses.html';
        return;
    }

    // Ders bilgisini bul
    const course = coursesData.courses.find(c => c.id === courseId);

    if (!course) {
        window.location.href = 'Kurslar/courses.html';
        return;
    }

    // Başlık ve açıklamayı güncelle
    document.getElementById('course-title').textContent = `${course.icon} ${course.name} - Bölümler`;
    document.getElementById('course-description').textContent = course.description;

    // Bölümleri göster
    displayChapters(course);
}

function displayChapters(course) {
    const container = document.getElementById('chapters-container');
    container.innerHTML = '';

    if (!course.chapters || course.chapters.length === 0) {
        container.innerHTML = `
            <div class="no-chapters">
                <div class="no-chapters-icon">📝</div>
                <h3>Henüz Bölüm Eklenmemiş</h3>
                <p>Bu ders için henüz bölüm eklenmemiştir. Yakında eklenecektir.</p>
            </div>
        `;
        return;
    }

    course.chapters.forEach((chapter, index) => {
        const chapterCard = document.createElement('div');
        chapterCard.className = 'chapter-card';
        
        chapterCard.innerHTML = `
            <div class="chapter-number">Bölüm ${index + 1}</div>
            <div class="chapter-content">
                <h2>${chapter.title}</h2>
                <p>${chapter.description}</p>
            </div>
            <div class="chapter-action">
                <button class="btn-chapter btn-learn" onclick="startLearn('${course.id}', '${chapter.id}')">
                    📖 Öğren
                </button>
                <button class="btn-chapter" onclick="startQuiz('${course.id}', '${chapter.id}')">
                    Sorulara Başla →
                </button>
            </div>
        `;

        container.appendChild(chapterCard);
    });
}

function startLearn(courseId, chapterId) {
    // Ders ve bölüm bilgisini localStorage'a kaydet
    localStorage.setItem('currentCourse', courseId);
    localStorage.setItem('currentChapter', chapterId);
    
    // Learn sayfasına yönlendir (farklı bölümler için farklı sayfalar)
    let learnPage = 'learn.html'; // Default: Chapter 1
    
    if (chapterId === 'chapter-1') {
        learnPage = 'learn.html';
    } else if (chapterId === 'chapter-2') {
        learnPage = 'learn-chapter2.html';
    } else if (chapterId === 'chapter-3') {
        learnPage = 'learn-chapter3.html';
    } else if (chapterId === 'chapter-4') {
        learnPage = 'learn-chapter4.html';
    } else if (chapterId === 'chapter-5') {
        learnPage = 'learn-chapter5.html';
    } else if (chapterId === 'chapter-6') {
        learnPage = 'learn-chapter6.html';
    }
    // Diğer bölümler için ileride eklenebilir
    
    window.location.href = learnPage;
}

function startQuiz(courseId, chapterId) {
    // Ders ve bölüm bilgisini localStorage'a kaydet
    localStorage.setItem('currentCourse', courseId);
    localStorage.setItem('currentChapter', chapterId);
    
    // Quiz sayfasına yönlendir
    window.location.href = 'quiz.html';
}

