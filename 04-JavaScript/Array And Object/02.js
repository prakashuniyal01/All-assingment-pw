const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
const sortedAges = ages.sort((a, b) => a - b);
const minAge = sortedAges[0];
const maxAge = sortedAges[sortedAges.length - 1];

// Find the median age
const middle = Math.floor(sortedAges.length / 2);
const medianAge = sortedAges.length % 2 === 0 
  ? (sortedAges[middle - 1] + sortedAges[middle]) / 2
  : sortedAges[middle];

// Find the average age
const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;

// Find the range of ages
const range = maxAge - minAge;

// Compare (min - average) and (max - average) using abs()
const minDiff = Math.abs(minAge - averageAge);
const maxDiff = Math.abs(maxAge - averageAge);

console.log({
  minAge, maxAge, medianAge, averageAge, range, minDiff, maxDiff
});
