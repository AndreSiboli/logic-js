function doubleFactorial(n) {
  let calc = 1;

  for (let i = n; i > 0; i -= 2) {
    calc *= i;
  }

  return calc;
}

console.log(doubleFactorial(7));
console.log(doubleFactorial(10));
console.log(doubleFactorial(4));
console.log(doubleFactorial(11));

// Write a function to calculate the double factorial.

// Instructions
// The double factorial (n!!) is the product of all integers from 1 to n with the same parity (odd or even) as n.

// That means,

// If n is odd, n!! is the product of all odd numbers up to n.

// For example, for n = 7, n!! = 1 x 3 x 5 x 7 = 105.

// If n is even, n!! is the product of all even numbers up to n.

// For example, for n = 10, n!! = 2 x 4 x 6 x 8 x 10 = 3840.

// Given an integer n, return its double factorial.

// Example
// For this input
// n = 5

// the result should be:
// 15

// Reason: The double factorial of 5 is calculated as: 1 * 3 * 5 = 15.

// Example
// For this input
// n = 6

// the result should be:
// 48

// Reason: The double factorial of 6 is calculated as: 2 * 4 * 6 = 48.
