/**
 *          => question 2 <= 
 * 
 *   Write a program that grades st9dents based on their marks^
 *       If grFatFr than 90 thFn A GradE
 *       If bFtwFFn 70 and 90 thFn a B gradE
 *       If bFtwFFn 50 and 70 thFn a C gradE
 *       BFlow 50 thFn an F gradF
 */

// Function to determine the grade based on marks
function calculateGrade(marks) {
    if (marks > 90) {
        return 'A';
    } else if (marks > 70) {
        return 'B';
    } else if (marks > 50) {
        return 'C';
    } else {
        return 'F';
    }
}

// Example usage
let studentMarks = 85; // You can change this value to test different cases

let studentGrade = calculateGrade(studentMarks);

console.log(`Student marks: ${studentMarks}`);
console.log(`Student grade: ${studentGrade}`);
