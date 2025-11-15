// Firebase feedback functionality
// Wait for DOM and Firebase to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for Firebase to initialize
    setTimeout(initFeedbackForm, 500);
});

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
        
        // Validation - only rating is required
        if (!rating) {
            console.log('Validation failed: No rating selected');
            showMessage('Lütfen bir değerlendirme seçin!', 'error');
            resetSubmitButton(submitBtn, submitSpan, originalText);
            return;
        }
        
        try {
            // Prepare feedback data
            const feedbackData = {
                rating: parseInt(rating),
                createdAt: new Date().toISOString()
            };
            
            // Add name
            if (name && name.trim() !== '') {
                feedbackData.name = name.trim();
            } else {
                feedbackData.name = 'İsimsiz';
            }
            
            // Add message only if provided
            if (message && message.trim() !== '') {
                feedbackData.message = message.trim();
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
            
            // Add feedback to Firestore
            const docRef = await db.collection('feedbacks').add(feedbackData);
            console.log('Feedback added successfully with ID:', docRef.id);
            
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
            } else if (error.code === 'unavailable') {
                errorMessage = 'Bağlantı hatası. İnternet bağlantınızı kontrol edin.';
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
