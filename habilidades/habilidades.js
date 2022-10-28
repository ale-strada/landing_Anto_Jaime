//boton para descargar CV
const downloadCv = document.querySelector(".download-cv");
downloadCv.addEventListener("click", (e) => {
  e.preventDefault();
  window.open("CURRICULUM ANTONELLA JAIME DG.pdf");
  console.log("DESCARGA CV");
});
