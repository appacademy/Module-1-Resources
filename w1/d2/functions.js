/*


  Functions
    * A function is a procedure of code that will run when its called
    * Writing a function is know as a function declaration or function definition
    * create reusable logic - do not have repeat writing the same lines of code
    * Contains logic to be ran to output a value
    * JavaScript reads top to bottom
    * Function is not read till its called/invoked

  So three things to remember about return statements are:
    * Every function call evaluates to its return value
    * Every function is js returns undefined unless a return is specified
    * Once a return statement is encountered, the function will immediately stop and return the value; anything below the return is ignored

  Function naming convention
    * camelCase => myFunc
    * descriptive names
    * verb followed by a noun: CRUD - getInfo, deleteInfo, editMessage
    * If the return value is a boolean; you could name is checkBoolean

  Declaring/Defining a function
    * Where function is declared/created.
    * where parameters are used to represent the argument passed
    function functionName(param1, param2) {
      return undefined;
    }

  Calling/invoking a function
    * How we tell js to call/use this function.
    * Where we pass the arguments the function
    * A function will not run unless its called/invoked
    * A function call evaluates to return value
    functionName(arg1, arg2);

  If you want to see what a function evaluates too; its return value.
    * You would wrap the function call/invocation in a console.log
    * console.log(functionName());// undefined
    * we are logging what the function evaluates too
    * which is its return value

*/

// Introduce a basic function
// * declaring function
function myFunc() {

  // if we dont have a return, the function will evaluate to undefined
  // the return is what the function will evaluate too
  // return 'im returning a string';
  // * can return any data type
  // return true;
  return 12;
  // return false;// <-- we cannot return more than once, everything will be ignored as the function will have its value
}

// * calling the function
myFunc();

// A function evaluate to its return
// * I want to see what a function evaluates too, wrap it a console.log
console.log('Return value from of myFunc =>', myFunc());//

// * We can store the return value of a function in a variable
let returnValue = myFunc();
// console.log(returnValue)

// we can call a function multiple times
// console.log('Return value from of myFunc1 =>', myFunc());//
// console.log('Return value from of myFunc2 =>', myFunc());//
// console.log('Return value from of myFunc3 =>', myFunc());//

// If we console.log a variable and we see something like this [Function: myFunc]
// That means you can invoke it
console.log('Function itself =>', myFunc);// [Function: myFunc]
