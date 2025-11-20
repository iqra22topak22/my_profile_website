// Note: This script handles the contact form submission.
// Currently, it only logs the form data to the browser's console and shows an alert.
// To make it send an actual email, you would need to integrate a backend service (e.g., using Node.js, PHP, or a third-party service like EmailJS).

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = contactForm.querySelector('input[placeholder="Your Name"]').value;
        const email = contactForm.querySelector('input[placeholder="Your Email"]').value;
        const message = contactForm.querySelector('textarea[placeholder="Your Message"]').value;

        console.log('Form Submitted:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        alert('Thank you for your message! It has been logged to the console.');
        contactForm.reset();
    });
});
