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
                <button class="btn-chapter" onclick="startQuiz('${course.id}', '${chapter.id}')">
                    Sorulara Başla →
                </button>
            </div>
        `;

        container.appendChild(chapterCard);
    });
}

function startQuiz(courseId, chapterId) {
    // Ders ve bölüm bilgisini localStorage'a kaydet
    localStorage.setItem('currentCourse', courseId);
    localStorage.setItem('currentChapter', chapterId);
    
    // Quiz sayfasına yönlendir
    window.location.href = 'quiz.html';
}

