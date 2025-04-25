const formulario = document.getElementById("formulario");
const ingresoCancion = document.getElementById("ingresoCancion");
const ingresoArtista = document.getElementById("ingresoArtista");
const listaCanciones = document.querySelector(".canciones");
const boton = document.querySelector(".boton")

function agregar(event) {
    event.preventDefault();

    const cancion = ingresoCancion.value
    const artista = ingresoArtista.value;

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

        eliminar.addEventListener("click", () => {
            nombreCancion.remove();
          
            Toastify({
              text: "Canción eliminada",
              duration: 1000,
              gravity: "top",
              position: "right",
              backgroundColor: "#8C3C47", 
              stopOnFocus: true
            }).showToast();
          });

       
         icono.appendChild(eliminar);
         nombreCancion.appendChild(icono);

                    listaCanciones.appendChild(nombreCancion);
                    Toastify({
                        text: "Canción agregada",
                        duration: 1000,
                        gravity: "top",
                        position: "right",
                        backgroundColor: "#F2D888",
                        stopOnFocus: true
                      }).showToast();
                } else {
                        Swal.fire ({
                            icon: "question",
                            title: "UPSS",
                            text: "No se encontró la canción en Deezer",
                            showConfirmButton: true,
                            showConfirmButton: "Reintentar",
                            timer: 4000,
                        })     
                
                }

                ingresoCancion.value = "";
                ingresoArtista.value = "";
            })
            .catch(error => {
                console.error("Error al buscar en Deezer:", error);
                Swal.fire ({
                icon: "warning",
                title: "UPS",
                text: "Ocurrió un error al buscar la canción.",
                showConfirmButton: true,
                confirmButtonText: 'Reintentar',

                    })     

            });
    } else {
        Toastify({
        text: "Ingresá la canción y el artista",
        duration: 1000,
        gravity: "top",
        position: "right",
        backgroundColor: "#8C3C47",
        stopOnFocus: true
          }).showToast();
}
}

formulario.addEventListener("submit", agregar);