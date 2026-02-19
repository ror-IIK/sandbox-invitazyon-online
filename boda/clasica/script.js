document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Elementos
    const welcomeScreen = document.getElementById('welcome-screen');
    const btnOpen = document.getElementById('btn-open');
    const bgMusic = document.getElementById('bgMusic');
    const musicIcon = document.querySelector('.music-control i'); // El icono del botón flotante
    
    // 2. Bloquear scroll al inicio (para que no bajen sin abrir)
    document.body.classList.add('no-scroll');

    // 3. Acción de Abrir
    btnOpen.addEventListener('click', () => {
        // a) Ocultar pantalla
        welcomeScreen.classList.add('hidden');
        
        // b) Permitir scroll
        document.body.classList.remove('no-scroll');
        
        // c) Reproducir música (Esto funciona en iPhone porque es respuesta a un click)
        bgMusic.play().then(() => {
            console.log("Música iniciada correctamente");
            musicIcon.classList.remove('bx-music');
            musicIcon.classList.add('bx-pause'); // Cambiar icono a pausa
            document.getElementById('musicBtn').style.animation = "pulse 2s infinite";
        }).catch(error => {
            console.log("El navegador bloqueó el autoplay o no hay archivo de audio:", error);
        });
    });

        // FECHA DEL EVENTO (Ajustar por cliente)
    const eventDate = new Date("October 24, 2026 16:00:00").getTime();

    // ACTUALIZAR CONTADOR CADA SEGUNDO
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        // Cálculos de tiempo
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Escribir en HTML
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        // Si ya pasó la fecha
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById("countdown").innerHTML = "¡Es hoy!";
        }
    }, 1000);

    // REPRODUCTOR DE MÚSICA
    const musicBtn = document.getElementById('musicBtn');
    let isPlaying = false;

    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            musicBtn.innerHTML = "<i class='bx bx-music'></i>"; // Icono Play
            musicBtn.style.animation = "none"; // Parar latido
        } else {
            bgMusic.play();
            musicBtn.innerHTML = "<i class='bx bx-pause'></i>"; // Icono Pause
            musicBtn.style.animation = "pulse 2s infinite"; // Latido
        }
        isPlaying = !isPlaying;
    });

    // COPIAR CLABE (UX)
    function copiarCLABE() {
        navigator.clipboard.writeText("123456789012");
        alert("CLABE copiada al portapapeles");
    }
});