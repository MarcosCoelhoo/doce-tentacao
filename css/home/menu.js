const btnMenu = document.querySelector(".header-content .btn-menu");

function toggleMenu() {
  const nav = document.querySelector(".header-content");

  nav.classList.toggle("active");
}

btnMenu.addEventListener("click", toggleMenu);