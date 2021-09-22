// function sumArr(arr){
//     // do some stuff
// };

// let sumArr = function(arr){
//     // create sum counter
//     // iterate over the array
//     // add each number to the sum
//     // return sum
//         let sum = 0;
//         for (let i = 0; i < arr.length; i++) {
//             let num = arr[i]; // ALWAYS USE LET
//             sum += num; // sum = sum + num
//         }
    
//         return sum;
//     };
    
//     //                  0 1 2 3
//     console.log(sumArr([1,2,3,4]));
//     console.log(sumArr);


// Mutability
// let nums = [1,2,3];
// console.log(nums);

// nums[1] = 5;
// console.log(nums);

// // Immutable
// let firstName = "Milo";
// console.log(firstName);

// firstName[1] = 'y';
// console.log(firstName);

// firstName = "Mylo"; // this is REASSIGNMENT NOT MUTATING
// console.log(firstName);


// Array Methods

// let arr = [4, 3, 2];
// // console.log(arr.length);

// let newLength = arr.push(1, 0, -1);
// console.log(newLength);
// console.log(arr);

// let arr = [4, 3, 2];
// console.log(arr);
// console.log(arr.length);

// let lastEle = arr.pop();
// console.log(lastEle);
// console.log(arr);
// console.log(arr.length);


// let arr = ['Jeff', 'Bill', 'Hector'];
// console.log(arr);
// console.log(arr.length);

// let newLength = arr.unshift('Schuler', 'Adam');
// console.log(arr);
// console.log(newLength);

// let arr = ['Barry', 'Thanh', 'Brad'];

// let firstEle = arr.shift();
// console.log(firstEle);
// console.log(arr);


// Nested Loops
// for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(i, j);
//     }
// }

// let nestedArr = [
//     ["a", "b", "c"], 
//     ["d", "e"]
// ];

// console.log(nestedArr[0].length);

// for (let i = 0; i < nestedArr.length; i++) {
//     let subArr = nestedArr[i];
//     console.log(subArr);
//     for (let j = 0; j < subArr.length; j++) {
//         let letter = subArr[j];
//         console.log(letter);
//     }
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
    Iterate over the array of numbers
        Define num1
        Iterate over the array of numbers
            Define num2
            Check if num1 + num2 is equal to the targetSum
                return true
    return false
*/

// let twoSum = function(nums, targetSum) {
//     for (let i = 0; i < nums.length; i++) {
//         let num1 = nums[i];
//         for (let j = 0; j < nums.length; j++) {
//             let num2 = nums[j];
//             if (num1 + num2 === targetSum) {
//                 return true;
//             }
//         }
//     }
//     return false;
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
    Iterate over the array of numbers
        Define num1
        Iterate over the array to start where j = i + 1
            Define num2
            Check if num1 + num2 is equal to the targetSum
                return true
    return false
*/

let twoSum = function (numbers, targetSum) {
    for (let i = 0; i < numbers.length; i++) {
        let num1 = numbers[i];
        // console.log(num1)
        for (let j = i + 1; j < numbers.length; j++) {
            let num2 = numbers[j];
            // console.log(num1, num2);
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