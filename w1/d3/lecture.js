// //function expression syntax!

// // like declaring variables, but with functions for their values

// // *** Function Declaration Syntax ***
// // function greeter(name){
// //     return "Hello " + name + "!"
// // }

// // *** Function Expression Syntax ***
// // let greeter = function(name) {
// //     return "Hello " + name + "!"
// // }
// // if (condition) {

// // };
// // console.log(greeter);

// // typeof, +, -, *, ;

// // Write a function that accepts an array of numbers and returns the sum of all
// // numbers in that array.

// // Look at each number in the array, add them all together and give a sum total
// // of all those numbers

// // -- iterate through the array somehow, likely with a loop
// // -- want to create a new variable that can increase with each iteration
// // -- return outside of the loop, return the new sum variable
// //         0   1  2  3   4    5
// // let arr = [10, 1, 2, 42, 77, 94]

// // let sumArray = function(nums){
// //     console.log("List of nums:", nums)
// //     let sum = 0;
// //     for (let i = 0; i < nums.length; i++){
// //         console.log("Sum at start of loop iteration:   ", sum)
// //         let ele = nums[i];
// //         console.log("Value of current element in array:", ele)
// //         sum += ele;

// //     }
// //     console.log("Total sum at end of loop:", sum)
// //     return sum;
// // }

// // console.log(sumArray(arr))

// let arr = [10, 1, 2, 42, 77, 94]

// let sumArray = (nums) => {
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

// // console.log(sumArray(arr))

// let greeter = (name) => "Hello " + name + "!"

// console.log(greeter("Bill"))

// // (ele) => ele + 1

// return arr[x] = val


//Mutability!
//          0123
// let alsoMyName = "Biff"
// alsoMyName[2] = "l"
// alsoMyName[3] = "l"
// console.log(alsoMyName)

// // Reassign our variables

// alsoMyName = "Bill"

// console.log(alsoMyName)

// let num = 26
// num += 1
// console.log(num)


// let nameArr = ["B","i","f","f"]
// console.log(nameArr)
// nameArr[2] = "l"
// nameArr[3] = "l"
// console.log(nameArr)





// let instructors = ["Bill", "Jojo", "Jesse", "Braxton", "Peter", "Charlie"]
// Write a function that will remove elements from the end of an array until it
// is no longer above the maximum length.

// let popped = instructors.pop()
// let shifted = instructors.shift()
// // console.log(popped)
// console.log(shifted)

// console.log(instructors)
// let pointer = instructors
// pointer.pop()
// console.log(instructors)

let instructors = ["Bill", "Jojo", "Jesse", "Braxton", "Peter", "Charlie"]
let culling = function (banana, papaya) {
    // while(banana.length > papaya){ // [1,2,3] > 4
    //     console.log(banana.pop(), "has been removed from the array!")
    // }
    // for (let i = papaya - banana.length + 1; i < papaya; i++) {
    //     console.log(banana.pop(), "has been removed from the array!")
    // }
    for (let i = banana.length; i > papaya; i--) {
        console.log(banana.pop(), "has been removed from the array!")
    }
    return "This is just a test"
}
let result = culling(instructors, 1)
console.log(instructors)

console.log(result)
// function popper(arr) {
//     arr.pop()
//     return arr
// }