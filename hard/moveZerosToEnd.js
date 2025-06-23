function moveZerosToEnd(arr) {
  const withoutZero = arr.filter((n) => n !== 0);
  const howManyZeros = arr.filter((n) => n === 0);

  return [...withoutZero, ...howManyZeros];
}

console.log(moveZerosToEnd([0, 1, 0, 3, 12]));

// Write a function to move all zeros in an array to the end.

// Instructions
// Move all zeros to the end of the array while maintaining the relative order of the non-zero elements.

// For example, consider the array [0, 1, 0, 3, 12].

// After moving all zeros to the end while keeping the relative order of the non-zero elements, the result would be [1, 3, 12, 0, 0].

// Here, the non-zero elements (1, 3, 12) maintain their order, and the zeros are shifted to the end of the array.

// Return the array containing all zeros at the end.

// Example
// For this input
// arr[] = [10, 0, 5, 20, 0, 12, 0]

// the result should be:
// [10, 5, 20, 12, 0, 0, 0]

// Reason: The zeroes at index 1, 4, and 6 are moved to the end, resulting [10, 5, 20, 12, 0, 0, 0].

// Example
// For this input
// arr[] = [0, 1, 0, 3, 12]

// the result should be:
// [1, 3, 12, 0, 0]

// Reason: The zeroes at index 0 and 2 are moved to the end, resulting [1, 3, 12, 0, 0].
