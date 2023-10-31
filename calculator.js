// Creation of the calculator
for (let i = 0; i<10 ; i++) {
    btn = document.createElement("button");
    btn.classList.add("button");
    btn.textContent =`${i}`;
    document.body.appendChild(btn);
}

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