let currentOperation = '';
let previousOperand = '';
let currentOperand = '';
const display = document.getElementById('display');

function appendNumber(number) {
  if (currentOperand.includes('.') && number === '.') return;
  currentOperand = currentOperand.toString() + number.toString();
  updateDisplay();
}

function setOperation(operation) {
  if (currentOperand === '') return;
  if (previousOperand !== '') {
    calculate();
  }
  currentOperation = operation;
  previousOperand = currentOperand;
  currentOperand = '';
  updateDisplay();
}

function calculate() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
  switch (currentOperation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '/':
      computation = prev / current;
      break;
    default:
      return;
  }
  currentOperand = computation;
  currentOperation = undefined;
  previousOperand = '';
  updateDisplay();
}

function clearDisplay() {
  currentOperand = '';
  previousOperand = '';
  currentOperation = undefined;
  updateDisplay();
}

function updateDisplay() {
  display.value = currentOperand;
}