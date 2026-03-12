// Dark mode toggle functionality with CSS variables
document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const darkModeToggleMobile = document.getElementById('dark-mode-toggle-mobile');
  const html = document.documentElement;

  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  updateToggleIcon(savedTheme);

  // Toggle dark mode function
  function toggleDarkMode() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleIcon(newTheme);
  }

  // Update toggle button icon
  function updateToggleIcon(theme) {
    const icon = theme === 'dark' ? '☀️' : '🌙';
    if (darkModeToggle) {
      darkModeToggle.textContent = icon;
    }
    if (darkModeToggleMobile) {
      darkModeToggleMobile.textContent = icon + ' Dark Mode';
    }
  }

  // Event listeners
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
  }
  if (darkModeToggleMobile) {
    darkModeToggleMobile.addEventListener('click', toggleDarkMode);
  }

  // Listen for system preference changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        updateToggleIcon(newTheme);
      }
    });
  }
});

