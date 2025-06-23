function findLargestGap(arr) {
  let largestGap = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    const count = Math.abs(arr[i] - arr[i + 1]);
    largestGap = Math.max(largestGap, count);
  }

  return largestGap;
}

console.log(findLargestGap([3, 5, 9, 10, 8]));
console.log(findLargestGap([1, 3, 8, 9]));

// Write a function to find the largest gap between two consecutive numbers.

// Instructions
// Return the largest gap between two consecutive numbers in the array arr.

// For example, given [3, 5, 9, 10, 8], the difference between consecutive numbers are 2 (3 - 5), 4 (5 - 9), 1 (9 - 10), and 2 (10 - 8). Here, the largest difference is 4.

// Example
// For this input
// arr[] = [1, 3, 8, 9]

// the result should be:
// 5

// Reason: The differences between consecutive numbers are 2 (1 - 3), 5 (3 - 8), and 1 (8 - 9). The largest difference is 5.
