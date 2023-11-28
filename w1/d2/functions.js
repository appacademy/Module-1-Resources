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

// basic function
// define a function
// hold this logic
// doesnt do anything till its called
function myFunc() {

  // once we hit a return we exit the function
  return 'a string'
  // return true;
  // return 12;

}

// call the function
myFunc();

// if i want to see what my function evaluates too
// im console.log the function call
// console.log(myFunc);// [Function: myFunc]
// console.log('return value of myFunc =>',myFunc())

// weve stored the return value of a function in a variable
// let res = myFunc();
// console.log(res);// a string



// let param1 = maica
// let param2 = trevor
// param1 and param2 are paramters
// which represented the arguments passed
function printNames(param1, param2) {

  let result = 'hello ' + param1 + ' ' + param2;
  // let result = 'hello ' + maica + ' ' + trevor;
  return result;

};

// console.log(printNames());
// hello undefined undefined
// maica and trevor are the arguments
// console.log('1 ==>',printNames('maica', 'trevor'));// hello maica trevor
// console.log('2 ==>',printNames('brandon', 'charles'))// hello brandon charles




// let num = 2
function addTwo(num){

  return num + 2;
};

// we need to wait for the return before printing this log
// console.log('return value of a function',addTwo(2));

// console.log('==>',addTwo(100))

// let res = addTwo(900);
// console.log(res);

