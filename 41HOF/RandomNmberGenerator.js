function randomNumberWithDelay(delay) {
    let timeRemaining = delay / 1000;

    const intervalId = setInterval(() => {
        console.log(`Time remaining: ${timeRemaining} seconds`);
        timeRemaining--;
    }, 1000);

    setTimeout(() => {
        clearInterval(intervalId);
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(`Random number generated: ${randomNumber}`);
    }, delay);
}

const delay = 3000; // 3 seconds
randomNumberWithDelay(delay);