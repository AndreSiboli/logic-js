function maxSubArray(nums) {
  if (nums.length < 1) return 0;

  let biggestSequence = nums[0];
  let currSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(nums[i], currSum + nums[i]);
    biggestSequence = Math.max(currSum, biggestSequence);
  }

  return biggestSequence;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1, 2, 3, -2, 5]));

// Write a function to find the maximum sum of a contiguous subarray.

// Instructions
// A contiguous subarray consists of one or more elements located next to each other in the sequence.

// For example, in the array [8, -19, 5, -4, 20],

// [5, -4, 20] is a contiguous subarray.
// [-19, 20] is not a contiguous subarray because the elements are not located next to each other.
// The array [8, -19, 5, -4, 20] itself is also a contiguous subarray.
// Among all the contiguous subarrays, [5, -4, 20] yields the highest sum, i.e, 5 - 4 + 20 = 21.

// Return the maximum sum of a contiguous subarray within the arr array.

// Example
// For this input
// nums[] = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// the result should be:
// 6

// Reason: The contiguous subarray with the largest sum is [4,-1,2,1], which has a sum of 6.
