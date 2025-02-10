
// Dos playlist:
const sad = ["Moon Song", "No surprises", "Karma Police"];
const chill = ["Like a Tattoo", "See you again", "I'll haunt you"];

//nombre
const nombre = prompt("Ingresá tu nombre.")

//funcion ver playlist bajon

function verListaSad() {
    if (sad.length === 0) {
        alert("No agregaste ninguna canción a tu lista de reproducción.");
    } else {
        alert(sad.join("\n"));
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

//funcion para agregar una canción
function guardarCancion(){
    const nuevaCancion = prompt("Ingrese el nombre de la canción");
    let elegir = parseInt(prompt("Para guardarla en tu playlist bajon ingresá 1 \nPara guardarla en tu playlist chill ingresá 2"));

    if (elegir === 1) {
        sad.push(nuevaCancion);
        alert("Agregaste a tu Playlist bajon: " + nuevaCancion);
    } else if (elegir === 2) {
        chill.push(nuevaCancion);
        alert("Agregaste a tu Playlist chill: " + nuevaCancion);
    } else {
        alert("mmm, no te entendí. Intentá de nuevo.");
    }
}

do {
    opcion = parseInt(prompt("Playlists\n\n1. Para ver La playlist bajon.\n2. Para ver la playlist chill.\n3. Para guardar una canción.\n0. Para salir"));
    switch (opcion) {
        case 0:
            alert("¡Nos vemos " + nombre + "!");
            break;
        case 1:
            verListaSad();
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
