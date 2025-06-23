function calculateCombinations(n, k) {
  return formula(n, k);
}

function formula(n, k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}

function factorial(num, calc = 1) {
  if (num < 1) return calc;
  return factorial(num - 1, calc * num);
}

console.log(calculateCombinations(4, 2));
console.log(calculateCombinations(5, 2));

// Write a function to find the number of ways to choose k elements from a set of n elements.

// Instructions
// We can use the formula of combinations
// C(n,k) = n! / k!(n-k)!​
// ​
//   to find the number of ways to choose k elements from a set of n elements.

// Here '!' denotes factorial.

// Given n and k, return the number of ways to choose k elements from a set of n elements.

// For example, given n = 4 and k = 2,
// C(4,2) = 4! / 2! * (4-2)!​  = 6.

// Note: The factorial of a non-negative integer is the product of all positive integers less than or equal to that integer.

// For example, 5! is 5 x 4 x 3 x 2 x1 = 120.

// Example
// For this input
// n = 5
// k = 2

// the result should be:
// 10

// Reason: The number of ways to choose 2 elements from a set of 5 elements is 5! / (2! (5 - 2)!) = 10.
