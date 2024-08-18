function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
        default:
            console.log("Invalid operator");
            return;
    }
    console.log(`Result: ${result}`);
}

calculator(5, 3, '+'); // Result: 8
calculator(5, 3, '-'); // Result: 2
calculator(5, 3, '*'); // Result: 15
calculator(5, 3, '/'); // Result: 1.6666666666666667
calculator(5, 0, '/'); // Result: Cannot divide by zero
calculator(5, 3, '%'); // Invalid operator