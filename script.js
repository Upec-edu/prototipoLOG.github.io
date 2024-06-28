document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.info-icon');
    const popup = document.getElementById('info-popup');
    const infoText = document.getElementById('info-text');
    const closePopup = document.getElementById('close-popup');

    const infoMessages = {
        1: "Se in-dividualizará al transportista que emite la CPIC, indicando la denominación o razón social de la empresa, la dirección de su oficina matriz con indicación de la ciudad y país respectivos. A esta información deberá agregarse el logotipo y/o nombre comercial de la empresa, los mismos que pueden ser impresos junto con el formato.",
        2: "Nombre y dirección del remitente",
        3: "Nombre y dirección del destinatario",
        // Añadir más mensajes según sea necesario
    };

    icons.forEach(icon => {
        icon.addEventListener('click', event => {
            const info = event.target.dataset.info;
            if (info && infoMessages[info]) {
                infoText.textContent = infoMessages[info];
                popup.classList.remove('hidden');
                const rect = event.target.getBoundingClientRect();
                popup.style.left = `${rect.left + window.scrollX + 20}px`;
                popup.style.top = `${rect.top + window.scrollY + 20}px`;
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
