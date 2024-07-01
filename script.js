document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.info-icon');
    const popup = document.getElementById('info-popup');
    const infoText = document.getElementById('info-text');
    const closePopup = document.getElementById('close-popup');

    const infoMessages = {
        n: "CASILLA N°. El transportista autorizado indicará el número de identificación que le asigna a la CPIC, el que estará conformado de la siguiente manera: a) Por las letras del código bilítero ISO Alfa-2 correspondiente al país de origen de la operación de transporte internacional (BO-Bolivia, CO-Colombia, EC-Ecuador, PE-Perú, VE-Venezuela); b) El número de identificación del Certificado de Idoneidad del transportista autorizado; y, c) Seis dígitos numéricos que señalan la numeración correlativa ascendente y que corresponde a la CPIC emitida por el transportista autorizado; y, d) Por los dos últimos dígitos del año de emisión de la Carta de Porte Interna-cional por Carretera.",
        1: "CASILLA 1. Se in-dividualizará al transportista que emite la CPIC, indicando la denominación o razón social de la empresa, la dirección de su oficina matriz con indicación de la ciudad y país respectivos. A esta información deberá agregarse el logotipo y/o nombre comercial de la empresa, los mismos que pueden ser impresos junto con el formato.",
        2: "CASILLA 2. Se indicará el nombre, la denominación o razón social, dirección, así como la ciudad y país del domicilio de la persona que por sí o por medio de otra que actúa en su nombre, entrega las mercancías al transportista autorizado y suscribe la Carta de Porte Internacional por Carretera (CPIC).",
        3: "CASILLA 3. Se indicará el nombre o la denominación o razón social, así como la dirección, ciudad y país del domicilio de la persona natural o jurídica a cuyo nombre están manifestadas o se envían las mercancías y que como tal es designada en la Carta de Porte Internacional por Carretera o en el contrato de transporte, o que por una orden posterior a su emisión o por endoso le corresponde.",
        4: "CASILLA 4. Se indicará el nombre o la denominación o razón social, así como la dirección, ciudad y país del domicilio de la persona natural o jurídica facultada para recibir las mercancías y que como tal es designada en la Carta de Porte Internacional por Carretera o mediante una orden posterior a su emisión. Si el consignatario es al mismo tiempo el destinatario, se repetirá en esta Casilla la información consignada en la Casilla 3.",
        5: "CASILLA 5. Se individualizará a la persona o agente que debe ser notificado de la llegada de las mercancías. Se señalará su dirección con indicación de la ciudad y país respectivos y, en lo posible, su número de teléfono, telex o fax.",
        6: "CASILLA 6. Se indicará el sitio, paraje, población, ciudad y país, así como el día, mes y año en que el transportista autorizado se hace cargo de las mercancías.",
        7: "CASILLA 7. Se indicará el sitio, paraje, población, ciudad y país, así como el día, mes y año en que se cargan las mercancías a bordo del vehículo habilitado para dar inicio a la operación de trans-porte internacional.",
        8: "CASILLA 8. Se indicará el sitio, paraje, población, ciudad y país, así como la fecha convenida entre el transportista autorizado y el remitente para la entrega de las mercancías.",
        9: "CASILLA 9. Se indicará, según corres-ponda, una de las siguientes formas de operación en que se llevará a cabo el transporte internacional de mercancías por carretera:a) Directo, sin cambio del camión o tracto-camión y del remolque o semirremol-que; o, b) Directo, con cambio del tracto-camión, sin transbordo de las mercancías.El transbordo de las mercancías se efectuará sólo cuando lo acuerden expresa-mente el transportista autorizado y el remitente, lo cual deberá constar en la CPIC. Asimismo, se especificará la forma en que se realizará el pago, indicando el lugar y el tiempo en que se efectuará el mismo.",
        10: "CASILLA 10. Se indicará el número de bultos o unidad de carga, y se señalará su clase indicando el tipo de embalaje externo. Los datos expresados deberán coincidir con los señalados en los documentos entregados por el remitente y que se anexen a la CPIC.",
        11: "CASILLA 11. Se consignará las marcas, sellos o números de identificación que figuran en cada bulto o el número de la unidad de carga, según corresponda. Los datos expresados deberán coincidir con los datos señalados en los documentos entregados por el remitente y que se anexen a la CPIC.",
        12: "CASILLA 12. Se hará una descripción corriente de la naturaleza de las mercancías contenidas en los bultos o unidad de carga, indicando si tienen el carácter de peli-grosas. La descripción de las mercancías deberá coincidir con los señalados en los documentos entregados por el remitente y que se anexen a la CPIC.Con excepción de las cargas a granel que se transporten sin ningún tipo de envase, el remitente está obligado a identificar con marcas o números cada uno de los bultos que entrega al transportista autorizado. La rotulación será impresa en forma clara y en un lugar visible, y además contendrá el nombre, ciudad y domicilio del destinatario. Para la rotulación se empleará un material resistente, a fin de evitar que se destruya o desaparezca en el curso del viaje. Toda marca, número o nombre que procedan de un transporte anterior deben ser eliminados.",
        13: "CASILLA 13. En los recuadros correspondientes se indicará el peso neto de las mercancías, así como su peso bruto, incluyendo los contenedores u otra unidad de carga, si es el caso. En ambos casos se expresará en kilogramos.",
        14: "CASILLA 14. Se indicará el volumen total en metros cúbicos de los bultos y/o unidad de carga.",
        15: "CASILLA 15. Cuando corresponda, se indicará en esta Casilla la cantidad expresada en otra unidad de medida.",
        16: "CASILLA 16. Se indicará el precio que tienen las mercancías al tiempo y lugar en que el transportista auto-rizado las recibió, según el artículo 92 de la Decisión 399, o se hizo cargo de ellas, conforme a los términos de compra-venta internacionales de INCOTERMS 1990, acordados entre las partes, así como el tipo de moneda en que se exprese su precio (*).",
        17: "CASILLA 17. Se indicará en forma detallada el valor del flete, señalando cualquier gasto que el transportista autorizado deba incurrir desde el momento en que recibe las mercancías hasta su entrega, desglosando los montos que corresponden al remitente de aquellos que son de cargo del destinatario, siempre que exista acuerdo previo para ello. Se indicará, asimismo, el tipo de moneda de su pago. Al final de la Casilla se consignarán los montos totales.",
        18: "CASILLA 18. Se detallarán los documentos que el remitente haya entregado al transportista autorizado y que deben acompañar a la CPIC durante la operación de transporte internacional de mercancías por carretera.",
        19: "CASILLA 19. Se indicará la población o ciudad y país, así como el día, mes y año en que el transportista autorizado emite la CPIC.",
        20: "CASILLA 20. Se consignará el nombre y apellidos, la firma de la persona que actúa como remitente, indicando si es a nombre propio o de otra persona. Si es persona jurídica se señalará, además, la denominación o razón social de la empresa.",
        21: "CASILLA 21. Se consignará cualquier instrucción que el remitente estime pertinente impartir al transportista autorizado, especialmente con relación a las formalidades de aduana durante la operación de transporte.",
        22: "CASILLA 22. Se consignará cualquier declaración u observación que el transportista autorizado estime pertinente dejar constancia en la CPIC, especialmente sobre el estado en que se reciben las mercancías u otra condición del contrato de transporte.",
        23: "CASILLA 23. Se consignará la denominación o razón social, firma y sello del transportista autorizado o de la persona que actúa en representación del mismo.",
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
});
