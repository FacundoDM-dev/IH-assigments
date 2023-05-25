/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */

window.onload = () => {
  setTimeout(() => {
    const contenedor = document.querySelector(".body-load");
    contenedor.style.visibility = "hidden";
    contenedor.style.opacity = "0";
  }, 1000);
};

let projectArray = document.querySelectorAll(".project-cont-text");
let projectData = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((res) => {
    projectArray[0].querySelector("h4").innerText = res[4].title;
    projectArray[0].querySelector("p").innerText = res[4].body;

    projectArray[1].querySelector("h4").innerText = res[8].title;
    projectArray[1].querySelector("p").innerText = res[8].body;

    projectArray[2].querySelector("h4").innerText = res[7].title;
    projectArray[2].querySelector("p").innerText = res[7].body;
  })
  .catch((err) => console.log(err));




const d = document;
const w = window;

w.addEventListener("scroll", ()=>{
    let button = document.querySelector(".scroll-top-btn")
    let scrollTop = d.documentElement.scrollTop

    if(scrollTop > 120){
        button.classList.remove("hidden")
    }else {
        button.classList.add("hidden")
    }
})

// d.addEventListener("click", (e)=>{
//     let button = document.querySelector(".scroll-top-btn")
//     if (e.target.matches(button)) {
//         d.scrollTo({
//             behavior: "smooth",
//             top: 0,
//             left: 0,
//         })
//     }
// })



