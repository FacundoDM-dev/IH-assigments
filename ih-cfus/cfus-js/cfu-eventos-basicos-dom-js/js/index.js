const btn = document.querySelector("#my-button")
btn.addEventListener("mouseover", () => {
    alert("pasaste por encima")
    console.log("boton apretado");
}) 

const div = document.querySelector("#color-change")
div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "red"
})