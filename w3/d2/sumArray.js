/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

// start with a full array
function sumArray(arr) {
  // base case
  // empty array
  if (!arr.length) return 0;

  // recursive step
  // let [first, ...rest] = arr;
  // return first + sumArray(rest);

  // return arr[0] + sumArray(arr.slice(1));

  // let popped = arr.pop();
  // return popped + sumArray(arr);

  let shifted = arr.shift();
  return shifted + sumArray(arr);
}

console.log(sumArray([1, 2, 3])); //  6

// sumArray([0, 1, -3]); //  -2
// sumArray([1, 2, 3, 4, 5]); // 15
