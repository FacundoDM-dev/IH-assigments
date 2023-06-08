const sumArray2 = (numbers) => {
    numbers.forEach((element , i) => {
            numbers[i] = element+1
    });
}

const numbers = [1,2,3]


sumArray2(numbers)
console.log(numbers);


// -----------------------------------------


const sumArray3 = (numbers) => {
    return numbers.map(element =>  element+1);
}

const multiplicacion = (numbers) => {
    return numbers.map(element =>  element**2);
}

const numbers1 = [1,2,3]

const suma = sumArray3(numbers1)
console.log(suma);

const multi = multiplicacion(numbers1)
console.log(multi);

console.log(numbers1);


// -----------------------------------------------


const numbers3 = [1,2,3,2]

// array.reduce(callback[, initialValue])

const sumArray = (numbers) => {
    return numbers.reduce((acc, number) => {
        // console.log(acc,number);
        return acc + number
    },0)
}

// const resultadoSumArray = sumArray(numbers3)
// console.log(resultadoSumArray);
console.log(sumArray(numbers3));


// ----------------------------


const array = ['ivan', 'ana',  'jan', 'nick']

const longString = (strings) => {
    return strings.reduce((acc, string) => string.length > acc.length ? string : acc ,'')
}
        // opcion 1
    //    if (string.length > acc.length) {
    //         return string
    //     } else {
    //         return acc;
    //     }
        
    // opcion 2
    //    if (string.length > acc.length) {
    //         return string
    //     } return acc;
         
    
    

        // opcion 3
        // condición ? expresiónSiVerdadero : expresiónSiFalso
        

console.log(longString(array));