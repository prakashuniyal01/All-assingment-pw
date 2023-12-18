/**
 *       Write a JavaScript function called calculateTax that takes an income as an argument and returns the
 *       amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
 *       function with various incomes.
 */



function calculateTax(income) {
    // Tax rates based on income ranges
    const taxRates = [
      { range: 10000, rate: 0.1 },
      { range: 30000, rate: 0.15 },
      { range: 70000, rate: 0.2 },
      { range: Infinity, rate: 0.25 }
    ];
  
    // Find the applicable tax rate based on the income
    const applicableRate = taxRates.find(rate => income <= rate.range);
  
    // Calculate the tax amount using the applicable rate
    const taxAmount = income * applicableRate.rate;
  
    // Return the calculated tax amount
    return taxAmount;
  }
  
  // Test the function with various incomes
  console.log(calculateTax(5000));    // Output: 500
  console.log(calculateTax(15000));   // Output: 1500
  console.log(calculateTax(50000));   // Output: 7500
  console.log(calculateTax(100000));  // Output: 20000
  