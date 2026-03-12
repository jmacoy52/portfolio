// Mobile menu toggle functionality with overlay
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (toggleButton && mobileMenu) {
    toggleButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      
      // Change button text/icon based on menu state
      if (mobileMenu.classList.contains('active')) {
        toggleButton.textContent = '✕';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      } else {
        toggleButton.textContent = '☰';
        document.body.style.overflow = ''; // Enable scrolling
      }
    });

    // Close mobile menu when clicking on overlay
    mobileMenu.addEventListener('click', function(event) {
      if (event.target === mobileMenu) {
        closeMenu();
      }
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-menu-link, .btn');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        closeMenu();
      });
    });

    // Close menu function
    function closeMenu() {
      mobileMenu.classList.remove('active');
      toggleButton.textContent = '☰';
      document.body.style.overflow = '';
    }

    // Close on Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMenu();
      }
    });
  }
});

