// let sumArr = function (arr) {
//   // create a variable to track the sum
//   let sum = 0;

//   // loop over the array and add each element to the sum
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     sum += num;
//   }

//   // return our sum
//   return sum;
// }

// // console.log(sumArr); // [Function: sumArr]
// console.log(sumArr([1,2,3])); // 6


// Mutability
// let nums = [1, 2, 3];
// console.log(nums);
// nums[1] = 5;
// console.log(nums);

// // Immutable
// let name = "Jiff";
// console.log(name);
// name[1] = "e"; // This will not work
// console.log(name);
// name = "Jeff"; // Must reassign to change
// console.log(name);


// Array Methods
// let arr = [4, 3, 2];

// // console.log(arr.length);
// let newLength = arr.push(1, 0);

// // console.log(arr, newLength);

// // [4, 3, 2 ,1, 0]
// console.log(arr);
// let lastEle = arr.pop();
// console.log(lastEle, arr);


// let arr = [2, 3, 4];

// let newLength = arr.unshift(0, 1);
// // console.log(newLength, arr);
// let firstEle = arr.shift();
// console.log(firstEle, arr);



// Nested Loops
// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log(i, j)
//   }
// }

// let arr = [
//   ["a", "b", "c"],
//   ["d", "e"]
// ];
// // console.log(arr.length) // 2
// for (let i = 0; i < arr.length; i++) {
//   let subArr = arr[i];
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
Define a function called twoSum
  Iterate over the array
    Define num1
    Iterate over the array
      Defiine num2
      Check if num1 + num2 is equal to the targetSum
        return true
  return false
*/

// let twoSum = function(nums, targetSum) {
//   for (let i = 0; i < nums.length; i++) {
//     let num1 = nums[i];
//     for (let j = 0; j < nums.length; j++) {
//       let num2 = nums[j]
//       if (num1 + num2 === targetSum) return true;
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
Define a function called twoSum
  Iterate over the array
    Define num1
    Iterate over the array to start where j = i + 1
      Defiine num2
      Check if num1 + num2 is equal to the targetSum
        return true
  return false
*/

let twoSum = function(nums, targetSum) {
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let num2 = nums[j]
      if (num1 + num2 === targetSum) return true;
    }
  }
  return false;
}

console.log(twoSum([1, 2, 3], 4)) // true
console.log(twoSum([1, 2, 3], 6)) // false
console.log(twoSum([1, 2, 3], 7)) // false
console.log(twoSum([1, 2, 3], 0)) // false
console.log(twoSum([1, 2], 5)) // false
