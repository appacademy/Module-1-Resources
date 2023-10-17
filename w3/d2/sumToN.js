/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/

/*
  1. Base case -
  2. Recursive step -
  null + 1 + 2 + 3 = 6
*/

console.log(null + 0)
function sumToN(n) {

  if(n < 0) return null;
  // if(n === 0) return 1;

  return sumToN(n - 1) + n;
}

//sumToN(1);

console.log(sumToN(1))  // returns 1
console.log(sumToN(9))  // returns 45
console.log(sumToN(-8))  // returns null
