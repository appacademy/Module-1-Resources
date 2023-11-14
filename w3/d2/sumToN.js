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
  if(n <= 0) return null;
  // base case 2
  // if(n === 0) return 0;

  return n + sumToN(n - 1);
};

// console.log(null + 12);// 12
console.log(sumToN(0))// null
console.log(sumToN(5)) // returns 15
/*
Bottom of stack
sumToN(5) =>  5 + sumToN(4)
sumToN(4) =>  4 + sumToN(3)
sumToN(3) =>  3 + sumToN(2);
sumToN(2) =>  2 + sumToN(1)
sumToN(1) =>  1 + sumToN(0);
sumToN(0) =>  null <- top of stack
sumToN(1) =>  1 + null = 1;
sumToN(2) =>  2 + 1 = 3
sumToN(3) =>  3 + 3 = 6
sumToN(4) =>  4 + 6 = 10
sumToN(5) =>  5 + 10 = 15
bottom of stack
*/

