


// Iteración 1: Nombres y entradas

let hacker1 = ("Facundo")

    console.log(`El nombre del conductor es ${hacker1}`)

let hacker2 = ("Diego")

    console.log(`El nombre del navegador es ${hacker2}`)

let nombreConductor = `El nombre del conductor es ${hacker1}`

let nombreNavegador = `El nombre del navegador es ${hacker2}`


// console.log(nombreConductor);
// console.log(nombreNavegador);



// Iteración 2: Condicionales

if (hacker1.length > hacker2.length) {
    console.log(`El conductor tiene el nombre más largo, tiene ${hacker1.length} caracteres.`);
}

else if (hacker1.length < hacker2.length) {
    console.log(`Parece que el navegante tiene el nombre más largo, tiene ${hacker2.length} caracteres.`);
}

else (`¡Vaya, ambos tienen nombres igual de largos, XX caracteres!`)


// hacker1.length > hacker2.length ?
// console.log(`El conductor tiene el nombre más largo, tiene ${hacker1.length} caracteres.`)
// : console.log(`Parece que el navegante tiene el nombre más largo, tiene ${hacker2.length} caracteres.`)


// hacker1.length > hacker2.length ? console.log(`El conductor tiene el nombre más largo, tiene ${hacker1.length} caracteres.`) :
// hacker1.length === hacker2.length ? console.log(`¡Vaya, ambos tienen nombres igual de largos, XX caracteres!`) :
// (`Parece que el navegante tiene el nombre más largo, tiene ${hacker2.length} caracteres.`)


// Iteración 3: Loops

// console.log(hacker1.toUpperCase());

let nombreFacundo = "";

    for (let index = 0; index < hacker1.length; index++)
{
// console.log(hacker1[index]);
    nombreFacundo += hacker1[index].toUpperCase() + " ";
}
    console.log(nombreFacundo);

    console.log(nombreFacundo.split("").reverse("").join("").toUpperCase(""));


// console.log(hacker1.split("").reverse("").join("").toUpperCase(""));

let ordenLexico = ["El nombre del conductor va primero.","Yo, el navegador va primero definitivamente.", "¿Qué? ¿Los dos tienen el mismo nombre?"]