let toggler = document.getElementById('switch');
let body = document.body;

// Function untuk apply tema
function applyTheme(isDark) {
    const root = document.documentElement;
    if (isDark) {
        root.style.setProperty('--primary-color', '#1a1a2e');
        root.style.setProperty('--primary-label', '#fff');
        root.style.setProperty('--secondary-label', '#16213e');
        body.style.background = 'linear-gradient(135deg, #0f3460 0%, #1a1a2e 50%, #16213e 100%)';
    } else {
        root.style.setProperty('--primary-color', '#fff');
        root.style.setProperty('--primary-label', '#333');
        root.style.setProperty('--secondary-label', '#f0f0f0');
        body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)';
    }
}

// Initialize tema saat load
applyTheme(toggler.checked);

// Event listener untuk perubahan
toggler.addEventListener('change', () => {
    applyTheme(toggler.checked);
});