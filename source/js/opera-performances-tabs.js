const operaTabsBtn = document.querySelectorAll(
  ".opera-performances-tabs__button"
);
const operaTabsItems = document.querySelectorAll(
  ".opera-performances-tabs__item"
);

operaTabsBtn.forEach((elem) => {
  elem.addEventListener("click", () => {
    let currentBtn = elem;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTub = document.querySelector(tabId);

    operaTabsBtn.forEach((elem) => {
      elem.classList.remove("active");
    });
    operaTabsItems.forEach((elem) => {
      elem.classList.remove("active");
    });

    currentBtn.classList.add("active");
    currentTub.classList.add("active");
  });
});

const operaHistoricalSceneList = document.querySelector(
  ".opera-historical-scene__list"
);
const operaNewSceneList = document.querySelector(".opera-new-scene__list");
const operaChamberStageSceneList = document.querySelector(
  ".opera-chamber-stage-scene__list"
);

const operaHistoricalData = [
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

const operaNewData = [
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
const operaChamberStageData = [
  {
    background: "./img/chamber-stage-scene-img1.jpg",
    title: "Балет «Баядерка»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/chamber-stage-scene-img1.jpg",
    title: "Балет «Баядерка»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/chamber-stage-scene-img1.jpg",
    title: "Балет «Баядерка»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/chamber-stage-scene-img1.jpg",
    title: "Балет «Баядерка»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/chamber-stage-scene-img1.jpg",
    title: "Балет «Баядерка»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/chamber-stage-scene-img1.jpg",
    title: "Балет «Баядерка»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/chamber-stage-scene-img1.jpg",
    title: "Балет «Баядерка»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/chamber-stage-scene-img1.jpg",
    title: "Балет «Баядерка»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
];

// operaHistoricalData;
operaHistoricalData.forEach((elem) => {
  const operaHistoricalSceneListItem = document.createElement("li");
  operaHistoricalSceneListItem.classList.add(
    "opera-historical-scene__list-item"
  );
  operaHistoricalSceneListItem.classList.add("_anim-items");
  operaHistoricalSceneListItem.classList.add("_anim-no-hide");
  const operaHistoricalSceneListTitle = document.createElement("h4");
  operaHistoricalSceneListTitle.classList.add(
    "opera-historical-scene__list-title"
  );
  const operaHistoricalSceneListSubtitle = document.createElement("h5");
  operaHistoricalSceneListSubtitle.classList.add(
    "opera-historical-scene__list-subtitle"
  );
  const operaHistoricalSceneListLink = document.createElement("a");
  operaHistoricalSceneListLink.classList.add(
    "opera-historical-scene__list-link"
  );

  operaHistoricalSceneListItem.appendChild(operaHistoricalSceneListTitle);
  operaHistoricalSceneListItem.appendChild(operaHistoricalSceneListSubtitle);
  operaHistoricalSceneListItem.appendChild(operaHistoricalSceneListLink);

  operaHistoricalSceneListItem.style.backgroundImage = `url(${elem.background})`;
  operaHistoricalSceneListTitle.textContent = elem.title;
  operaHistoricalSceneListSubtitle.textContent = elem.text;
  operaHistoricalSceneListLink.textContent = "Подробнее";
  operaHistoricalSceneListLink.href = elem.link;

  operaHistoricalSceneList.appendChild(operaHistoricalSceneListItem);
});

// operaChamberStageData
operaChamberStageData.forEach((elem) => {
  const operaChamberStageSceneListItem = document.createElement("li");
  operaChamberStageSceneListItem.classList.add(
    "opera-chamber-stage-scene__list-item"
  );
  const operaChamberStageSceneListTitle = document.createElement("h4");
  operaChamberStageSceneListTitle.classList.add(
    "opera-chamber-stage-scene__list-title"
  );
  const operaChamberStageSceneListSubtitle = document.createElement("h5");
  operaChamberStageSceneListSubtitle.classList.add(
    "opera-chamber-stage-scene__list-subtitle"
  );
  const operaChamberStageSceneListLink = document.createElement("a");
  operaChamberStageSceneListLink.classList.add(
    "opera-chamber-stage-scene__list-link"
  );

  operaChamberStageSceneListItem.appendChild(operaChamberStageSceneListTitle);
  operaChamberStageSceneListItem.appendChild(
    operaChamberStageSceneListSubtitle
  );
  operaChamberStageSceneListItem.appendChild(operaChamberStageSceneListLink);

  operaChamberStageSceneListItem.style.backgroundImage = `url(${elem.background})`;
  operaChamberStageSceneListTitle.textContent = elem.title;
  operaChamberStageSceneListSubtitle.textContent = elem.text;
  operaChamberStageSceneListLink.textContent = "Подробнее";
  operaChamberStageSceneListLink.href = elem.link;

  operaChamberStageSceneList.appendChild(operaChamberStageSceneListItem);
});

// operaNewData
operaNewData.forEach((elem) => {
  const operaNewSceneListItem = document.createElement("li");
  operaNewSceneListItem.classList.add("opera-new-scene__list-item");
  const operaNewSceneListTitle = document.createElement("h4");
  operaNewSceneListTitle.classList.add("opera-new-scene__list-title");
  const operaNewSceneListSubtitle = document.createElement("h5");
  operaNewSceneListSubtitle.classList.add("opera-new-scene__list-subtitle");
  const operaNewSceneListLink = document.createElement("a");
  operaNewSceneListLink.classList.add("opera-new-scene__list-link");

  operaNewSceneListItem.appendChild(operaNewSceneListTitle);
  operaNewSceneListItem.appendChild(operaNewSceneListSubtitle);
  operaNewSceneListItem.appendChild(operaNewSceneListLink);

  operaNewSceneListItem.style.backgroundImage = `url(${elem.background})`;
  operaNewSceneListTitle.textContent = elem.title;
  operaNewSceneListSubtitle.textContent = elem.text;
  operaNewSceneListLink.textContent = "Подробнее";
  operaNewSceneListLink.href = elem.link;

  operaNewSceneList.appendChild(operaNewSceneListItem);
});
