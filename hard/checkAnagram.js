function checkAnagram(str1, str2) {
  const standardize = (str) =>
    str.toLowerCase().replace(/\s/g, "").split("").sort().join("");

  if (standardize(str1) === standardize(str2)) return true;
  return false;
}

console.log(checkAnagram("listen", "silent"));
console.log(checkAnagram("aaaaaa", "aaaaa a"));

// Write a function to find if a string is an anagram of another.

// Instructions
// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase.

// For example, "heart" and "earth" are anagrams of each other. Both strings contain exactly the same characters 'e', 'a','r', 't', 'h'. You can rearrange the characters of "earth" to form "heart".

// If the given strings str1 and str2 are anagrams of each other, return true. Otherwise, return false.

// Example
// For this input

// str1 = "listen"
// str2 = "silent"

// the result should be:
// true

// Reason: The strings "listen" and "silent" are anagrams as they contain the same characters but in different order.
