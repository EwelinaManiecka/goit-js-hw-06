const textInput = document.querySelector("input");
const dataLength = Number(textInput.getAttribute("data-length"));

function checkLength(event) {
    if (event.currentTarget.value.length === dataLength) {
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
    } else {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
    }
};

textInput.addEventListener("blur", checkLength);