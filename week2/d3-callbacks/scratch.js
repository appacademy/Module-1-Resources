// let func1 = function () {
//     console.log("I'm stored in a variable");
// }; // can be stored in a variable

// let arr = [
//     function func1() {
//         console.log("I'm stored in an array");
//     },
//     function func2() {
//         console.log("I'm ALSO stored in an array");
//     },
// ];

// let obj = {
//     func: function anotherName() {
//         console.log("I'm stored in an object");
//     },
// };

// obj['func'];
// obj.func();

// let higherOrderFunction = function (callback) {
//     console.log("I'm a HOF");
//     callback();
// };

// let intoAFunction = function () {
//     console.log("I'm being passed into a function");
// };

// let intoAFunctionPt2 = function () {
//     console.log("I'm ALSO being passed into a function");
// };

// // higherOrderFunction(intoAFunction); //
// higherOrderFunction(intoAFunctionPt2);

// function HOF(num) {
//     return function (num2) {
//         console.log(num + num2);
//     };
// }

// console.log(HOF()); // this will be the inner function

// HOF(1)(2); // this will invoke the inner function

// let returnFromFunc = HOF(1); // we could also save it to a variable

// console.log(returnFromFunc); // this will be the inner function

// returnFromFunc(2); // then call the variable
