// // // // Function Expression Syntax

// // // // function greetingBuilder(name) {
// // // //     return "Hello there, " + name + "!";
// // // // }

// // // // let greetingBuilder = function(name){
// // // //     return "Hello there, " + name + "!";
// // // // }

// // // // let greetingBuilder = (name) => {
// // // //     // if (false){
// // // //     //     console.log("this!");
// // // //     // };
// // // //     // name = "Xiaoguang"
// // // //     return "Hello there, " + name + "!";
// // // // };

// // // // console.log(greetingBuilder("Han"))

// // // // PROMPT: Write a function, sumArray that will accept an array of
// // // // numbers, and return the sum of those numbers

// // // // 1. If given an ordered list of numbers, create a function that will
// // // //    assess each number and add it to a growing sum
// // // // 2. Write a for loop to iterate through every number in the array,
// // // //    as we iterate, make sure that current number gets added to the sum
// // // // 3. Implement!

// // // // let sum = function(array){
// // // // let sum = (array) => {
// // // function sum(array){
// // //     // console.log("INPUT ARRAY:", array)
// // //     let total = 0;
// // //     for (let  i = 0; i < array.length; i++){
// // //         // console.log("Value of i:", i)
// // //         total = total + array[i]
// // //         // console.log("TOTAL AT END OF ARRAY:", total)
// // //     }
// // //     return total
// // // }

// // // console.log(sum([1,2,3,4]))
// // // // console.log(sumArray)

// // // Mutability
// // // let myArr = [];
// // // console.log(myArr)
// // // console.log(myArr.length)
// // // myArr[0] = 1;
// // // console.log(myArr.length)
// // // console.log(myArr)

// // // let name = "Biff"
// // let a = "a"
// // //         //0   1   2   3 
// // let name = ["B","i","f","f", a]
// // console.log(name)
// // name[2] = "l"
// // // name[3] = "l"
// // // console.log(name)
// // // console.log(a)
// // // a = "y"
// // // console.log(name)
// // // console.log(a)
// // // let name2 = ["Biff"]
// // // name2[0][2] = "l"
// // // name2[0][3] = "l"
// // // // name2[0] ="Bill"
// // // console.log(name2)

// // // Array methods
// // //         0  1  2
// // let arr = [4, 3, 2]
// // // arr[3] = 1
// // // arr[4] = 0
// // console.log("Array before push       :", arr)
// // console.log("Array length before push:", arr.length)
// // let newLength = arr.push(1, 0, -1, -2, -3)
// // console.log("Array after push        :", arr)
// // console.log("Array length after push :", newLength, " --- ", arr.length)
// // let last = arr.pop()
// // console.table(arr)
// // console.log("Length of array after pop:", arr.length)
// // console.log("Value stored in last     :", last)
// // let newLast = arr.pop()
// // console.log("This is new last!", newLast)
// // console.table(arr)
// // let negativeOne = arr.pop()
// // let arr2 = ["a","b","c"]
// // let arr3 = []
// // arr3 = arr3.concat("Value")
// // console.log(String(arr3.pop))
// // let myArr = []
// // myArr.unshift(1)
// // console.log(myArr)
// // myArr.unshift(2,3)
// // console.log(myArr)
// // console.log(myArr.unshift(10))
// // console.log(myArr)
// // let first = myArr.shift()
// // console.log(myArr)
// // console.log(first)
// // console.log(myArr.shift())
// // console.log(myArr)

// let sumArray = (nums) => {
//     nums = nums.slice()
//     let sum = 0;
//     while (nums.length > 0){
//         sum += nums.pop()
//     }
//     console.log("nums after loop:", nums)
//     return sum;
// }
// let numsForSum = [1,2,3,4,5]
// console.log(sumArray(numsForSum))
// console.log(numsForSum)

// Nested Loops!

// for(let i = 0; i < 5; i++){
//     console.log("VALUE OF i:", i);
//     for (let j = 0; j< 5; j++){
//         console.log("       VALUE OF j:", j)
//         for (let k = 0; k < 5; k++){
//             console.log("            VALUE OF k:", k)
//         }
//     }
// }

// let sum2dArray = function(nums){
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++){
//         let subArray = nums[i]
//         console.log(subArray)
//         for(let j = 0; j < subArray.length; j++){
//             let currNum = subArray[j]
//             console.log("           ", currNum)
//             sum += currNum;
//         }
//         console.log("SUM AFTER INNER LOOP:", sum)
//     }
//     return sum
// }

// let twoDims = [
//     [1,2,3,4],
//     [5,6,7],
//     [8,9,10,11,12]
// ]
// console.log(sum2dArray(twoDims))

// PROMPT: twoSum
// Write a function that accepts an array of numbers and a target value, 
// the function should return true if any two numbers in that array
// will add up to the target and return false if that is not possible.

// 1. Find a way to iterate through the array of numbers and check to see
//    if any two numbers will add up to the target
// 2. Write nested loops to examine each number in the array, and see if 
//    the sum of those numbers is our target
// Examples:
// [6,2,4] => 12 : true

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        for (let j = 0; j < nums.length; j++) {
            let num2 = nums[j]
            if (num1 + num2 === target) {
                return true
            }
        }
    }
    return false;
}

// console.log(twoSum([2,3,4,5], 9))  // true
// console.log(twoSum([2,3,4,5], 6))  // true
// console.log(twoSum([2,3,3,5], 9))  // false

function twoSumExclusive(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i]
        // let diff = target - num1;
        // if (nums.includes(diff)) return true
        for (let j = i + 1; j < nums.length; j++) {
            let num2 = nums[j]
            if (num1 + num2 === target) {
                return true
            }
        }
    }
    return false
}

console.log(twoSumExclusive([2, 4, 6], 12))  // false
console.log(twoSumExclusive([2, 4, 6], 10))  // true
console.log(twoSumExclusive([2, 4, 6], 8))  // true
console.log(twoSumExclusive([5, 2, 4, 6], 10))  // true
console.log(twoSumExclusive([5, 2, 4, 6], 14))  // false