// Dersler sayfası için JavaScript
document.addEventListener('DOMContentLoaded', function() {
    displayCourses();
});

function displayCourses() {
    const container = document.getElementById('courses-container');
    container.innerHTML = '';

    if (!coursesData || !coursesData.courses) {
        container.innerHTML = '<p class="no-data">Ders verisi bulunamadı.</p>';
        return;
    }

    coursesData.courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.dataset.courseId = course.id;
        
        courseCard.innerHTML = `
            <div class="course-icon">${course.icon}</div>
            <div class="course-content">
                <h2>${course.name}</h2>
                <p>${course.description}</p>
                <div class="course-meta">
                    <span class="chapter-count">${course.chapters.length} Bölüm</span>
                </div>
            </div>
            <div class="course-action">
                <button class="btn-course" onclick="selectCourse('${course.id}')">
                    Bölümlere Git →
                </button>
            </div>
        `;

        container.appendChild(courseCard);
    });
}

function selectCourse(courseId) {
    // URL parametresi ile bölümler sayfasına yönlendir
    window.location.href = `../chapters.html?course=${courseId}`;
}

