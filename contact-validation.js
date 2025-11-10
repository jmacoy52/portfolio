// Contact form validation and submission using EmailJS
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const senderEmailInput = document.getElementById('sender_email');

  // Initialize EmailJS with your public key
  emailjs.init('oGBLR83UxTJmEDIlB');

  form.addEventListener('submit', function(event) {
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

    // Sender email validation (for replies)
    if (!emailRegex.test(senderEmailInput.value.trim())) {
      alert('Please enter a valid email address for replies.');
      isValid = false;
    }

    if (isValid) {
      // Send email using EmailJS
      const templateParams = {
        from_name: nameInput.value.trim(),
        from_email: senderEmailInput.value.trim(), // Use sender email for display
        message: messageInput.value.trim() + '\n\nSender Email: ' + senderEmailInput.value.trim(),
        to_email: 'josephmacoy52@gmail.com',
        reply_to: senderEmailInput.value.trim() // This allows you to reply directly to the sender
      };

      emailjs.send('service_eeuxh2e', 'template_4e3312e', templateParams)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          alert('Thank you for your message! I will get back to you soon.');
          form.reset(); // Clear the form
        }, function(error) {
          console.log('FAILED...', error);
          alert('Sorry, there was an error sending your message. Please try again later.');
        });
    }
  });
});
