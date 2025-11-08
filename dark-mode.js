// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const darkModeToggleMobile = document.getElementById('dark-mode-toggle-mobile');
  const body = document.body;

  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    updateToggleIcon(darkModeToggle, true);
    updateToggleIcon(darkModeToggleMobile, true);
  }

  // Toggle dark mode
  function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateToggleIcon(darkModeToggle, isDark);
    updateToggleIcon(darkModeToggleMobile, isDark);
  }

  // Update toggle button icon
  function updateToggleIcon(button, isDark) {
    if (button) {
      button.textContent = isDark ? '☀️' : '🌙';
    }
  }

  // Event listeners
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
  }
  if (darkModeToggleMobile) {
    darkModeToggleMobile.addEventListener('click', toggleDarkMode);
  }
});
