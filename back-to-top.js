// Back to Top Button Functionality
document.addEventListener('DOMContentLoaded', function() {
  const backToTopButton = document.getElementById('back-to-top');

  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  // Scroll to top when clicked
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
