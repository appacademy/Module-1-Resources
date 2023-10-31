/*

  Functions

  What is a function?
    * A function is a procedure of code that will run when called.
    * Writing a function is known as a function declaration or function definition
    * create reusable logic - do not have to repeat the same line of code
    * Logic to be ran to output a value

  * Javascript reads top to bottom
  * Function is not read till its called/invoked

  So the three things to remember about return statements are:
    * Every function call evaluates to its return value.
    * Every function in JavaScript returns undefined unless a return is specified.
    * Once a return statement is encountered, the function will immediately stop and return the value, ignoring any code below the return statement.

  Function naming convention
    * camelCase => functionTest
    * descriptive names
    * verb followed by a noun, CRUD getInfo, deleteInfo, editInfo
    * If the return value is a Boolean, the name should be isValue where Value is whatever we are checking

  * Declaring/Defining the function
  * Where parameters are used to represent the arguments passed
   function functionName(param1, param2){
    return undefined;
   }

  * Calling/invoking the function and passing arguments
   functionName(argument1, argument2)
   console.log(functionName())// undefined
    * we are logging what the function evaluates too
    * which is its return value


*/

// defining the function
function myFunc() {
  console.log('hello from my func')
  return true;
  // return false;
}


// invoke/call
// myFunc();
// console.log('return value of my Func',myFunc());// true
let returnVal = myFunc();

// console.log(returnVal);// true

// console.log(myFunc);// [Function: myFunc]
// console.log(myFunc());// true





function lastIndex(banana) {

};

lastIndex('cats');


console.log('the return value of', lastIndex('cats') );
