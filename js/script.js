// const heading = document.querySelector(`.header__texto h2`)
// heading.textContent = `Nuevo Heading`;
// console.log (heading);

// const enlaces = document.querySelectorAll (`.navegacion a`);
// enlaces[0].textContent = `Nuevo texto para Enlace`;
// enlaces[0].classList.add (`Nueva-clase`);

const nuevoEnlace = document.createElement(`A`)

//Agregar el Href
nuevoEnlace.href = `nuevo-enlace.html`;

//Agregar el texto
// nuevoEnlace.textContent = `Tienda Virtual`;

//Agregar la Clase
nuevoEnlace.classList.add(`navegacion__enlace`);

//Agregarla al Documento
const navegacion = document.querySelector(`.navegacion`);
navegacion.appendChild(nuevoEnlace);





console.log(nuevoEnlace);


/// Eventos
/*
window.onload = function () {
    console.log(3);
}

window.addEventListener ( `load`, function () {
console.log(2);

});

document.addEventListener(`DOMContentLoaded`, function () {
    console.log(4);
})*/


/*window.onscroll = function () {
      console.log (`scrolling...`);
}*/



/*const btnEnviar = document.querySelector(`.boton--primario`);

btnEnviar.addEventListener(`click`, function(evento) {
    console.log(evento);
    evento.preventDefault();
});

console.log(`enviando formulario`) */









//eventos inputs text area 

const datos = {
    nombre:``, 
    Email:``,
    Mensaje: ``
}


const nombre = document.querySelector (`#nombre`);
const email = document.querySelector (`#Email`);
const mensaje = document.querySelector (`#Mensaje`);
const formulario = document.querySelector(".formula");



nombre.addEventListener("input" , leertexto);
email.addEventListener("input" , leertexto);
mensaje.addEventListener("input" , leertexto);

formulario.addEventListener("submit", function (evento){
    evento.preventDefault();


    const { nombre , email, mensaje} = datos;    

    if (nombre === `` || email === "" || mensaje === "") {

        mostrarError("Todos los campos son Obligatorios");

        return; //corta la ejecucion del codigazo
    }

    mostrarMensaje (`Se ha enviado exitosamente`);

        
})

function leertexto (e) {
/* console.log(evento.target.value);*/
  datos[e.target.id] = e.target.value;
 // console.log (datos);

}

function mostrarMensaje (mensaje) {

    const Exito = document.createElement(`P`);
    Exito.textContent = mensaje;
    Exito.classList.add ("correcto");

    formulario.appendChild(Exito);

    setTimeout( () => {

        Exito.remove();

    }, 3000);


}

function mostrarError (mensaje) {

    const error = document.createElement(`P`);
    error.textContent = mensaje;
    error.classList.add ("error");

    formulario.appendChild(error);

    setTimeout( () => {

        error.remove();


    }, 5000);


}


