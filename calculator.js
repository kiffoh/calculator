// Operation functions (same as before)
function add(num1,num2) {
    return String(Number(num1) + Number(num2));
}

function subtract(num1, num2) {
    return String(Number(num1) - Number(num2));
}

function multiply(num1, num2) {
    return String(Number(num1) * Number(num2));
}

function divide(num1, num2) {
    if (num1 === "0") return "ERROR";
    return String(Number(num1) / Number(num2));
}

function operate(num1, num2, operator) {
    if (operator === "+") {
        return add(num1, num2);
    }
    if (operator === "-") {
        return subtract(num1, num2);
    }
    if (operator === "*") {
        return multiply(num1, num2);
    }
    if (operator === "/") {
        return divide(num1, num2);
    }
}

// Displaying the user input in the calculator (same as before)
const display = document.querySelector(".display")
display.textContent = "0";
let userInput = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";

const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        userInput += this.textContent;
        display.textContent = userInput;
    });
});

const operators = document.querySelectorAll(".operator");

operators.forEach(button => {
    button.addEventListener("click", function() {
        if (operator === "*" && this.textContent === "-") {
            userInput += "-"
        }
        operator = this.textContent;
        if (firstNumber === "") {
            firstNumber = userInput; // Only store first number if it's not set yet
        } else {
            handleSecondNumberInput(); // If firstNumber is set, handle second number input
        }
        userInput = ""; // Reset userInput for next input
    });
});

// Function to handle second number input
function handleSecondNumberInput() {
    secondNumber = userInput;
    userInput = ""; // Reset userInput for next input
}

const equalsButton = document.querySelector(".equal");

equalsButton.addEventListener("click", () => {
    handleSecondNumberInput();
    firstNumber = operate(firstNumber, secondNumber, operator);
    display.textContent = firstNumber;
})

const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", () => {

})