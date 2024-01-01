let display = document.getElementById(`display`);
let clear = false;

function addToDisplay(value) {
    if (clear) {
        display.value = '';
        clear = false;
    }
    display.value += value;
}

function calculateResult() {
try {
    let result = eval(display.value);
    display.value = result;
    clear = true;
}   catch (error) {
    alert(`Error: Invalid expression`);
    clearDisplay();
}
}

function clearDisplay() {
    display.value = '';
    clear = true;
}
