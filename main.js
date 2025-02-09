
// Dos playlist:
const sad = [];
const chill = [];


//nombre
let nombre = prompt("Ingresá tu nombre.")

//funcion ver playlist bajon

function verListaSad() {
    if (playlist.length === 0) {
        alert("No agregaste ninguna canción a tu lista de reproducción.");
    } else {
        alert(playlist.join("\n"));
    };
};

//funcion ver playlist chill
function verListaChill() {
    if (chill.length === 0) {
        alert("No agregaste ninguna canción a tu lista de reproducción.");
    } else {
        alert(chill.join("\n"));
    };
};

// funcion para agregar una canción
function guardarCancion(){
    const nuevaCancion = prompt("Ingrese el nombre de la canción");
    let elegir = prompt('¿A qué playlist quieres agregarla? ("sad" o "chill")');

    if (elegir === "sad"|| "SAD" || "Sad") {
        sad.push(nuevaCancion);
        alert("Agregaste a tu Playlist bajon: " + nuevaCancion);
    } else if (elegir === "chill"|| "CHILL" || "Chill") {
        chill.push(nuevaCancion);
        alert("Agregaste a tu Playlist chill: " + nuevaCancion);
    } else {
        alert("mmm, no te entendí. Intentá de nuevo.");
    }
}


do {
    opcion = parseInt(prompt("Playlists\n\n1. Para ver La playlist bajon.\n2. Para ver la playlist chill.\n3. Para guardar una canción.\n\n 0. Para salir"));
    switch (opcion) {
        case 0:
            alert("¡Nos vemos!" + nombre);
            break;
        case 1:
            verListaChill();
            break;
        case 2:
            verListaChill();
            break;
        case 3:
            guardarCancion();
            break;
        default:
            alert("mmm, no te entendí. Intentá de nuevo.");
            break;
    };

} while (opcion !== 0);
