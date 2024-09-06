const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add 'Meat' at the beginning if it's not already added
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

// Add 'Sugar' at the end if it's not already added
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

// Remove 'Honey' if allergic to honey (assuming true for the condition)
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);

// Modify 'Tea' to 'Green Tea'
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';

console.log(shoppingCart); 
// Output: ['Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar']
