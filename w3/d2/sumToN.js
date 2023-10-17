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

// console.log(null + 0)
function sumToN(n) {

  if(n < 0) return null;
  // if(n === 1) return 1;

  return sumToN(n - 1) + n;
}

let res = sumToN(3)
let res1 = sumToN(2)
let res2 = sumToN(1)
let res3 = sumToN(0);
// console.log(res + res1 + res2 + res3);
// console.log(sumToN(3));

/*
Bottom Of Stack
sumToN(3) => sumToN(2) + 3;
sumToN(2) => sumToN(1) + 2;
sumToN(1) => sumToN(0) + 1;
sumToN(0) => sumToN(-1) + 0;
sumToN(-1) => null - Top Of Stack
sumToN(0) => 0
sumToN(1) => 1
sumToN(2) => 3
sumToN(3) => 6
Bottom Of Stack
*/
// console.log(sumToN(1))  // returns 1
// console.log(sumToN(9))  // returns 45
// console.log(sumToN(-8))  // returns null
