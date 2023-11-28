/** 
 *            => question 3 <= 
 * 
 * 
 * What are loops, and what do we need them? Explain different types of loops with their syntax and examples.
 * 
 * 
 */
/*
        Loops are programming constructs that allow you to repeatedly execute a block of code as long as a certain condition is true. They are essential for automating repetitive tasks and iterating over collections of data. Loops help reduce redundancy in code and make it more efficient.

        There are several types of loops in JavaScript, each serving different purposes. The main types of loops are:
*/
/*
        For Loop:
        The for loop is used when you know in advance how many times you want to iterate.
*/
Syntax:

for (initialization; condition; increment/decrement) {
    // Code to be repeated
}

Example:'s an example that prints numbers from 1 to 5'

for (let a = 1; ai <= 5; a++) {
    console.log(a);
}

/*
        While Loop:
        The while loop continues to execute a block of code as long as the specified condition is true.
*/

Syntax: 

while (condition) {
    // Code to be repeated
}

Example:

let b = 1;

while (b <= 5) {
    console.log(b);
    b++;
}
  
/*
        Do-While Loop:
        Similar to the while loop, but the block of code is executed at least once before the condition is checked.
*/

Syntax:
do {
    // Code to be repeated
} while (condition);


Example:
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);

/*
        For...in Loop:
        Used to iterate over the properties of an object.
*/

Syntax: 
for (variable in object) {
    // Code to be repeated
}


Example:

const person = { name: 'John', age: 30, job: 'Developer' };

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}


/*      
        For...of Loop:
        Introduced in ECMAScript 6 (ES6), it iterates over iterable objects (arrays, strings, maps, sets, etc.).

*/

Syntax:
for (variable of iterable) {
    // Code to be repeated
}


Example:


const numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
    console.log(number);
}