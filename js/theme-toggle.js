const themeToggle = document.getElementById('theme-toggle');

// Check if a theme is stored in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme);
    if (savedTheme === 'dark-theme') {
        themeToggle.textContent = '🌞 Light Mode';
    }
}

// Event listener for theme toggle button
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        themeToggle.textContent = '🌞 Light Mode';
        localStorage.setItem('theme', 'dark-theme'); // Save theme to localStorage
    } else {
        themeToggle.textContent = '🌜 Dark Mode';
        localStorage.setItem('theme', ''); // Remove theme from localStorage
    }
});
