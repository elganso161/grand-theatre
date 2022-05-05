const burger = document.querySelector(".burger");
const lineOne = document.querySelector(".line-one");
const lineTwo = document.querySelector(".line-two");
const lineThree = document.querySelector(".line-three");
const headerNav = document.querySelector(".header__nav");
const body = document.querySelector("body");

burger.addEventListener("click", function () {
  lineOne.classList.toggle("active");
  lineTwo.classList.toggle("active");
  lineThree.classList.toggle("active");
  headerNav.classList.toggle("active");
  body.classList.toggle("active");
});
