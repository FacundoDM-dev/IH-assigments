function sumThreeNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sumThreeNumbers(1, 500, 3));

function isStrinOddOrEven(name) {
  if (name.length % 2 === 0) {
    return `${name} tiene una cantidad de caracteres par`;
  } else {
    return `${name} tiene una cantidad de caracteres inpar`;
  }
}

console.log(isStrinOddOrEven("Facundo"));
