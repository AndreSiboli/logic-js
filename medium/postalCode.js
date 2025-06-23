function validatePostalCode(postalCode) {
  const regex = /^[1-9][0-9]{5}$/;
  return regex.test(postalCode) ? "Valid" : "Invalid";
}

console.log(validatePostalCode("456087"));
console.log(validatePostalCode("12a456"));
console.log(validatePostalCode("012345"));


// Write a function to validate a postal code.

// Instructions
// A valid postal code is a six digit number (first digit must not be zero) that does not contain any alphabets or special characters. For example,

// 987654, 456787 are valid postal codes.
// 012345, 1234567, 12a456, 1234-56 are invalid because they violate the rules: first digit zero, over six digits, non-digit characters, and inclusion of special characters, respectively.
// Given a string postalCode, return "Valid" if it is a valid postal code. Otherwise, return "Invalid".

// Example
// For this input
// postalCode = "123456"

// the result should be:
// "Valid"

// Reason: The string "123456" is a six digit number and does not contain any alphabets or special characters. Also, the first digit is not zero. Therefore, it's a valid postal code.


