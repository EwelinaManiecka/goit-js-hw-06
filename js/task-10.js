function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//doing objects - buttons
const objects = {
  input: document.querySelector("#controls > input"),
  createBtn: document.querySelector("#controls > button[data-create]"),
  destroyBtn: document.querySelector("#controls > button[data-destroy]"),
  boxesMarkup: document.querySelector("#boxes"),
};

const { input, createBtn, destroyBtn, boxesMarkup } = objects;

//min i max number with we can write (1 - 100). Declarate min and max is in html

function createBoxes(amount) {
  let markupArray = [];
  if (amount < Number(input.min) || amount > Number(input.max)) {
    alert(`Wpisz numer od ${input.min} do ${input.max}`);
    input.value = "";
    return;
  };

 //boxes building
 //first box 

let countWidth = 30;
let countHeight = 30;

  for (let i = Number(input.min); i <= amount; i += Number(input.step)) {
    const divObjects = `<div style = "width: ${countWidth}px; 
    height: ${countHeight}px; 
    background-color: ${getRandomHexColor()};"> 
    </div>`;

    markupArray.push(divObjects);

    countWidth += 10;
    countHeight += 10;
  }

  boxesMarkup.insertAdjacentHTML("beforeend", markupArray.join(" "));
}

//destroy boxes

function destroyBoxes() {
  boxesMarkup.innerHTML = "";
  input.value = "";
  countWidth = 30;
  countHeight = 30;
}

createBtn.addEventListener("click", () => createBoxes(input.value));
destroyBtn.addEventListener("click", destroyBoxes);