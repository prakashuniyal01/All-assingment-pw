// Delay in seconds (modifiable)
let delayInSeconds = 3;

// Function to start the countdown and generate a random number after the delay
function startCountdown() {
    let timeRemaining = delayInSeconds;

    // Function to display the remaining time every second
    const intervalId = setInterval(() => {
        if (timeRemaining > 0) {
            console.log(`Time remaining: ${timeRemaining} second(s)`);
            timeRemaining--;
        } else {
            // Stop the interval when the time runs out
            clearInterval(intervalId);

            // Generate a random number
            const randomNumber = Math.random();

            // Output the generated random number
            console.log(`Generated random number: ${randomNumber}`);

            // The countdown and random number generation is complete
        }
    }, 1000);
}

// Start the countdown
startCountdown();
