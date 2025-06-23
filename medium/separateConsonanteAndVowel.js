function separateVowelsConsonants(str) {
  const consonantRegex = /[b-df-hj-np-tv-z]/i;
  const vowelRegex = /[aeiou]/i;
  const arr = ["", ""];

  for (let i = 0; i < str.length; i++) {
    const el = str[i];

    if (vowelRegex.test(el)) arr[0] += el;
    else if (consonantRegex.test(el)) arr[1] += el;
  }

  return arr;
}

console.log(separateVowelsConsonants("Hello, World!"));

// Write a function that returns an array with two elements: vowels and consonants from the string.

// Instructions
// Given a string, returns an array with two elements: the first containing all the vowels from the string and the second containing all the consonants.

// Remember that the characters should appear in the order they occur in the original string.

// Also ignore the non-alphabet characters, and preserve the case of each character.

// For example, consider the string "Good Morning!". Here, the vowels and the consonants in the order they appear are:

// vowels - 'o', 'o', 'o' and 'i'
// consonants - 'G', 'd', 'M', 'r', 'n', 'n', 'g'
// So the resulting array is ["oooi", "GdMrnng"].

// Example
// For this input
// str = "Hello, World!"

// the result should be:
// ["eoo", "HllWrld"]

// Reason: In the string "Hello, World!", vowels appear in the order "eoo" and consonants appear in the order "HllWrld".
