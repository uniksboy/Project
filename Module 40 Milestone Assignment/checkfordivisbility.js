function checkDivisibility(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0 && numbers[i] % 2 !== 0) {
            console.log(numbers[i]);
        }
    }
}

const numbers = [3, 6, 9, 12, 15, 18, 21];
checkDivisibility(numbers);
// Output: 3, 9, 15, 21