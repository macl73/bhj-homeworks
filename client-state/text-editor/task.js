const editor = document.getElementById("editor");

editor.value = localStorage.text;

editor.onchange = () => {
    localStorage.setItem("text", editor.value);
};

const card = document.querySelector(".card");
const clearButton = document.createElement("button");
clearButton.textContent = "Очистить содержимое";
card.appendChild(clearButton);

clearButton.onclick = () => {
    editor.value = "";
    localStorage.text = "";
};