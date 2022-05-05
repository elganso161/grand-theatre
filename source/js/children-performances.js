const childrenPerformancesList = document.querySelector(
  ".children-performances__list"
);

const childrenPerformancesData = [
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

childrenPerformancesData.forEach((elem) => {
  const childrenPerformancesListItem = document.createElement("li");
  childrenPerformancesListItem.classList.add(
    "children-performances__list-item"
  );
  childrenPerformancesListItem.classList.add("_anim-items");
  childrenPerformancesListItem.classList.add("_anim-no-hide");
  const childrenPerformancesListTitle = document.createElement("h4");
  childrenPerformancesListTitle.classList.add(
    "children-performances__list-title"
  );
  const childrenPerformancesListText = document.createElement("p");
  childrenPerformancesListText.classList.add(
    "children-performances__list-text"
  );
  const childrenPerformancesListLink = document.createElement("a");
  childrenPerformancesListLink.classList.add(
    "children-performances__list-link"
  );

  childrenPerformancesListItem.appendChild(childrenPerformancesListLink);
  childrenPerformancesListLink.appendChild(childrenPerformancesListText);
  childrenPerformancesListLink.appendChild(childrenPerformancesListTitle);
  childrenPerformancesList.appendChild(childrenPerformancesListItem);

  childrenPerformancesListItem.style.backgroundImage = `url(${elem.background})`;
  childrenPerformancesListLink.href = elem.link;
  childrenPerformancesListTitle.textContent = elem.title;
  childrenPerformancesListText.textContent = elem.text;
});
