/*******************************************************************************
Write a function `greaterCallbackValue` that accepts a value and two callbacks
as arguments. The function should pass the value to both callbacks and return the
result of the callback that is greater.

Examples:

let doubler = function (n) {
    return 2 * n;
}

let squarer = function (n) {
    return n * n;
}

console.log(greaterCallbackValue(5, doubler, squarer));     // 25
console.log(greaterCallbackValue(1, doubler, squarer));     // 2
console.log(greaterCallbackValue(9, Math.sqrt, doubler));   // 18
*******************************************************************************/

function greaterCallbackValue(val, cb1, cb2) {
  //!!START
  let res1 = cb1(val);
  let res2 = cb2(val);

  if (res1 > res2) {
    return res1;
  } else {
    return res2;
  }
  //!!END
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = greaterCallbackValue;
} catch (e) {
  return null;
}
