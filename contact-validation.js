// EmailJS configuration - 400 ERROR FIXED
// Visit https://dashboard.emailjs.com/admin/account#apikey → Copy your PUBLIC_KEY
// Create service & template → Copy SERVICE_ID & TEMPLATE_ID
const PUBLIC_KEY = 'oGBLR83UxTJmEDIlB';  // Your EmailJS Public Key
const SERVICE_ID = 'service_eeuxh2e';  // Your Service ID
const TEMPLATE_ID = 'template_4e3312e'; // Your Template ID

document.addEventListener('DOMContentLoaded', function() {
  emailjs.init(PUBLIC_KEY);

  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Show loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, contactForm)
        .then(function(response) {
          formStatus.className = 'form-status success';
          formStatus.textContent = 'Thank you! Your message has been sent successfully. I will get back to you soon.';
          contactForm.reset();
        }, function(error) {
          formStatus.className = 'form-status error';
          formStatus.textContent = 'Sorry, something went wrong. Please try again.';
        })
        .finally(function() {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          setTimeout(() => {
            formStatus.className = 'form-status';
            formStatus.textContent = '';
          }, 5000);
        });
    });
  }
});

// Form validation (client-side)
function validateForm(form) {
  const formData = new FormData(form);
  const name = formData.get('name').trim();
  const email = formData.get('email').trim();
  const subject = formData.get('subject').trim();
  const message = formData.get('message').trim();

  if (!name || name.length < 2) {
    showError('Name must be at least 2 characters long');
    return false;
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError('Please enter a valid email address');
    return false;
  }
  if (!subject || subject.length < 3) {
    showError('Subject must be at least 3 characters long');
    return false;
  }
  if (!message || message.length < 10) {
    showError('Message must be at least 10 characters long');
    return false;
  }
  return true;
}

function showError(message) {
  const formStatus = document.getElementById('formStatus');
  formStatus.className = 'form-status error';
  formStatus.textContent = message;
}

