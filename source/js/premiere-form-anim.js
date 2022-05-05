const block = document.querySelector(".premiere-form__subbg-top");
const bottomBlock = document.querySelector(".premiere-form__subbg-bottom");

let offSet = 0;

function move() {
  offSet = offSet + 1;
  block.style.right = offSet + "px";
  bottomBlock.style.right = offSet + "px";
  if (offSet == 1700) {
    moveReload();
    return;
  }
  setTimeout(move,20);
}
function moveReload() {
  offSet = 0;
  move();
}
move();
