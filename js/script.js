const btnMenu = document.querySelector("#button-menu");
const menu = document.querySelector("#nav");
const register = document.querySelector("#register");

btnMenu.addEventListener("click", () => {
  if (
    menu.classList.contains("nav-open") ||
    register.classList.contains(".container-register")
  ) {
    menu.classList.remove("nav-open");
    menu.classList.add("nav-close");

    register.classList.remove("container-register");
    register.classList.add("container-register-close");
  } else {
    menu.classList.add("nav-open");
    menu.classList.remove("nav-close");

    register.classList.add("container-register");
    register.classList.remove("container-register-close");
  }
});

const formulario = document.querySelector("form");
const inputEmail = document.querySelector("#email");
const textoDeError = document.querySelector("#textError");
const svgCheck = document.querySelector("#svg-check");

inputEmail.addEventListener("focus", () => {
  if (inputEmail.value.includes("@")) {
    svgCheck.classList.add("svg-check");
    svgCheck.classList.remove("svg-check-off");
  } else {
    svgCheck.classList.remove("svg-check");
    svgCheck.classList.add("svg-check-off");
  }
});

formulario.addEventListener("submit", (e) => {
  let formularioValido = true;

  if (
    inputEmail.value == "" ||
    !inputEmail.value.includes("@") ||
    !inputEmail.value.includes(".com")
  ) {
    textoDeError.classList.remove("error-close");
    textoDeError.classList.add("error");
    formularioValido = false;
  } else {
    textoDeError.classList.add("error-close");
    textoDeError.classList.remove("error");
  }

  if (!formularioValido) {
    e.preventDefault();
  }
});
