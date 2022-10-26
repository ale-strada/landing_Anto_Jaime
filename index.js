//import Swal from "sweetalert2/dist/sweetalert2.js";

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

//boton para descargar CV
const downloadCv = document.querySelector(".download-cv");
downloadCv.addEventListener("click", (e) => {
  e.preventDefault();
  window.open("CURRICULUM ANTONELLA JAIME DG.pdf");
  console.log("DESCARGA CV");
});
async function sendEmail(mensaje) {
  console.log("envia");
  try {
    const res = await fetch("https://dwf-m7-final.herokuapp.com/send", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        to: "jaime.antonella29@gmail.com",
        from: "buscador.de.mascotas.app@gmail.com",
        subject: "mensaje landing",
        text: mensaje,
      }),
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

//manda el email con l API findPets
async function sendEmail(mensaje) {
  const res = await fetch("https://dwf-m7-final.herokuapp.com/send", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      to: "jaime.antonella29@gmail.com",
      from: "buscador.de.mascotas.app@gmail.com",
      subject: "mensaje desde landing page",
      text: mensaje,
    }),
  });
  const data = await res.json();

  return data;
}

// formulario de contacto
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contacto_form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const mensaje = {
      nombre: e.target.name.value,
      email: e.target.email.value,
      mensaje: e.target.mensaje.value,
    };
    const email = sendEmail(JSON.stringify(mensaje));
    console.log(email);
    Swal.fire({
      title: "Su mensaje fue enviado",
      icon: "success",
      confirmButtonText: "ok",
    });
    form.reset();
  });
});
