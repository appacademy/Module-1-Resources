/*


  Callbacks

  We previously learned that functions are first class objects!
    Three reason why?
    * 1. Be stored in a variable
      ** function expression
    * 2. Passed as an arguments to a function
      ** callback functions
    * 3. Returned from a function
      ** closure/recursion

  What is a callback function?
    * A callback function is a function that passed into another function as an argument
    * Which is then invoked inside the outer function to complete some kind of logic

  What is a higher order function?
    * Function that receives or returns a function

  When passing anonymous callbacks function, use arrow function
  * much cleaner and shorter
  * mdn preferred way
  * use implicit return when possible
  [1,2,3].map(num => num * 10)
  * vs
  [1,2,3].map(function(num){
    return num * 10;
  })

  Callbacks vs helper function
  * All callbacks are helper function
  * But not all helper functions are callbacks
    * callbacks must be explicitly passed as an argument to another function

*/

// higher order function
// *  this function is going to take in a function as an argument
function higherOrder(cb) {
  console.log("entering higher order function");
  // console.log('callback',cb);// [Function: callback]
  // console.log('callback invoked',cb());// undefined | hello from callback function
  cb(); // hello from callback function
  console.log("after the callback has been called");
  console.log("exiting higher order function");
}

// callback function
// *  an anonymous function stored in a variable
let callback = () => console.log("hello from callback function");

// console.log(callback);//[Function: callback]

// console.log(callback());// undefined

// * we are gonna pass a function instead and its really no different than passing a variable that holds a primitive data type
let number = 12;
// console.log(number);// 12
// console.log('calling higher order')
// higherOrder(callback);

/*

  Different ways to pass function as callbacks

  1. Anonymous Implicit Callback
    * Implicit
    * Preferred way
    (name) => name.includes('o');

  2. Anonymous Explicit Callback
    * Explicit
    * Uses return keyword + {}
      (name) => {
        return name.includes('o');
      }

  3. Anonymous Callback Function Keyword
    * Uses function keyword
    function(name) {
      return name.includes('o');
    }

*/

// callback function
let double = (num) => num * 2;

// higher order function
// callback => double => function
function doubleNumbers(numbers, callback) {
  // console.log(numbers, callback);//[ 1, 2, 3 ] [Function: double]
  // console.log(callback());// NaN
  // * we are log the returning value of passing 12 to the callback
  // console.log(callback(12));// 24

  let doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    console.log("number before being passed to a callback: ", number);

    // store the return value
    let doubledNumber = callback(number);

    console.log("number after being passed to the callback: ", doubledNumber);

    doubled.push(doubledNumber);
    console.log("doubledArr: ", doubled);
  }
  return doubled;
}
// here we are invoking are higher order function
// we are passing an array and a variable that holds a function
// console.log('return val of doubleNums',doubleNumbers([1,2,3], double));

// passing a variable that holds a anon function
let array = [1, 2, 3];
// console.log(doubleNumbers(array, double));

// let double = num => num * 2;

// we can pass the anon function directly using implicit return
console.log(doubleNumbers([1, 2, 3], (num) => num * 2)); // [2,4,6]

// we can pass the anon function directly using explicit return
console.log(
  doubleNumbers([1, 2, 3], (num) => {
    return num * 2;
  })
); // [2,4,6]

// we can use the function keyword
console.log(doubleNumbers([1,2,3], function(num) {
  return num * 2
}));// [2,4,6]
