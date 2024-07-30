document.addEventListener('DOMContentLoaded', function() {
    // Log when the document is ready
    console.log('Document is ready!');

    // Simple interactive alert for navigation
    document.querySelectorAll('.navbar nav a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            // For demonstration, prevent default and show an alert
            event.preventDefault();
            alert('Navigating to ' + this.textContent);
            // Simulate navigation (remove this in production)
            window.location.href = this.getAttribute('href');
        });
    });
});

