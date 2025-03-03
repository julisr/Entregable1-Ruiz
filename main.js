
const formulario = document.querySelector(".formulario"); // Selecciona el formulario
const input = document.querySelector(".input"); // Selecciona el input
const listaCanciones = document.querySelector(".canciones"); // Selecciona la lista UL 


const agregar = event => {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario

    const nombreCancion = input.value.trim(); // Obtiene el texto del input y quita espacios extra
    if (nombreCancion === "") return; // Si el input está vacío, no hace nada

    const nuevaCancion = document.createElement("li"); // Crea un nuevo <li>
    nuevaCancion.textContent = nombreCancion; // Le pone el nombre de la canción

    listaCanciones.appendChild(nuevaCancion); // Agrega el <li> a la lista <ul>
    inputCancion.value = ""; // Limpia el input después de agregar
};

// Escuchar el evento "submit" del formulario
formulario.addEventListener("submit", agregar);


