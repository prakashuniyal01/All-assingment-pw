/**
 * Q4. Compare Promises to callbacks and discuss why Promises are preferred for managing asynchronous code.
    Callbacks are functions passed as arguments to other functions and are executed after the asynchronous operation is complete. However, callbacks can lead to "callback hell" (nested callback structure), making code difficult to read and maintain.

    Promises provide a cleaner way to handle asynchronous code by representing a value that will be available in the future. They can be chained using .then() and .catch(), making the code more readable.

    Why Promises are preferred:

    Chaining: Promises allow you to chain asynchronous tasks without deep nesting.
    Error Handling: Promises have built-in error handling via .catch(), making it easier to manage errors.
    Better Readability: Promises flatten the callback structure, making the code more readable and easier to maintain.
    Example:
 */


    // Callback
function fetchData(callback) {
    setTimeout(() => {
      callback('data');
    }, 1000);
  }
  
  // Promise
  function fetchDataPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('data');
      }, 1000);
    });
  }
  
  fetchDataPromise().then(data => console.log(data));
  