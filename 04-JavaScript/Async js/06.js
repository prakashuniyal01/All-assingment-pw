/**
 * Q6. Describe the purpose and usage of the localStorage and sessionStorage APIs in web development. Give suitable examples for each.
    localStorage and sessionStorage are part of the Web Storage API and allow storing data in the browser.

    localStorage: Stores data with no expiration time. Data is saved across page reloads and browser sessions.

    Example:
 */

    // Save data to localStorage
localStorage.setItem('name', 'John');

// Retrieve data from localStorage
const name = localStorage.getItem('name');
console.log(name);  // Output: John

// Remove data from localStorage
localStorage.removeItem('name');


/**
 * sessionStorage: Stores data for the duration of the page session. The data is cleared when the page session ends (e.g., when the tab is closed).

    Example:
 */

    // Save data to sessionStorage
sessionStorage.setItem('authToken', 'abc123');

// Retrieve data from sessionStorage
const token = sessionStorage.getItem('authToken');
console.log(token);  // Output: abc123

// Remove data from sessionStorage
sessionStorage.removeItem('authToken');
