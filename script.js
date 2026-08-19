document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todos los elementos que tienen la clase 'hidden'
    const hiddenElements = document.querySelectorAll('.hidden');

    // Creamos un observador
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Si el elemento entra en la vista de la pantalla
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    });

    // Le decimos al observador que vigile cada elemento
    hiddenElements.forEach((el) => observer.observe(el));
});