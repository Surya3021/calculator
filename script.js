// script.js
let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let currentNumber = '';
let previousNumber = '';
let operation = '';

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;

        // Handle numbers
        if (!isNaN(value) || value === '.') {
            currentNumber += value;
            display.value = currentNumber;
        }

        // Handle operations
        if (['+', '-', '*', '/', '%', 'x^2'].includes(value)) {
            if (currentNumber !== '') {
                previousNumber = currentNumber;
                currentNumber = '';
                operation = value;
            }
        }

        // Handle equals
        if (value === '=') {
            if (currentNumber !== '' && previousNumber !== '') {
                let result;
                switch (operation) {
                    case '+':
                        result = parseFloat(previousNumber) + parseFloat(currentNumber);
                        break;
                    case '-':
                        result = parseFloat(previousNumber) - parseFloat(currentNumber);
                        break;
                    case '*':
                        result = parseFloat(previousNumber) * parseFloat(currentNumber);
                        break;
                    case '/':
                        result = parseFloat(previousNumber) / parseFloat(currentNumber);
                        break;
                    case '%':
                        result = parseFloat(previousNumber) % parseFloat(currentNumber);
                        break;
                    case 'x^2':
                        result = Math.pow(parseFloat(currentNumber), 2);
                        break;
                    default:
                        result = 0;
                }
                display.value = result.toString();
                currentNumber = result.toString();
                previousNumber = '';
                operation = '';
            }
        }

        // Handle all clear
        if (value === 'AC') {
            currentNumber = '';
            previousNumber = '';
            operation = '';
            display.value = '';
        }
    });
});