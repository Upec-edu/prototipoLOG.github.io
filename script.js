document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.info-icon');
    const popup = document.getElementById('info-popup');
    const infoText = document.getElementById('info-text');
    const closePopup = document.getElementById('close-popup');

    const infoMessages = {
        n: "El transportista autorizado indicará el número de identificación que le asigna a la CPIC, el que estará conformado de la siguiente manera: a) Por las letras del código bilítero ISO Alfa-2 correspondiente al país de origen de la operación de transporte internacional (BO-Bolivia, CO-Colombia, EC-Ecuador, PE-Perú, VE-Venezuela); b) El número de identificación del Certificado de Idoneidad del transportista autorizado; y, c) Seis dígitos numéricos que señalan la numeración correlativa ascendente y que corresponde a la CPIC emitida por el transportista autorizado; y, d) Por los dos últimos dígitos del año de emisión de la Carta de Porte Interna-cional por Carretera.",
        1: "Se in-dividualizará al transportista que emite la CPIC, indicando la denominación o razón social de la empresa, la dirección de su oficina matriz con indicación de la ciudad y país respectivos. A esta información deberá agregarse el logotipo y/o nombre comercial de la empresa, los mismos que pueden ser impresos junto con el formato.",
        2: "Se indicará el nombre, la denominación o razón social, dirección, así como la ciudad y país del domicilio de la persona que por sí o por medio de otra que actúa en su nombre, entrega las mercancías al transportista autorizado y suscribe la Carta de Porte Internacional por Carretera (CPIC).",
        3: "Se indicará el nombre o la denominación o razón social, así como la dirección, ciudad y país del domicilio de la persona natural o jurídica a cuyo nombre están manifestadas o se envían las mercancías y que como tal es designada en la Carta de Porte Internacional por Carretera o en el contrato de transporte, o que por una orden posterior a su emisión o por endoso le corresponde.",
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
