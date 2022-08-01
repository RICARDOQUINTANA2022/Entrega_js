function renderbeneficioscarrito() {
    let beneficios = obtenerbeneficioscarritoLS();
    let contenido = `<table class="table">`

    
for (let beneficio of beneficios) {
    contenido +=`<tr>
    <td><img src="images/${beneficio.imagen}" class= "car-img-top" alt=${beneficio.nombre}" width="42"></td>
    <td>${beneficio.descripcion}</td>
    <td>${beneficio.condicion}</td>
    <td><a href="#" class="btn"><img src="../css/img/regalo1.png" width="24"></td>
    </tr>  `
}
contenido += `</table>`
document.getElementById("beneficios_carritomain").innerHTML = contenido;
}

renderbeneficioscarrito();
