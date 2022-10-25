//maneja el scroll del header
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});

//boton para comenzar nuevo peyecto
const buttonNewProyect = document.querySelector(".start-proyect");
buttonNewProyect.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("new proyect");
});

//boton para ver proyectos
const buttonProyects = document.querySelector(".proyects");
buttonProyects.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("PROYECTOS");
});

const downloadCv = document.querySelector(".download-cv");
downloadCv.addEventListener("click", (e) => {
  e.preventDefault();
  window.open("CURRICULUM ANTONELLA JAIME DG.pdf");
  console.log("DESCARGA CV");
});
