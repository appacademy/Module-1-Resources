/*

  Callbacks!
  We previously learned that functions are first class objects!
  1. stored in variable - learnt last week
  2. pass as an argument a function to another function - learn today
  3. return from a function - learn tomorrow

  A callback function is a function that we pass to another function as an argument
  - we can pass anon function as a argument
  * an anonymous function is a function with no name

  () => {} - anon function
  let name = () => {} - non anon function
  function name(){} - non anon function

  Helper function vs callback!
  - all callbacks are helper function but not all helper functions are callbacks
  - a callback is a function that passed as an argument

  * Higher order functions
  - a function that receives or returns another function

*/

//higher order function
let foobar = (cb) => {
  console.log("1: inside higher order func");
  // console.log(cb);//[Function: sayHello]
  cb(); //this func is invoked, so we call sayHello
  // console.log('after the callback has been called')
  return ": return from foobar";
};

//callback function
let sayHello = () => console.log("2: hello from callback");
let name = "brandon";

// console.log(name);//brandon
// console.log(sayHello);//[Function: sayHello]
// console.log(sayHello());//hello from callback

//invoke are higher order function
// console.log('3: return value of foobar',foobar(sayHello));

//call stack
//when a function is called, it is pushed on to the stack
//when a function is returned, it is popped off the stack
//whatever function is currently at the top of the stack, is js focus of attention
//stack first in last out

//callback function
let addTwo = (num) => num + 2;

//higher order function
let addToTwoArr = (numsArr, callback) => {
  console.log(numsArr, callback); //[ 1, 2, 3, 4 ] [Function: addTwo]
  let newArr = [];

  for (let i = 0; i < numsArr.length; i++) {
    let num = numsArr[i];
    // console.log(num);
    console.log("before callback num:", num);
    let resultOfNumAfterPassingToCallback = callback(num); //store in this variable, the return value of passing the current num to the callback function, a function evaluates to its return
    console.log("after callback num:", resultOfNumAfterPassingToCallback);
    newArr.push(resultOfNumAfterPassingToCallback);
  }
  return newArr;
};

// console.log(addTwo);//[Function: addTwo]
// console.log(addTwo(5));//7

//various ways to pass functions as a a callback

//we are passing to are func, two args, an array,
//were passing a variable that holds a function
// console.log(addToTwoArr([1,2,3,4], addTwo));//[ 3, 4, 5, 6 ]

//you can pass an anon function with fat arrow syntax, implicit return
// console.log(addToTwoArr([1,2,3,4], (num) => num + 2));

//anon callback with fat arrow not implicit return
// console.log(
//   addToTwoArr([1, 2, 3, 4], (num) => {
//     return num + 2;
//   })
// );

//function keyword
// console.log(
//   addToTwoArr([1, 2, 3, 4], function (num) {
//     return num + 2;
//   })
// );



let add = function(num1, num2, cb){
  // console.log(num1, num2, cb)

  if(cb === undefined) {
    return num1 + num2;
  } else {
    return cb(num1 + num2);
  }
}

// console.log(add(9, 40));//49
// console.log(add(9, 40, Math.sqrt))//7

//array methods takes in callbacks
let isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

// console.log(isPrime(11));//true
let numArr = [1,2,3,4,5,6,7];

let res = numArr.filter(isPrime);
// console.log(res);//[ 2, 3, 5, 7 ]

let timesTwo = (num) => num * 2;

console.log(numArr.map(timesTwo));  //(el, i, arr) => {}
// reduce((acc, el, i, arr) => {});
