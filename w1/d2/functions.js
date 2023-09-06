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
// console.log('Return value of myFunc:',myFunc());
// console.log('after the function call')
// can call them multiple times
// console.log('Return value of myFunc:',myFunc());
// console.log('Return value of myFunc:',myFunc(),'asdf', true, 12);

// console.log(myFunc());// true
// console.log(myFunc);// [Function: myFunc]
//if you see your variable is a function; you can call it


// lets talk about parameters and arguments
// * function definition - where the function is defined
// * and parameters are used to represent the arguments passed
// * let name1 = 'brandon'
// * let banana1 = 'trevor'
// * parameters can be named anything they are bananable
function printNames(name1, banana1){
  console.log(name1, banana1);//brandon trevor
  return 'Hello ' + name1 + ' and ' + banana1;
}

// function call
// * this is where we pass arguments
// * the arguments passed are the string of brandon and trevor
// * they are positional
// // printNames();
// console.log('return value of printName1:', printNames('brandon', 'trevor'));// return value of printName1: Hello brandon and trevor
// console.log('return value of printName2:', printNames('charles', 'maica'));// return value of printName2: Hello charles and maica


// 🍌

// defined a function
function addNumbers(num1, num2){
  console.log(num1, num2);// 1 2
  console.log('look here ===>', num1 + num2);
  // do we want to return the expression or store the expression in a variable and return that
  let result = num1 + num2;
  // console.log(result);
  // return result;
  return result
  // return num1 + num2;
}


// console.log('return value:', addNumbers(10, 12));// 22
// console.log('return value:',addNumbers(1, 2));// 3
addNumbers(1, 2)
// console.log(console.log())//undefined
let result1 = addNumbers(1,2);
// this logic still happen; all that matters is that the function is called
console.log(addNumbers(1, 2));// 3

// This variable holds the return value of the function
// because a function evaluates to its return
console.log(result1);// 3



