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

  // base case 1
  // if(n === 0) return 0;
  // // base case 2
  // if(n < 0) return null;
  if(n <= 0) return null;

  // console.log(n);

  // recursive call + recursive step
  return sumToN(n - 1) + n;

}
console.log(sumToN(5)) // returns 15
console.log(null + 10)// 15
/*
sumToN(5) => sumToN(4) + 5
sumToN(4) => sumToN(3) + 4
sumToN(3) => sumToN(2) + 3
sumToN(2) => sumToN(1) + 2
sumToN(1) => sumToN(0) + 1
sumToN(0) => return 0
sumToN(1) => 0 + 1 = 1
sumToN(2) => 1 + 2 = 3
sumToN(3) => 3 + 3 = 6
sumToN(4) => 6 + 4 = 10
sumToN(5) => 10 + 5 = 15
*/

// console.log(sumToN(1))  // returns 1
// console.log(sumToN(9))  // returns 45
// console.log(sumToN(-8))  // returns null
