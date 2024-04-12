
// Declarar variables 
const mensajeInput = document.getElementById("mensaje");
const respuestaDiv = document.getElementById("respuesta");


function mostrarMensaje() {
  const mensaje = mensajeInput.value;

  if (mensaje === "Si") {
    respuestaDiv.textContent = "I love you";
  }
  else if (mensaje === "No"){
    respuestaDiv.textContent = "Fatal Error crying";
    
  } else {
    respuestaDiv.textContent = `Debes de elegir una opcion valida xd`;
  }
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  mostrarMensaje();
});

// Boton de musica
function playAudio() { 
    var x = document.getElementById("myAudio"); 
    x.play(); 
} 

function pauseAudio() { 
    var x = document.getElementById("myAudio"); 
    x.pause(); 
} 