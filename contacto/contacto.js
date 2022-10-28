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
