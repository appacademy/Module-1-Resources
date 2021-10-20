// // create a function called sumArr() that takes in an array
// let sumArr = function (arr) {
//   // create a sum tracker - start this at 0
//   let sum = 0;
//   // iterate over the array (loop)
//   for (let i = 0; i < arr.length; i++) {
//     // add each element to the sum
//     sum += arr[i];
//   }
//   // return the sum
//   return sum;
// };

// console.log(sumArr([1,2,3])); // 6


// // Immutable
// let team = "Pockers";
// team[1] = "a"; // wont work

// console.log(team);

// team = "Packers"; // this reassigns the variable, not mutate
// console.log(team);


// // Mutable
// let nums = [1, 2, 3];
// nums[1] = "Packers";

// console.log(nums);


// Array Methods

// push()

// let arr = [4, 3, 2];

// console.log(arr.length);
// let newLength = arr.push(1);
// console.log(newLength);
// console.log(arr);


// // pop()

// let lastEle = arr.pop();
// console.log(arr);
// console.log(arr.length);
// console.log(lastEle);


// let arr = [4, 3, 2];

// // unshift()
// let newLength = arr.unshift(5);
// console.log(newLength);
// console.log(arr);

// // shift()
// let firstEle = arr.shift();
// console.log(firstEle);
// console.log(arr.length);
// console.log(arr);



// Nested loops
// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log(i, j);
//   }
// }


// let nestedArr = [
//   ["a", "b", "c"],
//   ["d", "e"]
// ];

// console.log(nestedArr[0].length);

// for (let i = 0; i < nestedArr.length; i++) {
//   let subArr = nestedArr[i];
//   // console.log(subArr);

//   for (let j = 0; j < subArr.length; j++) {
//     let letter = subArr[j];
//     console.log(letter);
//   }
// }



// Pairs in Array

/*
Write a function that intakes an array of numbers and a target
sum. The function should return true if ANY combination of 2 
numbers in the array equals the targetSum. Can be the same 
number.
*/

// // Define a function called twoSum (arr, targetSum)
// let twoSum = function(nums, targetSum) {
//   // Iterate over the array (loop)
//   for (let i = 0; i < nums.length; i++) {
//     // Define num1
//     let num1 = nums[i];
//     // Iterate over the array again
//     for (let j = 0; j < nums.length; j++) {
//       // Define num2
//       let num2 = nums[j];
//       // Check if num1 + num2 euqals the targetSum
//       if (num1 + num2 === targetSum) {
//         // return true
//         return true;
//       }
//     }
//   }
//   // return false
//   return false;
// }

// console.log(twoSum([1, 2, 3], 4)) // true
// console.log(twoSum([1, 2, 3], 6)) // true
// console.log(twoSum([1, 2, 3], 7)) // false
// console.log(twoSum([1, 2, 3], 0)) // false
// console.log(twoSum([1, 2], 5)) // false



// Define a function called twoSum
let twoSum = function (nums, targetSum) {
// Iterate over the array
  for (let i = 0; i < nums.length; i++) {
// 	Define num1
    let num1 = nums[i];
//  Iterate over the array to start where j = i + 1
    for (let j = i + 1; j < nums.length; j++) {
//     	Define num2
      let num2 = nums[j];
//       Check if num1 + num2 is equal to targetSum
      if (num1 + num2 === targetSum) {
//         	return true
        return true;
      }
    }
  }
// return false
  return false;
}

console.log(twoSum([1, 2, 3], 4)); // true
console.log(twoSum([1, 2, 3], 6)); // false
console.log(twoSum([1, 2, 3], 7)); // false
console.log(twoSum([1, 2, 3], 0)); // false
console.log(twoSum([1, 2], 3)); // true