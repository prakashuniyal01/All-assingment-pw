


/**
 * 
 *
 *      Write a JavaScript function called curry that takes a function as an argument and returns a curried
 *      version of that function. The curried function should accept arguments one at a time and return a new
 *      function until all arguments are provided. Then, it should execute the original function with all arguments.
 *      Test the curry function with a function that adds two numbers.
 */



function curry(func) {
  // Store the original function's arity (number of arguments it expects)
  const arity = func.length;

  // Helper function to curry arguments
  function curried(...args) {
    // If enough arguments are provided, execute the original function
    if (args.length >= arity) {
      return func(...args);
    } else {
      // If not enough arguments are provided, return a new function
      return (...moreArgs) => curried(...args, ...moreArgs);
    }
  }

  return curried;
}

// Example: A function that adds two numbers
function add(a, b) {
  return a + b;
}

// Curry the add function
const curriedAdd = curry(add);

// Test the curried function
console.log(curriedAdd(2)(3));          // Output: 5
console.log(curriedAdd(2, 3));           // Output: 5
console.log(curriedAdd(2)(3)(4));        // Output: 9
console.log(curriedAdd(2, 3, 4));        // Output: 9
console.log(curriedAdd(5)(6)(7)(8));     // Output: 26
