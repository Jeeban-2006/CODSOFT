let display = document.getElementById('display');
let operator = null;
let operand1 = null;

function appendNumber(number) {
  display.textContent += number;
}

function appendOperator(op) {
  operator = op;
  operand1 = parseFloat(display.textContent);
  display.textContent += op;
}

function calculate() {
  let operand2 = parseFloat(display.textContent.substring(display.textContent.lastIndexOf(operator) + 1));
  let result = null;

  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      if (operand2 === 0) {
        result = 'Error: Division by zero';
      } else {
        result = operand1 / operand2;
      }
      break;
  }

  display.textContent = result;
}

function clearDisplay() {
  display.textContent = '';
  operator = null;
  operand1 = null;
}