function findMedian(arr) {
  if (arr.length % 2 === 1) return arr[Math.floor(arr.length / 2)];
  return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
}

console.log(findMedian([1, 3, 3, 6, 7, 8, 9]));
console.log(findMedian([1, 3, 3, 7, 7, 7, 8, 9]));

// Write a function to find the median of an array.

// Instructions
// Median is the middle value in a sorted integer list.

// For example, in the array [20, 30, 40, 50, 60], 40 is the median.

// However, if the size of the list is even, there is no exact middle value. So, the median is the average of the two middle values.

// For example, in the array [2, 3, 5, 10], median is the average of the two middle values, 3 and 5 i.e, (3+5)/2= 4.

// Example
// For this input
// arr[] = [1, 3, 3, 6, 7, 8, 9]

// the result should be:
// 6

// Reason: The sorted array is [1, 3, 3, 6, 7, 8, 9]. The number 6 lies in the middle and hence it's the median.