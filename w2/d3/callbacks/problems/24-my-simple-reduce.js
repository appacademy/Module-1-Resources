/*******************************************************************************
Write a function `mySimpleReduce` that accepts an array and a callback as arguments.
The function should mimic the behavior of the built in Array.reduce, utilizing the
first element of the array as the default accumulator.

In other words, the function should begin with the first element of the array as
the accumulator and call the callback for each of the remaining elements in the array,
passing in the current accumulator and current element into the callback. Upon calling the callback,
the accumulator should be set to the result of the callback.

Examples:

let result1 = mySimpleReduce([5, 3, 2, 4], function(sum, el) {
    return sum + el;
});
console.log(result1); // 14

let result2 = mySimpleReduce([4, 6, 2], function(product, el) {
    return product * el;
});
console.log(result2); // 48

let result3 = mySimpleReduce([4, 6, 2, 8, 3], function(max, el) {
    if (el > max) {
        return el;
    } else {
        return max;
    }
});
console.log(result3); // 8

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
- Explain, but don't code, how you would refactor this problem to take in an
  optional initial accumulator
*******************************************************************************/

function mySimpleReduce(array, cb) {
  let accumulator = array[0];
  array.slice(1).forEach(function (el) {
    accumulator = cb(accumulator, el);
  });
  return accumulator;
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = mySimpleReduce;
} catch (e) {
  return null;
}