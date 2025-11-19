// Firebase feedback functionality
// Using improved API service
const FEEDBACK_CONFIG = {
    MAX_SUBMISSIONS_PER_MINUTE: 3
};

// Wait for DOM and Firebase to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for Firebase to initialize
    setTimeout(initFeedbackForm, 500);
});

// Rate limiting check (using API service)
function checkRateLimit() {
    if (window.apiService) {
        return window.apiService.checkRateLimit();
    }
    return { allowed: true };
}

// Record submission (using API service)
function recordSubmission() {
    if (window.apiService) {
        window.apiService.recordRequest();
    }
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

// Submit feedback using API service
async function submitFeedback(feedbackData) {
    if (!window.apiService) {
        throw new Error('API service not available');
    }
    
    // Validation schema
    const schema = {
        rating: {
            type: 'number',
            required: true,
            min: 1,
            max: 5
        },
        name: {
            type: 'string',
            required: false,
            maxLength: 100,
            sanitize: true
        },
        message: {
            type: 'string',
            required: false,
            maxLength: 1000,
            sanitize: true
        }
    };
    
    // Validate input
    const validation = window.apiService.validateInput(feedbackData, schema);
    if (!validation.valid) {
        throw new Error(validation.errors[0]);
    }
    
    // Submit using API service
    return await window.apiService.addDocument('feedbacks', validation.data, {
        useCache: false,
        timeout: 10000
    });
}

function initFeedbackForm() {
    const feedbackForm = document.getElementById('feedback-form');
    const submitBtn = document.getElementById('submit-feedback');
    
    if (!feedbackForm || !submitBtn) {
        console.error('Form or submit button not found');
        return;
    }
    
    // Check if API service is available
    if (!window.apiService) {
        console.error('API service not initialized');
        showMessage('API servisi başlatılamadı. Lütfen sayfayı yenileyin.', 'error');
        submitBtn.disabled = true;
        return;
    }
    
    // Check if Firebase is available
    if (!window.apiService.getFirestore()) {
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
                name: validation.data.name || 'İsimsiz',
                message: validation.data.message || ''
            };
            
            console.log('Sending feedback data:', feedbackData);
            
            // Submit using improved API service
            const docRef = await submitFeedback(feedbackData);
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
            
            // Use user-friendly error message from API service
            const errorMessage = error.userMessage || error.message || 'Bir hata oluştu. Lütfen tekrar deneyin.';
            
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
