const beneficios = [
    {id:1, nombre: "Cafetera WHITE", descripcion:"Jarra 1 litro, color blanco", condicion:"Creditos mayores a $100000",imagen:"producto1.jpg"},
    {id:2, nombre: "Cafetera BLACK", descripcion:"Jarra 1,5 litro, color negro", condicion:"Creditos mayores a $110000",imagen:"producto2.jpg"},
    {id:3, nombre: "Licuadora", descripcion:"Licuadora 5 velocidades", condicion:"Creditos mayores a $140000",imagen:"producto3.jpg"},
    {id:4, nombre: "Juguera", descripcion:"Juguera 3 velocidades", condicion:"Creditos mayores a $150000",imagen:"producto4.jpg"},
    {id:5, nombre: "Secador de pelo", descripcion:"Secador de pelo plus, premium", condicion:"Creditos mayores a $160000",imagen:"producto5.jpg"},
    {id:6, nombre: "Juguera daewoo", descripcion:"Juguera premium black", condicion:"Creditos mayores a $170000",imagen:"producto6.jpg"},
    {id:7, nombre: "Panquequera", descripcion:"Panquequera 5 en 1", condicion:"Creditos mayores a $180000",imagen:"producto7.jpg"},
    {id:8, nombre: "Tostadora", descripcion:"Tostadora plus, white", condicion:"Creditos mayores a $190000",imagen:"producto8.jpg"},
    {id:9, nombre: "Minipimer", descripcion:"Minipimer philips", condicion:"Creditos mayores a $200000",imagen:"producto9.jpg"},

]
function obtenerbeneficiosLS() {
    return JSON.parse(localStorage.getItem("beneficios")) || [];
}
function guardarbeneficiosLS(beneficios) {
    localStorage.setItem("beneficios", JSON.stringify(beneficios));
}


function renderbeneficios() {
    let beneficios = obtenerbeneficiosLS();
    let todo = "";


for (let beneficio of beneficios) {
    todo +=`<div class="col-md-4">
        <div class="card m-3">
        <img src="images/${beneficio.imagen}" class="card-img-top" alt="${beneficio.nombre}">
        <div class="card-body">
       <h5 class="card-title text-center">${beneficio.descripcion}</h5>
       <p class="card-text text-center">${beneficio.condicion}</p>
       <p class="card-text text-center"><a href="#" class="btn btn-primary" title="Agregar a premio seleccionado" onclick="agregarcarrito(${beneficio.id})
       ">Elegir</a></p>
      </div>
      </div>
      </div>`;
  }
  document.getElementById ("beneficios").innerHTML = todo
 }

function buscarbeneficio(id) {
    let beneficios = obtenerbeneficiosLS();
    return beneficios.find(x => x.id ==id)
}

function agregarcarrito(id) {
    let beneficio = buscarbeneficio (id);
    let beneficios_carrito = obtenerbeneficioscarritoLS();
    beneficio.cantidad = 1;
    beneficios_carrito.push(beneficio);
    guardarbeneficioscarritoLS(beneficios_carrito);
    actualizarbtncarrito()
}

guardarbeneficiosLS(beneficios)
actualizarbtncarrito()
renderbeneficios()