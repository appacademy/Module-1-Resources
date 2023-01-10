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


function sumToN(num) {
  if (num < 0) return null //edge case
  if (num === 0) return 0 // base case
  return num + sumToN(num-1) //recursive step
}

// let x = 1
// console.log('first',x)
// console.log('second',x--)
// console.log('third',x)
// console.log('fourth',x-=1)
// console.log('fifth',--x)


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}