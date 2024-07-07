document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.info-icon, .info-iconp');
    const popup = document.getElementById('info-popup');
    const infoText = document.getElementById('info-text');
    const closePopup = document.getElementById('close-popup');

    const infoMessages = {
        n: "CASILLA N°. Este espacio se reserva para el número de registro asignado a la DTAI por la Aduana de partida.",
        1: "CASILLA 1. Se indicará la denominación o razón social del transportista autorizado que llena la DTAI, señalando la dirección, con indicación de la ciudad y país de su domicilio.",
        2: "CASILLA 2. Se indicará el nombre, la denominación o razón social, dirección, con indicación de la ciudad y país del domicilio de la persona que de acuerdo a la legislación de cada País Miembro suscribe la DTAI y, por tanto, se hace responsable ante la aduana por la información en ella declara-da y por la correcta ejecución de la Operación de Tránsito Aduanero Internacional.",
        3: "CASILLA 3. Se indicará el nombre, la denominación o razón social, dirección, así como la ciudad y país del domicilio de la persona que por sí o por medio de otra que actúa en su nombre, entrega las mercancías al transportista autorizado y suscribe la Carta de Porte Internacional por Carretera (CPIC).",
        4: "CASILLA 4. Se indicará el nombre o la denominación o razón social, así como la dirección, ciudad y país del domicilio de la persona natural o jurídica a cuyo nombre están manifestadas o se envían las mercancías y que como tal es designada en la Carta de Porte Internacional por Carretera o en el contrato de transporte, o que por una orden posterior a su emisión o por endoso le corresponde.",
        5: "CASILLA 5. Se indicará el nombre o la denominación o razón social, así como la dirección, ciudad y país del domicilio de la persona natural o jurídica facultada para recibir las mercancías y que como tal es designada en la Carta de Porte Internacional por Carretera o mediante una orden posterior a su emisión. Si el consignatario es al mismo tiempo el destinatario, se repetirá en esta Casilla la información consignada en la Casilla 4.",
        6: "CASILLA 6. Se indicará la aduana, en donde se adoptan determinadas medidas preliminares de carácter aduanero y bajo cuyo control son cargadas las mercancías en los vehículos habilitados o en las unidades de carga debidamente registrados, a fin de facilitar el inicio de una operación de transporte o tránsito aduanero internacional, en una aduana de partida.",
        7: "CASILLA 7. Se indicará el país y la aduana de partida que inter-viene en el control y despacho de las mercancías en el inicio de una operación de transporte internacional por carretera, o de una Operación de Tránsito Aduanero Internacional. Si la aduana de partida es al mismo tiempo la aduana de carga, se repetirá en esta Casilla la información consignada en la Casilla 6.",
        8: "CASILLA 8. Se indicará el país y ciudad de la aduana que inter-viene en una operación de transporte internacional por carretera para asignar a las mercancías un régimen aduanero en particular, previa solicitud del interesado, o en donde termina una Operación de Tránsito Aduanero Internacional.",
        9: "CASILLA 9. Se indicará el país en el que las mercancías declaradas han sido producidas o fabricadas, solamente para los efectos del trán-sito. Comprende exclusivamente la determinación del origen de las mercancías y no la condición de originarias de las mismas vinculadas a la obtención de ventajas arancelarias.",
        10: "CASILLA 10. Se indicarán los datos de las placas de cada uno de los vehículos habilitados amparados por la DTAI, así como el país de sus matrículas o registros respectivos.",
        11: "CASILLA 11. Se indicarán, según correspondan, las placas u otros datos que permitan identificar cada una de las unidades de carga amparados por la DTAI, así como el país de sus matrículas o registros respectivos. Cuando se trate específicamente de contenedores, su identificación y capacidad se consignará en la Casilla 13.",
        12: "CASILLA 12. Se indicará el(los) número(s) del (los) Manifiesto(s) de Carga Internacional (MCI), correspondiente(s) a cada uno de los vehículos amparados por la DTAI.",
        13: "CASILLA 13. Se indicarán las siglas y/o números de identificación de los contenedores, especificando su capacidad (20, 40 pies u otra).",
        14: "CASILLA 14. Se indicarán las siglas y/o números de identificación de los precintos aduaneros de los contenedores y unidades de carga, así como de las mercancías susceptibles de ser precintadas.",
        15: "CASILLA 15. Se indicará(n) el(los) número(s) de la(s) Carta(s) de Porte Internacional por Carretera (CPIC) correspondiente a cada envío de mercancías cargadas en los vehículos amparados por la DTAI.",
        16: "CASILLA 16. Se indicará la descripción de las mercancías por producto. Se deberá efectuar en términos suficientemente claros, de manera tal que permita la adecuada identificación de las mismas.",
        17: "CASILLA 17. Se indicará el número o cantidad total de bultos que componen el envío. Si se trata de mercancías sin envasar, se expresará el número de éstas, o la expresión (a granel), según el caso.",
        18: "CASILLA 18. Refiriéndose a las señaladas exteriormente en los bultos: Se indicará sus clases, marcas y los números de identificación que figuren en ellos.",
        19: "CASILLA 19. En las columnas correspondientes se indicarán el peso neto de las mercancías, así como su peso bruto. En ambos casos se expresará en kilogramos y al final se colocará independientemente el total de cada uno de ellos.",
        20: "CASILLA 20. Se indicará el volumen total en metros cúbicos de los bultos y/o la unidad de carga; o de ser el caso la otra unidad de medida utilizada. Al final se colocará el total de las mismas.",
        21: "CASILLA 21. Se indicará el precio que tienen las mercancías al tiempo y lugar en que el transportista auto-rizado las recibió, o se hizo cargo de ellas, según el artículo 92 de la Decisión 399, conforme a los términos de compra-venta internacionales de los INCOTERMS 1990, acordados entre las partes. Asimismo, se indicará el tipo de moneda en que se exprese su precio (Ver Apéndice VII de esta Resolución que aprueba la CPIC, la misma que contiene una referencia a INCOTERMS 1990, utilizados para el transporte terrestre internacional por carretera).",
        22: "CASILLA 22. Se precisará(n) la(s) Aduana(s) ubicada(s) en los cruces de frontera habilitados por los Países Miembros, a través de los cuales se efectuará la Operación de Tránsito Aduanero Internacional.",
        23: "CASILLA 23. Se indicará el nombre, apellidos y firma del declarante. Si actúa a nombre de una persona jurídica, se señalará además, la denominación o razón social de la empresa. A continuación, se indicará la ciudad, país y fecha en que se suscribe la DTAI.",
        24: "CASILLA 24. Espacio reservado para la Aduana de partida. Se anotará cualquier observación sobre la Operación de Tránsito Aduanero Internacional u otra que estime conveniente.",
        25: "CASILLA 25. Se precisarán los documentos que acompañan la DTAI (Documento oficial de exportación del país de procedencia de las mercancías, CPIC, MCI u otros).",
        26: "CASILLA 26. Se consignará la firma y el sello del funcionario responsable de la aduana que autoriza el inicio de la Operación de Tránsito Aduanero Internacional. En la parte inferior se anotará el día, mes y año de su intervención.",
        
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
