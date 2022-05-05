const spectacleDescriptionTabsButtons = document.querySelectorAll(
  ".spectacle-description-tabs__button"
);
const spectacleDescriptionTabsItems = document.querySelectorAll(
  ".spectacle-description-tabs__item"
);
const anchorNavListItemLinkTab = document.querySelectorAll(".anchor__nav-list-item-link-tab");

spectacleDescriptionTabsButtons.forEach((elem) => {
  elem.addEventListener("click", () => {
    let currentBtn = elem;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTub = document.querySelector(tabId);

    spectacleDescriptionTabsButtons.forEach((elem) => {
      elem.classList.remove("active");
    });
    spectacleDescriptionTabsItems.forEach((elem) => {
      elem.classList.remove("active");
    });

    currentBtn.classList.add("active");
    currentTub.classList.add("active");
  });
});

anchorNavListItemLinkTab.forEach((elem) => {
  elem.addEventListener("click", () => {
    let currentBtn = elem;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTub = document.querySelector(tabId);

    spectacleDescriptionTabsButtons.forEach((elem) => {
      elem.classList.remove("active");
    });
    spectacleDescriptionTabsItems.forEach((elem) => {
      elem.classList.remove("active");
    });

    currentBtn.classList.add("active");
    currentTub.classList.add("active");

    spectacleDescriptionTabsButtons.forEach((elem) => {
      if (elem.getAttribute("data-tab") == tabId) {
        elem.classList.add("active");
      }
    });
  });
});
