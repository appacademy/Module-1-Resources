// Nested Loops
// Sometimes a single loop won't quite give you enough pointers to fully work
// your way through a given data set. In those cases, we can consider writing a 
// loop within a loop to accomplish our tasks. Let's take a look at a simple
// setup below:
for (let i = 0; i < 4; i++) { // outer loop controlled by i
    for (let j = 0; j < 3; j++) { // inner loop controlled by j
        console.log(i, j) // before running the code, what do we expect to happen?
    }
}
// As you can see, our outer loop is "paused" in execution until our inner loop
// can complete. Since our inner loop is defined within the bounds of our outer
// loop, the full cycle of our inner loop is part of each individual iteration
// of our outer loop. Let's explore how we can use this a bit more practically


let arr = [
    ["a", "b", "c"],
    ["d", "e"]
];
// Here we're given a two dimensional array, and we want to log each individual
// element of all the sub arrays.
console.log(arr.length) // Notice the length of our array is 2
                        // This is because it has 2 subarrays as elements
for (let i = 0; i < arr.length; i++) { // Outer loop iterates over the array
    let subArr = arr[i];  // initialize a variable holding the subarray
    console.log(subArr);
    for (let j = 0; j < subArr.length; j++) { // Inner loop iterates over 
                                              //subarray
        let letter = subArr[j]; // Initialize variable holding each letter
        console.log(letter);  // Print that letter to our console 
    }
}

// Breaking it down, we can see that our outer loop is going to let us take a 
// look at the individual subarrays, and the inner loop is letting us look at
// the elements inside of each subArray. Let's use this to solve a problem!

/* 
Write a function that intakes an array of numbers and a targetSum. 
The function should return true
if ANY combination of 2 numbers in the array equals the targetSum.
Can be the same number...
*/

/*
Plan:
Define a function called twoSum
  Iterate over the array
    Define num1
    Iterate over the array
      Defiine num2
      Check if num1 + num2 is equal to the targetSum
        return true
  return false
*/

let twoSum = function(nums, targetSum) {
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    for (let j = 0; j < nums.length; j++) {
      let num2 = nums[j]
      if (num1 + num2 === targetSum) return true;
    }
  }
  return false;
}

console.log(twoSum([1, 2, 3], 4)) // true
console.log(twoSum([1, 2, 3], 6)) // true
console.log(twoSum([1, 2, 3], 7)) // false
console.log(twoSum([1, 2, 3], 0)) // false
console.log(twoSum([1, 2], 5)) // false




/* 
Write a function that intakes an array of numbers and a targetSum. 
The function should return true
if a combination of 2 numbers in the array equals the targetSum.
Do not include the same element added together.
*/

/*
Plan:
Define a function called twoSumExclusive
  Iterate over the array
    Define num1
    Iterate over the array to start where j = i + 1
      Defiine num2
      Check if num1 + num2 is equal to the targetSum
        return true
  return false
*/

let twoSumExclusive = function (nums, targetSum) {
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            let num2 = nums[j]
            if (num1 + num2 === targetSum) return true;
        }
    }
    return false;
}

console.log(twoSumExclusive([1, 2, 3], 4)) // true
console.log(twoSumExclusive([1, 2, 3], 6)) // false
console.log(twoSumExclusive([1, 2, 3], 7)) // false
console.log(twoSumExclusive([1, 2, 3], 0)) // false
console.log(twoSumExclusive([1, 2], 5)) // false


