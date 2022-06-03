// Write a recursive function called `sumToN` that takes in a number and returns
// the sum of all the numbers from 0 to that number. Return null for any input
// number below 0.

// Edge case: if (num < 0) return null
// Base case: if (num === 0) return 0
// recursive step?: sumToN(num-1)
// result: num + recursive step

// Let's write it out!

function sumToN(num){
    if (num < 0) return null // edge case
    
    if (num === 0) return 0 // base case

    return num + sumToN(num-1) // recursive step
}

// What's going on here?
// As we write our recursive functions, we need to be aware of our data-set and
// how we'll be progressing through that data to reach the end.

// In this case, we're given some number `num`, want want to find the sum of
// all numbers up to `num`. It also specifies that we should return null for any
// input less than 0. That lets us know a few things:
//   -- given an input less than 0, we should return null (edge case)
//   -- we want to count backwards from our input number, adding all preceding
//      numbers into our sum (recursive step)
//      -- when we reach 0, we should return 0 as to not violate our edge case