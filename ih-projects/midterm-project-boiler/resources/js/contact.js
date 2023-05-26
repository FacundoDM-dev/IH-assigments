/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */
/*  ADVANCED: utiliza DOM manipulation para enseñarle al user que su mensaje se ha enviado correctamente o no */

window.onload = () => {
    setTimeout(() => {
      const contenedor = document.querySelector(".body-load");
      contenedor.style.visibility = "hidden";
      contenedor.style.opacity = "0";
    }, 1000);
  };
  