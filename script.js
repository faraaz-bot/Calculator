// Get the display element
const display = document.getElementById('displayTitle');

// Initialize variables for calculation
let currentNumber = '';
let firstOperand = '';
let operator = '';

// Function to update the display with the current number
function updateDisplay() {
  display.textContent = currentNumber || '0';
}

// Function to handle number button clicks
function handleNumberClick(number) {
  if (currentNumber === '0' && number === '0') return; // Prevent leading zeros
  if (currentNumber === '0') currentNumber = ''; // Remove leading zero
  currentNumber += number;
  updateDisplay();
}

// Function to handle operator button clicks
function handleOperatorClick(op) {
  if (operator && currentNumber) {
    firstOperand = calculate();
    currentNumber = '';
  } else {
    firstOperand = currentNumber;
    currentNumber = '';
  }
  operator = op;
}

// Function to handle equals button click
function handleEqualsClick() {
  if (operator && currentNumber) {
    firstOperand = calculate();
    currentNumber = firstOperand;
    operator = '';
    updateDisplay();
  }
}

// Function to perform calculation
function calculate() {
  const num1 = parseFloat(firstOperand);
  const num2 = parseFloat(currentNumber);
  switch (operator) {
    case '+':
      return (num1 + num2).toString();
    case '-':
      return (num1 - num2).toString();
    case '×':
      return (num1 * num2).toString();
    case '÷':
      return (num1 / num2).toString();
    default:
      return currentNumber;
  }
}

// Event listeners for number buttons (0-9)
for (let i = 0; i <= 9; i++) {
  document.getElementById(i.toString()).addEventListener('click', () => {
    handleNumberClick(i.toString());
  });
}

// Event listener for the decimal point button (.)
document.getElementById('.').addEventListener('click', () => {
  if (!currentNumber.includes('.')) {
    currentNumber += '.';
    updateDisplay();
  }
});

// Event listeners for operator buttons (+, -, *, ÷)
const operators = ['+', '-', '×', '÷'];
operators.forEach(op => {
  document.getElementById(op).addEventListener('click', () => {
    handleOperatorClick(op);
  });
});

// Event listener for the equals button (=)
document.getElementById('=').addEventListener('click', () => {
  handleEqualsClick();
});

// Event listener for the clear button (C)
document.getElementById('C').addEventListener('click', () => {
  currentNumber = '';
  firstOperand = '';
  operator = '';
  updateDisplay();
});

// Event listener for the backspace button (N)
document.getElementById('N').addEventListener('click', () => {
  currentNumber = currentNumber.slice(0, -1);
  updateDisplay();
});
