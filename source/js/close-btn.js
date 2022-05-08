const theaterLegends = document.querySelectorAll(".theater-legends__list-item");
const popupGalery = document.querySelectorAll(".slide-galery");
const closeBtn = document.querySelector(".close-btn");

theaterLegends.forEach((elem) => {
  elem.addEventListener("click", function () {
    closeBtn.classList.add("close-btn-active");
  });
});
popupGalery.forEach((elem) => {
  elem.addEventListener("click", function () {
    closeBtn.classList.add("close-btn-active");
  });
});

closeBtn.addEventListener("click", function () {
  const modals = document.querySelectorAll(".modal.active");
  const popupGaleryActive = document.querySelectorAll(".popup-galery.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
  popupGaleryActive.forEach((modal) => {
    closeModal(modal);
  });
});

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
  // body.classList.remove("active");
  closeBtn.classList.remove("close-btn-active");
}
