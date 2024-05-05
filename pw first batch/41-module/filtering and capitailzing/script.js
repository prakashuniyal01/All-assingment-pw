// Function to capitalize the author's name
function capitalizeName(name) {
    return name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

// Function to filter and process the books list
function filterAndCapitalizeBooks(books) {
    // Create a new array with books published in 2010 or later and with capitalized author names
    const filteredBooks = books
        .filter(book => book.year >= 2010) // Filter books published in 2010 or later
        .map(book => ({
            title: book.title,
            author: capitalizeName(book.author), // Capitalize the author's name
            year: book.year
        }));

    return filteredBooks;
}

// Sample list of books
const books = [
    { title: 'The Great Book', author: 'jane doe', year: 2011 },
    { title: 'Another Story', author: 'john smith', year: 2005 },
    { title: 'New Horizons', author: 'alex johnson', year: 2015 },
    { title: 'Old Tales', author: 'michael williams', year: 2008 },
    { title: 'Modern World', author: 'emma watson', year: 2020 }
];

// Call the function to filter and process the books list
const filteredBooks = filterAndCapitalizeBooks(books);

// Output the filtered books list
console.log('Filtered and Capitalized Books:');
filteredBooks.forEach(book => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`);
});
