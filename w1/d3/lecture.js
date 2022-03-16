// // Function Expression Syntax
// let arr = [1, 2, 3]; // sum will be 6

// let sumArr = function (arr) {
//   // create a sum tracker
//   // iterate over every number
//   // add each number to the sum
//   // give the sum back (return)
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     sum += num;
//   }

// //   return sum;
// // };
// console.log(sumArr);
// // let res = sumArr(arr);
// // console.log(res);


// // Immutable
// let name = "Milo";
// // console.log(name);

// name[1] = "y"
// // console.log(name);

// name = "Mylo" // Must reassign
// // console.log(name);

// // Mutability
// let nums = [1, 2, 3];
// nums[1] = 5;
// nums[2] = 6;
// nums[10] = 7;
// console.log(nums);


// Array Methods
// let arr = [4, 3, 2];

// let newLength = arr.push(1, 0);
// // console.log(newLength);
// // console.log(arr);

// let lastEle = arr.pop();
// console.log(lastEle);
// console.log(arr);


// let arr = [1, 2, 3];

// let newLength = arr.unshift(-1, 0);
// arr.unshift(-2);
// console.log(newLength);
// console.log(arr);

// let firstEle = arr.shift();
// console.log(firstEle);
// console.log(arr);


// Nested Loops
// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log(i, j);
//   }
// }


// let nestedArr = [["a", "b", "c"], ["d", "e"], ["f", "g"]];
// // console.log(nestedArr.length);
// for (let i = 0; i < nestedArr.length; i++) {
//   let subArr = nestedArr[i];
//   console.log(subArr);

//   for (let j = 0; j < subArr.length; j++) {
//     let letter = subArr[j];
//     console.log(letter);
//   }
// }


/* 
Write a function that intakes an array of numbers and a targetSum. 
The function should return true
if ANY combination of 2 numbers in the array equals the targetSum.
Can be the same number...
*/

/*
Plan:
Define a function, called twoSum
  Iterate over the array
    Define our first number
    Iterate over the array again
      Define our second number
      Check if the sum is equal to the target sum
        return true
  return false
*/

// let twoSum = function(nums, targetSum) {
//   for (let i = 0; i < nums.length; i++) {
//     let num1 = nums[i];
//     for (let j = 0; j < nums.length; j++) {
//       let num2 = nums[j];
//       if (num1 + num2 === targetSum) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(twoSum([1, 2, 3], 4)) // true
// console.log(twoSum([1, 2, 3], 6)) // true
// console.log(twoSum([1, 2, 3], 7)) // false
// console.log(twoSum([1, 2, 3], 0)) // false
// console.log(twoSum([1, 2], 5)) // false



/* 
Write a function that intakes an array of numbers and a targetSum. 
The function should return true
if a combination of 2 numbers in the array equals the targetSum.
Do not include the same element added together.
*/

/*
Plan:
Define a function, called twoSum
  Iterate over the array
    Define our first number
    Iterate over the array again to start where j = i + 1
      Define our second number
      Check if the sum is equal to the target sum
        return true
  return false
*/

let twoSum = function (nums, targetSum) {
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let num2 = nums[j];
      if (num1 + num2 === targetSum) {
        return true;
      }
    }
  }
  return false;
}

console.log(twoSum([1, 2, 3], 4)); // true
console.log(twoSum([1, 2, 3], 6)); // false
console.log(twoSum([1, 2, 3], 7)); // false
console.log(twoSum([1, 2, 3], 0)); // false
console.log(twoSum([1, 2], 3)); // true