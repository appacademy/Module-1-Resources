/** Asynchronous vs Synchronous */

/******* Problem 1 **********/
console.log('one');
console.log('two');
console.log('three');

/* 
What will print to the console in order?


*/

/******* Problem 2 **********/
let foo = function () {
    console.log('two');
};

console.log('one');
foo();
console.log('three');
/* 
What will print to the console in order?


*/
/******* Problem 3 **********/
console.log('start');

setTimeout(function () {
    console.log('time is up');
}, 1500);

console.log('end');

/* 
What will print to the console in order?

Why do they print in this order?

Hint: What is asynchronous in the example above?

*/
