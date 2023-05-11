const favorites = ["javascript", "html", "css"];
console.log(favorites);
favorites.shift()
console.log(favorites);
favorites.pop()
console.log(favorites);
favorites.push("react")
console.log(favorites);
favorites.unshift("react2")
console.log(favorites);
favorites.splice(1,1, 'express')
console.log(favorites);
favorites.splice(1,2,"mongodb")
console.log(favorites);

const fruits = ["apple", "plum", "strawberries"];

for (let i = 0; i < fruits.length; i++) {
const element = fruits [i];
    console.log(element);
}


fruits.forEach((elemnt, index) => console.log(elemnt, index))

