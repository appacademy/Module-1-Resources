// Function Expression Syntax

// let sumArr = function (arr) {
//     // create a variable to track the sum
//     let sum = 0;
//     // iterate over the array (for loop)
//         // add each element to the sum
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     // return sum
//     return sum;
// }

// console.log(sumArr([1,2,3,4]))


// Mutability
// let nums = [1, 2, 3];
// console.log(nums);
// nums[1] = 5;
// console.log(nums);

// Immutable
// let name = "Bill";
// console.log(name);
// name[2] = 'y';
// console.log(name);
// name = "Biyl";
// console.log(name);

// let number = 4;
// number = 5;


// Array Methods

// Push
// let arr = [2, 7, 10];

// console.log(arr);
// console.log(arr.length);

// let newLength = arr.push(8);
// console.log(arr);
// console.log(newLength);

// arr.push([1,2,3,4]);
// console.log(arr);


// Pop
// let arr = [2, 7, 10];

// let lastEle = arr.pop();
// console.log(arr);
// console.log(lastEle);
// lastEle = arr.pop()
// console.log(lastEle);
// arr.pop()
// console.log(arr);
// lastEle = arr.pop();
// console.log(lastEle);


// Unshift
// let arr = [2, 7, 10];

// let newLength = arr.unshift(5);
// console.log(arr);
// console.log(newLength);

// arr.unshift(3, 12);
// // arr.unshift(12);

// console.log(arr);


// Shift
// let arr = [2, 7, 10];

// let firstEle = arr.shift();
// console.log(arr);
// console.log(firstEle);


// Nested Loops

// I want to print out a collection of 2 numbers
// 0,0 => 0,1 => 0,2 => 1,0 => 1,1 => 1,2...

// for (let i = 0; i < 5; i++) {
//     // console.log(i);
//     for (let j = 0; j < 5; j++) {
//         console.log(i, j)
//     }
// }


/*
Plan:
1. Define a function called twoSum
2. Iterate over the array (for loop)
    1. Define num1 - the element at that index in the array
    2. Iterate over the array again (for loop)
        1. Define num2 - the element at that index in the array
        2. Check to see if the sum of num1 and num2 are equal to the target sum
            1. return true
3. return false
*/

// let twoSum = function(numbers, targetSum) {
//     for (let i = 0; i < numbers.length; i++) {
//         let num1 = numbers[i];
//         // console.log(num1);
//         for (let j = 0; j < numbers.length; j++) {
//             let num2 = numbers[j];
//             // console.log(num1, num2);
//             if (num1 + num2 === targetSum) return true;
//         }
//     }
//     return false;
// }

// console.log(twoSum([1,2,3], 3));
// console.log(twoSum([1,2,3], 4));
// console.log(twoSum([1,2,3], 6));
// console.log(twoSum([1,2,3], 28));

/*
Plan:
1. Define a function called twoSum
2. Iterate over the array (for loop)
    1. Define num1 - the element at that index in the array
    2. Iterate over the array again (for loop) - when j to start at i + 1
        1. Define num2 - the element at that index in the array
        2. Check to see if the sum of num1 and num2 are equal to the target sum
            1. return true
3. return false
*/

let twoSum = function (numbers, targetSum) {
    for (let i = 0; i < numbers.length; i++) {
        let num1 = numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
            let num2 = numbers[j];
            if (num1 + num2 === targetSum) return true;
        }
    }
    return false;
}

console.log(twoSum([1,2,3], 3));
console.log(twoSum([1,2,3], 4));
console.log(twoSum([1,2,3], 6));
console.log(twoSum([1,2,3], 28));