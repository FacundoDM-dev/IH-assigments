// Ejercicio 1. Cambio de innerText.
// Creamos un <h1> con un texto de "Todavía no me han modificado". Debajo creamos un botón que contenga el texto que queráis ("Click me", por ejemplo).
// Después tendremos que generar un evento de click. Cuando el user clique el botón, lo que haremos es que vamos a modificar el texto del <h1> de tal manera que sea "Ya me han dado click!".

let parentBody = document.body;
let h1Tag = document.createElement("h1");
h1Tag.innerHTML = "Todavía no me han modificado";
parentBody.appendChild(h1Tag);

let buttonTag = document.createElement("button");
buttonTag.innerHTML = "Click Aqui";
parentBody.appendChild(buttonTag);

buttonTag.onclick = function () {
  let textActual = h1Tag.innerHTML;
  if (textActual == "Todavía no me han modificado")
    h1Tag.innerHTML = "Ya me han dado click!";
  else if (textActual == "Ya me han dado click!")
    h1Tag.innerHTML = "Todavía no me han modificado";
};

// Ejercicio 2. Toggle.
// Imaginemos que tenemos un pequeño aparato que se puede encender y apagar con un botón.
// Vamos a crear un <h1> que contendrá el texto "OFF". Debajo colocaremos un botón que contenga el texto "encender". De momento nuestro aparato está apagado.
// A continuación vamos a crear un event listener de click, de tal manera que, cuando el user lo clique, cambie el texto de 'OFF' a 'ON' y el texto del botón de 'encender' a 'apagar'. Esto nos permitiría encender nuestro aparato imaginario, pero también deberemos asegurarnos que, con el mismo evento de click, podemos apagarlo (es decir, volver a setear el valor del <h1> a 'OFF' y el del botón a 'encender').

let h1TagOnOff = document.createElement("h1");
h1TagOnOff.innerHTML = "OFF";
parentBody.appendChild(h1TagOnOff);

let buttonEncender = document.createElement("button");
buttonEncender.innerHTML = "Enceder";
parentBody.appendChild(buttonEncender);

buttonEncender.addEventListener("click", () => {
  if (h1TagOnOff.innerHTML == "OFF") {
    (h1TagOnOff.innerHTML = "ON"), (buttonEncender.innerHTML = "Apagar");
  } else {
    (h1TagOnOff.innerHTML = "OFF"), (buttonEncender.innerHTML = "Enceder");
  }
});

// Ejercicio 3. Contador.
// Vamos a crear un pequeño contador que sume y reste valores. Primero crearemos un <h1> con un valor inicial de '0'. Después crearemos CUATRO botones: el primero será "Doble click -2", el segundo "Click -1", el tercero "Click +1" y el cuarto "Doble click +2".
// Lo que queremos de estos cuatro botones es que modifiquen el valor del <h1> según como se especifica. Es decir, tendremos dos botones con un evento de doble click que restaran y sumarán 2 al resultado del <h1>, así como otros dos botones con un evento de click que sumarán y restarán 1 al resultado.
// HINT: Recordad que todos los valores dentro de un tag de HTML son cadenas de texto.

let h1TagContador = document.createElement("h1");
h1TagContador.innerHTML = 0;
parentBody.appendChild(h1TagContador);

let buttonDobleClickResta = document.createElement("button");
buttonDobleClickResta.innerHTML = "DobleClick Para Restar";
parentBody.appendChild(buttonDobleClickResta);

let buttonDobleClickSuma = document.createElement("button");
buttonDobleClickSuma.innerHTML = "DobleClick Para Sumar";
parentBody.appendChild(buttonDobleClickSuma);

let buttonClickRestar = document.createElement("button");
buttonClickRestar.innerHTML = "Click Para Restar";
parentBody.appendChild(buttonClickRestar);

let buttonClickSuma = document.createElement("button");
buttonClickSuma.innerHTML = "Click Para Sumar";
parentBody.appendChild(buttonClickSuma);

buttonDobleClickResta.addEventListener("dblclick", () => {
  h1TagContador.innerHTML = h1TagContador.innerHTML - 2;
});

buttonClickRestar.addEventListener("click", () => {
  h1TagContador.innerHTML = h1TagContador.innerHTML - 1;
});

buttonClickSuma.addEventListener("click", () => {
  h1TagContador.innerHTML = Number(h1TagContador.innerHTML) + 1;
});

buttonDobleClickSuma.addEventListener("dblclick", () => {
  h1TagContador.innerHTML = Number(h1TagContador.innerHTML) + 2;
});

// Ejercicio 4. Class Toggle
// Creamos un botón que tenga una clase "green" y un texto como 'I'm green'.
// Cuando el user dé click al botón, deberíamos cambiar el texto del botón por 'I'm red' y su color para que sea rojo.
// Cuando el botón sea rojo y el user le vuelva a dar, deberíamos volver a setearlo a su estado inicial.

let buttonColorTag = document.createElement("button");
buttonColorTag.innerHTML = "I'm Green";
buttonColorTag.style.marginTop = "50px";
// buttonColorTag.style.backgroundColor = "green";

parentBody.appendChild(buttonColorTag);
buttonColorTag.setAttribute("class", "color back-color");

buttonColorTag.addEventListener("click", () => {
  buttonColorTag.classList.toggle("back-color");

  if (buttonColorTag.innerHTML == "I'm Green") {
    buttonColorTag.innerHTML = "I'm Red....";
  } else {
    buttonColorTag.innerHTML = "I'm Green";
  }
});

// Ejercicio 5. Añadir a listas con inputs - ADVANCED
// Vamos a crear una ordered list que no contenga ningún elemento. Después creamos un input y un botón que contenga el texto "Añadir".
// Cuando el user escriba alguna cosa en el input y le dé a añadir, lo que deberíamos hacer es coger el valor de ese input y añadirlo a nuestra ordered list.
// Bonus: En caso de que el input esté vacío, deberíamos asegurarnos que no se añade una empty string a la lista, y que por ejemplo el input pase a tener un placeholder de 'Por favor, añade un elemento'

let olTag = document.createElement("ol");
parentBody.appendChild(olTag);

let inputTag = document.createElement("input");
inputTag.setAttribute("placeholder", "Escriba aqui");
parentBody.appendChild(inputTag);

let buttonTagAddLi = document.createElement("button");
buttonTagAddLi.innerHTML = "Añadir";

parentBody.appendChild(buttonTagAddLi);

buttonTagAddLi.addEventListener("click", () => {

  if (!inputTag.value) {
    alert("tienes que ingresar dato");

  } else {
    let liTag = document.createElement("li");
    liTag.innerText = inputTag.value 
    olTag.appendChild(liTag);
    inputTag.value = "";
  }
});
