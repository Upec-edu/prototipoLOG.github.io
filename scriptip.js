document.addEventListener('DOMContentLoaded', () => {
    fetch('productosv1.csv')
        .then(response => response.text())
        .then(data => {
            Papa.parse(data, {
                header: true,
                complete: function(results) {
                    const productos = results.data;
                    const productoSelect = document.getElementById('producto');

                    // Crear un conjunto para almacenar los productos únicos
                    const productosUnicos = new Set();
                    productos.forEach(producto => {
                        productosUnicos.add(producto.producto);
                    });

                    // Llenar el select con los productos únicos
                    productosUnicos.forEach(producto => {
                        const option = document.createElement('option');
                        option.value = producto;
                        option.text = producto;
                        productoSelect.appendChild(option);
                    });

                    productoSelect.addEventListener('change', () => {
                        const selectedProducto = productoSelect.value;
                        const productoInfo = productos.filter(producto => producto.producto === selectedProducto);

                        if (productoInfo.length > 0) {
                            const infoDiv = document.getElementById('info');
                            const { subpartida, grupo, subgrupo } = productoInfo[0];
                            infoDiv.innerHTML = `
                                <h2>${selectedProducto}</h2>
                                <p><strong>Subpartida:</strong> ${subpartida}</p>
                                <p><strong>Grupo:</strong> ${grupo}</p>
                                <p><strong>Subgrupo:</strong> ${subgrupo}</p>
                                <h3>Documentación</h3>
                            `;

                            productoInfo.forEach(info => {
                                const docDiv = document.createElement('div');
                                docDiv.innerHTML = `
                                    <p><strong>Documento:</strong> ${info.documentación}</p>
                                    <p><strong>Descripción:</strong> ${info.descripción_doc}</p>
                                `;
                                infoDiv.appendChild(docDiv);
                            });
                        }
                    });
                }
            });
        });
});
