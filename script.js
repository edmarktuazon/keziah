document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const navLinks = document.querySelector("nav");
  const menuBar = document.querySelector(".menu-bar");
  const menuIcon = document.querySelector(".bx-menu");
  // const overLay = document.querySelector(".overlay");
  // const logoBrand = document.querySelector(".logo-brand");

  const handleMenu = () => {
    header.classList.toggle("is-show");
    navLinks.classList.toggle("is-show");
    // overLay.classList.toggle("is-show");
    menuBar.classList.toggle("is-active");
    menuIcon.classList.toggle("bx-x");
  };

  menuBar.addEventListener("click", handleMenu);
});
