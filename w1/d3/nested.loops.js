/*
Nested Loops

  Sometimes a single loop is just nopt enough to acess a nested array
  What youll have to do, is a loop within a loop

  example

*/

// for(let i = 0; i < 4; i++) {//outer loop is controlled by i
//   // console.log(i)
//   for(let j = 0; j < 3; j++) {//inner loop is controlled by j
//     console.log(i, j)//
//   }
// }

// outer loop pauses until inner loop can complete
// Since our inner loop is defined within the bounds of our outer
// loop, the full cycle of our inner loop is part of each individual iteration
// of our outer loop. Let's explore how we can use this a bit more practically


//given 2d matrix - nested array
let matrix = [[1,2,3],
              [3,4,5]];

              // let oneDArr = [1,2,3]
//iterate through the matrix get all the numbers

// console.log(matrix.length)//2


for(let i = 0; i < matrix.length; i++) {
  // console.log(i)
  // console.log(matrix[i]);
  let subArr = matrix[i];
  // let sum = 0;
  for(let j = 0; j < subArr.length; j++) {
    // console.log(subArr[j]);
    let number = subArr[j];
    console.log(number)
    // sum += num
  }
  // return sum;
}


/*
Write a function that intakes an array of numbers and a targetSum.
The function should return true
if ANY combination of 2 numbers in the array equals the targetSum.
Can be the same number...

Similar to pairs in array!
*/

/*
Polyas Framework
  1.Understand the problem
  2.Make a plan
  3.Execute the plan
  4.Refactor

  Understand the Problem
  Input: an array of numbers => [1,2,3] and a target sum => 4
  Output: a boolean => true
  * if ANY combination of 2 numbers in the array equals the targetSum

  Make a plan
  1.define a function call it twoSum, takes an array of nums, and a targetSum
  2.make a for loop, iterate starting from 0 up to the nums arrays.length, increment by one
  3.create a var to hold array[i] -  we have a number to add to anotother number
  4.create a another nested for loop, start from j, j up array.length;increment by one
  5.create a var to hold array[j] -  we have a number to add to anotother number
    - so now we have two numbers to compare to each other against the targetSum
    -write a condtion to check if the two numbers add up to the target sum
      -if they do, return true
  6.if we exit the for loops without returning true, there is no match, therefore return false;
*/
