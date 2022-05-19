const foreignProductionsList = document.querySelector(
  ".foreign-productions__list"
);

const foreignProductionsData = [
  {
    background: "./img/children-performances-img1.jpg",
    title: "Балет «Щелкунчик»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/children-performances-img1.jpg",
    title: "Балет «Щелкунчик»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/children-performances-img1.jpg",
    title: "Балет «Щелкунчик»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/children-performances-img1.jpg",
    title: "Балет «Щелкунчик»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/children-performances-img1.jpg",
    title: "Балет «Щелкунчик»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/children-performances-img1.jpg",
    title: "Балет «Щелкунчик»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/children-performances-img1.jpg",
    title: "Балет «Щелкунчик»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/children-performances-img1.jpg",
    title: "Балет «Щелкунчик»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/children-performances-img1.jpg",
    title: "Балет «Щелкунчик»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
];

foreignProductionsData.forEach((elem) => {
  const foreignProductionsListItem = document.createElement("li");
  foreignProductionsListItem.classList.add("foreign-productions__list-item");
  foreignProductionsListItem.classList.add("_anim-items");
  foreignProductionsListItem.classList.add("_anim-no-hide");
  foreignProductionsListItem.classList.add("_touch");
  const foreignProductionsListTitle = document.createElement("h4");
  foreignProductionsListTitle.classList.add("foreign-productions__list-title");
  const foreignProductionsListLink = document.createElement("a");
  foreignProductionsListLink.classList.add("foreign-productions__list-link");
  const foreignProductionsListText = document.createElement("p");
  foreignProductionsListText.classList.add("foreign-productions__list-text");

  foreignProductionsListItem.appendChild(foreignProductionsListLink);
  foreignProductionsListLink.appendChild(foreignProductionsListTitle);
  foreignProductionsListLink.appendChild(foreignProductionsListText);
  foreignProductionsList.appendChild(foreignProductionsListItem);

  foreignProductionsListItem.style.backgroundImage = `url(${elem.background})`;
  foreignProductionsListLink.href = elem.link;
  foreignProductionsListTitle.textContent = elem.title;
  foreignProductionsListText.textContent = elem.text;
});
