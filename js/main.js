let h1 = document.createElement("h1")
h1.innerHTML = "Credi online"

const titulo = document.getElementById(tit)
tit.appendChild(h1)

h1.className = "p-3 position-relative text-center";

//validacion de datos

let formulario = document.getElementById("formulario")


let btn_env = document.getElementById("btn_env") 

btn_env.addEventListener("click", validarformulario);

function validarformulario() {
    let email =document.getElementById ("email").value;
    let form =document.getElementById ("form").value;
    let nombre =document.getElementById ("nombre").value;

    if (nombre=="") {
      Swal.fire(
        'No completo su nombre',
        'Ingrese uno para continuar',
        'question'
      )
        return false;
     }
    if (email=="") {
      Swal.fire(
        'No completo el Email',
        'Ingrese uno para continuar',
        'error'
      )
        return false;
    }
    if (form=="") {
      Swal.fire(
        'No realizo una consulta',
        'Estamos para ayudarte',
        'question'
      )
        return false;
    }
let aviso = (nombre)
console.log (aviso)
    Swal.fire(
      'No realizo una consulta',
      'Estamos para ayudarte',
      'question'
    )
formulario.submit();

}



function limpiarFormulario() {
  document.getElementById("formulario").reset();
}

let boton = document.getElementById("boton")
let con = true
boton.addEventListener("click",function(){
  let barra = document.querySelector(".barra");
   if (con == true) {
    barra.style.width="0"
    con = false
   } else {
    barra.style.width="80%"
    con = true
   }
})