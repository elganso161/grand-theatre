let goTopBtn = document.querySelector(".button-up");

window.addEventListener("scroll", trackScroll);
// goTopBtn.addEventListener("click", backToTop);

function trackScroll() {
  let scrolled = window.pageYOffset;
  let coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    goTopBtn.classList.add("button-up-show");
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove("button-up-show");
  }
}
