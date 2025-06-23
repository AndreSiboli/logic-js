function euler(n) {
  const E = [1, 0];

  for (let i = 2; i <= n; i++) {
    E.push((2 * i - 1) * E[i - 1] + (i - 1) * E[i - 2]);
  }

  return E[n];
}

console.log(euler(4));

// Write a function to calculate the nth Euler number.

// Instructions
// Euler numbers are a special sequence of numbers that appear in certain complex math problems, often related to patterns in shapes and waves.

// Given an integer n, we can find the nth Euler number using the formula:

// E(n)=(2n−1)E(n−1)+(n−1)E(n−2).

// For example, if the input is n = 2 and assuming initial values E(0) = 1 and E(1) = 0:

// E(2) = (2 * 2 - 1)E(1) + (2 - 1)E(0)
// E(2) = (4 - 1) * 0 + 1 * 1
// E(2) = 3 * 0 + 1
// E(2) = 0 + 1
// E(2) = 1

// Example
// For this input
// n = 4

// the result should be:
// 38

// Reason: The 4th Euler number is 38.
