const formulario = document.querySelector(".formulario");
const inputCancion = document.querySelector(".inputCancion"); 
const inputArtista = document.querySelector(".inputArtista"); 
const listaCanciones = document.querySelector(".canciones");  

function agregar(event) {
    event.preventDefault(); 

    if (inputCancion.value.trim() && inputArtista.value.trim()) { 
        let nombreCancion = document.createElement('li');
        nombreCancion.classList.add('cancion');

        
        let texto = document.createElement("p");
        texto.innerHTML = `<strong>${inputCancion.value}</strong> - ${inputArtista.value}`; 
        nombreCancion.appendChild(texto);

        
        let icono = document.createElement("div");
        icono.classList.add('iconos');
        nombreCancion.appendChild(icono);

        
        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-dash-circle');
        eliminar.addEventListener('click', eliminarCancion);
        icono.appendChild(eliminar);

        listaCanciones.appendChild(nombreCancion);
        
        
        inputCancion.value = "";
        inputArtista.value = "";
    } else {
        alert('Por favor, ingresá la canción y el artista');
    }
}

function eliminarCancion(e) {
    let tarea = e.target.closest('li'); 
    if (tarea) tarea.remove();
}


formulario.addEventListener('submit', agregar);


inputCancion.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        agregar(e);
    }
});

inputArtista.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        agregar(e);
    }
});