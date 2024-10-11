const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Apply the saved theme on load
if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggle.textContent = '🌞 Light Mode';
} else {
    themeToggle.textContent = '🌜 Dark Mode';
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    let theme = 'light';
    if (document.body.classList.contains('dark-theme')) {
        theme = 'dark';
        themeToggle.textContent = '🌞 Light Mode';
    } else {
        themeToggle.textContent = '🌜 Dark Mode';
    }
    // Save the user's preference in local storage
    localStorage.setItem('theme', theme);
});
