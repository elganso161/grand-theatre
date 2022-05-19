const recommendedData = [
  {
    background: "./img/recommended-img/recommended-img1.jpg",
    title: "ОПЕРА «ТОСКА»",
    text: "Итальянский режиссер-эстет возвращает классику Верди на сцену Большого (12+)",
    link: "#",
  },
  {
    background: "./img/recommended-img/recommended-img2.jpg",
    title: "Балет «Орландо»»",
    text: "Итальянский режиссер-эстет возвращает классику Верди на сцену Большого (12+)",
    link: "#",
  },
  {
    background: "./img/recommended-img/recommended-img3.jpg",
    title: "Опера «Евгений Онегин»»",
    text: "Итальянский режиссер-эстет возвращает классику Верди на сцену Большого (12+)",
    link: "#",
  },
  {
    background: "./img/recommended-img/recommended-img4.jpg",
    title: "Балет «Зимняя сказка»»",
    text: "Итальянский режиссер-эстет возвращает классику Верди на сцену Большого (12+)",
    link: "#",
  },
];

const recommendedList = document.querySelector(".recommended__list");

recommendedData.forEach((elem) => {
  const recommendedListItem = document.createElement("li");
  recommendedListItem.classList.add("recommended__list-item");
  recommendedListItem.classList.add("_touch");
  recommendedListItem.classList.add("_anim-items");
  recommendedListItem.classList.add("_anim-no-hide");
  const recommendedListItemLink = document.createElement("a");
  recommendedListItemLink.classList.add("recommended__list-item-link");
  const recommendedListItemLinkButton = document.createElement("a");
  recommendedListItemLinkButton.classList.add(
    "recommended__list-item-link-button"
  );
  const recommendedListItemLinkTitle = document.createElement("h4");
  recommendedListItemLinkTitle.classList.add(
    "recommended__list-item-link-title"
  );
  const recommendedListItemLinkText = document.createElement("p");
  recommendedListItemLinkText.classList.add("recommended__list-item-link-text");

  recommendedListItem.appendChild(recommendedListItemLink);
  recommendedListItem.appendChild(recommendedListItemLinkButton);

  recommendedListItemLink.appendChild(recommendedListItemLinkTitle);
  recommendedListItemLink.appendChild(recommendedListItemLinkText);

  recommendedListItem.style.backgroundImage = `url(${elem.background})`;
  recommendedListItemLink.href = elem.link;
  recommendedListItemLinkButton.href = elem.link;
  recommendedListItemLinkButton.textContent = "Поробнее";
  recommendedListItemLinkTitle.textContent = elem.title;
  recommendedListItemLinkText.textContent = elem.text;

  recommendedList.appendChild(recommendedListItem);
});
