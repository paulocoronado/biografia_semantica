function mostrarMensaje(){
    console.log('Hicieron clink en el botón' + new Date().toLocaleTimeString())
}


//Agregar un eventListener a otroBoton

let boton=document.getElementById("otroBoton");

boton.addEventListener("click", ()=>{console.log('Hicieron clink en el botón' + new Date().toLocaleTimeString())});


