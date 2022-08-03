//function expression syntax!

// like declaring variables, but with functions for their values

// *** Function Declaration Syntax ***
// function greeter(name){
//     return "Hello " + name + "!"
// }

// *** Function Expression Syntax ***
// let greeter = function(name) {
//     return "Hello " + name + "!"
// }
// if (condition) {

// };
// console.log(greeter);

// typeof, +, -, *, ;

// Write a function that accepts an array of numbers and returns the sum of all
// numbers in that array.

// Look at each number in the array, add them all together and give a sum total
// of all those numbers

// -- iterate through the array somehow, likely with a loop
// -- want to create a new variable that can increase with each iteration
// -- return outside of the loop, return the new sum variable
//         0   1  2  3   4    5
// let arr = [10, 1, 2, 42, 77, 94]

// let sumArray = function(nums){
//     console.log("List of nums:", nums)
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++){
//         console.log("Sum at start of loop iteration:   ", sum)
//         let ele = nums[i];
//         console.log("Value of current element in array:", ele)
//         sum += ele;

//     }
//     console.log("Total sum at end of loop:", sum)
//     return sum;
// }

// console.log(sumArray(arr))

let arr = [10, 1, 2, 42, 77, 94]

let sumArray = (nums) => {
    console.log("List of nums:", nums)
    let sum = 0;
    for (let i = 0; i < nums.length; i++){
        console.log("Sum at start of loop iteration:   ", sum)
        let ele = nums[i];
        console.log("Value of current element in array:", ele)
        sum += ele;

    }
    console.log("Total sum at end of loop:", sum)
    return sum;
}

// console.log(sumArray(arr))

let greeter = (name) => "Hello " + name + "!"

console.log(greeter("Bill"))

// (ele) => ele + 1