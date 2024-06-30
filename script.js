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
        4: "Se indicará el nombre o la denominación o razón social, así como la dirección, ciudad y país del domicilio de la persona natural o jurídica facultada para recibir las mercancías y que como tal es designada en la Carta de Porte Internacional por Carretera o mediante una orden posterior a su emisión. Si el consignatario es al mismo tiempo el destinatario, se repetirá en esta Casilla la información consignada en la Casilla 3.",
        5: "Se individualizará a la persona o agente que debe ser notificado de la llegada de las mercancías. Se señalará su dirección con indicación de la ciudad y país respectivos y, en lo posible, su número de teléfono, telex o fax.",
        6: "Se indicará el sitio, paraje, población, ciudad y país, así como el día, mes y año en que el transportista autorizado se hace cargo de las mercancías.",
        7: "Se indicará el sitio, paraje, población, ciudad y país, así como el día, mes y año en que se cargan las mercancías a bordo del vehículo habilitado para dar inicio a la operación de trans-porte internacional.",
        8: "Se indicará el sitio, paraje, población, ciudad y país, así como la fecha convenida entre el transportista autorizado y el remitente para la entrega de las mercancías.",
        9: "Se indicará, según corres-ponda, una de las siguientes formas de operación en que se llevará a cabo el transporte internacional de mercancías por carretera:a) Directo, sin cambio del camión o tracto-camión y del remolque o semirremol-que; o, b) Directo, con cambio del tracto-camión, sin transbordo de las mercancías.El transbordo de las mercancías se efectuará sólo cuando lo acuerden expresa-mente el transportista autorizado y el remitente, lo cual deberá constar en la CPIC. Asimismo, se especificará la forma en que se realizará el pago, indicando el lugar y el tiempo en que se efectuará el mismo.",
        10: "Se indicará el número de bultos o unidad de carga, y se señalará su clase indicando el tipo de embalaje externo. Los datos expresados deberán coincidir con los señalados en los documentos entregados por el remitente y que se anexen a la CPIC.",

// Añadir más mensajes según sea necesario
    };

    icons.forEach(icon => {
        icon.addEventListener('click', event => {
            const info = event.target.dataset.info;
            if (info && infoMessages[info]) {
                infoText.textContent = infoMessages[info];
                popup.classList.remove('hidden');
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
