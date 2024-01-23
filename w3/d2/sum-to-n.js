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


function sumToN(n) {
  if (n <= 0) {
    return null
  }

  return n + sumToN(n - 1);
}


console.log(sumToN(5)) // returns 15
/*
sumToN(0) => return null/0
sumToN(1) => 1
sumToN(2) => 3
sumToN(3) => 6
sumToN(4) => 10

sumToN(5) => 15
*/
console.log(sumToN(1))  // returns 1
console.log(sumToN(9))  // returns 45
console.log(sumToN(-8))  // returns null
// console.log(null + 10);// 10
