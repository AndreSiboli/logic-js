function primesBelowNum(num) {
  const arr = [];

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) arr.push(i);
  }

  return arr;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(primesBelowNum(10));
console.log(primesBelowNum(15));
console.log(primesBelowNum(23));

// Write a function to find all prime numbers below a given number.

// Instructions
// For the given integer, return all prime numbers less than that.

// Hint: A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Example
// For this input
// num = 10

// the result should be:
// [2, 3, 5, 7]

// Reason: The prime numbers less than 10 are 2, 3, 5, and 7.
