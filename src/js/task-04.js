
let counterValue = 0;

const decremBtn = document.querySelector("button[data-action='decrement']");
const incremBtn = document.querySelector("button[data-action='increment']");
const total = document.querySelector("#value");

function countDecrem() {
    counterValue -= 1;
    total.textContent = counterValue;
};

function countIncrem() {
    counterValue += 1;
    total.textContent = counterValue;
};

decremBtn.addEventListener("click", countDecrem);
incremBtn.addEventListener("click", countIncrem);