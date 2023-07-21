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
  console.log('Entering higher order function');
  console.log(cb);//[Function: callback]
  cb(); //hello from our callback
}

// callback function
// * an anon function
let callback = () => console.log("hello from our callback");
// let age = 27;
// console.log(age);

console.log(higherOrder(callback));



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

/*
 Closures
*/
