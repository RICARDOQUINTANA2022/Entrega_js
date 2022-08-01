function renderbeneficioscarrito() {
    let beneficios = obtenerbeneficioscarritoLS();
    let contenido = `<p class="alert alert-warning text-center" role="alert">No a elegido ningun premio</p>`

    if(beneficios.length > 0) {
        contenido = `<p class="text-end"><a href="#" class="btn btn-danger text-white" onclick="vaciarcarrito()" title="vaciar carrito">Vaciar carrito<img src="../css/img/delete.png" width="24"></a></p>
        <table class="table">`

    
        for (let beneficio of beneficios) {
            contenido +=`<tr>
            <td><img src="images/${beneficio.imagen}" class= "car-img-top" alt=${beneficio.nombre}" width="42"></td>
            <td class="align-middle">${beneficio.descripcion}</td>
            <td class="align-middle">${beneficio.condicion}</td>
            <td><a href="#" class="text-end align-middle"><img src="../css/img/delete.png" width="24"></td>
            </tr>  `
}
        contenido += `</table>`
    }

    
document.getElementById("beneficios_carritomain").innerHTML = contenido;
}

actualizarbtncarrito()
renderbeneficioscarrito();
