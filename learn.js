// Learn Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    loadChapterInfo();
    setupSmoothScroll();
});

// Load chapter information from localStorage
function loadChapterInfo() {
    const courseId = localStorage.getItem('currentCourse');
    const chapterId = localStorage.getItem('currentChapter');
    
    if (!courseId || !chapterId) {
        // Default to chapter 1
        localStorage.setItem('currentCourse', 'yapay-zeka');
        localStorage.setItem('currentChapter', 'chapter-1');
        updateChapterInfo('yapay-zeka', 'chapter-1');
        return;
    }
    
    updateChapterInfo(courseId, chapterId);
}

// Update chapter title and description
function updateChapterInfo(courseId, chapterId) {
    const course = coursesData.courses.find(c => c.id === courseId);
    if (!course) return;
    
    const chapter = course.chapters.find(ch => ch.id === chapterId);
    if (!chapter) return;
    
    const titleElement = document.getElementById('chapter-title');
    const descElement = document.getElementById('chapter-description');
    
    if (titleElement) {
        titleElement.textContent = `${course.icon} ${chapter.title}`;
    }
    
    if (descElement) {
        descElement.textContent = chapter.description || 'Yapay zekâ tanımları, yaklaşımlar, ajan kavramı ve çevresel özellikler';
    }
}

// Setup smooth scroll for table of contents links
function setupSmoothScroll() {
    const links = document.querySelectorAll('.table-of-contents a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

