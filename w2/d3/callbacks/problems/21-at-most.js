/*******************************************************************************
Write a function `atMost` that accepts an array, a max number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
no more than `max` elements of the array that result in true when passed into the callback.

Examples:

let isPositive = function (n) {
    return n > 0;
};
let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
};

console.log(atMost([6, -2, 4, -1], 3, isPositive));                             // true
console.log(atMost([6, -2, 4, 1], 3, isPositive));                              // true
console.log(atMost([6, 2, 4, 1], 3, isPositive));                               // false
console.log(atMost(['boat', 'cat', 'car'], 1, startsWithA));                    // true
console.log(atMost(['boat', 'cat', 'car', 'academy'], 1, startsWithA));         // true
console.log(atMost(['boat', 'arc', 'cat', 'car', 'academy'], 1, startsWithA));  // false

*******************************************************************************/

function atMost(array, max, cb) {
  let count = 0;
  array.forEach(function (el) {
    if (cb(el)) {
      count++;
    }
  });
  return count <= max;
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = atMost;
} catch (e) {
  return null;
}