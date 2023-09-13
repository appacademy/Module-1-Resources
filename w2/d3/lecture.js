/*


  Callbacks!

  We previously learned that functions are first class objects
   Three reasons why!
   1. Be stored them in a variable
    ** function expression
   2. Passed as an argument to a function
    ** Callback function
   3. Returned from a function
    ** closures/recursion

  What is a callback function is?
  * A callback function is a function passed into another function as an argument
  * Which is then invoked inside the outer function to complete some kind of routine

  What is a higher order function?
  * A function receives or returns a function

  When passing a anonymous callback function, use fat arrow function
    * much cleaner and shorter
    [1,2,3].map(num => num * 10);
    * vs
    [1,2,3].map(function(num){
      return num * 10
    })
    * Its also MDN's recommended way

  Callback vs helper functions
    * All callbacks are helper functions
    * But not all helper functions are callbacks
      * Callback has to be explicitly passed as an argument to a function

*/

// higher order function
// * when the callback function is passed, its new variable to reference it will be cb
// callback = cb = () => console.log('hello from callback')
function higherOrder(cb) {
  console.log("entering higher function");
  // console.log(cb);// [Function: callback]
  // console.log(cb());// hello from callback
  cb();
  console.log("after calling the callback");
  console.log("exiting the higher order function");
}

// storing an string in a variable
let name = "brandon";
// we are passing the string as an argument to the function
// higherOrder(name);

// callback function
// * an anonymous function stored in a variable
let callback = () => console.log("hello from callback");

// console.log(higherOrder(callback))

// console.log(callback);// [Function: callback]
// console.log(name);// brandon

// console.log(callback());//hello from callback | undefined
// * log for me the return value of callback invoke - we get undefined there is no return
// hello from callback

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
// let double = num => num * 2;
function double(num) {
  return num * 2;
}

// higher order function
// * numbers = [1,2,3]
// * callback = double = Function: double]
function doubleNumbers(numbers, callback) {
  // console.log(numbers, callback);//[ 1, 2, 3 ] [Function: double]
  // console.log(callback());//undefined * 2 = NaN
  // console.log(callback(10));//10 * 2 = 20
  let doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    console.log("number before passing to the callback", number);
    // pass the number to the callback
    let doubledNumber = callback(number);
    console.log("number after passing to the callback", doubledNumber);
    doubled.push(doubledNumber);
  }

  return doubled;
}

// console.log(double);// [Function: double]
// * passing directly a function's name as a callback
console.log(doubleNumbers([1, 2, 3], double)); // [ 2, 4, 6 ]

// think of it like this
let array = [1, 2, 3];
// console.log(doubleNumbers(array, double)); // [ 2, 4, 6 ]

// we can pass an anonymous callback to our function
// * Implicit return - no curly's or return keyword
// * this is the cleanest way to callback
console.log(doubleNumbers(array, (num) => num * 2)); // [ 2, 4, 6 ]


// anon callback with explicit return
// * uses return keyword and the curly's
console.log(
  doubleNumbers(array, (num) => {
    return num * 2;
  })
); // [ 2, 4, 6 ]

// pass an anon callback using the function keyword
console.log(
  doubleNumbers(array, function (num) {
    return num * 2;
  })
); // [ 2, 4, 6 ]
