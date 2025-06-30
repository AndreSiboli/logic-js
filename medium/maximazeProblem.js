function maximizeProblem(arr) {
  return arr.map((num, i) => num * i).reduce((prev, curr) => prev + curr, 0);
}

console.log(maximizeProblem([10, 15, 20, 25]));
console.log(maximizeProblem([13, 30, 20, 45, 5]));

// Write a function to maximize the sum of array elements.

// Instructions
// Multiply each element of a given array by its index and return the total sum.

// For example, for an array [10, 15, 20, 25], the calculation would be:

// 10 * 0 = 0
// 15 * 1 = 15
// 20 * 2 = 40
// 25 * 3 = 75
// Here, 0, 1, 2 and 3 are the indexes for the given array elements respectively.

// Hence, total sum = 0 + 15 + 40 + 75 = 130

// Example
// For this input
// arr[] = [13, 30, 20, 45, 5]

// the result should be:
// 40

// Reason: Multiplying each element of arr by its index, we get

// 13 x 0 = 0
// 30 x 1 = 30
// 20 x 2 = 40
// 45 x 3 = 135
// 5 x 4 = 20

// Now adding the new values results in 0 + 30 + 40 + 135 + 20 = 225.
