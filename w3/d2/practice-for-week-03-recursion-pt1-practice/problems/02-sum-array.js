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
  debugger
  if (arr.length === 0) return 0 //base case
  let first = arr[0] //take a single element
  debugger
  let recursiveStep = sumArray(arr.slice(1)) //subarray starting at index 1
  debugger
  return first + recursiveStep //first element + sum of remaining array
}

function sumArrayMutate(arr) {
  debugger
  if (arr.length === 0) return 0 //base case
  let single = arr.pop() //take a single element AND step (shift also works)
  debugger
  let recursiveCall = sumArray(arr) //subarray starting at index 1
  debugger
  return single + recursiveCall //single element + sum of remaining array
}

sumArray([1, 2, 3]); //  6

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}