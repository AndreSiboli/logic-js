function returnNbonacciNumbers(N, m) {
  const fibonnacci = [...Array(N - 1).fill(0), 1];

  for (let i = N; i < m; i++) {
    const arr = fibonnacci.slice(i - N, i);
    const reduce = arr.reduce((prev, curr) => prev + curr, 0);
    fibonnacci.push(reduce);
  }

  return fibonnacci;
}

console.log(returnNbonacciNumbers(2, 10));
console.log(returnNbonacciNumbers(5, 10));

// Write a function to generate the first m terms of a N-bonacci sequence.

// Instructions
// In an N-bonacci sequence, each number (after the first N numbers) is the sum of the last N numbers.

// Initialization for N-bonacci Sequence:

// Each N-bonacci sequence starts with the first N-1 terms as zeros, followed by the Nth term, which is set to 1. This sets the foundation from which all subsequent terms are calculated.

// For example:

// In a 2-bonacci (Fibonacci) sequence, each number after the first two is the sum of the previous two numbers. So, the sequence is 0, 1, 1, 2, 3, 5, 8, 13, and so on.
// In a 3-bonacci sequence, each number after the first three is the sum of the last 3 numbers. So, the sequence is 0, 0, 1, 1, 2, 4, 7, 13, and so on.
// In a 4-bonacci sequence, each number after the first four is the sum of the last 4 numbers. So, the sequence is 0, 0, 0, 1, 1, 2, 4, 8, 15, and so on.
// Given two integers, N and m, return an array containing the first m terms of N-bonacci sequence.

// Example
// For this input
// N = 5
// m = 10

// the result should be:
// [0, 0, 0, 0,  1, 1, 2, 4, 8, 16]

// Reason: The first 10 terms of 5-bonacci sequence are 0, 0, 0, 0, 1, 1, 2, 4, 8, and 16.

// Another way
// function nBonacci(N, m) {
//   const result = new Array(m).fill(0); //Start with all indexs set 0
//   if (N <= m) result[N - 1] = 1; // define the Nth value as 1

//   for (let i = N; i < m; i++) {
//     // 5i - 5n = 0j / 0j < 5i true
//     // 6i - 5n = 1j/ 1j < 6i true
//     // ...
//     for (let j = i - N; j < i; j++) {
//       result[i] += result[j];
//     }
//   }

//   return result;
// }

