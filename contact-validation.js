// Contact form validation and submission
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  form.addEventListener('submit', function(event) {
    let isValid = true;

    // Name validation
    if (nameInput.value.trim().length < 2) {
      alert('Name must be at least 2 characters long.');
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      alert('Please enter a valid email address.');
      isValid = false;
    }

    // Message validation
    if (messageInput.value.trim().length < 10) {
      alert('Message must be at least 10 characters long.');
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault();
    } else {
      // Show success message (Formspree will handle the actual submission)
      alert('Thank you for your message! I will get back to you soon.');
    }
  });
});
