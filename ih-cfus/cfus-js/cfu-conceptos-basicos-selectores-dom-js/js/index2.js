console.log("Test");

let h1TagMod = document.querySelector("h1")
h1TagMod.textContent = "Cat"

let backColorIdCat = document.querySelector("#cat")
backColorIdCat.textContent = "Soy un Div"
backColorIdCat.style.backgroundColor = "grey" 

let backColorMouse = document.querySelectorAll(".mouse")

for (let i = 0; i < backColorMouse.length; i++) {
    const element = backColorMouse[i];
    element.innerHTML = "Soy un raton"
    element.style.backgroundColor = "grey"
    element.style.color = "white"
}

let pTag = document.createElement("p")
pTag.innerHTML = "Manipulando el DOM"

let catParent = document.querySelector("#cat")
catParent.appendChild(pTag)