// I know I can use only:
// num.toLocaleString()
// But it's not a logic, just a function in base javascript

function formatWithCommas(num) {
  const split = num.toString().split("").reverse();
  let str = "";

  for (let i = 0; i < split.length; i++) {
    if (i > 0 && i % 3 === 0) str += ",";
    str += split[i];
  }

  return str.split("").reverse().join("");
}

console.log(formatWithCommas(6458832495));
console.log(formatWithCommas(1234567));

// Write a function to format a number using thousands separators.

// Instructions
// Return a new string by formatting num with commas , between every group of thousands.

// For example, given 6458832495, the output is "6,458,832,495".

// Example
// For this input
// num = 1234567

// the result should be:
// "1,234,567"

// Reason: 1234567 is formatted as "1,234,567", with commas separating every group of thousands.
