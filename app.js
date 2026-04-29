document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.list-group-item');
    const sections = document.querySelectorAll('section');

    // Función para manejar el estado activo del menú
    window.addEventListener('scroll', () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});