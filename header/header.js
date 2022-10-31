//maneja el scroll del header
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});

//colores en secctions
const home = document.querySelector(".home-link");
const portfolio = document.querySelector(".portfolio-link");
const servicios = document.querySelector(".servicios-link");
const contacto = document.querySelector(".contacto-link");

window.addEventListener("scroll", (e) => {
  var scroll = this.scrollY;
  //console.log(scroll);
  if (scroll < 800) {
    home.classList.add("select");
    contacto.classList.remove("select");
    portfolio.classList.remove("select");
    servicios.classList.remove("select");
  } else if (scroll > 800 && scroll < 1930) {
    portfolio.classList.add("select");
    contacto.classList.remove("select");
    home.classList.remove("select");
    servicios.classList.remove("select");
  } else if (scroll > 1930 && scroll < 3800) {
    servicios.classList.add("select");
    contacto.classList.remove("select");
    portfolio.classList.remove("select");
    home.classList.remove("select");
  } else if (scroll > 3800) {
    contacto.classList.add("select");
    servicios.classList.remove("select");
    portfolio.classList.remove("select");
    home.classList.remove("select");
  }
});

//burguer
// selector
var menu = document.querySelector(".hamburger");

// method
function toggleMenu(event) {
  this.classList.toggle("is-active");
  document.querySelector(".menuppal").classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener("click", toggleMenu, false);
