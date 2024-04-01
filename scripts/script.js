let display = document.getElementById('display');

function insertValue(value) {
    display.innerText += value;
}

function clearDisplay() {
    display.innerText = "";
}

function delDigit() {
    let newDisplay = display.innerText.slice(0, display.innerText.length - 1);
    display.innerText = newDisplay;
}

function solve() {
    let solution = eval(display.innerText);
    display.innerText = solution;
}