function generateEmptySquareSequence(n) {
    let sequence = []

    for (let i = 1; i <= n; i++) {
        sequence.push(i ** 2 - 1)        
    }

    return sequence
}

console.log(generateEmptySquareSequence(5))
console.log(generateEmptySquareSequence(6))
console.log(generateEmptySquareSequence(4))

// Write a function to generate the first n terms of the empty square sequence.

// Instructions
// An empty square number is a number which is one less than a perfect square.

// The empty square sequence starts with 0 (1 ^ 2 - 1), then 3 (2 ^ 2 - 1), then 8 (3 ^ 2 - 1), and so on.

// Given an integer n, return the empty square sequence till n.

// Example
// For this input
// n = 5

// the result should be:
// [0, 3, 8, 15, 24]

// Reason: The first 5 terms of the empty square sequence are: 0 (1 ^ 2 - 1), 3 (2 ^ 2 - 1), 8 (3 ^ 2 - 1), 15 (4 ^ 2 - 1) and 24 (5 ^ 2 - 1).
