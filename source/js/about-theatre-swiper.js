var aboutTheatreSwiper = new Swiper(".aboutTheatreSwiper", {
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
});
var aboutTheatreSwiper2 = new Swiper(".aboutTheatreSwiper2", {
  spaceBetween: 10,
  slidesPerView: 2,
  loop: true,
  centeredSlides: true,
  thumbs: {
    swiper: aboutTheatreSwiper,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const mQuery = window.matchMedia("(max-width: 621px)");

if (mQuery.matches) {
  var aboutTheatreSwiper = new Swiper(".aboutTheatreSwiper", {
    spaceBetween: 0,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var aboutTheatreSwiper2 = new Swiper(".aboutTheatreSwiper2", {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    thumbs: {
      swiper: aboutTheatreSwiper,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
