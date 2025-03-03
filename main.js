
const formulario = document.querySelector(".formulario"); 
const input = document.querySelector(".input"); 
const listaCanciones = document.querySelector(".canciones"); 


const agregar = event => {
    event.preventDefault();
    const nombreCancion = input.value.trim(); 
    if (nombreCancion === "") return; 

    const nuevaCancion = document.createElement("li"); 
    nuevaCancion.textContent = nombreCancion; 

    listaCanciones.appendChild(nuevaCancion); 
    inputCancion.value = ""; 
};


formulario.addEventListener("submit", agregar);


