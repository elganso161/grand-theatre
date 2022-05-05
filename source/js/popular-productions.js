const popularProductionsData = [
  {
    background: "./img/popular-productions-img1.jpg",
    title: "Опера «ТОСКА»",
    text: "Итальянский режиссер-эстет возвращает классику Верди на сцену Большого. Премьера сезона 20/21 (12+)",
    link: "#",
  },
  {
    background: "./img/popular-productions-img2.jpg",
    title: "Балет «ОРЛАНДО»",
    text: "Двухактный балет по мотивам феминистского романа Вирджинии Вулф (18+)",
    link: "#",
  },
  {
    background: "./img/popular-productions-img3.jpg",
    title: "Опера «ЕВГЕНИЙ ОНЕГИН»",
    text: "Музыкальное воплощение культового романа в стихах (12+)",
    link: "#",
  },
  {
    background: "./img/popular-productions-img4.jpg",
    title: "Балет «АРТЕФАКТ-СЮИТА, ПЕТРУШКА»",
    text: "Одноактные балеты (12+)",
    link: "#",
  },
];

const PopularProductionsList = document.querySelector(
  ".repertoire-page__popular-productions-list"
);

popularProductionsData.forEach((elem) => {
  const popularProductionsItem = document.createElement("li");
  popularProductionsItem.classList.add(
    "repertoire-page__popular-productions-list-item"
  );
  popularProductionsItem.classList.add("_anim-items");
  popularProductionsItem.classList.add("_anim-no-hide");
  const popularProductionsLink = document.createElement("a");
  popularProductionsLink.classList.add(
    "repertoire-page__popular-productions-list-item-link"
  );
  const popularProductionsTitle = document.createElement("h3");
  popularProductionsTitle.classList.add(
    "repertoire-page__popular-productions-list-item-link-title"
  );
  const popularProductionsText = document.createElement("p");
  popularProductionsText.classList.add(
    "repertoire-page__popular-productions-list-item-link-text"
  );

  popularProductionsItem.appendChild(popularProductionsLink);
  popularProductionsLink.appendChild(popularProductionsTitle);
  popularProductionsLink.appendChild(popularProductionsText);
  PopularProductionsList.appendChild(popularProductionsItem);

  popularProductionsItem.style.backgroundImage = `url(${elem.background})`;
  popularProductionsLink.href = elem.link;
  popularProductionsTitle.textContent = elem.title;
  popularProductionsText.textContent = elem.text;
});
