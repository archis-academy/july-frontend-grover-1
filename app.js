const navBarMenu = document.querySelector(".menu-one");
const toggleMenu = document.querySelector(".toggle-menu");
let isMenuOpen = false;

toggleMenu.addEventListener("click", function () {
  if (!isMenuOpen) {
    navBarMenu.style.display = "flex";
    isMenuOpen = true;
  } else {
    navBarMenu.style.display = "none";
    isMenuOpen = false;
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 1300) {
    navBarMenu.style.display = "none";
    isMenuOpen = false; 
  } else {
    navBarMenu.style.display = "none";
    isMenuOpen = false;
  }
});
