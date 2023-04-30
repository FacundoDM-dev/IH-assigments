


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


let ordenLexico = [hacker1, hacker2]

ordenLexico.sort( (a, b) => {
    
    if (a === b) {
        return console.log("¿Qué? ¿Los dos tienen el mismo nombre?");
    }
    
    else if (a > b) {
       return console.log("El nombre del conductor va primero.");
    }
        
    return console.log("Yo, el navegador va primero definitivamente.");

})


let loremIpsum = "Lorem ipsum dolor sit amet consectetur adipiscing elit, cras class imperdiet viverra dapibus litora taciti libero, diam magna nostra maecenas est tempor. Dui parturient bibendum sociosqu posuere hac dictum tellus quisque augue, elementum tempus curabitur in feugiat cursus vestibulum faucibus ullamcorper facilisi, sem himenaeos penatibus sociis hendrerit dis ante vehicula. Taciti primis conubia diam tincidunt hendrerit, nisi arcu et nulla vulputate a, leo enim ut non.Ridiculus pretium duis purus augue rutrum velit aliquam in nam hendrerit, cum dui enim sociosqu luctus pellentesque euismod accumsan ad turpis, est leo ultrices mi conubia eget facilisi condimentum nostra. Sem felis tincidunt nec ut primis pharetra elementum ornare imperdiet, eleifend suscipit molestie vulputate sociis massa ante ligula dis, commodo ultrices cras convallis lacinia nisi parturient neque. Sem ligula elementum habitant aliquet nunc massa molestie tempus dignissim, erat inceptos fusce habitasse phasellus facilisis accumsan interdum, praesent nam vivamus eu sodales ante lacus a. Viverra ut augue libero ad dapibus semper rhoncus commodo enim quis, molestie condimentum aptent praesent vehicula et fusce hac egestas orci metus, diam phasellus cras litora posuere aliquet pretium vel purus.Fringilla vitae dis gravida tincidunt cras condimentum nulla sapien augue, malesuada cum sodales tempus venenatis felis purus nec a, habitasse porta ullamcorper velit neque dictum per accumsan. Primis congue curabitur lobortis dui dictumst leo porta, pulvinar consequat volutpat nullam erat vehicula, est tincidunt aptent iaculis imperdiet turpis. Accumsan conubia enim nibh molestie placerat nulla tempor cursus dictum, penatibus euismod eget aptent taciti scelerisque velit gravida parturient eros, commodo ornare pharetra sociosqu condimentum ridiculus eu nullam. Morbi venenatis dictumst porta nisi conubia tempus semper facilisis, ultrices mi sem natoque vestibulum nisl cum, nunc sed blandit felis pulvinar volutpat fermentum."


console.log(loremIpsum.split(" "));

let numeroLorem = loremIpsum.split(" ").length

console.log(`loremIpsum tiene ${numeroLorem} palabras.`);

let a = 0, z = 0:
while (a < loremIpsum.length){
    if (loremIpsum[a] == "et"){
        z = z + 1;
    }
    a = a + 1;
} 

console.log(`En loremIpsum hay ${z} espacios.`);
