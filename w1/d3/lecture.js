// Immutable
// let name = "Bill";
// console.log(name);

// name[1] = 'y'; // will not change the string "Bill"
// console.log(name);

// name = "Byll";
// console.log(name);

// Mutable
// let nums = [1, 2, 3];
// console.log(nums);
// nums[1] = 5;
// console.log(nums);


// Array Methods
// let arr = [4, 3, 2];

// // console.log(arr.length);
// let newLength = arr.push(1, 0);
// console.log(arr);
// // console.log(newLength);


// let lastEle = arr.pop();
// console.log(lastEle);
// console.log(arr);

// let arr = [2, 3, 4];

// let newLength = arr.unshift(0, 1);
// // console.log(newLength);
// console.log(arr);

// let firstEle = arr.shift();
// console.log(firstEle);
// console.log(arr);



// let arr1 = [];
// let arr2 = [];

// for (let i = 0; i < 10; i++) {
//   arr1.push(i); // 0, 1
//   arr2.unshift(i); // 1, 0
// }

// console.log(arr1);
// console.log(arr2);


// for (let i = 0; i < 4; i++) {
//   for (let j = 1; j < 3; j++) {
//     console.log(i, j)
//   }
// }

// let outerArray = [
//   ["a", "b", "c"], 
//   ["d", "e"]
// ];

// console.log(outerArray.length)
// for (let i = 0; i < outerArray.length; i++) {
//   let subArray = outerArray[i];
//   console.log(subArray);
//   for (let j = 0; j < subArray.length; j++) {
//     let char = subArray[j];
//     console.log(char);
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
Define a function (using expression syntax) called twoSum
  Iterate over the array
    Define num1
    Iterate over the array a second time
      Define num2
      Check if num1 + num2 is equal to the targetSum => return true
  return false
*/

// let twoSum = function(numbers, targetSum) {
//   for (let i = 0; i < numbers.length; i++) {
//     let num1 = numbers[i];
//     for (let j = 0; j < numbers.length; j++) {
//       let num2 = numbers[j];
//       if (num1 + num2 === targetSum) {
//         return [true, num1, num2];
//       }
//     }
//   }
//   return false;
// }


// console.log(twoSum([2, 1, 3], 4)) // true
// console.log(twoSum([1, 2, 3], 6)) // true
// console.log(twoSum([1, 2, 3], 7)) // false
// console.log(twoSum([1, 2, 3], 0)) // false
// console.log(twoSum([1, 2], 5)) // false


// /*
// Plan:
// Define a function (using expression syntax) called twoSum
//   Iterate over the array
//     Define num1
//     Iterate over the array a second time to start where j = i + 1
//       Define num2
//       Check if num1 + num2 is equal to the targetSum => return true
//   return false
// */

// let twoSum2 = function (numbers, targetSum) {
//   for (let i = 0; i < numbers.length; i++) {
//     let num1 = numbers[i]; 
//     for (let j = i + 1; j < numbers.length; j++) {
//       let num2 = numbers[j]; 
//       if (num1 + num2 === targetSum) {
//         return [true, num1, num2];
//       }
//     }
//   }
//   return false;
// }

// console.log("Second Version");
// console.log(twoSum2([2, 1, 3], 4)) // true
// console.log(twoSum2([1, 2, 3], 6)) // false
// console.log(twoSum2([1, 2, 3], 7)) // false
// console.log(twoSum2([1, 2, 3], 0)) // false
// console.log(twoSum2([1, 2], 5)) // false



// F to C: (tempF - 32) * 5/9
// C to F: tempC * 9/5 + 32

function convertTemp (temp, type) {
  if (type === 'F') {
    return multByFiveNinths(temp - 32);
  } else { // We know that if it is not F, the type must be C
    return multByNineFifths(temp) + 32;
  };
};

function multByFiveNinths (temp) {
  return temp * 5 / 9;
};

function multByNineFifths (temp) {
  return temp * 9 / 5;
};

console.log(convertTemp(40, 'C'));
console.log(convertTemp(104, 'F'));