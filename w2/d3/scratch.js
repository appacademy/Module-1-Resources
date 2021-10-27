// // 1. Stored in a Variable

// let func = function() {
//   console.log("I am stored in a variable");
// };

// func();

// // 2. Passed as an argument to a function
// let intoAFunction = function() {
//   console.log("I am being passed into a function");
// };

// let higherOrderFunction = function(callBack) {
//   callBack();
// };


// higherOrderFunction(intoAFunction);


// // 3. Returned from a function
// function HOF () {
//   return function () {
//     console.log("I am being returned from a function");
//   };
// };

// HOF()();


// Callbacks

// 


// Multiple Callbacks

/* 
    I want to write a function sentenceMaker() that intakes an array of words and 2 callbacks.
    It will return the array turned into a sentence with every other word using the 
    opposite callback.
    
    2 callbacks - 
        1. adds "yaaa" to the end of the word
        2. only returns the first 2 letters of the word
*/

// let sentenceMaker = function (words, cb1, cb2) {
//   return result = words.map(function (word, i) {
//     if (i % 2 === 0) return cb1(word);
//     else return cb2(word);
//   }).join(" ");

//   // return result.join(" ");
// };


// let yaaa = function(word) {
//   return word + "yaaa";
// }

// let firstTwo = function(word) {
//   return word.slice(0,2);
// }

// let words = ["My", "name", "is", "jeff"];
// console.log(sentenceMaker(words, yaaa, firstTwo));



let people = ["Jeff", "Bill", "Hector", "Dan", "David", "Wes", "Geoff"];

// Regular For Each Loop

// people.forEach(function (el, i, arr) {
//   console.log(el + " is at index " + i);
// });

// Custom For Each Loop
let myForEach = function (arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    cb(el, i, arr);
  };
};

let func = function(el, i, arr) {
  console.log(el + " is at index " + i);
}

myForEach(people, func);