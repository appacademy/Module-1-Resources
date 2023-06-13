/*


  Functions!

  What is a function?
  - a reusable piece of code
  - A function is a procedure of code that will run when called
  - object you can call

  * javascript will reads to bottom
  * js will not read a function until its called
  * a function has a return default value of undefined


  So three things to remember about returns statements
  1. Every function call evaluates to its return
  2. Every function is js returns undefined, unless a return is specified
  3. once a return statement encountered, the function will immediately stop and return the value, anything below will be not be accessible

  Function naming convention
  - camelCase => functionName
  - descriptive names
  - verb followed by a noun => CRUD getInfo, deleteInfo, editInfo,
  - If the return value is a Boolean, the name should be isValue where Value is whatever we are checking

  Function declaration
  - function keyword -> functionName -> grouping operator(   params1, params2, ) -> codeBlock{  }
  - function example(param1){                                   ^ params are used to represented the arguments passed

  }

  Invoke/call a function
  - invoke named function
  - when you invoke a function, this where you can pass arguments
  example(arg1, arg2)
  functionName(arg1);

*/

//example of a function that is never called
function function1(){
  //this does nothing we never call it
  console.log('hey did we call it?');//nope
}


//example is a function is going to just console.log
//this function is only going to print hello world
function helloWorld(){
  console.log('hello world');
}

// helloWorld();//call this function

//what if wanted to see the return value?
// console.log(helloWorld);//[Function: helloWorld]
// console.log(helloWorld());//this function has no return value so it default to undefined
//we are saying hey log to the terminal the return value of calling helloWorld()\
//there is no return, default to undefined


//example function with a return value
//function evaluates to its return
//when you return, any code below will not run
// name is the parameter, parameters are used to represent the arguments passed
// name does not have to be named name, parameters can be names anything
//let banana = 'anthony;
function printName(banana) {
  console.log(banana);//brandon
  // return banana;

};

//Can have multiple cases
//we can pass arguments to functions calls, lets pass a string of brandon
//brandon is the argument
// console.log('return value of printName',printName('brandon'));//brandon
// we want to see what our function evaluates too
let name = 'anthony';
// console.log('return value of printName', printName(name));

//console.log when you want to see the output
//return when youre function is going to evaluate to something and youre going to use it


function addTwo(num1){

  return num1 + 2;
  // console.log(num1 + 2)
  console.log('will not be reached')
}


// console.log(addTwo(10));//12

let returnOfAddTwo = addTwo(10);
// console.log(returnOfAddTwo);//12
// //i have the return value of addTwo stored in a variable

// console.log(returnOfAddTwo + 12);//24

// console.log(returnOfAddTwo === 12);//true


//find last index of a word
function findLastIndex(word) {
  // console.log(word);//cats
  // console.log(word[0]);//c
  // console.log(word[1]);//a
  // console.log(word[word.length - 1]);//s
  return word[word.length - 1]
};

console.log('1. return value of findLastIndex', findLastIndex('cats'));
console.log('2. return value of findLastIndex', findLastIndex('squirrel'));
