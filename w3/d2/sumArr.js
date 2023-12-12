/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/



function myFunc(num = 23){
  console.log(num)
}

// myFunc(10);
// myFunc();

// ! DEFAULT PARAM <---
function sumArray(arr, sum = 0) {

  // base case
  if(!arr.length) return sum;

  // recursive step
  // let shifted = arr.shift();
  let popped = arr.pop();
  sum += popped;
  // let [first, ...rest] = arr;
  // 1 [2, 3]
  // console.log(first, rest);
  // let first = arr[0]

  // recursive call
  return sumArray(arr, sum);

};
// console.log(sumArray([1, 2, 3])); //  6
/*
sumArray([1, 2, 3]) => sumArray([1, 2], 3);
sumArray([1, 2], 3) => sumArray([1], 5)
sumArray([1], 5)    => sumArray([], 6)
sumArray([], 6)     => return 6
sumArray([1], 5)    => 6
sumArray([1, 2], 3) => 6
sumArray([1, 2, 3]) => 6



sumArray([1, 2, 3]) => 6
Bottom of stack
*/

// console.log(sumArray([0, 1, -3])); //  -2
// console.log(sumArray([1, 2, 3, 4, 5])); // 15






