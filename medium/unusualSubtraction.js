function unusualSubtraction(n, k) {
  const split = String(n).split("").map(Number);

  while (k > 0) {
    const lastDigitN = split[split.length - 1];
    if (lastDigitN >= k) {
      split[split.length - 1] = lastDigitN - k;
      k = 0;
      break;
    }

    k = k - lastDigitN;
    split.pop();
  }

  return split.length ? Number(split.join("")) : 0;
}

console.log(unusualSubtraction(452, 6));
console.log(unusualSubtraction(5, 6));
console.log(unusualSubtraction(789, 3));
console.log(unusualSubtraction(12345, 5));
console.log(unusualSubtraction(987654321, 9));

// Write a function to perform an unusual subtraction operation.

// Instructions
// In an unusual subtraction operation (n - k),

// If the last digit of n is greater than or equal to k, subtract k from the last digit of n and set k to 0.
// If the last digit of n is less than k, subtract the last digit of n from k, and remove the last digit from n and perform subtraction again.
// Repeat this until there are no more digits in n or k becomes 0.

// For example, for n = 452 and k = 6,

// The last digit in n is 2, which is less than k, so k becomes 6 - 2 = 4 and n becomes 45.
// The last digit of n is 5, which is greater than or equal to k, so 5 - 4 = 1 and k becomes 0, resulting in n = 451.
// Given n and k, perform unusual subtraction.

// Example
// For this input
// n = 789
// k = 3

// the result should be:
// 786

// Reason: The last digit of 789 (which is 9) is greater than 3, so subtracting 3 results in 786. Then we set the value of k to 0 and stop the subtraction.
