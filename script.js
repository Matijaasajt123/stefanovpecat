// Form handling and interactions
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const submitButton = document.getElementById('submit-button');
    const errorMessage = document.getElementById('error-message');
    const formContainer = document.getElementById('signup-form-container');
    const successMessage = document.getElementById('success-message');

    // Form submission handler
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email')
        };

        // Show loading state
        setLoadingState(true);
        hideError();

        try {
            const response = await fetch('https://hook.eu2.make.com/hktvndukbtxpvt6ytslyfh4cicuk1hj7', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                showSuccess();
                form.reset();
            } else {
                throw new Error('Greška pri slanju zahtjeva');
            }
        } catch (error) {
            showError('Došlo je do greške. Pokušajte ponovo.');
        } finally {
            setLoadingState(false);
        }
    });

    // Helper functions
    function setLoadingState(isLoading) {
        const buttonText = submitButton.querySelector('span');
        const buttonIcon = submitButton.querySelector('.send-icon');
        
        if (isLoading) {
            submitButton.disabled = true;
            buttonText.textContent = 'Šalje se...';
            buttonIcon.innerHTML = '<div class="loading-spinner"></div>';
        } else {
            submitButton.disabled = false;
            buttonText.textContent = 'Prijavite se za mentorstvo';
            buttonIcon.innerHTML = `
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
            `;
        }
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }

    function hideError() {
        errorMessage.style.display = 'none';
    }

    function showSuccess() {
        formContainer.style.display = 'none';
        successMessage.style.display = 'block';
    }
});

// Scroll to signup function
function scrollToSignup() {
    document.getElementById('signup').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Reset form function
function resetForm() {
    const formContainer = document.getElementById('signup-form-container');
    const successMessage = document.getElementById('success-message');
    const form = document.getElementById('signup-form');
    
    successMessage.style.display = 'none';
    formContainer.style.display = 'block';
    form.reset();
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add subtle animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .testimonial-content, .form-container');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
