// --- Dark Mode Toggle ---
(function () {
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  const STORAGE_KEY = 'theme';

  // Determine initial theme
  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  // Apply on load (before paint via inline attribute already set, this syncs state)
  setTheme(getPreferredTheme());

  if (toggle) {
    toggle.addEventListener('click', function () {
      const current = html.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // Listen for OS preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
})();

// --- Mobile Menu Toggle ---
(function () {
  const menuBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function () {
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !expanded);
      navLinks.classList.toggle('open');
    });
  }
})();
