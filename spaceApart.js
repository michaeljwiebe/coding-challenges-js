// Create a function that takes an arr and returns the total amount of space between the two "1"s.

// Examples
console.log(spaceApart([1, 0, 1, "1", 4, 3, 2, 3, 2, "1"])); // ➞ 14
console.log(spaceApart(["1", 9, 20, 38, "1"])); // ➞ 67
console.log(spaceApart([3, 2, 9, "1", 0, 0, -1, "1"])); // ➞ "invalid"

// Notes
// Return "invalid" if a negative number exists inside arr or if there is more/less than two "1"s. Ignore any other string inside arr.

// opt 1
// use regex to find how many "1" there are = > return 'invalid' if more or less than 2
// use regex to find negative numbers?
// add numbers between "1"s - split "1"s and use the second value if there is one

// opt 2
// iterate over values looking for "1"
// add numbers after "1" and until next "1"
// if negative return 'invalid'
// if >2 "1"s return 'invalid

function spaceApart (arr) {
  var ones = 0;
  var spaceBetween = 0;
  for (var num of arr) {
    if (num === "1") {
      ones++;
    }
    if (ones === 1 && typeof num !== 'string') {
      spaceBetween += num;
    }
    if (num < 0) return 'invalid';
  }
  if (ones !== 2) return 'invalid';
  return spaceBetween;
}