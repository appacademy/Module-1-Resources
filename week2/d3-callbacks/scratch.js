// let func1 = function () {
//   console.log("I'm stored in a variable");
// };

// let arr = [
//   function hello () {
//     console.log("I'm stored in an array");
//   },
//   "hello"
// ];

// console.log(arr[0]());
// console.log(arr[1])

// let obj = {
//   func: function () {
//     console.log("I'm stored in an object");
//   },
// };

// console.log(obj.func());

// let higherOrderFunction = function (callback) {
//   callback();
// };

// let intoAFunction = function () {
//   console.log("I'm being passed into a function");
// };

// let intoAFunctionPt2 = function () {
//   console.log("I'm ALSO being passed into a function");
// };

// higherOrderFunction(intoAFunction); // I'm being passed into a function
// higherOrderFunction(intoAFunctionPt2); // I'm ALSO.....

function HOF(){
  return function(){
    console.log('I\'m being returned from a function');
  }
}

// console.log(HOF()); // this will be the inner function

HOF()(); // this will invoke the inner function

let returnFromFunc = HOF(); // we could also save it to a variable

console.log(returnFromFunc); // this will be the inner function

returnFromFunc(); // then call the variable