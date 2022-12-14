function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let changeColor = document.querySelector(".change-color");
let body = document.body;

changeColor.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
});

const colorSpan = document.querySelector(".color");
const changeNameColor = () => {
  colorSpan.textContent = `${getRandomHexColor()};`
}

changeColor.addEventListener("click", changeNameColor)
