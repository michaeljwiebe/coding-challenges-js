// Create a function that will recursively count the number of digits of a number. Conversion of the number to a string is not allowed, thus, the approach is recursive.

// Notes
// All inputs are integers but some are in exponential form, deal with it accordingly.
// You are expected to come up with a solution using the concept of recursion or the so-called recursive approach.
// Check out the Resources for more topics about recursion to read on (if you aren't familiar with it yet or haven't fully understood the concept behind it before taking up this challenge or unless otherwise).
// An iterative version of this challenge can be found via this link.
// A collection of challenges alike can be found via this link.

// divide num by 10 each time the fn is called, use a counter to determine number of digits

console.log(digitsCount(4666)); // ➞ 4
console.log(digitsCount(544)); // ➞ 3
console.log(digitsCount(121317)); // ➞ 6
console.log(digitsCount(0)); // ➞ 1
console.log(digitsCount(1)); // ➞ 1
console.log(digitsCount(12345)); // ➞ 5
console.log(digitsCount(1289396387328)); // ➞ 13

function digitsCount(num, count = 0) {
  if (num === 0) {
    return 1;
  } else if (num < 1) {
    return count;
  } else {
    count++;
    return digitsCount(num / 10, count);
  }
}