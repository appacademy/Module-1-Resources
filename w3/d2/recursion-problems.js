/*



  sumToN


*/

// Base case
// recursive step
function sumToN(number) {

  // base case
  // edge cases
  if(number < 0) return null;

  //recursive step
  return number + sumToN(number - 1);
}

// console.log(null + 2);// 2

console.log(sumToN(3));// 6
// sumToN(3) => 3 + sumToN(2)
// sumToN(2) => 2 + sumToN(1)
// sumToN(1) => 1 + sumToN(0)
// sumToN(0) => return null
// sumToN(1) => 1 + null = 1
// sumToN(2) => 2 + 1    = 3
// sumToN(3) => 3 + 3    = 6


// console.log(sumToN(1))// returns 1
// console.log(sumToN(9))// returns 45
// console.log(sumToN(-8))// returns null



// sumArray

