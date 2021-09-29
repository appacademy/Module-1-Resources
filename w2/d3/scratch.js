// // First Class Functions

// // 1. Stored in a variable
// let func = function() {
//     console.log("I am stored in a variable");
// };

// func();

// // 2. Pass as an argument to a function
// let higherOrderFunction = function(cb) {
//     cb();
// };

// let intoAFunction = function() {
//     console.log("I am being passed into a function");
// };

// higherOrderFunction(intoAFunction);


// // 3. Returned from a function
// function HOF () {
//     return function() {
//         console.log("I am being returned from a function");
//     };
// };

// HOF()();


// Math Functions
// I want to create a function that can do these 2 calculations:
    // 1. add
    // 2. multiply

// let math = function (num1, num2, cb) {
//     let result = cb(num1, num2);
//     return result;
// }

// let add = function (num1, num2) {
//     return num1 + num2;
// }

// let multiply = function (num1, num2) {
//     return num1 * num2;
// }

// // console.log(math(5,12,add));
// // console.log(math(4,5,multiply));

// // math() refactor
// let math = function (num1, num2, cb) {
//     if (cb === undefined) return "You didn't choose a calculation."
    
//     let result = cb(num1, num2);
//     return result;
// }

// console.log(math(4,5));
// console.log(math(5,12,add));
// console.log(math(4,5,multiply));



// Multiple Callbacks

/*
    I want to write a function called sentenceMaker() that intakes an array 
    of words and 2 callbacks. It will return the array turned into a sentence
    with every other word using the opposite callback.

    1. add "woooooo" to the end of the word
    2. only returns the first 2 letters of the word
*/

// let sentenceMaker = function (words, cb1, cb2) {
//     let result = words.map(function (word, index) {
//         if (index % 2 === 0) return cb1(word);
//         else return cb2(word);
//     });

//     return result.join(" ");
// };


// let woooooo = function (word) {
//     return word + "woooo";
// };

// let firstTwo = function (word) {
//     return word.slice(0,2);
// };


// let words = ["Hi", "myoooo", "name", "isooooo", "Mr", "Mattern"];
// console.log(sentenceMaker(words, woooooo, firstTwo));