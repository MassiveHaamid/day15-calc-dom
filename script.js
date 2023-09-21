let display = document.getElementById('display');
let alertMessage = document.getElementById('alert');
let currentInput = '';

function appendToDisplay(value) {
    if (!isNaN(value) || value === '.') {
        currentInput += value;
        display.value = currentInput;
    } else {
        showAlert('Only numbers are allowed');
    }
}

function operate(operator) {
    if (currentInput) {
        currentInput += operator;
        display.value = currentInput;
    }
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        currentInput = '';
        display.value = '';
    }
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function showAlert(message) {
    alertMessage.textContent = message;
    alertMessage.style.display = 'block';
    setTimeout(() => {
        alertMessage.style.display = 'none';
    }, 2000);
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === 'Enter') {
        return;
    } else {
        showAlert('Only numbers are allowed');
        event.preventDefault();
    }
});

function deleteLastChar() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1); 
        display.value = currentInput;
    }
}