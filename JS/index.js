const burger = document.querySelector(".burger-menu");
const nav_header = document.querySelector(".nav-header");
function handleClickBurger() {
  if (burger && nav_header) {
    const body = document.querySelector("body");
    burger.classList.toggle("_active");
    nav_header.classList.toggle("_active");
    body.classList.toggle("_lock");
  }
}
burger.addEventListener("click", handleClickBurger);

// data-move_-------------------------------------------------------------------------------------------------------

function changeDataMove() {
  const header_burger = document.querySelector(".header__burger");
  const computedStyleBurger = getComputedStyle(header_burger);
  if (computedStyleBurger.display === "none") {
    nav_header.style.display = "flex";
  }
  const data_move = document.querySelector("[data-move]");
  const [data_move_width, data_move_block] = data_move
    .getAttribute("data-move")
    .split(",");
  if (!data_move) {
    return;
  }
  if (document.documentElement.clientWidth < Number(data_move_width)) {
    const block = document.querySelector(data_move_block);
    block.insertAdjacentElement("beforeend", data_move);
  }
}
changeDataMove();
window.addEventListener("resize", changeDataMove);
