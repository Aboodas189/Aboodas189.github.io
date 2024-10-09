const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeToggle.textContent = '🌞 Light Mode';
    } else {
        themeToggle.textContent = '🌜 Dark Mode';
    }
});

// Set initial theme based on user preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-theme');
    themeToggle.textContent = '🌞 Light Mode';
}

