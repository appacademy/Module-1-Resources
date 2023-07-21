/*

  Mini Lecture

  * Callbacks/Call stack

  * Closures

  * Destructuring

*/

/*
  Callbacks/Call stack

  We previously learned that functions are first class objects!
    Three reason why!
      * 1. Be stored in a variable:
        ** Function Expression
      * 2. Passed as an argument to a function:
        ** Callback Functions
      * 3. Returned from a function:
        ** Closures/Recursion


  What is a callback function?
    * A callback function is a function passed into another function as an argument
    * Which is then invoked inside the outer function to complete some kind of routine or action

  What is a higher order function?
    * Function that receives or returns a function

  When passing a anonymous callback function, use a arrow function
    * Much cleaner and shorter
    [1,2,3].map(num => num * 10);// [10,20,30];
    * vs
    [1,2,3].map(function(num){
      return num * 10;
    });
    * Its also MDN's recommended way


*/

// higher order
function higherOrder(cb) {
  console.log("Entering higher order function");
  console.log(cb); //[Function: callback]
  cb(); //hello from our callback
}

// callback function
// * an anon function
let callback = () => console.log("hello from our callback");
// let age = 27;
// console.log(age);

// console.log(higherOrder(callback));

/*

  Different ways to pass function as callbacks

  1. Anonymous Implicit Callback
    * Implicit
    * Preferred way
    (name) => name.includes('o')

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
function doubleNumbers(numbers, callback) {
  console.log(callback); // [function];
  console.log(numbers); // [1,2,3];
  console.log(callback(21)); // 23;

  let doubled = [];

  // double number and pass to new array
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    console.log("number before being passed to callback: ", number);

    // pass number to callback function
    let doubledNumber = callback(number);

    console.log("number after being passed to callback: ", doubledNumber);
    // * we are storing the return value of passing the current number to the callback function in a variable called doubledNumber
    // * we will then push the doubled number into the doubledArray

    doubled.push(doubledNumber);
    console.log(doubled);
  }

  return doubled;
}

// passing function stored in variable to higher order function
// * callback is the double function
console.log(doubleNumbers([1, 2, 3], double)); // [2,4,6];

// * no different than passing the array in a variable instead
let array = [1, 2, 3];
console.log(doubleNumbers(array, double)); // [2,4,6];

// we can pass an anonymous callback to our function
// * Implicit return - no curly's or return keyword
// * this is the cleanest way to pass callbacks
console.log(doubleNumbers([10, 20, 30], (num) => num * 2)); // [20,40,60];

// anonymous callback with explicit return
// * uses return keyword and curly's
console.log(
  doubleNumbers([100, 200, 300], (num) => {
    return num * 2;
  })
); // [200,400,600];

// anonymous callback using function keyword
console.log(
  doubleNumbers([1000, 2000, 3000], function (num) {
    return num * 2;
  })
); // [2000,4000,6000];

/*
 Closures
*/
