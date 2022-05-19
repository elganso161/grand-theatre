const tabsBtn = document.querySelectorAll(".ballet-performances-tabs__button");
const tabsItems = document.querySelectorAll(".ballet-performances-tabs__item");

tabsBtn.forEach((elem) => {
  elem.addEventListener("click", () => {
    let currentBtn = elem;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTub = document.querySelector(tabId);

    tabsBtn.forEach((elem) => {
      elem.classList.remove("active");
    });
    tabsItems.forEach((elem) => {
      elem.classList.remove("active");
    });

    currentBtn.classList.add("active");
    currentTub.classList.add("active");
  });
});

const historicalData = [
  {
    background: "./img/historical-scene-img1.jpg",
    title: "Балет «Анна Каренина»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/historical-scene-img1.jpg",
    title: "Балет «Анна Каренина»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/historical-scene-img1.jpg",
    title: "Балет «Анна Каренина»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/historical-scene-img1.jpg",
    title: "Балет «Анна Каренина»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/historical-scene-img1.jpg",
    title: "Балет «Анна Каренина»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/historical-scene-img1.jpg",
    title: "Балет «Анна Каренина»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/historical-scene-img1.jpg",
    title: "Балет «Анна Каренина»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/historical-scene-img1.jpg",
    title: "Балет «Анна Каренина»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
];

const newData = [
  {
    background: "./img/new-scene-img1.jpg",
    title: "Балет «Баядерка»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/new-scene-img1.jpg",
    title: "Балет «Баядерка»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/new-scene-img1.jpg",
    title: "Балет «Баядерка»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/new-scene-img1.jpg",
    title: "Балет «Баядерка»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/new-scene-img1.jpg",
    title: "Балет «Баядерка»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/new-scene-img1.jpg",
    title: "Балет «Баядерка»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/new-scene-img1.jpg",
    title: "Балет «Баядерка»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/new-scene-img1.jpg",
    title: "Балет «Баядерка»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
];

const historicalSceneList = document.querySelector(".historical-scene__list");
const newSceneList = document.querySelector(".new-scene__list");

historicalData.forEach((elem) => {
  const historicalSceneListItem = document.createElement("li");
  historicalSceneListItem.classList.add("historical-scene__list-item");
  historicalSceneListItem.classList.add("_anim-items");
  historicalSceneListItem.classList.add("_anim-no-hide");
  historicalSceneListItem.classList.add("_touch");
  const historicalSceneListTitle = document.createElement("h4");
  historicalSceneListTitle.classList.add("historical-scene__list-title");
  const historicalSceneListSubtitle = document.createElement("h5");
  historicalSceneListSubtitle.classList.add("historical-scene__list-subtitle");
  const historicalSceneListLink = document.createElement("a");
  historicalSceneListLink.classList.add("historical-scene__list-link");

  historicalSceneListItem.appendChild(historicalSceneListTitle);
  historicalSceneListItem.appendChild(historicalSceneListSubtitle);
  historicalSceneListItem.appendChild(historicalSceneListLink);

  historicalSceneListItem.style.backgroundImage = `url(${elem.background})`;
  historicalSceneListTitle.textContent = elem.title;
  historicalSceneListSubtitle.textContent = elem.text;
  historicalSceneListLink.textContent = "Подробнее";
  historicalSceneListLink.href = elem.link;

  historicalSceneList.appendChild(historicalSceneListItem);
});

// newScene
newData.forEach((elem) => {
  const newSceneListItem = document.createElement("li");
  newSceneListItem.classList.add("new-scene__list-item");
  newSceneListItem.classList.add("_touch");
  const newSceneListTitle = document.createElement("h4");
  newSceneListTitle.classList.add("new-scene__list-title");
  const newSceneListSubtitle = document.createElement("h5");
  newSceneListSubtitle.classList.add("new-scene__list-subtitle");
  const newSceneListLink = document.createElement("a");
  newSceneListLink.classList.add("new-scene__list-link");

  newSceneListItem.appendChild(newSceneListTitle);
  newSceneListItem.appendChild(newSceneListSubtitle);
  newSceneListItem.appendChild(newSceneListLink);

  newSceneListItem.style.backgroundImage = `url(${elem.background})`;
  newSceneListTitle.textContent = elem.title;
  newSceneListSubtitle.textContent = elem.text;
  newSceneListLink.textContent = "Подробнее";
  newSceneListLink.href = elem.link;

  newSceneList.appendChild(newSceneListItem);
});
