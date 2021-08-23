/***** setInterval *****/
/* 
If running node <path/to/file> run ctrl+c to stop execution
*/
/********* Problem 1 **********/
// function foo(a, b) {
//     console.log('time is up');
//     console.log(a + ' ' + b);
// }

// setInterval(foo, 1000, 'potato', 'tomato');
/* 
What will print to the console? How often and how many times?

*/
/********* Problem 2 **********/
// function foo(a, b) {
//     console.log('time is up');
//     console.log(a + ' ' + b);
// }

// let interval = setInterval(foo, 1000, 'potato', 'tomato');
// clearInterval(interval);
/* 
What will print to the console? How often and how many times?

*/
/********* Problem 3 **********/
// let count = 0;

// function foo() {
//     console.log('time is up');
//     count++;

//     if (count == 10) {
//         clearInterval(intervalObj);
//     }
// }

// const intervalObj = setInterval(foo, 1000);
// /* 
// What will print to the console? How often and how many times?



/********* Problem 4 - REFACTOR **********/
// function intervalCount(count) {
//     const intervalObj = setInterval(function () {
//         console.log('time is up');
//         count--;

//         if (count === 0) {
//             clearInterval(intervalObj);
//         }
//     }, 500);
// }
// intervalCount(3);

/* 
What will print to the console? How often and how many times?


*/
/********* Problem 5 - REFACTOR 2 **********/
// function intervalCount(count, delay) {
//     const intervalObj = setInterval(function () {
//         console.log('time is up');
//         count--;

//         if (count === 0) {
//             clearInterval(intervalObj);
//         }
//     }, delay);
// }

// intervalCount(3, 250);
/* 
What will print to the console? How often and how many times?


*/
/********* Problem 6 **********/
// function intervalCount(cb, count, delay) {
//     const intervalObj = setInterval(function () {
//         cb();
//         count--;

//         if (count === 0) {
//             clearInterval(intervalObj);
//         }
//     }, delay);
// }

// intervalCount(
//     function () {
//         console.log('hello');
//     },
//     5,
//     1000
// );

/* 
What will print to the console? How often and how many times?


*/
