const balletsGrigorovichList = document.querySelector(
  ".ballets-grigorovich__list"
);

const balletsGrigorovichData = [
  {
    background: "./img/ballets-grigorovich-img1.jpg",
    title: "Опера «История Кая и Герды»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/ballets-grigorovich-img1.jpg",
    title: "Опера «История Кая и Герды»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/ballets-grigorovich-img1.jpg",
    title: "Опера «История Кая и Герды»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/ballets-grigorovich-img1.jpg",
    title: "Опера «История Кая и Герды»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/ballets-grigorovich-img1.jpg",
    title: "Опера «История Кая и Герды»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/ballets-grigorovich-img1.jpg",
    title: "Опера «История Кая и Герды»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/ballets-grigorovich-img1.jpg",
    title: "Опера «История Кая и Герды»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/ballets-grigorovich-img1.jpg",
    title: "Опера «История Кая и Герды»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
  {
    background: "./img/ballets-grigorovich-img1.jpg",
    title: "Опера «История Кая и Герды»",
    text: "Балет Джона Ноймайера в двух действиях",
    link: "#",
  },
];

balletsGrigorovichData.forEach((elem) => {
  const balletsGrigorovichListItem = document.createElement("li");
  balletsGrigorovichListItem.classList.add("ballets-grigorovich__list-item");
  balletsGrigorovichListItem.classList.add("_anim-items");
  balletsGrigorovichListItem.classList.add("_anim-no-hide");
  balletsGrigorovichListItem.classList.add("_touch");
  const balletsGrigorovichListTitle = document.createElement("h4");
  balletsGrigorovichListTitle.classList.add("ballets-grigorovich__list-title");
  const balletsGrigorovichListText = document.createElement("p");
  balletsGrigorovichListText.classList.add("ballets-grigorovich__list-text");
  const balletsGrigorovichListLink = document.createElement("a");
  balletsGrigorovichListLink.classList.add("ballets-grigorovich__list-link");

  balletsGrigorovichListItem.appendChild(balletsGrigorovichListLink);
  balletsGrigorovichListLink.appendChild(balletsGrigorovichListTitle);
  balletsGrigorovichListLink.appendChild(balletsGrigorovichListText);
  balletsGrigorovichList.appendChild(balletsGrigorovichListItem);

  balletsGrigorovichListItem.style.backgroundImage = `url(${elem.background})`;
  balletsGrigorovichListLink.href = elem.link;
  balletsGrigorovichListTitle.textContent = elem.title;
  balletsGrigorovichListText.textContent = elem.text;
});
