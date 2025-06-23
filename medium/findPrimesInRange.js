function findPrimesInRange(start, end) {
  const primes = [];

  for (let i = start; i <= end; i++) {
    if (isPrime(i)) primes.push(i);
  }

  return primes;
}

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(findPrimesInRange(10, 20));
console.log(findPrimesInRange(11, 23));
console.log(findPrimesInRange(2, 99));

// Write a function to find all prime numbers within a given range.

// Instructions
// Given two integers, start and end, return a list of prime numbers from start (inclusive) to end (inclusive).

// Hint: A number is considered as a prime number if it has only two factors: 1 and the number itself.

// Example
// For this input
// start = 10
// end = 20

// the result should be:
// [11, 13, 17, 19]

// Reason: The prime numbers between 10 and 20 are 11, 13, 17, and 19.

// Example
// For this input
// start = 11
// end = 23

// the result should be:
// [ 11, 13, 17, 19, 23 ]

// Reason: The prime numbers between 11 and 23 are 11, 13, 17, 19 and 23.
