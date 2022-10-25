/*
Functions
  What is a function?
    - function is a block of code, that takes a args, implements the arguments given
    - reusable, call it anytime,
    - functions evaulate to returns, if there is no return , it returns undefined
    - functions can hold conditional statments, logic
    - first class objects - learn more on later on
    - writing a function is a procedute of code that will run when called
    - writing a function is know as function declaration or function defintion

    Javascript does read from top to bottom
    will not read a function until its called
*/


//function declaration
//function keyword
//followed by the function name

function functionName(){
  //this function does nothing
  //it was never called, so javascript doesnt see it
}


// function helloWorld() {
//   console.log('Hello world')
// }

// //function invocation
// //this is how we call/invoke our function
// //our function will not run unless it is called/invoked
// console.log(helloWorld())//undefined - because there is no return


//another function with a return value and an arg
function printName(name) {
  return name;
};

// console.log(printName('brandon'))//brandon


//arguments vs paramaters
//paramaters is passed to the function, it represent the arguemnts being passed when the funciton is called
//num is a paramater
function addTwo(num) {
  // console.log(num)//undefined
  return num + 2
}

//want to see something on the screen console.log
//console.log vs return
//arguments are passed to the function invocation
//the argument is 12
console.log(addTwo(12))//14

//function evaluates to its return value,

let result = addTwo(12);
console.log(result)
//without passing in arguemnt
console.log(addTwo())//NaN


console.log(addTwo(12) === 14)//true


//examples
//write a function return the last index of a word
// name = 'brandon';
function lastIndex(arg){
  // console.log(arg);
  // console.log(arg[0]);//d
  // console.log(arg[1]);//r
  // console.log(arg[arg.length - 1])//n
  // return arg[arg.length - 1]
  let result = arg[arg.length - 1];
  return result;
}

console.log(typeof 'string')//string
console.log(lastIndex('dragon'));//n


//multiply two numbers
function multiply(num2, num1) {
  console.log(num1); //2
  console.log(num2); //10
  return num1 * num2
}

console.log(multiply(2, 10))
