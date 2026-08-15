// Theme toggle — SVG line icons (geen emoji).
// Zet body[data-theme] naar "light" of "dark"; static/css/style.css
// definieert de kleuren per thema via CSS-variabelen op dat attribuut.
// Voorkeur wordt onthouden in localStorage en valt anders terug op de
// OS-voorkeur (prefers-color-scheme).
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
const MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';

const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initial = saved || (prefersDark ? 'dark' : 'light');
body.setAttribute('data-theme', initial);
updateThemeIcon(initial);

themeToggle.addEventListener('click', () => {
  const newTheme = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  themeToggle.innerHTML = theme === 'light' ? MOON : SUN;
  themeToggle.setAttribute('aria-label', theme === 'light' ? 'Donkere modus' : 'Lichte modus');
}
