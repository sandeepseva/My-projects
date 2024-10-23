// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Function to adjust the layout based on screen size
    function adjustLayout() {
        const container = document.querySelector('.container');
        const imageContainer = document.querySelector('.image-container');
        const box = document.querySelector('.box');

        if (window.innerWidth <= 768) {
            // Mobile view: stack image and form
            container.style.flexDirection = 'column';
            imageContainer.style.width = '100%';
            box.style.width = '100%';
        } else {
            // Desktop view: side by side
            container.style.flexDirection = 'row';
            imageContainer.style.width = '50%';
            box.style.width = '50%';
        }
    }

    // Initial adjustment
    adjustLayout();

    // Adjust layout on resize
    window.addEventListener('resize', adjustLayout);

    // Form submission handling
    const form = document.querySelector('.reg');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent actual form submission for demo
        alert('Form submitted!'); // Show an alert instead
        // Here you can add logic to handle the form data, e.g., sending to server
    });
});
