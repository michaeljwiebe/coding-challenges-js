// The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits until n becomes a single digit integer.

// The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of its digits until n becomes a single digit integer.

// Create two functions that take an integer as an argument and:

// Return its additive persistence.
// Return its multiplicative persistence.
// Examples: Additive Persistence
// console.log(additivePersistence(1679583)); // ➞ 3
// 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
// 3 + 9 = 12
// 1 + 2 = 3
// It takes 3 iterations to reach a single-digit number.

// console.log(additivePersistence(123456)); // ➞ 2
// 1 + 2 + 3 + 4 + 5 + 6 = 21
// 2 + 1 = 3

// console.log(additivePersistence(6)); // ➞ 0
// Because 6 is already a single-digit integer.
// Examples: Multiplicative Persistence
// console.log(multiplicativePersistence(77)); // ➞ 4
// 7 x 7 = 49
// 4 x 9 = 36
// 3 x 6 = 18
// 1 x 8 = 8
// It takes 4 iterations to reach a single-digit number.

// console.log(multiplicativePersistence(123456)); // ➞ 2
// 1 x 2 x 3 x 4 x 5 x 6 = 720
// 7 x 2 x 0 = 0

// console.log(multiplicativePersistence(4)); // ➞ 0
// Because 4 is already a single-digit integer.

// console.log(additivePersistence(1679583)); // ➞ 3
// console.log(additivePersistence(123456)); // ➞ 2
// console.log(additivePersistence(6)); // ➞ 0

function additivePersistence (num, count = 0) {
  var sum = 0;
  var numArr = num.toString().split('');
  
  if (numArr.length === 1) {
    return count;
  }
  for (var n of numArr) {
    sum += Number(n);
  }
  console.log('SUM', sum);
  if (sum.toString().split('').length > 1) {
    count += 1;
    return additivePersistence(sum, count);
  }
  
  count++;
  console.log('count', count);
  return count;  
}

console.log(multiplicativePersistence(77)); // ➞ 4
console.log(multiplicativePersistence(123456)); // ➞ 2
console.log(multiplicativePersistence(4)); // ➞ 0

function multiplicativePersistence (num, count = 0) {
  var product = 0;
  var numArr = num.toString().split('');
  // console.log('numArr', numArr);
  if (numArr.length === 1) {
    return count;
  }
  for (var n of numArr) {
    product = product === 0 ? n : product * n;
    // console.log('product', product);
  }
  if (product.toString().split('').length > 1) {
    count++;
    return multiplicativePersistence(product, count);
  }
  count++;
  return count;
}