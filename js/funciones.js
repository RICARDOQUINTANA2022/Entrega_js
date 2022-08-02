function obtenerbeneficioscarritoLS() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}
function guardarbeneficioscarritoLS(beneficios) {
    localStorage.setItem("carrito", JSON.stringify(beneficios));
    }

function actualizarbtncarrito() {
    let beneficios = obtenerbeneficioscarritoLS();
    let contenido = `<button type="button" class="btn btn-outline-ligh position-relative">
            <img src="../css/img/regalo1.png" width="40">
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              0 </span> </button>`;
    let total = 0;
        
            if (beneficios.length > 0) {
                for (let beneficio of beneficios) {
                    total+=beneficio.cantidad;
                }
        
                contenido = `<button type="button" class="btn btn-outline-ligh position-relative">
            <img src="../css/img/regalo1.png" width="40">
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              ${total} </span> </button>`;
            }
        
            document.getElementById("beneficios_carrito").innerHTML = contenido;
        }  
        
function vaciarcarrito() {
     localStorage.removeItem("carrito");
     actualizarbtncarrito();
     renderbeneficioscarrito();
        }