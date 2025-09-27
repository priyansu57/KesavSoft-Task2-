// 1. Import your custom CSS files. Vite needs these imports 
// to include the custom styles in the build/dev server.
import './public/CSS/menubar.css';
import './public/CSS/base.css';

// 2. Client-side JavaScript logic (for mobile sidebar toggle)
document.addEventListener('DOMContentLoaded', () => {
    const check = document.getElementById('check');
    if (check) {
        check.addEventListener('change', () => {
            const sidebar = document.querySelector('.sidebar_menu');
            if (sidebar) {
                sidebar.style.left = check.checked ? '0' : '-100%';
            }
        });
    }
    console.log('Vite + Handlebars script initialized.');
});