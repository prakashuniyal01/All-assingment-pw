// Function to convert prices from USD to INR
function convertPricesToINR(itemsInUSD, exchangeRate) {
    // Create an array from the items object
    const itemEntries = Object.entries(itemsInUSD);
    
    // Use the map function to convert the prices and create a new array
    const convertedItems = itemEntries.map(([item, priceUSD]) => {
        const priceINR = priceUSD * exchangeRate;
        return [item, priceINR];
    });

    // Convert the array of [key, value] pairs back into an object
    const itemsInINR = Object.fromEntries(convertedItems);

    return itemsInINR;
}

// Sample list of items and their prices in USD
const itemsInUSD = {
    apple: 1.5,
    banana: 0.5,
    orange: 1.0,
    mango: 2.0,
    grapes: 3.0
};

// Exchange rate from USD to INR
const exchangeRate = 80; // 1 USD to 80 INR

// Convert the prices from USD to INR
const itemsInINR = convertPricesToINR(itemsInUSD, exchangeRate);

// Output the converted prices in INR
console.log('Items with prices in INR:');
for (const [item, priceINR] of Object.entries(itemsInINR)) {
    console.log(`${item}: ₹${priceINR.toFixed(2)}`);
}
