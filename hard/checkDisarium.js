function checkDisarium(num) {
  const numbers = String(num).split("").map(Number);
  const sum = numbers.reduce((prev, curr, i) => prev + curr ** (i + 1), 0);

  return sum === num ? "Disarium" : "Not Disarium";
}

console.log(checkDisarium(175));
console.log(checkDisarium(0));
console.log(checkDisarium(10));

// Instructions
// A Disarium number is a number in which the sum of its digits powered with their respective position is equal to the original number.

// For example: 89 is a Disarium number because 8^1 + 9^2 = 89.

// Return "Disarium" if "num" is a disarium number Otherwise, return "Not Disarium".

// Example
// For this input
// num = 175

// the result should be:
// "Disarium"

// Reason: 175 is a Disarium number as 1^1 + 7^2 + 5^3 = 175.
