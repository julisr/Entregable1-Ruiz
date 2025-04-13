const formulario = document.querySelector(".formulario");
const inputCancion = document.querySelector(".inputCancion");
const inputArtista = document.querySelector(".inputArtista");
const listaCanciones = document.querySelector(".canciones");

function agregar(event) {
    event.preventDefault();

    const cancion = inputCancion.value.trim();
    const artista = inputArtista.value.trim();

    if (cancion && artista) {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=track:"${cancion}" artist:"${artista}"`)
            .then(response => response.json())
            .then(data => {
                const resultados = data.data;
                if (resultados.length > 0) {
                    const info = resultados[0];

                    let nombreCancion = document.createElement('li');
                    nombreCancion.classList.add('cancion');

                    let texto = document.createElement("p");
                    texto.innerHTML = `<strong>${info.title}</strong> - ${info.artist.name}`;
                    nombreCancion.appendChild(texto);

        
                    let imagen = document.createElement("img");
                    imagen.src = info.album.cover_medium;
                    imagen.alt = `Álbum: ${info.album.title}`;
                    nombreCancion.appendChild(imagen);

                    
                    let audio = document.createElement("audio");
                    audio.controls = true;
                    audio.src = info.preview;
                    nombreCancion.appendChild(audio);

                    
                    let icono = document.createElement("div");
                    icono.classList.add('iconos');
                    let eliminar = document.createElement('i');
                    eliminar.classList.add('bi', 'bi-dash-circle');
                    eliminar.addEventListener('click', () => nombreCancion.remove());
                    icono.appendChild(eliminar);
                    nombreCancion.appendChild(icono);

                    listaCanciones.appendChild(nombreCancion);
                } else {
                    alert("No se encontró la canción en Deezer.");
                }

                inputCancion.value = "";
                inputArtista.value = "";
            })
            .catch(error => {
                console.error("Error al buscar en Deezer:", error);
                alert("Ocurrió un error al buscar la canción.");
            });
    } else {
        alert('Por favor, ingresá la canción y el artista');
    }
}


formulario.addEventListener("submit", agregar);