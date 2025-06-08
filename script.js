document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica de Botones de Solución ---
    const solutionButtons = document.querySelectorAll('.solution-btn');
    const solutionDisplay = document.getElementById('solution-display');

    const solutions = {
        separacion: 'Implementar un sistema de separación de residuos en contenedores diferenciados (orgánico, inorgánico reciclable, no reciclable) y campañas de concientización.',
        huerto: 'Crear un huerto escolar para cultivar alimentos orgánicos, fomentando la alimentación saludable y el aprendizaje práctico sobre sostenibilidad.',
        comedores: 'Promover opciones de alimentos saludables en la cooperativa escolar y concientizar sobre la importancia de una dieta balanceada y nutritiva.',
        talleres: 'Organizar talleres interactivos sobre nutrición, reciclaje, compostaje y reducción de plásticos, involucrando a toda la comunidad.',
        reforestacion: 'Realizar jornadas de reforestación en áreas verdes del plantel y sus alrededores, mejorando el ambiente y la calidad del aire.'
    };

    solutionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const solutionKey = button.dataset.solution;
            solutionDisplay.textContent = solutions[solutionKey] || 'No hay descripción para esta solución.';
        });
    });

    // Inicializar el display de soluciones con un mensaje por defecto
    solutionDisplay.textContent = 'Haz clic en un botón para ver una propuesta de solución.';

 // --- Lógica del Carrusel de Imágenes ---
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    let counter = 0;
    const size = carouselImages[0].clientWidth; // Ancho de una imagen

    // Ajustar el slide inicial
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    nextBtn.addEventListener('click', () => {
        if (counter >= carouselImages.length - 1) { // Si ya estamos en la última imagen
            counter = 0; // Volver al inicio
        } else {
            counter++;
        }
        carouselSlide.style.transition = 'transform 0.3s ease-in-out';
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) { // Si ya estamos en la primera imagen
            counter = carouselImages.length - 1; // Ir a la última
        } else {
            counter--;
        }
        carouselSlide.style.transition = 'transform 0.3s ease-in-out';
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    // Clonar imágenes para un carrusel infinito (opcional, para un efecto más suave)
   // Para simplificar, en esta versión no se implementa el clonado, pero se puede añadir si se desea un "loop" más fluido.

  // --- Lógica del Formulario de Contacto ---
  document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío por defecto del formulario

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const suggestion = document.getElementById('suggestion').value;

        // Simulación de envío
        alert(
         `Sugerencia enviada:\n\nNombre: ${name}\nCorreo: ${email}\nSugerencia: ${suggestion}\n\nNota: Este formulario aún no está conectado a un sistema real de envío de correo.`
      );

      contactForm.reset(); // Limpia el formulario
    });
  });
</script>
