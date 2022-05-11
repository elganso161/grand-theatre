var spectaclePageSwiper = new Swiper(".spectaclePageSwiper", {
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
});
var spectaclePageSwiper2 = new Swiper(".spectaclePageSwiper2", {
  spaceBetween: 10,
  slidesPerView: 2,
  loop: true,
  centeredSlides: true,
  thumbs: {
    swiper: spectaclePageSwiper,
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

// const mQuery = window.matchMedia("(max-width: 621px)");

if (mQuery.matches) {
  var spectaclePageSwiper = new Swiper(".spectaclePageSwiper", {
    spaceBetween: 0,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var spectaclePageSwiper2 = new Swiper(".spectaclePageSwiper2", {
    spaceBetween: 10,
    slidesPerView: 1.2,
    loop: true,
    centeredSlides: true,
    thumbs: {
      swiper: spectaclePageSwiper,
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
