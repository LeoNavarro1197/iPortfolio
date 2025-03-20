document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const themeText = themeToggle.querySelector('span');
    
    // Verificar si hay una preferencia guardada
    const currentTheme = localStorage.getItem('theme') || 'dark';
    setTheme(currentTheme);

    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-mode');
        setTheme(isDark ? 'light' : 'dark');
    });

    function setTheme(theme) {
        const isDark = theme === 'dark';
        
        // Actualizar clases en el body
        document.body.classList.remove('light-mode', 'dark-mode');
        document.body.classList.add(`${theme}-mode`);
        
        // Actualizar todas las secciones
        document.querySelectorAll('.section, .header, .footer').forEach(section => {
            section.classList.remove('light-background', 'dark-background');
            section.classList.add(isDark ? 'dark-background' : 'light-background');
        });
        
        // Guardar preferencia
        localStorage.setItem('theme', theme);
        
        // Actualizar botón
        themeIcon.className = isDark ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
        themeText.textContent = isDark ? 'Modo Claro' : 'Modo Oscuro';
    }
});
