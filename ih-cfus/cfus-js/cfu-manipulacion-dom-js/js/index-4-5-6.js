let p = document.createElement("p");

let textNode = document.createTextNode("Hi there! I am using JavaScript");
p.appendChild(textNode);
document.body.appendChild(p);



let inputTag = document.createElement("input");
inputTag.setAttribute("type", "text");
inputTag.setAttribute("placeholder", "Escribe Aqui");

let parentButton = document.getElementById("add-item-button");
let parent = parentButton.parentNode;
parent.insertBefore(inputTag, parentButton);

let div = document.querySelector("#app");
let olTag = document.createElement("ol");
div.appendChild(olTag);

parentButton.addEventListener("click", () => {
  if (!inputTag.value) {
    alert("escribi algo ratooon!!");

  } else {
    let liTag = document.createElement("li");
    liTag.innerText = inputTag.value;
    olTag.appendChild(liTag);
    inputTag.value = "";
  }
});
