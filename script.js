document.addEventListener('DOMContentLoaded', () => {
    const areas = document.querySelectorAll('area');
    const popup = document.getElementById('info-popup');
    const infoText = document.getElementById('info-text');
    const closePopup = document.getElementById('close-popup');

    const infoMessages = {
        1: "Denominación o razón social y dirección del transportista autorizado",
        2: "Nombre y dirección del remitente",
        // Añadir más mensajes según sea necesario
    };

    areas.forEach(area => {
        area.addEventListener('click', event => {
            const info = event.target.dataset.info;
            if (info && infoMessages[info]) {
                infoText.textContent = infoMessages[info];
                popup.style.display = 'block';
                const rect = event.target.getBoundingClientRect();
                popup.style.left = `${rect.left + window.scrollX + 20}px`;
                popup.style.top = `${rect.top + window.scrollY + 20}px`;
            }
        });
    });

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});
