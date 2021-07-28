// let sumArr = function (arr){
// // create a sum tracker
// // iterate over the array
// // add each element to the sum
// // return the sum
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {

//       let num  = arr[i];
//   	  sum += num;
//   	  //sum = sum + num;
// 	}
//   return sum;
// };

// console.log(sumArr([1,2,3])) // 6

// //Mutability
// let nums = [1, 2, 3];
// console.log(nums);
// nums[1] = 5;
// console.log(nums);

// //Immutable
// let name = 'Milo';
// console.log(name);
// name[1] = 'y'; // won't work
// name = 'Mylo'; /// we'll reassign
// let lastName = 'James';
// name = name + " " + lastName; // this is reassign not mutate
// console.log(name);

// Array Methods
// let arr = [4, 3, 2];

// console.log(arr.length)
// let newLength = arr.push(1);
// console.log(newLength); // prints the new length

// console.log(arr);

// let arr = [4, 3, 2];

// let lastEle = arr.pop();

// console.log(lastEle);

// console.log(arr);

// let arr = [4, 3, 2];

// let newLength = arr.unshift(5);
// console.log(newLength)

// console.log(arr);

// let arr = [4, 3, 2];

// let firstEle = arr.shift();
// console.log(firstEle);

// console.log(arr);

//Nested Loops
// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 5; j++) {
//     console.log(i, j);
//   }
// }

// let nestedArr = [["a", "b", "c"], ["d", "e"]]
// // console.log(nestedArr.length) //2
// // let subArr = nestedArr[0];
// // console.log(subArr.length) // 3
// for (let i = 0; i < nestedArr.length; i++) {
//   let subArray = nestedArr[i];
//   console.log(subArray);
//   for(let j = 0; j < subArray.length; j++) {
//     let letter = subArray[j];
//   	console.log(letter);
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
    	Define num2
        Check if num1 + num2 is equal to targetSum
        	return true
return false
*/
// let twoSum = function(nums, targetSum){
// 	for(let i = 0; i < nums.length; i++){
//     	let num1 = nums[i]
//         for(let j = 0; j < nums.length; j++) {
//         	let num2 = nums[j];
//           	// console.log(num1, num2);
//           	if (num1 + num2 === targetSum) {
//             	return true;
//             }
//         }
//     }
//     return false;
// };

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
    	Define num2
        Check if num1 + num2 is equal to targetSum
        	return true
return false
*/
let twoSum = function (nums, targetSum) {
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let num2 = nums[j];
      console.log(num1, num2);
      if (num1 + num2 === targetSum) {
        return true;
      }
    }
  }
  return false;
};

console.log(twoSum([1, 2, 3], 4)); // true
console.log(twoSum([1, 2, 3], 6)); // false
console.log(twoSum([1, 2, 3], 7)); // false
console.log(twoSum([1, 2, 3], 0)); // false
console.log(twoSum([1, 2], 3)); // true
