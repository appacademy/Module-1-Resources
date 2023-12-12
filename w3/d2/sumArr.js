/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

function sumArray(arr) {
  debugger;
  // base case
  if(!arr.length) return 0;

  // recursive step
  let shifted = arr.shift();
  // console.log(shifted);

  debugger;
  // recursive call
  return sumArray(arr) + shifted;

};
console.log(sumArray([1, 2, 3])); //  6
console.log(undefined === 0)

console.log(true)
console.log(0)
/*



sumArray([1, 2, 3]) => 6
Bottom of stack
*/

// console.log(sumArray([0, 1, -3])); //  -2
// console.log(sumArray([1, 2, 3, 4, 5])); // 15
