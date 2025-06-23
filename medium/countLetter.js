function countLetters(word) {
  const countedLetters = {};
  for (let i = 0; i < word.length; i++) {
    if (countedLetters[word[i]]) countedLetters[word[i]] += 1;
    else countedLetters[word[i]] = 1;
  }

  return countedLetters;
}

console.log(countLetters("banana"));
console.log(countLetters("apple"));

// Write a function to count the number of occurrences of each letter in a given word.

// Instructions
// Suppose the given string is "banana". The letter 'b' appears once, 'a' appears three times, and 'n' appears twice.

// So our expected output would be {b: 1, a: 3, n: 2}.

// Return an object where keys are the letters and values are their counts.

// Example
// For this input
// word = "apple"

// the result should be:
// {a: 1, p: 2, l: 1, e: 1}

// Reason: The word "apple" contains one 'a', two 'p's, one 'l', and one 'e'. So, the output is {a: 1, p: 2, l: 1, e: 1}.