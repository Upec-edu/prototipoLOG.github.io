document.addEventListener('DOMContentLoaded', () => {
    fetch('productos.csv')
        .then(response => response.text())
        .then(data => {
            Papa.parse(data, {
                header: true,
                complete: function(results) {
                    const productos = results.data;
                    const productoSelect = document.getElementById('producto');

                    productos.forEach(producto => {
                        const option = document.createElement('option');
                        option.value = producto.producto;
                        option.text = producto.producto;
                        productoSelect.appendChild(option);
                    });

                    productoSelect.addEventListener('change', () => {
                        const selectedProducto = productoSelect.value;
                        const productoInfo = productos.find(producto => producto.producto === selectedProducto);

                        if (productoInfo) {
                            const infoDiv = document.getElementById('info');
                            infoDiv.innerHTML = `
                                <h2>${productoInfo.producto}</h2>
                                <p><strong>Subpartida:</strong> ${productoInfo.subpartida}</p>
                                <p><strong>Grupo:</strong> ${productoInfo.grupo}</p>
                                <p><strong>Subgrupo:</strong> ${productoInfo.subgrupo}</p>
                                <h3>Documentación</h3>
                                <p>${productoInfo.documentación}</p>
                                <p><strong>Descripción:</strong> ${productoInfo.descripción_doc}</p>
                                <p><strong>Fuente:</strong> ${productoInfo.fuente_doc}</p>
                                <h3>Cuidado</h3>
                                <p><strong>Tipo:</strong> ${productoInfo.tipo_cuidado}</p>
                                <p>${productoInfo.descr_cuidado}</p>
                                <p><strong>Fuente:</strong> ${productoInfo.fuente_cuid}</p>
                                <h3>Etiquetado</h3>
                                <p>${productoInfo.etiquetado}</p>
                                <p><strong>Fuente:</strong> ${productoInfo.fuente_etiq}</p>
                            `;
                        }
                    });
                }
            });
        });
});
