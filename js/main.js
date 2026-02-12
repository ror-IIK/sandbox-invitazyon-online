// Esperar a que el DOM cargue
document.addEventListener('DOMContentLoaded', () => {
    console.log('Invitazyon.online Landing lista 🚀');
     
    /* --- 1. LÓGICA DEL MENÚ HAMBURGUESA --- */
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // Alternar la clase 'active' para mostrar/ocultar el menú
            navLinks.classList.toggle('active');
            
            // Opcional: Cambiar el icono de 'menú' a 'X' (cerrar)
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('bx-menu');
                icon.classList.add('bx-x'); // Icono de tachita
            } else {
                icon.classList.remove('bx-x');
                icon.classList.add('bx-menu'); // Icono de hamburguesa
            }
        });
    }
    console.log('Boton de navegacion activado 🚀')
    
    /* --- 2. LOGICA DE NAVBAR STICKY */
    // Seleccionamos la barra de navegación
    const navbar = document.querySelector('.navbar');

    // Escuchamos el evento de scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled'); // Si bajamos, añade la clase
        } else {
            navbar.classList.remove('scrolled'); // Si subimos al tope, la quita
        }
    });

    console.log('Efecto Sticky Navbar activado 🚀');

    // Aquí pondremos la lógica del menú móvil más adelante
    // y las animaciones de scroll.
});