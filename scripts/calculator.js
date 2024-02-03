let pelis = ["thanksgiving", "dashcam", "cure", "in a violent nature"]

function randomNumber(peliculas) {
    return Math.floor(Math.random() * peliculas.length);
}

function peliRandom(peliculas) {
    return peliculas[randomNumber(peliculas)];
}

let opcion1 = peliRandom(pelis);
let opcion2 = peliRandom(pelis);

let input = opcion1;

console.log(pelis)

while (pelis.length > 1) {
    opcion2 = peliRandom(pelis);

    input = prompt("Entre " + input + " y: " + opcion2 + ". ¿Cuál prefieres?");

    if (input === opcion1) {
        pelis.splice(pelis.indexOf(opcion2), 1);
        opcion2 = peliRandom(pelis);
    } else if (input === opcion2) {
        pelis.splice(pelis.indexOf(opcion1), 1);
        opcion1 = peliRandom(pelis);
    } else {
        alert("Error");
        break;
    }

    console.log(pelis)
}

alert("La película seleccionada es " + pelis[0]);