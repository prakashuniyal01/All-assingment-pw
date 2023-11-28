/** 
 *                => question 4 <=
 * 
 *      Gene rate n9mbers between any 2 given n9mbers.
 *      Ex
 *      onst num1 = 10
 *      onst num2 = 25;
 *      O9tp9t: 11, 12, 13, ...., 25
 */



const num1 = 10;
const num2 = 25;

// Ensure num1 is less than num2 before generating numbers
if (num1 < num2) {
    for (let i = num1 + 1; i < num2; i++) {
        console.log(i);
    }
} else {
    console.error("num1 should be less than num2 for this example.");
}
