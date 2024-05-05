// Input string (modifiable)
const input = 'Hello, World!';

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to reverse the input string after a delay of 2 seconds
function reverseStringAfterDelay(inputString, delayInSeconds) {
    // Use setTimeout to execute the function after the delay
    setTimeout(() => {
        // Reverse the input string
        const reversedString = reverseString(inputString);

        // Print the reversed string
        console.log(`Reversed string: ${reversedString}`);
    }, delayInSeconds * 1000); // Convert delay from seconds to milliseconds
}

// Delay in seconds
const delayInSeconds = 2;

// Call the function to reverse the string after the delay
reverseStringAfterDelay(input, delayInSeconds);
