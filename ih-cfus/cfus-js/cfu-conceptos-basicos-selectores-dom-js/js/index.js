console.log("Test")


///////////////////////////////////////////////////////////////////////////////


let parent = document.getElementsByTagName("body")[0];

let div = document.getElementsByClassName("box")

let p = document.getElementsByTagName("p")

for (let i = 0; i < div.length; i++) {
    div[i].innerHTML = "Hola"
    div[i].style.backgroundColor = "purple"
    div[i].style.color = "white"
}

for (let i = 0; i < p.length; i++) {
    const element = p[i];
    element.style.fontSize = "20px"
}


let h2Tag = document.createElement("h2")

h2Tag.innerHTML = "Hola Mundo"
parent.appendChild(h2Tag);