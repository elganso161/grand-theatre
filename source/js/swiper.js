const data = [
  {
    background: "./img/swiper-img/photo-1.jpg",
    title: "Опера «Борис Годунов»",
    subtitle: "Культовая историческая постановка по мотивам драмы Пушкина",
    ageRating: "16+",
    date: "29",
    day: "Ср",
    time: "20:00",
    mouth: "Сентябрь",
    link: "./spectacle-page.html",
  },
  {
    background: "./img/swiper-img/photo-2.jpg",
    title: "Опера «Борис Годунов»",
    subtitle: "Культовая историческая постановка по мотивам драмы Пушкина",
    ageRating: "10+",
    date: "11",
    day: "Чт",
    time: "10:00",
    mouth: "Октябрь",
    link: "./spectacle-page.html",
  },
  {
    background: "./img/swiper-img/photo-1.jpg",
    title: "Опера «Борис Годунов»",
    subtitle: "Культовая историческая постановка по мотивам драмы Пушкина",
    ageRating: "16+",
    date: "29",
    day: "Ср",
    time: "20:00",
    mouth: "Сентябрь",
    link: "./spectacle-page.html",
  },
];

const swiperWrapper = document.querySelector(".swiper-wrapper");

data.forEach((elem) => {
  const swiperSlide = document.createElement("div");
  swiperSlide.classList.add("swiper-slide");
  const swiperSlideData = document.createElement("div");
  swiperSlideData.classList.add("swiper-slide__data");
  const swiperSlideTopBlock = document.createElement("div");
  swiperSlideTopBlock.classList.add("swiper-slide__top-block");
  const swiperSlideTopBlockDate = document.createElement("div");
  swiperSlideTopBlockDate.classList.add("swiper-slide__top-block-date");
  const swiperSlideNumber = document.createElement("div");
  swiperSlideNumber.classList.add("swiper-slide__number");
  const swiperSlideDate = document.createElement("div");
  swiperSlideDate.classList.add("swiper-slide__date");
  const swiperSlideDateInformation = document.createElement("div");
  swiperSlideDateInformation.classList.add("swiper-slide__date-information");
  const swiperSlideDateInformationDay = document.createElement("div");
  swiperSlideDateInformationDay.classList.add(
    "swiper-slide__date-information-day"
  );
  const swiperSlideDateInformationLine = document.createElement("div");
  swiperSlideDateInformationLine.classList.add(
    "swiper-slide__date-information-line"
  );
  const swiperSlideDateInformationTime = document.createElement("div");
  swiperSlideDateInformationTime.classList.add(
    "swiper-slide__date-information-time"
  );
  const swiperSlideDateMouth = document.createElement("div");
  swiperSlideDateMouth.classList.add("swiper-slide__date-mouth");
  const swiperSlideAgeRating = document.createElement("div");
  swiperSlideAgeRating.classList.add("swiper-slide__age-rating");
  const swiperSlideDataTitle = document.createElement("h2");
  swiperSlideDataTitle.classList.add("swiper-slide__data-title");
  const swiperSlideDataSubtitle = document.createElement("h3");
  swiperSlideDataSubtitle.classList.add("swiper-slide__data-subtitle");
  const swiperSlideDataLink = document.createElement("a");
  swiperSlideDataLink.classList.add("swiper-slide__data-link");

  swiperSlide.style.backgroundImage = `url(${elem.background})`;
  swiperSlideNumber.textContent = elem.date;
  swiperSlideDateInformationDay.textContent = elem.day;
  swiperSlideDateInformationTime.textContent = elem.time;
  swiperSlideDateMouth.textContent = elem.mouth;
  swiperSlideDataTitle.textContent = elem.title;
  swiperSlideDataSubtitle.textContent = elem.subtitle;
  swiperSlideAgeRating.textContent = elem.ageRating;
  swiperSlideDataLink.textContent = "Подробнее о спектакле";
  swiperSlideDataLink.href = elem.link;

  swiperSlide.appendChild(swiperSlideData);
  swiperSlideData.appendChild(swiperSlideTopBlock);
  swiperSlideData.appendChild(swiperSlideDataTitle);
  swiperSlideData.appendChild(swiperSlideDataSubtitle);
  swiperSlideData.appendChild(swiperSlideDataLink);

  swiperSlideTopBlock.appendChild(swiperSlideTopBlockDate);
  swiperSlideTopBlock.appendChild(swiperSlideAgeRating);

  swiperSlideTopBlockDate.appendChild(swiperSlideNumber);
  swiperSlideTopBlockDate.appendChild(swiperSlideDate);

  swiperSlideDate.appendChild(swiperSlideDateInformation);
  swiperSlideDate.appendChild(swiperSlideDateMouth);

  swiperSlideDateInformation.appendChild(swiperSlideDateInformationDay);
  swiperSlideDateInformation.appendChild(swiperSlideDateInformationLine);
  swiperSlideDateInformation.appendChild(swiperSlideDateInformationTime);

  swiperWrapper.appendChild(swiperSlide);
});

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 600,
  spaceBetween: 0,
  autoplay: {
    delay: 3500,
  },
});
