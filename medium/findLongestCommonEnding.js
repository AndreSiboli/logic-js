function findLongestCommonEnding(str1, str2) {
  const format = (str) => str.split("").reverse();
  const arr1 = format(str1);
  const arr2 = format(str2);
  let endStr = "";

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) break;
    endStr += arr1[i];
  }

  return endStr.split('').reverse().join('');
}

console.log(findLongestCommonEnding('hello', 'world'))
console.log(findLongestCommonEnding('programming', 'gaming'))
console.log(findLongestCommonEnding('goodcharacter', 'badcharacter'))

// Write a function to find the longest common ending in two strings.

// Instructions
// A longest common ending between two strings refers to the longest sequence of characters that appears at the end of both strings.

// For example, the given two strings are "goodcharacter" and "badcharacter". The longest common ending between these two is "character".

// Given two strings, str1 and str2, return the longest common ending between them.

// If there is no common ending, return "".

// Example
// For this input

// str1 = "programming"
// str2 = "gaming"

// the result should be:
// "ming"

// Reason: The longest common ending in "programming" and "gaming" is "ming".

// Example
// For this input

// str1 = "hello"
// str2 = "world"

// the result should be:
// ""

// Reason: There is no common sequence of characters at the end of "hello" and "world", hence the longest common ending is an empty string "".
