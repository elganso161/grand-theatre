const bestsellersTabsBtn = document.querySelectorAll(
  ".bestsellers-tabs__button"
);
const bestsellersTabsItems = document.querySelectorAll(
  ".bestsellers-tabs__item"
);

bestsellersTabsBtn.forEach((elem) => {
  elem.addEventListener("click", () => {
    let currentBtn = elem;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTub = document.querySelector(tabId);

    bestsellersTabsBtn.forEach((elem) => {
      elem.classList.remove("active");
    });
    bestsellersTabsItems.forEach((elem) => {
      elem.classList.remove("active");
    });

    currentBtn.classList.add("active");
    currentTub.classList.add("active");
  });
});

const bestsellersBaletData = [
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

const bestsellersOperaData = [
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

const bestsellersBaletList = document.querySelector(".bestsellers-balet__list");
const bestsellersOperaList = document.querySelector(".bestsellers-opera__list");

// bestsellersBaletData
bestsellersBaletData.forEach((elem) => {
  const bestsellersBaletListItem = document.createElement("li");
  bestsellersBaletListItem.classList.add("bestsellers-balet__list-item");
  bestsellersBaletListItem.classList.add("_anim-items");
  bestsellersBaletListItem.classList.add("_anim-no-hide");
  bestsellersBaletListItem.classList.add("_touch");
  const bestsellersBaletListTitle = document.createElement("h4");
  bestsellersBaletListTitle.classList.add("bestsellers-balet__list-title");
  const bestsellersBaletListSubtitle = document.createElement("h5");
  bestsellersBaletListSubtitle.classList.add(
    "bestsellers-balet__list-subtitle"
  );
  const bestsellersBaletListLink = document.createElement("a");
  bestsellersBaletListLink.classList.add("bestsellers-balet__list-link");

  bestsellersBaletListItem.appendChild(bestsellersBaletListTitle);
  bestsellersBaletListItem.appendChild(bestsellersBaletListSubtitle);
  bestsellersBaletListItem.appendChild(bestsellersBaletListLink);

  bestsellersBaletListItem.style.backgroundImage = `url(${elem.background})`;
  bestsellersBaletListTitle.textContent = elem.title;
  bestsellersBaletListSubtitle.textContent = elem.text;
  bestsellersBaletListLink.textContent = "Подробнее";
  bestsellersBaletListLink.href = elem.link;

  bestsellersBaletList.appendChild(bestsellersBaletListItem);
});

// bestsellersOperaData
bestsellersOperaData.forEach((elem) => {
  const bestsellersOperaListItem = document.createElement("li");
  bestsellersOperaListItem.classList.add("bestsellers-opera__list-item");
  bestsellersOperaListItem.classList.add("_touch");
  const bestsellersOperaListTitle = document.createElement("h4");
  bestsellersOperaListTitle.classList.add("bestsellers-opera__list-title");
  const bestsellersOperaListSubtitle = document.createElement("h5");
  bestsellersOperaListSubtitle.classList.add(
    "bestsellers-opera__list-subtitle"
  );
  const bestsellersOperaListLink = document.createElement("a");
  bestsellersOperaListLink.classList.add("bestsellers-opera__list-link");

  bestsellersOperaListItem.appendChild(bestsellersOperaListTitle);
  bestsellersOperaListItem.appendChild(bestsellersOperaListSubtitle);
  bestsellersOperaListItem.appendChild(bestsellersOperaListLink);

  bestsellersOperaListItem.style.backgroundImage = `url(${elem.background})`;
  bestsellersOperaListTitle.textContent = elem.title;
  bestsellersOperaListSubtitle.textContent = elem.text;
  bestsellersOperaListLink.textContent = "Подробнее";
  bestsellersOperaListLink.href = elem.link;

  bestsellersOperaList.appendChild(bestsellersOperaListItem);
});
