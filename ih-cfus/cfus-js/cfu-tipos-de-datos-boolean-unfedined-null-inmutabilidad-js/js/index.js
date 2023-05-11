// Booleanos y condicionales #1

let age = ""

if (age === undefined) {
    console.log("la variable no esta difinida");
}
else {
    console.log("La variable esta definida");
}


// Booleanos y condicionales #2

let num = -10

let isEven = false

if (num % 2 === 0) {
    isEven = true
}
console.log(isEven);


let isPositive = false

if (num > 0) {
    isPositive = true
}

console.log(isPositive);

let isNegative = false

if(num < 0) {
    isNegative = true
}

console.log(isNegative);