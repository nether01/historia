document.addEventListener('DOMContentLoaded', () => {
    // 1. Animación de aparición al deslizar hacia abajo
    const hiddenElements = document.querySelectorAll('.hidden');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.15 });

    hiddenElements.forEach((el) => observer.observe(el));

    // 2. Lluvia de Pétalos Rosados
    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        // Posición aleatoria de izquierda a derecha
        petal.style.left = Math.random() * 100 + 'vw';
        
        // Tamaños variados (entre 10px y 20px)
        const size = Math.random() * 10 + 10;
        petal.style.width = size + 'px';
        petal.style.height = size + 'px';
        
        // Velocidad de caída diferente para cada pétalo (entre 4 y 7 segundos)
        const fallDuration = Math.random() * 3 + 4;
        const swayDuration = Math.random() * 2 + 1;
        petal.style.animationDuration = fallDuration + 's, ' + swayDuration + 's';
        
        document.body.appendChild(petal);
        
        // Eliminar el pétalo cuando ya salió de la pantalla (para que el celular no se ponga lento)
        setTimeout(() => {
            petal.remove();
        }, fallDuration * 1000);
    }

    // Crear un pétalo nuevo cada 400 milisegundos
    setInterval(createPetal, 400);
});
