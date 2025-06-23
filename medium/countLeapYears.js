function countLeapYears(year1, year2) {
  const leapYears = [];

  for (let i = year1; i <= year2; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) leapYears.push(i);
  }

  return leapYears;
}

console.log(countLeapYears(1800, 1900));

// Write a function to calculate the number of leap years between two given years.

// Instructions
// A year is a leap year if,

// It is divisible by 4 and doesn't end with 00. For example, 2016 and 2024.
// However, if it is divisible by 400, then it is also a leap year. For example, 1600 and 2000.
// Return the number of leap years between year1 and year2, both being inclusive.

// Example
// For this input
// year1 = 2000
// year2 = 2020

// the result should be:
// 6

// Reason: There are 6 leap years between 2000 and 2020: 2000, 2004, 2008, 2012, 2016, and 2020.
