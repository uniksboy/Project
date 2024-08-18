function reverseStringAfterDelay(input) {
    setTimeout(() => {
        const reversed = input.split('').reverse().join('');
        console.log(reversed);
    }, 2000); // 2 seconds delay
}

const input = "Hello, World!";
reverseStringAfterDelay(input);