function rearrangeSpaces(text) {
  const splited = text.split(" ");
  const words = splited.filter((c) => c !== "");
  const spaces = (text.match(/\s/g) || []).length;

  return words.join(" ".repeat(spaces / (words.length - 1)));
}

console.log(rearrangeSpaces(" This  is  a   sentence "));
console.log(rearrangeSpaces("Thisisasentence"));


// Write a function to rearrange spaces between words in a sentence so that they are evenly distributed.

// Instructions
// Suppose the given string is " I love JS ".

// Here, when we adjust the spaces so that they are evenly distributed between the words based on the available space, we get 'I love JS'

// Return a string where the spaces between words are distributed as evenly as possible from left to right.

// Example
// For this input
// text = " This  is  a   sentence "

// the result should be:
// "This   is    a   sentence"

// Reason: The input string has 9 spaces and 4 words. The spaces are distributed evenly between the words, resulting in 3 spaces between each word.

// Example
// For this input
// text = "Learningwithprogramiz"

// the result should be:
// "Learningwithprogramiz"

// Reason: The input string has no spaces, hence, the expected output remains the same as it is.