const contemporaryProductionsList = document.querySelector(
  ".contemporary-productions__list"
);

const contemporaryProductionsData = [
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

contemporaryProductionsData.forEach((elem) => {
  const contemporaryProductionsListItem = document.createElement("li");
  contemporaryProductionsListItem.classList.add(
    "contemporary-productions__list-item"
  );
  contemporaryProductionsListItem.classList.add("_touch");
  contemporaryProductionsListItem.classList.add("_anim-items");
  contemporaryProductionsListItem.classList.add("_anim-no-hide");
  const contemporaryProductionsListTitle = document.createElement("h4");
  contemporaryProductionsListTitle.classList.add(
    "contemporary-productions__list-title"
  );
  const contemporaryProductionsListLink = document.createElement("a");
  contemporaryProductionsListLink.classList.add(
    "contemporary-productions__list-link"
  );
  const contemporaryProductionsListText = document.createElement("p");
  contemporaryProductionsListText.classList.add(
    "contemporary-productions__list-text"
  );

  contemporaryProductionsListItem.appendChild(contemporaryProductionsListLink);
  contemporaryProductionsListLink.appendChild(contemporaryProductionsListTitle);
  contemporaryProductionsListLink.appendChild(contemporaryProductionsListText);
  contemporaryProductionsList.appendChild(contemporaryProductionsListItem);

  contemporaryProductionsListItem.style.backgroundImage = `url(${elem.background})`;
  contemporaryProductionsListLink.href = elem.link;
  contemporaryProductionsListTitle.textContent = elem.title;
  contemporaryProductionsListText.textContent = elem.text;
});
