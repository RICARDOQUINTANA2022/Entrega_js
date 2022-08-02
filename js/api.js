fetch("https://mercados.ambito.com/dolar/%22+tipo+%22/variacion")
.then((respuesta) => respuesta.json())
.then((record) => {
    console.log(record);
let resultado = document.getElementById("resultado");
let salida =  `Cotizacion dolar oficial &nbsp; Compra: $ ${record.compra} &nbsp; venta: $ ${record.venta} &nbsp; Ultima actualizacion: ${record.fecha}`;

resultado.innerHTML = salida;

})