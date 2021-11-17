// let sumArr = function (arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     sum += num;
//   }

//   return sum;
// };

// let arr = [1,2,3,4];
// let sum = sumArr(arr);
// console.log(sum);

// // console.log(sumArr([1,2,3,4])); // this is the same as lines 12-14


// Mutability 
// let nums = [1, 2, 3];
// console.log(nums);

// nums[1] = 5;
// console.log(nums);


// // Immutable
// let name = "Jiff";
// name[1] = "e"; // This doesnt change Jiff
// console.log(name);

// name = "Jeff" // This is reassignment not mutation


// Array Methods
// let arr = [1,2,3,4];

// // console.log(arr.length);

// // Array.push()
// let newLength = arr.push(5);
// // console.log(newLength);
// // console.log(arr);

// // Array.pop()
// let lastEle = arr.pop();
// // console.log(lastEle);
// // console.log(arr);

// // Array.unshift()
// newLength = arr.unshift(0);
// // console.log(newLength);
// // console.log(arr);

// // Array.shift()
// let firstEle = arr.shift();
// console.log(firstEle);
// console.log(arr);



// Nested Loops
// for (let i = 0; i < 3; i++) {
//   for (let j = 6; j < 10; j++) {
//     console.log(i, j);
//   }
// }

// let nestedArr = [
//   ["a", "b", "c"],
//   ["d", "e"]
// ];
// // console.log(nestedArr.length);

// for (let i = 0; i < nestedArr.length; i++) {
//   let subArray = nestedArr[i];
//   // console.log(subArray);
//   for (let j = 0; j < subArray.length; j++) {
//     let letter = subArray[j];
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
Define a function called twoSum that takes in an array and a target sum.
    Iterate over the array
        Define the first number
        Reiterate over the array
            Define the second number 
            Check if num1 + num2 is equal to the targetSum
                  If it is, return true
    Return false 
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
// };

// console.log(twoSum([1, 2, 3], 4)) // true
// console.log(twoSum([1, 2, 3], 6)) // true
// console.log(twoSum([1, 2, 3], 7)) // false
// console.log(twoSum([1, 2, 3], 0)) // false
// console.log(twoSum([1, 2], 4)) // true


/* 
Write a function that intakes an array of numbers and a targetSum. 
The function should return true
if a combination of 2 numbers in the array equals the targetSum.
Do not include the same element added together.
*/

/*
Plan:
Define a function called twoSum that takes in an array and a target sum.
    Iterate over the array
        Define the first number
        Reiterate over the array, start loop where j = i + 1
            Define the second number 
            Check if num1 + num2 is equal to the targetSum
                  If it is, return true
    Return false 
*/

let twoSum = function (nums, targetSum) {
  for (let i = 0; i < nums.length - 1; i++) {
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

console.log(twoSum([1, 2, 3], 4)) // true
console.log(twoSum([1, 2, 3], 6)) // false
console.log(twoSum([1, 2, 3], 7)) // false
console.log(twoSum([1, 2, 3], 0)) // false
console.log(twoSum([1, 2], 4)) // false