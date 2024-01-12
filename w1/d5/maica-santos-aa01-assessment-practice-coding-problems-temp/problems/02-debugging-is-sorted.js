/*
Your friend is working on a function called isSorted which checks if an
array of numbers is in order, sorted lowest to highest. The function should
return true if the array is in order, and false if it is not. Unfortunately, the
code is not working correctly. Help them fix it!
*/

function isSorted(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i - 1] ) {
      // console.log('prev',nums[i-1])
      return false;
    }
  }
  return true;
}

console.log(isSorted([1]));                // true
console.log(isSorted([1, 2, 3, 4, 5]));    // true
console.log(isSorted([2, 2, 4, 4]));       // true
console.log(isSorted([1, 2, 4, 3, 5, 6])); // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = isSorted;
