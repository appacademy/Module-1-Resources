// // Function Hoisting

// // Function Declaration
// // heyThere()

// // function heyThere() {
// //     console.log("Hey There");
// // }

// // Function Expression
// // heyThere()

// // var heyThere = function() {
// //     console.log("Hey There");
// // }

// var hello;

// function hello() {
//     console.log("hello")
// }

// console.log(hello)


// IIFE - Immediately Invoked Function Expressions

// Keep the global namespace clean

/* 
1. Declared a function
2. Use immediately after
3. Never going to use the function again
*/

// let run = (name) => {
//     console.log("start the program," + name)
// }

// run("Bill")

// ((name1) => {
//     let name2 = "Bill"
//     console.log(`start the program ${name1} and ${name2}`);
// })("Jeff") 



// Falsy Values
// undefined, null, NaN, 0, "" (empty string), false
// let hello = "";
// let arr = [];
// let obj = {};

// if (arr) console.log("Im true")
// else console.log("Im false");



// Default Params
// const hello = (greeting = "Hello, There.") => console.log(greeting);

// hello("What's Going On?")
// hello()



// const mapper = (arr, cb, result=[]) => {
//     // base case
//     if (!arr.length) return result;

//     // recursive case - arr.length exits
//     const ele = arr[0];
//     result.push(cb(ele));
//     return mapper(arr.slice(1), cb, result);
// }

// let arr = [1,2,3]
// let cb = ele => ele * 200
// console.log(mapper(arr, cb));



// Shallow vs Deep Copy
let a = [1,2,3];
// let b = a;
// console.log(a === b);

// b.push(4);
// console.log(a)

let b = a.slice()
console.log(b)
console.log(a === b)

