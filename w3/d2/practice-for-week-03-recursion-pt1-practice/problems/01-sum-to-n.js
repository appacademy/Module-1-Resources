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

/*                      boolean ? truthy : falsy                      */
// const sumToN = (n) => n<=0 ? null : sumToN(n - 1) + n;

const sumToN = (n) => {
  if (n <= 0) return null;
  let result = sumToN(n-1) + n;
  return result;
}

//sumtoN(5) => 5 + func(10)- cannot add 5 until it has returned
  // sumtoN(4) => 4 + func(6)
    // sumtoN(3) => 3 + func(3)
      // sumToN(2) => 2 + func(1)
        // sumToN(1) => 1 + func(0)
          // sumToN(0) => return 0 so we can start popping off the stack and resolve the return values

console.log(sumToN(5)); // returns 15
// console.log(sumToN(1));  // returns 1
// console.log(sumToN(9));  // returns 45
// console.log(sumToN(-8));  // returns null

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
