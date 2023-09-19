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

// starting point - n
function sumToN(n) {
  debugger;
  //base case
  if(n <= 0) return null;

  debugger;
  // recurse step
  return n + sumToN(n - 1)
}

/*
  sumToN(5) => 15
  Bottom of stack
*/

console.log(sumToN(3)) // returns 15
// cant add 3 to func(2) till we get a return value
// sumToN(3) => 3 + func(2)
// sumToN(2) => 2 + func(1)
// sumToN(1) => 1 + func(0)
// sumToN(0) => return 0 <- top of the stack
// sumToN(1) => 1 + 0 => 1
// sumToN(2) => 2 + 1 => 3
// sumToN(3) => 3 + 3 => 6

// console.log(sumToN(1))  // returns 1
// console.log(sumToN(9))  // returns 45
// console.log(sumToN(-8))  // returns null
