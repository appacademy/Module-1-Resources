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

  if(arr.length === 0) return 0;

  // let [first, ...rest] = arr;

  let shifted = arr.shift();

  return shifted + sumArray(arr);
}


// console.log(sumArray([0, 1, -3])); //  -2
/*
Bottom Of Stack
sumArray([0, 1, -3]) => 0 + sumArray([1, -3])
sumArray([1, -3])    => 1 + sumArray([-3])
sumArray([-3])       => -3 + sumArray([]);
sumArray([])         => return 0 - Top Of Stack
sumArray([-3])       => -3;
sumArray([1, -3])    => -2;
sumArray([0, 1, -3]) => -2;
Bottom Of Stack
*/
// console.log(sumArray([1, 2, 3, 4, 5])); // 15
