/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

// base case - array is empty (array.length === 0)
// recursive step - shift, pop, slice, rest, spread
// start - full array -> [1,2,3]
function sumArray(arr) {
  debugger;
  if (arr.length === 0) return 0;

  // let first = arr.pop();
  // let last = arr.shift()

  // console.log(last, arr);
  // let [first, ...rest] = arr;
  let first = arr[0]
  debugger;
  let sec = sumArray(arr.slice(1));
  debugger;
  return first + sec;
}

console.log(sumArray([1, 2, 3])); //  6
/*
sumArray([1, 2, 3]) => 1 + sumArray([2, 3]);
sumArray([2, 3])    => 2 + sumArray([3]);
sumArray([3])       => 3 + sumArray([]]);
sumArray([]])       => return 0
sumArray([3])       => 3 + 0 = 3;
sumArray([2, 3])    => 2 + 3 = 5;
sumArray([1, 2, 3]) => 6;
*/
