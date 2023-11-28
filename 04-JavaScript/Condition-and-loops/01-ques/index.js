/**
 *                      => question 1 <=
 * 
 *     ===============================================================
 * 
 * what is conditional statement explain conditional statement with syntex and example 
 * 
 * ans :- 
            A conditional statement is a programming construct that allows you to execute different blocks of code based on whether a specified condition evaluates to true or false. In JavaScript, there are mainly two types of conditional statements: if statements and switch statements.
            A conditional statement, also known as a decision statement or selection statement, allows the program to make decisions based on certain conditions. It checks whether
 */
/**
 * If Statement:-
 */

// The basic syntax of an if statement is as follows:
if (condition) {
    // Code to be executed if the condition is true
} else {
    // Code to be executed if the condition is false
}

// Here's an example:

let x = 10;

if (x > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is not greater than 5");
}
/* Output will be "x is greater than 5" because the value of 'x' is 10 which is greater than 5 */

/**
 * Switch Statement:-
 */


// The switch statement is used when you have multiple possible conditions to check.


switch (expression) {
    case value1:
        // Code to be executed if expression === value1
        break;
    case value2:
        // Code to be executed if expression === value2
        break;
    // Additional cases as needed
    default:
        // Code to be executed if none of the cases match
}


// example 

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("It's the start of the week");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    default:
        console.log("It's a regular day");
}
