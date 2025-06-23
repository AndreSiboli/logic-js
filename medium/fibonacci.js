// F(n) = F(n-1) + F(n-2)

function fibonacci(n) {
  const fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    fib.push(fib[i - 2] + fib[i - 1]);
  }

  return fib[n];
}

console.log(fibonacci(7));

// Write a function to find the nth Fibonacci number.

// Instructions
// Fibonacci is a sequence of numbers where each number is the sum of the two preceding ones, starting from 0 and 1.

// The first few terms of the Fibonacci sequence are 0, 1, 1, 2, 3, 5, 8, 13, and so on.

// Return the nth Fibonacci number.

// Example
// For this input
// n = 7

// the result should be:
// 13

// Reason: The 7th Fibonacci number is 13.