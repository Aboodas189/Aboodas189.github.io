const themeToggle = document.getElementById('theme-toggle');
if (document.body.classList.contains('dark-theme')) {
    themeToggle.textContent = '🌞 Light Mode';
} else {
    themeToggle.textContent = '🌜 Dark Mode';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeToggle.textContent = '🌞 Light Mode';
    } else {
        themeToggle.textContent = '🌜 Dark Mode';
    }
});
