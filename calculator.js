//Operation functions
function add (num1,num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    if (num1 === 0) return "ERROR";
    return num1 / num2;
}

function operate (num1, num2, operator) {
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

// Displaying the user input in the calculator
const display = document.querySelector(".display")
display.textContent = "0";
let userInput = ""

const buttons = document.querySelectorAll(".button")

buttons.forEach(button => {
    button.addEventListener("click", function() {
        userInput += this.textContent;
        display.textContent = userInput;
    })
})

const operators = document.querySelectorAll(".operator");

operators.forEach(button => {
    button.addEventListener("click", function() {
        operator = this.textContent;
    })
})