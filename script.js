document.addEventListener('DOMContentLoaded', function() {
    // Log when the document is ready
    console.log('Document is ready!');

    // Basic form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields');
            event.preventDefault(); // Prevent form submission
        }
    });

    // Simple interactive alert for navigation
    document.querySelectorAll('nav ul li a').forEach(function(link) {
        link.addEventListener('click', function() {
            alert('Navigating to ' + this.textContent);
        });
    });
});

