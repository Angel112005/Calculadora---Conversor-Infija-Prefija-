import { converter } from '../controllers/dependencies.js';

document.addEventListener('DOMContentLoaded', function() {
    const convertButton = document.getElementById('convert');
    const expressionInput = document.getElementById('expression');
    const resultDisplay = document.getElementById('result');


    convertButton.addEventListener('click', function() {
        const expression = expressionInput.value;
        const convertedExpression = converter.convert(expression);
        resultDisplay.textContent = convertedExpression;
    });
});