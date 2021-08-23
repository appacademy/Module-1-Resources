/**** setTimeout Lecture *****/

/********* Problem 1 **********/
// setTimeout(function () {
//     console.log('time is up');
// }, 1000);

// console.log('end');
/* 
What will print to the console in order?


*/
/********* Problem 2 **********/
// function foo() {
//     console.log('time is up');
// }

// setTimeout(foo);

// console.log('end');
/* 
What will print to the console in order?

Why does this behavior occur? 

*/
/********* Problem 3 **********/
// function foo(a, b) {
//     console.log('time is up');
//     console.log(a + ' ' + b);
// }

// setTimeout(foo, 1000, 'potato', 'tomato');

// console.log('end');

/* 
What will print to the console in order?

What do the third and fourth argument of the setTimeout call represent?

How many extra arguments can we use in setTimeout?

*/
/********* Problem 4 **********/
// function foo(a, b) {
//     console.log('time is up');
//     console.log(a + ' ' + b);
// }

// const res = setTimeout(foo, 1000, 'potato', 'tomato');

// console.log(res);

// /* 
// What will print to the console?



// */
// /********* Problem 5 **********/
// function foo(a, b) {
//     console.log('time is up');
//     console.log(a + ' ' + b);
// }

// const res = setTimeout(foo, 1000, 'potato', 'tomato');
// clearTimeout(res);
// /* 
// What will print to the console?



// */
