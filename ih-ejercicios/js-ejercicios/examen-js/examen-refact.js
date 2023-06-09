const sumArray2 = (numbers) => {
  numbers.forEach((element, i) => {
    numbers[i] = element + 1;
  });
};

const numbers = [1, 2, 3];

sumArray2(numbers);
console.log(numbers);

// -----------------------------------------

const sumArray3 = (numbers) => {
  return numbers.map((element) => element + 1);
};

const multiplicacion = (numbers) => {
  return numbers.map((element) => element ** 2);
};

const numbers1 = [1, 2, 3];

const suma = sumArray3(numbers1);
console.log(suma);

const multi = multiplicacion(numbers1);
console.log(multi);

console.log(numbers1);

// -----------------------------------------------

const numbers3 = [1, 2, 3, 2];

// array.reduce(callback[, initialValue])

const sumArray = (numbers) => {
  return numbers.reduce((acc, number) => {
    // console.log(acc,number);
    return acc + number;
  }, 0);
};

// const resultadoSumArray = sumArray(numbers3)
// console.log(resultadoSumArray);
console.log(sumArray(numbers3));

// ----------------------------

const array = ["ivan", "ana", "jan", "nick"];

const longString = (strings) => {
  return strings.reduce(
    (acc, string) => (string.length > acc.length ? string : acc),
    ""
  );
};
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

const arrayPalabras = ["ana", "ivan", "jan", "ana", "jan", "juan"];

// funcion no tan eficiente pero mas efectiva para bases de datos mas pequeñas

function findUnique(wordsArr) {
  if (wordsArr.length === 0) {
    return null;
  }

  const result = [];

  for (let i = 0; i < wordsArr.length; i++) {
    const word = wordsArr[i];

    if (wordsArr.indexOf(word) === wordsArr.lastIndexOf(word)) {
      result.push(word);
    }
  }
  return result
}

console.log("palabra mas larga");
const palabras = findUnique(arrayPalabras)
console.log(palabras);

/*

es este elemento unico?
3 2 3 4 5
    x
    2
3 2 3 4 5
x
0

3 2 3 4 5
      x
      3  
3 2 3 4 5
      x
      3  
*/

// Funcion enficiente para grandes bases de datos

function findUnique2(wordsArr) {
    const counts = {};
  
    for (word of wordsArr) {
      if (counts[word] != null) {
        counts[word] = counts[element] + 1;
      } else {
        counts[word] = 1;
      }
    }
  
    for (word of wordsArr) {
      if (counts[word] == 1) {
        return element;
      }
    }
  }

  console.log(findUnique2(arrayPalabras));