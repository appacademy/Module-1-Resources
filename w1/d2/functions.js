/*



  What is a function?
  - Reusable section of code
  - A function is a procedure of code that will run when called

  * JavaScript reads top to bottom
  * JS will not read a function until its called
  * a function has a default return value of undefined


  So three things to remember about return statements
  1. Every function call evaluates to is return
  2. Every function in JS returns undefined unless a return is specified
  3. Once a return statement is encountered, the function will immediately stop and return the value, anything below the return in scope, will not be accessible.

  Function naming convention
  - camelCase => functionTest
  - descriptive names
  - verb followed by a noun, CRUD => getInfo, deleteInfo, editInfo

  Function declaration!
    - function keyword -> functionName -> ( param ) -> codeBlock{ }
    - function example() {}                  ^ - params are used to represent the argument passed


  Invoke/call a function!
    - invoke name function
    - when you invoke a function, this where you can pass arguments
    example();
    functionName(1);

*/

//function declaration
//example of a function
function functionName() {
  return;
}

// function invocation
// this will invoke our function function name
// console.log('this is the return value functionName',functionName())//a function evaluates to its return
// i want to log the return value of calling this function

// console.log(functionName);//[Function: functionName]

//console.log are purely to see something
//a return value is what your function evaluates too
function helloWorld() {
  console.log("hello world 1");
  return;
  console.log("hello world 2"); //will not execute code below return
}

// helloWorld();//
//if you wrap a function invocation in a console.log, it means you want to see the return value of that function

//args vs params
// parameters are used to represent the argument passed
// let banana = brandon
// let banana = name = Anthony
function printName(banana) {
  // console.log(banana);
  return banana;
}

//you pass a argument to a function call
//the arg passed is the string brandon
// console.log('the return value of printName',printName('brandon'));
// you can have multiple calls
let name = "Anthony";
// console.log('the return value of printName pass Anthony', printName(name))

//params can be named anything
// let param1 = 2, and let param2 = 5
function add(param1, param2) {
  // console.log(param1, param2);
  return param1 + param2;
}

//arguments and parameters are positional
// console.log('the return value of add',add(2, 5))

let age = 7;
// console.log(age);
// hey js, stored in this variable, the return value of passing 2 and 4 to the function add
let returnValueOfAdd = add(2, 4);

// console.log(returnValueOfAdd);// 6

// create a function that returns the last index of a word
// make a a function returns the product of two numbers multiplied
// returns a name uppercase

// function userInfo(age, name, address) {
//   // console.log(age, name, address);
//   if(age < 18) return 'not old enough'
//   return ' my name is ' + name +' and my age is ' + age + address
// }

// console.log(userInfo(12, 'bill', '1212 house st'));
