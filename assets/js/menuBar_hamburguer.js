function toggleMenu() {
  const menuItens = document.querySelector(".menu-itens");
  menuItens.classList.toggle("active");
}

document.addEventListener("click", function (event) {
  const menu = document.querySelector(".menu-itens");
  const hamburger = document.querySelector(".menu-hamburguer");

  if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
    menu.classList.remove("active");
  }
});
