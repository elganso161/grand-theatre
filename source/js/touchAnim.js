const touchItems = document.querySelectorAll("._touch");

touchItems.forEach((el) => {
  el.addEventListener("touchstart", function () {
    this.classList.add("_touch-active");
  });
  el.addEventListener("touchend", function () {
    this.classList.remove("_touch-active");
  });
});
