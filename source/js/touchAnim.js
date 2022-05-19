const touchItems = document.querySelectorAll("._touch");

touchItems.forEach((el) => {
  el.addEventListener("touchstart", function () {
    this.classList.add("_touch-active");
    this.style.transition = "0.2s";
  });
  el.addEventListener("touchend", function () {
    this.classList.remove("_touch-active");
    this.style.transition = "0.2s";
  });
});
