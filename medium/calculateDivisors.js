function calculateDivisors(num) {
  const divisorsArr = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) divisorsArr.push(i);
  }

  return divisorsArr.length;
}

console.log(calculateDivisors(12));
console.log(calculateDivisors(53));
console.log(calculateDivisors(76));
console.log(calculateDivisors(1));

// Write a function to calculate the number of divisors of a number.

// Instructions
// A divisor of a number is any number that divides the given number evenly, without leaving a remainder.

// For example, the divisors of 4 are 1, 2, and 4, as they divide 4 without leaving a remainder.

// Given an integer, return the count of its divisors.

// Example
// For this input
// num = 12

// the result should be:
// 6

// Reason: The number 12 has 6 divisors: 1, 2, 3, 4, 6, and 12.
