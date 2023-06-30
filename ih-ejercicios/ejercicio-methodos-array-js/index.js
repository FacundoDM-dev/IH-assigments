// // --------- Ejercicio 1 (map): ---------
// // Crea un array con los nombres de 5 de tus amigos o familiares. Utiliza el método .map() para crear un nuevo array con las iniciales de cada nombre.

// let nombre = ["Diego", "Facundo", "Eduardo"];

// let mapped = nombre.map((arrayElement) => arrayElement[0]);

// console.log(mapped);

// // --------- Ejercicio 2 (filter): ---------
// //  Crea un array con números del 1 al 10. Utiliza el método .filter() para crear un nuevo array con solo los números pares.

// let numeros = [1, 2, 3, 5, 6];

// const metodofilter = numeros.filter((arrayElement) => {
//   return arrayElement % 2 == 0;
// });

// console.log(metodofilter);

// // --------- Ejercicio 3 (sort): ---------
// // Crea un array con nombres de frutas desordenadas. Utiliza el método .sort() para ordenar los nombres de las frutas en orden alfabético.

// let alfabeto = ["Eduardo", "Facundo", "Diego"];

// let ordenAscendente = alfabeto.sort((a, b) => {
//   return a > b ? 1 : -1;
// });

// console.log(ordenAscendente);

// // --------- Ejercicio 4 (forEach): ---------
// // Crea un array con números aleatorios. Utiliza el método .forEach() para ir sumando cada número a un resultado final.

// let randomNum = [1, 2, 3, 5, 6];

// let total = 0;

// randomNum.forEach((sumatoria) => {
//   return (total += sumatoria);
// });
// console.log(total);

// // --------- Ejercicio 5 (concat): ---------
// // Crea dos arrays, uno con números y otro con letras. Utiliza el método .concat() para unir ambos arrays en un solo array.

// const paises = ["Holanda", "Suecia", "Dinamarca", "Alemania"];
// const ciudades = ["Buenos Aires", "Barcelona", "New York", "Lima"];

// const ciudadesMasPaises = paises.concat(ciudades);

// console.log(ciudadesMasPaises);

// // --------- Ejercicio 6 (every): ---------
// // Crea dos arrays con números. Utiliza el método .every() para verificar si todos los números del array son inferiores a 40. Haz que en un array devuelva true y en el otro false.

// const numerosEveryMore = [25, 50, 80, 10, 90, 35];
// const numerosEveryLess = [10, 20, 35, 2, 8, 15, 6];

// let numerosEveryFalse = numerosEveryMore.every((number) => {
//   return number < 40;
// });

// console.log(numerosEveryFalse);

// let numerosEveryTrue = numerosEveryLess.every((number) => {
//   return number < 40;
// });

// console.log(numerosEveryTrue);

// // --------- Ejercicio 7 (some): ---------
// // Crea un array con objetos, cada objeto debe tener una propiedad llamada "status" con un valor "completo" o "incompleto". Utiliza el método .some() para verificar si al menos un objeto en el array tiene un status de "incompleto".

// // --------- Ejercicio 8 (includes): ---------
// // Crea un array con nombres de animales. Utiliza el método .includes() para verificar si un animal específic0 está en el array.

// // --------- Ejercicio 9 (join): ---------
// // Crea un array con nombres de animales. Utiliza el método .join() para convertir el array en un string separado por comas.

// // --------- Ejercicio 10 (push, pop, shift, unshift): ---------
// // Crea un array con nombres propios. Utiliza el método .pop() para eliminar el último nombre del array, .push() para añadir un nombre nuevo al final, .shift() para eliminar el primer elemento del array y .unshift() para añadir un nuevo nombre al inicio.

// // --------- Ejercicio 11 (slice): ---------
// // Crea un array con números del 1 al 10. Utiliza el método .slice() para crear un array que contenga solo del 5 al 8.

// // --------- Ejercicio 12 (reverse): ---------
// // Crea un array con strings. Utiliza el método .reverse() para invertir el orden de los strings en el array.

// // --------- Ejercicio 13 (find): ---------
// // Crea un array con nombres de cantantes. Utiliza el método .find() para encontrar el primer nombre que empiece por 'M'.

// // --------- Ejercicio 14 (findIndex): ---------
// // Crea un array de títulos de películas. Utiliza el método .findIndex() para encontrar el índice de la primera película cuyo título conste de solo una palabra.

// // --------- Ejercicio 13 (indexOf): ---------
// // Crea un array con números. Utiliza el método .indexOf() para encontrar la primera aparición de un número específico en el array.

// // --------- Ejercicio 14 (fill): ---------
// // Crea un array con números aleatorios. Utilizando el método .fill(), haz que el cuarto elemento del array cambie su valor a 55.

// // --------- Ejercicio 15 (reduce): ---------
// // Crea un array con números del 1 al 10. Utiliza el método .reduce() para sumar todos los números en el array.
function maxOfTwoNumbers(a, b) {
  if(a > b) {
    return a
  }else return b
}

maxOfTwoNumbers(10,9)