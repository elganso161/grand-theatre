var spectaclePageSwiper = new Swiper(".spectaclePageSwiper", {
  spaceBetween: 10,
  slidesPerView: 9,
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

// const spectacleSwiperWidth = window.matchMedia("(max-width: 621px)");

if (window.matchMedia("(min-width: 1920px)").matches) {
  var spectaclePageSwiper2 = new Swiper(".spectaclePageSwiper2", {
    spaceBetween: 10,
    slidesPerView: 2.5,
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

if (window.matchMedia("(max-width: 1600px)").matches) {
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
}

if (window.matchMedia("(max-width: 1400px)").matches) {
  var spectaclePageSwiper2 = new Swiper(".spectaclePageSwiper2", {
    spaceBetween: 10,
    slidesPerView: 1.8,
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
if (window.matchMedia("(max-width: 1200px)").matches) {
  var spectaclePageSwiper2 = new Swiper(".spectaclePageSwiper2", {
    spaceBetween: 10,
    slidesPerView: 1.6,
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
  var spectaclePageSwiper = new Swiper(".spectaclePageSwiper", {
    spaceBetween: 10,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
  });
}
if (window.matchMedia("(max-width: 1024px)").matches) {
  var spectaclePageSwiper2 = new Swiper(".spectaclePageSwiper2", {
    spaceBetween: 10,
    slidesPerView: 1.4,
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

if (window.matchMedia("(max-width: 621px)").matches) {
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
