/**
 * 
Let's solve the questions from the "Async JS, Browser API & Window" assignment one by one.

Q1. Define XMLHttpRequest object, and how is it used in AJAX?
XMLHttpRequest is an object in JavaScript that allows you to make HTTP requests to interact with servers. It is a key part of AJAX (Asynchronous JavaScript and XML) and enables web pages to retrieve data from a server asynchronously without having to reload the entire page.

Usage in AJAX:

Create an XMLHttpRequest object.
Use the open() method to set up a request (GET, POST, etc.).
Use the send() method to send the request to the server.
Handle the server's response using the onreadystatechange event and checking readyState and status.
Example:

javascript
Copy code
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);  // Server response
  }
};
xhr.send();
Q2. Write a JavaScript program to make an AJAX request using the XMLHttpRequest object to fetch data from a remote API (https://jsonplaceholder.typicode.com/users) and log a list of user names to the browser console.
 */



const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const users = JSON.parse(xhr.responseText);
    const userNames = users.map(user => user.username);
    console.log(userNames);  // List of user names
  }
};

xhr.send();
