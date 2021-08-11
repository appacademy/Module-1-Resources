// var hello;

// function hello() {
//   console.log("hello");
// }

// console.log(hello);

// var declaration < function declaration < var init

//IIFE - Immediately Invoked Function Expression
/* 
Keep the global namespace clean 
*/

/* 
1. Declared a function
2. Using it immediately after
3. Never going to use it again.
*/

// let run = () => {
//   console.log("starting the program");
// };

// (/*declare my function*/)(/*these invoke the function*/)

// ((name) => {
//   console.log(`starting the program, ${name}`)
// })("Thanh");

// Falsy Values
// let arr = [];
// let obj = {};
// let hello;
// if (hello) {
//   console.log("I'm true");
// } else {
//   console.log("I'm false");
// }

//Default Params

// const hello = (greeting = "Hello there!") => console.log(greeting);
// hello();
// hello("Howdy, y'all");

// const mapper = (arr, cb, res = []) => {
//   if (!arr.length) return res;
//   const el = arr[0];
//   res.push(cb(el));
//   console.log(res);
//   return mapper(arr.slice(1), cb, res);
// };

// //Test cases here don't edit
// console.log(mapper([1, 2, 3], (x) => x * 200)); // [ 200, 400, 600 ]

// What is a deep dup?
let arr = [1, [2, 3, [4, 5]]];
let arr2 = arr.slice(); //[1, #003]
arr2[1] = arr[1].slice(); //[2, 3, #004]
arr2[1][2] = arr[1][2].slice() //[4, 5]
arr2[1][0] = 5
console.log(arr);
console.log(arr2);
// console.log(arr[1][2] === arr2[1][2]);


//Shallow Vs Deep Copy Demo
let a = [1, 2, 3];
let b = a;
// not a copy because a and b point to the same array in memory
a === b // true;
​
b = a.slice(0)
// b is a shallow copy of array a
b[0] = 'new'
console.log(b); // b is now: ['new',2,3]
console.log(a); // and a is still [1,2,3]
a !== b // true // they point to different objects in memory BUT:
​
// however b is a shallow copy, meaning that it copies references to 
// the original elements of the array.
// let's say a looked like this:
a = [1, [0, 2], 3]
b = a.slice(0); // and we made a shallow copy using slice
// changing the nested array at b would still change it for a
b[1][0] = 'new';
console.log(a); // [1, ["new", 2], 3]
// for a deep copy, changing b's nested array would only affect b and not a