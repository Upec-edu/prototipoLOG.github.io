document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.info-icon');
    const popup = document.getElementById('info-popup');
    const infoText = document.getElementById('info-text');
    const closePopup = document.getElementById('close-popup');

    const infoMessages = {
        1: {
            text: "Denominación o razón social y dirección del transportista autorizado",
            top: '100px',
            left: '300px'
        },
        2: {
            text: "Nombre y dirección del remitente",
            top: '150px',
            left: '350px'
        },
        // Añadir más mensajes y posiciones según sea necesario
    };

    icons.forEach(icon => {
        icon.addEventListener('click', event => {
            const info = event.target.dataset.info;
            if (info && infoMessages[info]) {
                infoText.textContent = infoMessages[info].text;
                popup.classList.remove('hidden');
                popup.style.top = infoMessages[info].top;
                popup.style.left = infoMessages[info].left;
                popup.style.display = 'block';  // Mostrar el cuadro de información
            }
        });
    });

    closePopup.addEventListener('click', () => {
        popup.classList.add('hidden');
        popup.style.display = 'none';  // Ocultar el cuadro de información
    });

    // Agregar un listener al documento para cerrar el popup si se hace clic fuera de él
    document.addEventListener('click', (event) => {
        if (!popup.contains(event.target) && !event.target.classList.contains('info-icon')) {
            popup.classList.add('hidden');
            popup.style.display = 'none';
        }
    });
});
