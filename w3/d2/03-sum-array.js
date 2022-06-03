// Write a recursive function called `sumArray` that takes an array of integers
// and returns the value of all the integers added together. Your array may
// include a mix of positive and negative integers!

// Considering our last solve, how can we construct our approach?
// What is our recursive step? (how will we progress through the problem?)
// What is our base case? (when can we no longer take our recursive step?)

// recursive step: slice our array at index 1, so that we have everything except
// what is in the first position
// base case: when our function is given an array with no constituent elements 
// (length === 0 ) we will return 0 (since that won't affect our sum)
// Plan:
// -- Define function
// -- function must account for base case to avoid stack overflow
// -- hold reference to our first value in some variable
// -- hold our recursive step in some variable
// -- return first value added to  what comes back from recursive step

// Solve with debuggers added: 
const sumArray = arr => {
    debugger
    if (arr.length === 0) return 0
    const first = arr[0]
    debugger
    const recursiveStep = sumArray(arr.slice(1))
    debugger
    return first + recursiveStep
  }  

// If we mutated our input, how could rewrite our function to work similarly?