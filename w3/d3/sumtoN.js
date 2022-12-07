











function sumToN(n) {
  //base case
  if(n === 0) return n;
  //we can have two base cases
  if(n < 0) return null;

  return n + sumToN(n - 1);
}


console.log(sumToN(3)) // returns 6
// sumToN(3) => 3 + func(2)
  //sumToN(2) => 2 + func(1)
    //sumToN(1) => 1 + func(0)
      //sumToN(0) => return 0
    //sumToN(1) => 1 + 0 => 1
  //sumToN(2) => 2 + 1 => 3
//sumToN(3) => 3 + 3 => 6


// console.log(sumToN(1))  // returns 1
// console.log(sumToN(9))  // returns 45
// console.log(sumToN(-8))  // returns null
