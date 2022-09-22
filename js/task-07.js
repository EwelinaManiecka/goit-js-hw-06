const textInput = document.querySelector("#font-size-control");

textInput.addEventListener("input", function() {
    const size = textInput.value;
    document.querySelector("#text").style.fontSize = size + "px";
});


//document.querySelector("#text");
//działa tak samo, jak: document.getElementById("text");