// // 1. Stored in a variable 

// let func = function() {
//     console.log("I am stored in a variable");
// };

// func();

// // 2. Passed as an argument to a function

// let higherOrderFunction = function(cb) {
//     cb();
// };

// let intoAFunction = function() {
//     console.log("I am being passed into a func");
// };

// higherOrderFunction(intoAFunction);

// // 3. Returned from a function

// function HOF () {
//     return function () {
//         console.log("I am being returned from a function");
//     };
// };

// HOF()();


// CALLBACKS

// Problem 1
// Math Functions
// I want to create a function that can do these 3 calculations:
    // 1. add
    // 2. multiply
    // 3. exponent


// let math = function (num1, num2, cb) {
//     let res = cb(num1, num2);
//     return res;
// };

// let add = function (num1, num2) {
//     return num1 + num2;
// };

// console.log(math(4,5,add));

// let multiply = function (num1, num2) {
//     return num1 * num2;
// };

// console.log(math(2,6,multiply));

// let exponent = function (num1, num2) {
//     return num1 ** num2;
// };

// console.log(math(2,3,exponent));



// Problem 2
    /* 
    Instructions:
    
    This example is going to take the countScores() problem from yesterday
    and expand upon it.
    
    Write 2 callback functions:
        1. To track Points For
        2. To track Points Against
    
    Write a function calculateScores() that takes in an array of objects (games) as its input.
    The object has four key-value pairs: the winner's name, the loser's name, 
    the winner's score and the loser's score. Use the callback function to 
    determine the calculation and return the result.
    
    Example 1:
    let games = [
        { winnerName: "John", loserName: "Jack", score1: 10, score2: 4 },
        { winnerName: "Jeff", loserName: "Joe", score1: 12, score2: 1 },
        { winnerName: "Jack", loserName: "Joe", score1: 7, score2: 3 },
        { winnerName: "Jeff", loserName: "John", score1: 6, score2: 0 },
        { winnerName: "Joe", loserName: "John", score1: 3, score2: 2 }
    ]
    console.log(calculateScores(games,pointsFor)); // { John: 12, Jack: 11, Jeff: 18, Joe: 7 }
    console.log(calculateScores(games,pointsAgainst)); // { John: 13, Jack: 13, Jeff: 1, Joe: 21 }
    */

// 


// Multiple Callbacks
/* 
    I want to write a function sentenceMaker() that intakes an array of words and 2 callbacks.
    It will return the array turned into a sentence with every other word using the 
    opposite callback.
    
    2 callbacks - 
        1. adds "woooo" to the end of the word - if the index is even
        2. only returns the first 2 letters of the word - if the index is odd
    */

// let sentenceMaker = function (words, cb1, cb2) {
//     let result = words.map(function (word, i) {
//         if (i % 2 === 0) return cb1(word);
//         else return cb2(word);
//     });

//     return result.join(" ");
// };

// let woooo = function (word) {
//     return word + "woooooooooooooooooo";
// };

// let firstTwo = function (word) {
//     return word.slice(0,2);
// };

// let words = ["One", "Ring", "To", "Rule", "Them", "All"];
// console.log(sentenceMaker(words,woooo));



// My .forEach()

let people = ["Jeff", "Schuler", "Bill", "Adam", "Hector"];

// Regular For Each Loop
people.forEach(function (ele, i, arr) {
    console.log(ele + " is at idx " + i);
});

// Custom For Each Loop
let myForEach = function (arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        cb(ele, i, arr);
    };
};

let func = function (ele, i, arr) {
    console.log(ele + " is at idx " + i);
};

myForEach(people, func)
