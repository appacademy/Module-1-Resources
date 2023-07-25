/*

Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null

*/

/*
  What is our base case?
  What is our recursive step?
*/

// Base case
// * if(n < 0) return null
// * if(n === 0)
// * we are stopping when the number is because we want to gain access to every number
// Recursive step
// * n - 1
// * we want access to every number so subtract by 1

function sumToN(n) {
  // base case
  if (n === 0) return n;

  // * we can have two base cases
  if (n < 0) return null;

  // recursive step
  return n + sumToN(n - 1);
}

function sumToN(n) {
  debugger;
  if (n <= 0) return null;

  debugger;

  let res = sumToN(n - 1);
  debugger;
  return n + res;
}

// console.log(sumToN(5)); // returns 15
// console.log(sumToN(1)); // returns 1
// console.log(sumToN(9)); // returns 45
// console.log(sumToN(-8)); // returns null

console.log(sumToN(3)); // 6
// sumToN(3) => 3 + sumToN(2)
// sumToN(2) => 2 + sumToN(1)
// sumToN(1) => 1 + sumToN(0)
// sumToN(0) => return null
// sumToN(1) => 1 + null = 1
// sumToN(2) => 2 + 1    = 3
// sumToN(3) => 3 + 3    = 6

console.log(10 + null); // 10
// ! null is treated as zero when adding

// Recursive case
function sumToN(n) {
  // base case
  if (n === 0) return 0;

  // recursive case
  if (n > 0) {
    return n + sumToN(n - 1);
  }

  return null;
}
