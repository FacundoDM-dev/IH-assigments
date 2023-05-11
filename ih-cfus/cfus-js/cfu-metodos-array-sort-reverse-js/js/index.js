const arrOfStrings = ["cat", "wolf", "is", "animal"];
console.log(arrOfStrings);

const string1 = [...arrOfStrings];
console.log(string1);

string1.sort((a, b) => b.length - a.length);
console.log(string1);


const string2 = [...arrOfStrings];
string2.sort()
console.log(string2);


const numbers = [2, 5, 9, 7, 1, 8, 4, 3, 6];

const sortNumbers = ((array) => {
    const copy = array.slice()
    copy.sort((a, b) => a - b)
    return copy
})

 
console.log(sortNumbers(numbers))


const name = "ivan";
console.log(name);
let namereverse = name.split("").reverse("").join("")
console.log(namereverse);


const numbersb = [3, 5, 6, 2];
console.log(numbersb);

const numRevert = ((array) => {
    const copy = array.slice()
    return copy.reverse("")
})

console.log(numRevert(numbersb));

const numSortRevert = ((array) => {
    const copy = array.slice()
    return copy.sort().reverse("")
})

console.log(numSortRevert(numbersb));


