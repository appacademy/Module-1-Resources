/***********************************************************************
A shallow copy makes a copy of the reference to X (an array), into Y.
If we were to say something like this for example:
let x = [ [1], [2, 3] ];
let y = x.slice();

In this situation, Y, is a shallow copy of X. Here both X's and Y's VALUES point to the
same place in memory. But hold on you might say, "I just checked y === x is false", while
that is true, what if I told you that x[0] === y[0] is true? Both x[0] and y[0] evaluate to [1] AND
they also share the same memory address that gives us an array of just the number 1 inside.
So for the sake of testing that our addresses are different we will use nested arrays in our
examples to know if our deep duplication has succeeded. You might have already guessed that
since we used 'slice' in the example above that 'slice' creates a shallow copy, and you are
correct. For this problem we duplicate our original array so that our function returns a new
array with different memory addresses.

Write a function, deepDup(arr), that deeply duplicates a given array. Your duplicated array,
when compared to various indexes of the original array, should evaluate to false like below.

Examples:

let arr = [[1], [2, [3]]];
duped = deepDup(arr); // [[1], [2, [3]]]
arr[0] === duped[0] // false
arr[1] === duped[1] // false
arr[1][1] === duped[1][1] // false

Note:
if you compare a 1 dimensional array of numbers like below,
you will get 'true' because we are comparing numbers.
let x = [1, 2, 3];
let y = x.slice();
console.log(x[0] === y[0]) // true
***********************************************************************/

let arr1 = [[1], [2, [3]]];
let arr2 = arr1.slice() //shallow copy
arr2[0].push(9)
console.log(arr1) //[ [ 1, 9 ], [ 2, [ 3 ] ] ] because is shallow copy
console.log(arr2) //[ [ 1, 9 ], [ 2, [ 3 ] ] ]

function deepDup(arr) {
  /**
   * 1. Start with an empty array (our copy)
   * 2. Look through each element of argument/input array
   * 3. Check if each element is an array
   *  -3a. if element is array, make deep copy << key step
   *  -3b. push copy of deeply copied element onto our copy array
   * 4. Our copy array should be complete
   */

  let result = [] // 1.

  for (let i = 0; i < arr.length; i++) { //2.
    let ele = arr[i]
    if (Array.isArray(ele)) { // 3.
      let copy = deepDup(ele) // 3a.
      result.push(copy)  // 3b.
    }
    else {
      result.push(ele) // 3b. if not array, just push directly
    }
  }

  return result // 4.
}

const deepDupKimC = (arr) => {
  if (!arr.length) return []
  let duped = []
  if (Array.isArray(arr[0])) {
    duped.push(deepDup(arr[0]))
  } else {
    duped.push(arr[0])
  }
  return duped.concat(deepDup(arr.slice(1)))
}



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = deepDup;
} catch (e) {
  module.exports = null;
}