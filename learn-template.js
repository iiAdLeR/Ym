/**
 * Learn Page Template
 * Reusable JavaScript for all learn pages
 */

window.LearnTemplate = {
    /**
     * Initialize the learn page
     */
    init: function() {
        this.loadChapterInfo();
        this.setupSmoothScroll();
        this.setupBackToTop();
        this.setupGlassMode();
    },

    /**
     * Load chapter information from localStorage and update page
     */
    loadChapterInfo: function() {
        const courseId = localStorage.getItem('currentCourse');
        const chapterId = localStorage.getItem('currentChapter');
        
        if (!courseId || !chapterId) {
            // Default values - should be overridden by page-specific script
            const defaultCourse = 'kalite-guvenilirlik';
            const defaultChapter = 'kalite-chapter-1';
            localStorage.setItem('currentCourse', defaultCourse);
            localStorage.setItem('currentChapter', defaultChapter);
            this.updateChapterInfo(defaultCourse, defaultChapter);
            return;
        }
        
        this.updateChapterInfo(courseId, chapterId);
    },

    /**
     * Update chapter title and description
     */
    updateChapterInfo: function(courseId, chapterId) {
        if (typeof coursesData === 'undefined') {
            console.warn('coursesData not loaded yet');
            return;
        }

        const course = coursesData.courses.find(c => c.id === courseId);
        if (!course) {
            console.warn(`Course not found: ${courseId}`);
            return;
        }
        
        const chapter = course.chapters.find(ch => ch.id === chapterId);
        if (!chapter) {
            console.warn(`Chapter not found: ${chapterId}`);
            return;
        }
        
        const titleElement = document.getElementById('chapter-title');
        const descElement = document.getElementById('chapter-description');
        
        if (titleElement) {
            titleElement.textContent = `${course.icon} ${chapter.title}`;
        }
        
        if (descElement) {
            descElement.textContent = chapter.description || '';
        }
    },

    /**
     * Setup smooth scrolling for table of contents links
     */
    setupSmoothScroll: function() {
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
    },

    /**
     * Setup back to top button
     */
    setupBackToTop: function() {
        const backToTopBtn = document.getElementById('backToTopBtn');
        if (!backToTopBtn) return;
        
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        // Smooth scroll to top when button is clicked
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    },

    /**
     * Setup glass mode toggle (disabled - Glass Mode is now default)
     */
    setupGlassMode: function() {
        // Glass Mode is now the default design
        // Toggle button is hidden
        const glassToggle = document.getElementById('glassToggle');
        if (glassToggle) {
            glassToggle.style.display = 'none';
        }
    }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        window.LearnTemplate.init();
    });
} else {
    window.LearnTemplate.init();
}

