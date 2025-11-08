// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.menu.mobile');

  if (toggleButton && mobileMenu) {
    toggleButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
    });
  }
});

// Function to open modal with project images
function openModal(projectId) {
  const modal = document.getElementById('modal');
  const modalImages = document.getElementById('modal-images');
  modalImages.innerHTML = '';

  if (projectId === 'emplocore') {
    modalImages.innerHTML = `
      <img src="assets/homepageEmplocore.png" alt="EmploCore Homepage" style="width:100%; max-width:800px; border-radius:8px; margin:10px 0;">
      <img src="assets/login-page.png" alt="Login Page" style="width:100%; max-width:800px; border-radius:8px; margin:10px 0;">
      <img src="assets/admin-dashboard.png" alt="Admin Dashboard" style="width:100%; max-width:800px; border-radius:8px; margin:10px 0;">
      <img src="assets/hrdashboard.png" alt="HR Dashboard" style="width:100%; max-width:800px; border-radius:8px; margin:10px 0;">
    `;
  } else if (projectId === 'fashion-hub') {
    modalImages.innerHTML = `
      <img src="assets/fashion-hub.png" alt="Fashion Hub" style="width:100%; max-width:800px; border-radius:8px; margin:10px 0;">
    `;
  } else if (projectId === 'brewhaven') {
    modalImages.innerHTML = `
      <img src="assets/brewhavenTest.png" alt="Brew Haven Test" style="width:100%; max-width:800px; border-radius:8px; margin:10px 0;">
    `;
  }

  modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}
