document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const loadingSpinner = submitBtn.querySelector('.loading-spinner');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        
        if (!name || !email) {
            alert('Молимо унесите име и е-маил адресу.');
            return;
        }
        
        // Show loading state
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        loadingSpinner.style.display = 'block';
        
        try {
            const response = await fetch('https://hook.eu2.make.com/u9flz49lgghr9unzvg3cyf0qccqo2m6j', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    timestamp: new Date().toISOString()
                })
            });
            
            if (response.ok) {
                // Hide form and show success message
                form.style.display = 'none';
                successMessage.style.display = 'block';
            } else {
                throw new Error('Грешка при слању података');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Дошло је до грешке. Молимо покушајте поново.');
            
            // Reset button state
            submitBtn.disabled = false;
            btnText.style.display = 'block';
            loadingSpinner.style.display = 'none';
        }
    });
});
