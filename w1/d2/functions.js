/*


  Function
  - A function is a procedure for code that run when called
  - repeat behavior/logic over and over
  - writing a function is know as function declaration/definition

  * JavaScripts read top to bottom
  * Function will not be read, unless its called/invoked

  Three things to remember about return statements are:
  1. Every function call, evaluates to its return
  2. Every function is js, returns undefined by default unless a return is specified
  3. Once a return statement is encountered, the function will immediately stop and return the value, ignore any code below in scope

  Function naming convention
  - camelCase => functionTest
  - descriptive names
  - verb followed by a noun, CRUD: getInfo, deleteInfo, editInfo

  Creating the function and passing parameters

  - Parameters are used to represent the arguments passed

  ! creating the function functionName(param1, param2) {
    return undefined;
  }

  ! call/invoke the function and pass arguments
  ! if we dont call the function, it is never read
  functionName(argument1, argument2)

  when we pass an argument to a function
  the parameters under the hood just assign the argument to the parameter
  ! happening under the hood
  ex: let param1 = argument1
      let param2 = argument2

*/

// basic function
// This a function that does not take in arguments
function myFunc() {

  // code to be ran when function is called/invoked
  return 'Im returning a string';// this is what your function will evaluate too
  // return 12;
  // return true
  // can only return once
  console.log('do we make it?');// no - anything below a return in scope will not be read
}

// lets call/invoke the function
// provide function name
// a function evaluates to its return
// if we want to confirm this function returns what we expect
// we wrap it in a console.log
// myFunc();

//i want to log to the console the return value of calling myFunc
console.log(myFunc());// Im returning a string

// what happens if we don't invoke our function?
console.log(myFunc);// [Function: myFunc]
// if you see this [Function: myFunc] it means its a function, and you can invoke it - ()

// we can call a function more than once
console.log('Return value of myFunc:', myFunc());
console.log('Return value of myFunc:', myFunc());
console.log('Return value of myFunc:', myFunc());

// store return value in a variable
let result = myFunc();
console.log('Return value of myFunc stored in a variable', result);// Return value of myFunc stored in a variable - Im returning a string
// we are storing the return value of myFunc in a variable called result

// ! parameters and arguments

// a function that takes in no arguments but has parameters to represent them
// this function will thrown an error if we try to access param1 or param2 as no arguments are passed
function example1(param1, param2){
  // console.log(param1, param2);
};
example1()

// a function that takes in arguments but has no parameters to represent them
// you would have no way to get the arguments
function example2() {

}
example1('test', 'case');
