const russianClassicsTabsBtn = document.querySelectorAll(
  ".russian-classics-tabs__button"
);
const russianClassicsTabsItems = document.querySelectorAll(
  ".russian-classics-tabs__item"
);

russianClassicsTabsBtn.forEach((elem) => {
  elem.addEventListener("click", () => {
    let currentBtn = elem;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTub = document.querySelector(tabId);

    russianClassicsTabsBtn.forEach((elem) => {
      elem.classList.remove("active");
    });
    russianClassicsTabsItems.forEach((elem) => {
      elem.classList.remove("active");
    });

    currentBtn.classList.add("active");
    currentTub.classList.add("active");
  });
});

const mussorgskyData = [
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
const prokofievData = [
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
const rimskyKorsakovData = [
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
const tchaikovskyData = [
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
const shostakovichData = [
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

const russianClassicsMussorgskyList = document.querySelector(
  ".russian-classics-mussorgsky__list"
);
const russianClassicsProkofievList = document.querySelector(
  ".russian-classics-prokofiev__list"
);
const russianClassicsRimskyKorsakovList = document.querySelector(
  ".russian-classics-rimsky-korsakov__list"
);
const russianClassicsTchaikovskyList = document.querySelector(
  ".russian-classics-tchaikovsky__list"
);
const russianClassicsShostakovichList = document.querySelector(
  ".russian-classics-shostakovich__list"
);

// Мусоргский
mussorgskyData.forEach((elem) => {
  const russianClassicsMussorgskyListItem = document.createElement("li");
  russianClassicsMussorgskyListItem.classList.add(
    "russian-classics-mussorgsky__list-item"
  );
  russianClassicsMussorgskyListItem.classList.add("_touch");
  russianClassicsMussorgskyListItem.classList.add("_anim-items");
  russianClassicsMussorgskyListItem.classList.add("_anim-no-hide");
  const russianClassicsMussorgskyListTitle = document.createElement("h4");
  russianClassicsMussorgskyListTitle.classList.add(
    "russian-classics-mussorgsky__list-title"
  );
  const russianClassicsMussorgskyListSubtitle = document.createElement("h5");
  russianClassicsMussorgskyListSubtitle.classList.add(
    "russian-classics-mussorgsky__list-subtitle"
  );
  const russianClassicsMussorgskyListLink = document.createElement("a");
  russianClassicsMussorgskyListLink.classList.add(
    "russian-classics-mussorgsky__list-link"
  );

  russianClassicsMussorgskyListItem.appendChild(
    russianClassicsMussorgskyListTitle
  );
  russianClassicsMussorgskyListItem.appendChild(
    russianClassicsMussorgskyListSubtitle
  );
  russianClassicsMussorgskyListItem.appendChild(
    russianClassicsMussorgskyListLink
  );

  russianClassicsMussorgskyListItem.style.backgroundImage = `url(${elem.background})`;
  russianClassicsMussorgskyListTitle.textContent = elem.title;
  russianClassicsMussorgskyListSubtitle.textContent = elem.text;
  russianClassicsMussorgskyListLink.textContent = "Подробнее";
  russianClassicsMussorgskyListLink.href = elem.link;

  russianClassicsMussorgskyList.appendChild(russianClassicsMussorgskyListItem);
});

// Прокофьев
prokofievData.forEach((elem) => {
  const russianClassicsProkofievListItem = document.createElement("li");
  russianClassicsProkofievListItem.classList.add(
    "russian-classics-prokofiev__list-item"
  );
  russianClassicsProkofievListItem.classList.add("_touch");
  const russianClassicsProkofievListTitle = document.createElement("h4");
  russianClassicsProkofievListTitle.classList.add(
    "russian-classics-prokofiev__list-title"
  );
  const russianClassicsProkofievListSubtitle = document.createElement("h5");
  russianClassicsProkofievListSubtitle.classList.add(
    "russian-classics-prokofiev__list-subtitle"
  );
  const russianClassicsProkofievListLink = document.createElement("a");
  russianClassicsProkofievListLink.classList.add(
    "russian-classics-prokofiev__list-link"
  );

  russianClassicsProkofievListItem.appendChild(
    russianClassicsProkofievListTitle
  );
  russianClassicsProkofievListItem.appendChild(
    russianClassicsProkofievListSubtitle
  );
  russianClassicsProkofievListItem.appendChild(
    russianClassicsProkofievListLink
  );

  russianClassicsProkofievListItem.style.backgroundImage = `url(${elem.background})`;
  russianClassicsProkofievListTitle.textContent = elem.title;
  russianClassicsProkofievListSubtitle.textContent = elem.text;
  russianClassicsProkofievListLink.textContent = "Подробнее";
  russianClassicsProkofievListLink.href = elem.link;

  russianClassicsProkofievList.appendChild(russianClassicsProkofievListItem);
});

// Римский - Корсаков
rimskyKorsakovData.forEach((elem) => {
  const russianClassicsRimskyKorsakovListItem = document.createElement("li");
  russianClassicsRimskyKorsakovListItem.classList.add(
    "russian-classics-rimsky-korsakov__list-item"
  );
  russianClassicsRimskyKorsakovListItem.classList.add("_touch");
  const russianClassicsRimskyKorsakovListTitle = document.createElement("h4");
  russianClassicsRimskyKorsakovListTitle.classList.add(
    "russian-classics-rimsky-korsakov__list-title"
  );
  const russianClassicsRimskyKorsakovListSubtitle =
    document.createElement("h5");
  russianClassicsRimskyKorsakovListSubtitle.classList.add(
    "russian-classics-rimsky-korsakov__list-subtitle"
  );
  const russianClassicsRimskyKorsakovListLink = document.createElement("a");
  russianClassicsRimskyKorsakovListLink.classList.add(
    "russian-classics-rimsky-korsakov__list-link"
  );

  russianClassicsRimskyKorsakovListItem.appendChild(
    russianClassicsRimskyKorsakovListTitle
  );
  russianClassicsRimskyKorsakovListItem.appendChild(
    russianClassicsRimskyKorsakovListSubtitle
  );
  russianClassicsRimskyKorsakovListItem.appendChild(
    russianClassicsRimskyKorsakovListLink
  );

  russianClassicsRimskyKorsakovListItem.style.backgroundImage = `url(${elem.background})`;
  russianClassicsRimskyKorsakovListTitle.textContent = elem.title;
  russianClassicsRimskyKorsakovListSubtitle.textContent = elem.text;
  russianClassicsRimskyKorsakovListLink.textContent = "Подробнее";
  russianClassicsRimskyKorsakovListLink.href = elem.link;

  russianClassicsRimskyKorsakovList.appendChild(
    russianClassicsRimskyKorsakovListItem
  );
});

// Чайковский
tchaikovskyData.forEach((elem) => {
  const russianClassicsTchaikovskyListItem = document.createElement("li");
  russianClassicsTchaikovskyListItem.classList.add(
    "russian-classics-tchaikovsky__list-item"
  );
  russianClassicsTchaikovskyListItem.classList.add("_touch");
  const russianClassicsTchaikovskyListTitle = document.createElement("h4");
  russianClassicsTchaikovskyListTitle.classList.add(
    "russian-classics-tchaikovsky__list-title"
  );
  const russianClassicsTchaikovskyListSubtitle = document.createElement("h5");
  russianClassicsTchaikovskyListSubtitle.classList.add(
    "russian-classics-tchaikovsky__list-subtitle"
  );
  const russianClassicsTchaikovskyListLink = document.createElement("a");
  russianClassicsTchaikovskyListLink.classList.add(
    "russian-classics-tchaikovsky__list-link"
  );

  russianClassicsTchaikovskyListItem.appendChild(
    russianClassicsTchaikovskyListTitle
  );
  russianClassicsTchaikovskyListItem.appendChild(
    russianClassicsTchaikovskyListSubtitle
  );
  russianClassicsTchaikovskyListItem.appendChild(
    russianClassicsTchaikovskyListLink
  );

  russianClassicsTchaikovskyListItem.style.backgroundImage = `url(${elem.background})`;
  russianClassicsTchaikovskyListTitle.textContent = elem.title;
  russianClassicsTchaikovskyListSubtitle.textContent = elem.text;
  russianClassicsTchaikovskyListLink.textContent = "Подробнее";
  russianClassicsTchaikovskyListLink.href = elem.link;

  russianClassicsTchaikovskyList.appendChild(
    russianClassicsTchaikovskyListItem
  );
});

// Шостакович
shostakovichData.forEach((elem) => {
  const russianClassicsShostakovichListItem = document.createElement("li");
  russianClassicsShostakovichListItem.classList.add(
    "russian-classics-shostakovich__list-item"
  );
  russianClassicsShostakovichListItem.classList.add("_touch");
  const russianClassicsShostakovichListTitle = document.createElement("h4");
  russianClassicsShostakovichListTitle.classList.add(
    "russian-classics-shostakovich__list-title"
  );
  const russianClassicsShostakovichListSubtitle = document.createElement("h5");
  russianClassicsShostakovichListSubtitle.classList.add(
    "russian-classics-shostakovich__list-subtitle"
  );
  const russianClassicsShostakovichListLink = document.createElement("a");
  russianClassicsShostakovichListLink.classList.add(
    "russian-classics-shostakovich__list-link"
  );

  russianClassicsShostakovichListItem.appendChild(
    russianClassicsShostakovichListTitle
  );
  russianClassicsShostakovichListItem.appendChild(
    russianClassicsShostakovichListSubtitle
  );
  russianClassicsShostakovichListItem.appendChild(
    russianClassicsShostakovichListLink
  );

  russianClassicsShostakovichListItem.style.backgroundImage = `url(${elem.background})`;
  russianClassicsShostakovichListTitle.textContent = elem.title;
  russianClassicsShostakovichListSubtitle.textContent = elem.text;
  russianClassicsShostakovichListLink.textContent = "Подробнее";
  russianClassicsShostakovichListLink.href = elem.link;

  russianClassicsShostakovichList.appendChild(
    russianClassicsShostakovichListItem
  );
});
