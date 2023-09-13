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
function higherOrder(cb){
  console.log('entering higher function')
  // console.log(cb);// [Function: callback]
  // console.log(cb());// hello from callback
  cb();
  console.log('after calling the callback');
  console.log('exiting the higher order function')
};

// storing an string in a variable
let name = 'brandon';
// we are passing the string as an argument to the function
// higherOrder(name);

// callback function
// * an anonymous function stored in a variable
let callback = () => console.log('hello from callback')

console.log(higherOrder(callback))

// console.log(callback);// [Function: callback]
// console.log(name);// brandon

// console.log(callback());//hello from callback | undefined
// * log for me the return value of callback invoke - we get undefined there is no return
// hello from callback
