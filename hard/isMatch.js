function isMatch(s, p) {
  if (p.startsWith("*")) p = `.${p}`;
  const regex = new RegExp(`^${p}`, "g");

  return regex.test(s);
}

console.log(isMatch("aa", "a*"));
console.log(isMatch("abcde", "a*c"));
console.log(isMatch("abcde", "*a*b"));
console.log(isMatch("abcde", "*"));

// Write a function to check if a string matches the given pattern with wildcards.

// Instructions
// A pattern with wildcards means a pattern with support for '?' and '*'. Here,

// '?' matches any single character.
// '*' matches any sequence of characters.
// For example, the pattern "a*d" means 'a' followed by any sequence of characters ending with 'd'.

// Similarly, the pattern "a?cd" means 'a' followed by any single character, then 'cd'.

// Given an input string s and a pattern p, implement wildcard pattern matching.

// If p matches s, return true. Otherwise return false.

// Note: The matching should cover the entire input string (not just a partial match).

// Example
// For this input
// s = "aa"
// p = "a*"

// the result should be:
// true

// Reason: "a*" means 'a' followed by any sequence of characters. So it can match "aa". Hence, return true.

// Example
// For this input
// s = "abcde"
// p = "a*c"

// the result should be:
// false

// Reason: The pattern "a*c" matches 'a' followed by any characters ending in 'c'. While it matches "abc" in "abcde" it does not cover the entire string so the expected output is false.
