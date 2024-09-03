document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const navLinks = document.querySelector("nav");
  const menuBar = document.querySelector(".menu-bar");
  const menuIcon = document.querySelector(".bx-menu");
  const arrowIcon = document.querySelector(".bx-chevron-down");
  const onHoverMenu = document.querySelector(".hover-menu");
  const places = document.querySelector("#places");

  if (!header || !navLinks || !menuBar || !menuIcon || !arrowIcon || !onHoverMenu || !places) {
    console.error("Element not found in DOM");
    return;
  }

  const toggleMenu = () => {
    header.classList.toggle("is-show");
    navLinks.classList.toggle("is-show");
    menuBar.classList.toggle("is-active");
    menuIcon.classList.toggle("bx-x");
  };

  const toggleDropdown = () => {
    onHoverMenu.classList.toggle("is-active");
    if(arrowIcon.style.transform === "rotate(180deg)") {
      arrowIcon.style.transform = "";
   }else{
     arrowIcon.style.transform = "rotate(180deg)";
   }
  };

  const onResize = () => {
    innerWidth 
    ? (() => {
        header.classList.remove("is-show");
        menuIcon.classList.remove("bx-x");
        navLinks.classList.remove("is-show");
        onHoverMenu.classList.remove("is-active");
        arrowIcon.style.transform = "";
      })() 
    : undefined;
  }

  menuBar.addEventListener("click", toggleMenu);
  places.addEventListener("click", toggleDropdown);
  window.addEventListener("resize", onResize);
});
