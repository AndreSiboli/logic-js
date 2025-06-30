function rowSum(matrix) {
  return matrix.map((value) => value.reduce((prev, curr) => prev + curr, 0));
}

console.log(rowSum([[10, 20], [30, 40], [50, 60]]))
console.log(rowSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

// Write a function to calculate the sum of each row in a 2D list.

// Instructions
// Suppose the given 2D list is: [[10, 20], [30, 40], [50, 60]].

// There are three rows in this list and their individual sum are:

// Row 1 [10, 20]: sum is 10 + 20 = 30
// Row 2 [30, 40]: sum is 30 + 40 = 70
// Row 3 [50, 60]: sum is 50 + 60 = 110
// So our expected output array would be [30, 70, 110].

// Return an array containing the sums of the elements in each respective row of a 2D list.

// Example
// For this input
// matrix[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// the result should be:
// [6, 15, 24]

// Reason: The sum of elements in the first row is 6, in the second row is 15, and in the third row is 24. Hence, the output is [6, 15, 24].
