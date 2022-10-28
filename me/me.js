//boton para comenzar nuevo peyecto
const buttonNewProyect = document.querySelector(".start-proyect");
buttonNewProyect.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".contacto").scrollIntoView();
  console.log("new proyect");
});

//boton para ver proyectos
const buttonProyects = document.querySelector(".proyects");
buttonProyects.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".portfolio").scrollIntoView();
  console.log("PROYECTOS");
});
