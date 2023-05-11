console.log("test");

let p = document.createElement("p")

let textNode = document.createTextNode("hola mundoooooo")

p.appendChild(textNode)

document.body.appendChild(p)


let parentdiv = document.getElementById("add-item-button")
let inputTag = document.createElement("input")

inputTag.setAttribute("type", "text")
inputTag.setAttribute("placeholder", "Escribe Aqui")

let parent = parentdiv.parentNode;
parent.insertBefore(inputTag, parentdiv)

