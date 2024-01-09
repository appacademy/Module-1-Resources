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


   talk about order of execution of code
*/

// function declared
// logic is ran
// params are used to represent args
// string = cats
function lastIndex(string){
  // console.log(string);//cats

  // console.log(string[0]);c
  // console.log(string,string[string.length - 1]);s
  return string[string.length - 1]
}


//function call/invocation
// where we pass arguments
// console.log('the return value of lastIndex 1', lastIndex('cats'));//s
// console.log('the return value of lastIndex 2', lastIndex('hippopotamuses'));// p
// console.log('the return value of lastIndex 3', lastIndex('ant'));// t

// return value
// take an input
// run logic
// give us an output
// the return is the output

//num1 = 1
//num2 = 2
//num3 = 3
function multiply(num1, num2, num3, banana){
  console.log(num1, num2, num3, banana)
  if(typeof num1 === 'number'){
    console.log(console.log('do something'))
  }
  return num1 * num2 * num3 * banana
}

console.log(multiply(1, 2, 3, 4));// 6

// let returnValueOfMultiply = multiply(1,2,3);
// console.log(returnValueOfMultiply)

// undefined is like a holder for a variable that will eventually be defined
// null as the absence of a value

/*
 Read/Watch/Code: 35min
  - Functions Lecture REPL
  - Intro to functions quiz
  - Goodbye
  - Repeat Name
  - Parameters and Arguments Quiz
  - Hello
  - Be Cool
*/


function myFunc(){

};

let myFunc2 = function() {
  
}
