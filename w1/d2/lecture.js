// // // // STRINGS!
// // // // ""  '' 

// // // // let string1 = "\"Join a bootcamp,\" they said. \"It'll be fun,\" they said."
// // // // let string2 = 'I\'m having coffee for breakfast.'
// // // // let slash = '\\'

// // // // console.log(slash)
// // // //              01234
// // // // let greeting = "hello";

// // // // // console.log(greeting.length)
// // // // console.log(greeting[greeting.length - 1])
// // // // let b = "h"
// // // // console.log(greeting.indexOf(b))
// // // //              0123456789          
// // // // let playoffs = "playoffsplayoffsplayoffs";
// // // // // console.log(playoffs.lastIndexOf("y"))
// // // // let first = playoffs.indexOf("p")
// // // // let second = playoffs.indexOf("p", first + 1)
// // // // // let second = playoffs.indexOf("p", playoffs.indexOf("p") + 1)
// // // // console.log("VALUE OF FIRST :", first)
// // // // console.log("VALUE OF SECOND:", second)

// // // let firstName = "Bill";

// // // let title = "Module 1 Lead";

// // // // let full = firstName + " " + title;
// // // let full = firstName.concat(" ", title)

// // // console.log(full)

// // // FUNCTIONS!

// // // function blank () {}

// // // console.log(blank())

// // // function greetingBuilder(name){
// // //     let greeting = "Hello " + name + "!";
// // //     let secondGreeting = "Can't access"
// // //     console.log("ABOUT TO RETURN THIS:",  greeting)
// // //     return greeting;
// // // }


// // // // console.log(greetingBuilder("Vincent"))
// // // let gio = greetingBuilder("Gio")
// // // // console.log(gio)

// // // Goal: Build a function that accepts two numbers and returns the sum of those numbers

// // function add(num1, num2){
// // // let add = function(num1, num2){
// //     debugger
// //     return num1 + num2;
// // }

// // let eight = add(5, 3)

// // console.log(eight)

// // CONDITIONALS!

// // function isItFive(num){ // define function that accepts a num
// //     if (num > 5){ // check to see if num > 5
// //         return "It's greater than 5." // return string if so
// //     } else if (num < 5){ // check to see if num < 5
// //         return "It's less than 5." // return this string if so
// //     } else { // otherwise,
// //         return "It's 5!" // our number must be five
// //     }
// //     if (num > 5) { // check to see if num > 5
// //         return "It's greater than 5." // return string if so
// //     }
// //     if (num < 5) { // check to see if num < 5
// //         return "It's less than 5." // return this string if so
// //     }
// //     return "It's 5!" // our number must be five
// // }

// // console.log(isItFive(5))

// // LOOPS! 
// // for, while 

// // function looper(loopNum){
// //     // let i = 0;
// //     // while (i < loopNum){
// //     //     console.log("CURRENT LOOP ITERATION:", i)
// //     //     i++;
// //     // }
// //     for(let i = 0; i < loopNum; i++){
// //         console.log("CURRENT LOOP ITERATION:", i)
// //     }
// // }

// // looper(5)

// // GOAL:
// // Write a function that accepts some string,
// // and logs each character in that string to our console
// function characterLogger(string) { // define function that accepts string as parameter
//     // for (let i = 0; i < string.length; i++) { // define for loop, where i starts at 0,
//     //     let char = string[i]                  // and continues while i < string.length
//     //     console.log(char)                     // use i to key into string at i'th index,  
//     // }                                         // log that character in console  
//     let i = 0;                                        
//     while (i < string.length){
//         let char = string[i];
//         // console.log(char);
//         console.log(char)
//         i++;
//     }
// }

// // characterLogger("Journey before destination")

// //                   "hello", "o" => 4
// //                   "hello", "z" => -1
// // function indexFinder(string, target){   
// //     for(let i = 0; i<string.length; i++){
// //         if (string[i] === target){
// //             return i;
// //         }
// //     }
// //     return -1;
// // }
// // //                       01234
// // console.log(indexFinder("hello", "z"))

// // Arrays!
// // list, can hold any sort of data type, 
// let arr1 = [1,2,3,4];
// let arr2 = ["This", "array", "holds", "strings"];

// let arr3 = [
//     42,                 // 0
//     false,              // 1
//     "Let's go Pens",    // 2
//     undefined,          // 3
//     false,              // 4
//     [["array!"], 3, [["again!"]]] // 5
// ]
// // console.log(arr3[5][1])

// console.log(arr3.indexOf(false, arr3.indexOf(false) + 1))

// // arr3[0] = 50;
// // arr3[10] = "Some new value";
// // console.log(arr3)
// // console.log(arr3[10])
// // console.log(arr3[9])

// // let num;

// // console.log(num)

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let arr3 = [7,8,9]

// let badCombine = arr1 + arr2 + arr3;
// // String(arr1).concat(String(arr2).concat(String(arr3)))
// let combined = arr1.concat(arr2, arr3, 10)
// console.log(combined)
// console.log(arr1)

// let stringArr = ["This", "array", "holds", "strings"];

// console.log(stringArr.join(", "))

// PROMPT: Write a function that will accept an array of numbers and
// returns the sum of all of those numbers
function sumArray(nums) {
    let sum = 0;
    // for (let i = 0; i < nums.length; i++) {
    let i = 0;
    while (i < nums.length){
        let num = nums[i]
        if (typeof num !== "number"){
            continue;
        }
        sum += num;
        i++;
    }
    return sum
}

console.log(sumArray([1,2,"another string!",3,[],4,"this is a string",5]))