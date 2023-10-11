/*

  Callbacks!

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

  Callback vs Helper functions
  * All callbacks are helper functions
  * But not all helper functions are callbacks
    * Callbacks must be explicitly passed as an argument to a function

  ? Call Stack
  * When a function is called, it is pushed on to the stack
  * When a function is returned, it is popped off the stack
  * Whatever function is currently at the top of the stack, is js focus of attention
  * stack - first in last out

*/
let callback = () => console.log('hello from callback function');

// higher order function
function higherOrder(param) {
  console.log('hello from higher order function');
  // console.log(param);// [Function: callback]
  // console.log(param())
  param();// hello from callback function
};


// let name = 'brandon';
// let age = 27
// console.log(higherOrder(age));


// console.log(callback);// [Function: callback]

// higherOrder(callback);



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



// higher order function
function doubleNumbers(numbers, callback) {
  // console.log(numbers, callback);//[ 1, 2, 3, 4, 5 ] [Function: double]
  // console.log(callback());NaN
  // console.log(callback(23));// 46
  let doubled = [];
  for(let i = 0 ;i < numbers.length; i++){
    let number = numbers[i];
    // console.log(number);
    // console.log(callback(number));
    console.log('before passing num to callback', number)
    let doubledNum = callback(number);
    console.log('after passing num to callback', doubledNum)
    doubled.push(doubledNum);
  };

  return doubled;
};


let array = [1,2,3,4,5];
let double = (number) => number * 2;


console.log(doubleNumbers(array, double));
