/*


  Nested Loops!
  - Sometimes a single loop is not enough to access every element
  - in that case you may be need write a loop within a loop

*/

for (let i = 0; i < 4; i++) {
  //i controls the flow of the outer loop
  // console.log(i)
  for (let j = 0; j < 3; j++) {
    //j controls the flow of the inner loop
    // console.log(i, j)
  }
}
//outer loop pauses until inner loop can complete
//since our inner loop is defined within the bounds of outer loop
//the full cycle of our inner loop is part of each individual iteration

let matrix = [
  ["a", "b", "c"],
  ["d", "e", "f"],
];
// console.log(matrix.length)

for (let i = 0; i < matrix.length; i++) {
  // console.log(matrix[i]);
  let subArr = matrix[i];
  for (let j = 0; j < subArr.length; j++) {
    // console.log(subArr[j])
  }
}

/*
Write a function that intakes an array of numbers and a targetSum.
The function should return true
if ANY combination of 2 numbers in the array equals the targetSum.
Can be the same number...

Similar to pairs in array!
*/

// Understand the problem
// Make a Plan
// Execute the plan
// Refactor

/*
  Understand the problem!
    * to see if any two numbers in an array add up to the target sum
    Input: array and a num, => [1,2,3], 4
    Output: a boolean, => true
    * how do i get from my input to my output?

  Make a plan!
  1. define a function that take an nums array and a target sum
  2. iterate through the nums array to gain access to all the numbers
  3. As we iterate, we will create a nested loop which while iterate through all the numbers again
  4. As we iterate through our inner loop, we can take the num from the first loop and add it to the num from the second loop
  5. create a condition that checks, if the two numbers add up to the target sum, if they do return true
  6. if we complete the entirety of our loops, we can assume no value adds up to the sum, therefore return false;

*/

//Execute the plan
//1. define a function that take an nums array and a target sum
function twoSum(nums, targetSum) {
  for (let i = 0; i < nums.length; i++) {
    let nums1 = nums[i];
    // console.log(nums1)
    for (let j = i + 1; j < nums.length; j++) {
      let nums2 = nums[j];
      console.log(nums1, nums2)
      if (nums1 + nums2 === targetSum) {
        return true;
      }
    }
  }
  return false;
}

console.log(twoSum([1, 2, 3], 4));
