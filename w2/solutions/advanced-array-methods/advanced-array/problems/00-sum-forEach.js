/*
Write a function `sumForEach(arr)` that accepts an array as an arg.
The function should return the total sum of all values in the array.

Solve this using Array's `forEach()` method.

Examples:

console.log(sumForEach([4, 3, -1, 10])); // 16
console.log(sumForEach([6, 7, 2])); // 15
console.log(sumForEach([])); // 0
*/

let sumForEach = function(arr) {
  //!!START
  let sum = 0;

  arr.forEach(function(el) {
      sum += el;
  });

  return sum;
  //!!END
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sumForEach;
} catch (e) {
  module.exports = null;
}
