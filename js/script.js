const btnMenu = document.querySelector("#button-menu");
const menu = document.querySelector("#nav");
const register = document.querySelector("#register");

btnMenu.addEventListener("click", () => {
  if (
    menu.classList.contains("nav-close") ||
    register.classList.contains(".container-register-close")
  ) {
    menu.classList.add("nav-open");
    menu.classList.remove("nav-close");

    register.classList.add("container-register");
    register.classList.remove("container-register-close");
  } else {
    menu.classList.remove("nav-open");
    menu.classList.add("nav-close");

    register.classList.remove("container-register");
    register.classList.add("container-register-close");
  }
});
