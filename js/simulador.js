
const monto = document.getElementById('monto')
const tiempo = document.getElementById('tiempo')
const interes = document.getElementById('interes')
const btncalcular = document.getElementById('btncalcular')
const llenartabla = document.querySelector('#lista-tabla tbody')
const limpiar = document.getElementById('limpiar')



btncalcular.addEventListener("click", () => {
    calcularcuota(monto.value, interes.value, tiempo.value);

})


function calcularcuota(monto,interes,tiempo){

while(llenartabla.firstChild){
    llenartabla.removeChild(llenartabla)
}

    let fechas = [];
    let fechaactual = Date.now();
    let mes_actual = moment(fechaactual);

    let pagointeres = 0, pagocapital = 0, cuota = 0;


cuota = monto * (Math.pow(1+interes/100, tiempo)*interes/100)/(Math.pow(1+interes/100, tiempo)-1)

for(let i = 1; i <= tiempo; i++) {
    pagointeres = parseFloat(monto*(interes/100));
    pagocapital = cuota - pagointeres;
    monto = parseFloat(monto - pagocapital);

    fechas[i] = mes_actual.format('DD-MM-YYYY')
    mes_actual.add(1, 'month');

    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${fechas[i]}</td>
    <td>${cuota.toFixed(2)} </td>
    <td>${pagocapital.toFixed(2)} </td>
    <td>${pagointeres.toFixed(2)} </td>
    <td>${monto.toFixed(2)} </td>     
    `;

     llenartabla.appendChild(row)
    
}

} 


