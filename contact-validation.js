// Contact form validation and submission
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  form.addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

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

    if (isValid) {
      // Send data to our Node.js server
      const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim()
      };

      try {
        const response = await fetch('https://mjay-portfolio-8zo8dyq8w-mjays-projects-4a886f4c.vercel.app/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok) {
          alert('Thank you for your message! I will get back to you soon.');
          form.reset(); // Clear the form
        } else {
          alert('Failed to send message. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to send message. Please try again.');
      }
    }
  });
});
