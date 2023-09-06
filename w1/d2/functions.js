/*


  Functions

  What is a function is?
    * A block of code that you can call and use over and over
    * Writing a function a is known as a function declaration or function definition
    * create reusable logic - do not have to repeat the same lines of code
    * Logic to be ran to output a value
    * A function evaluates to its return

  * Javascript reads top to bottom
  * Functions are not read till they are called/invoked

  So three things to remember about return statements are:
    1. Every function call evaluates to its return value
    2. Every function in javascript returns undefined unless a return is specified
    3. Once a return statement is encountered, the function will immediately stop and return the value, ignoring all the code below that line


  Function naming convention
    * camelCase -> functionTest
    * descriptive names
    * verb followed by a noun; CRUD: getInfo, deleteInfo, editInfo, createInfo
    * If the return value is a boolean, name could be checkBoolean

  Declaring/defining the function
  * Where parameters are used to represent the arguments passed
    function functionName(param1, param2) {

    }

  Calling/invoke the function
  * Where we pass our arguments to the function
    functionName(arg1, arg2)
  * When we call our function it will evaluate to its return
    functionName(arg1, arg2) => evaluates to return value of the function

    param1 = arg1
    param2 = arg2
*/

// Introducing a basic function
// function declaration
function myFunc(){
  // if there is not return, the return defaults to undefined
  // return 12;
  // return an data type
  // all logic below return is ignored
  console.log('entering my func');// ! this console.log gets called every time we call the function
  return true;
  // return 'string'
  // return myfunc
};
// Calling/invoking the function
// * function is not ran unless its called!
// myFunc()
// if we want to see what this function evaluates too
// we have to wrap it in a console.log
// console.log('before calling function')
console.log('Return value of myFunc:',myFunc());
// console.log('after the function call')
// can call them multiple times
console.log('Return value of myFunc:',myFunc());
// console.log('Return value of myFunc:',myFunc(),'asdf', true, 12);
