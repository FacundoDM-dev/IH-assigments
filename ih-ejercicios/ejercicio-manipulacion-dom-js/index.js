let parent = document.getElementsByTagName("body")[0];

let pTag = document.createElement("p");
pTag.innerHTML = "me gusta JS";
console.log(pTag);
parent.appendChild(pTag);

let h2Tag = document.createElement("h2")
h2Tag.innerHTML = "pero es dificil!"
parent.appendChild(h2Tag)
 