// ¡¿Cuál es el resultado de la expresión?!


const expressionOne = ((2 * 2) + 5) * 6;
// resultado 54
const expressionTwo = ((2* 2) + (5 * 3)) - 5;
// resultado 14
const expressionThree = (5 * 5) / (5 * 5);
// resultado 1
const expressionFour = 5 * 5 - 5 * 4;
// resulado 5


console.log(expressionOne, expressionTwo, expressionThree, expressionFour);


const frase = "My favorite dessert is jello."
let j = frase.search("j")

// consolelasName

const nameString = "facundo"
const lastName = "del medico"
const age = "35"

let nameUpper = nameString[0].toUpperCase() + nameString.substring(1)
console.log(nameUpper);

let lastNameUpper = lastName[0].toUpperCase() + lastName.substring(1)
console.log(lastNameUpper);


let nombreCompleto = nameUpper + " " + lastNameUpper

console.log(`Mi nombre es ${nombreCompleto} y tengo ${age} años`);