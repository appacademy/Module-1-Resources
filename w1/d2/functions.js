/*


  Functions!
  - A function is procedure of code that will run when called/invoked functionName()
  - writing a function is know as function declaration or function definition

  * javascript read top to bottom
  * will not read a function unless its called/invoked
  * this is a function call => functionName()
  * this is the function itself functionName() {}


  Some things to remember about return  statements
    1. Every function call evaluates to its return
    2. Every function in js returns undefined unless a return is specified, so a function without a return evaluates to undefined
    3. Once a return statement is encountered, the function will immediately stop and return the value, ignoring anything below the return statement

  Function naming convention
  - camelCase => functionTest
  - descriptive names
  - verb followed by a noun, CRUD getInfo, deleteInfo, editInfo
*/


//function declaration
//function keyword
//followed by name, usually camelCase - functionName
//parenthesis, where you takin in parameters
//curly braces - are used to signify a code block
//example -  with a function that is never called
//nothing happens, this function is never called!
function functionName() {
  console.log('hello');
  return 'hey'
}


//example - with a function that doesnt return, just console.logs
function functionName2() {
  console.log('hello');
  //no return value, defaults to undefined
}

//call our function
//to call a function, use function name, and pass arguments in the parenthesis
// functionName2()
// //what if i log a function call?
// console.log(functionName2);//[Function: functionName2]
// console.log(functionName2());//hello printed, and we return undefined
//we call the function, we log the console.log, because there is no return, the return value defaults to undefined

//were saying print to the terminal the return value of calling this function
// console.log(functionName2());//there is not return value -  therefore print undefined

//example - with a function that does return and console.log
//this example will both console.log the return value and call the console.log from within in the function
function functionName3() {
  console.log('hey from functionName 3');
  return 'hey from functionName 3'
}

// console.log(functionName3);//[Function: functionName3]
// console.log(functionName3());//hey from functionName 3
// functionName3();
//some things to keep in mind
//you will only see the return value of a function if you wrap your function invocation in a console.log ex: console.log(functionName())

//the function will still run if its called, but you wont see anything unless you console.log

//console.log to see
//return is what your function evaluates to


//arguments and parameters
//parameters are the variables used to represent the arguments passed
//arguments are passed to the function

//name variable, is a parameter to represent the argument passed
//doesnt have to be called name, could be anything
function printName(name) {
  console.log('1st',name);
  return name;//this is what your function will evaluate too
}

//wrap in the function call in console.log so i can see the return value
// console.log('2nd', printName('brandon'));//pass the string brandon as a argument to the function printName

// printName('brandon')

//============ TEST =============
// what will be printed?
// function sayName(name) {
//   return name;
// }

// console.log(sayName('brandon'));
//1. brandon -  logging the return value of calling sayname
//===============================
// function sayName(name) {
//   return name;
// }

// sayName('brandon');
//2. nothing, were not logging!
//==============================
// function sayName(name) {
//   console.log(name);
// }

// console.log(sayName('brandon'));
//3. brandon undefined
//=============================
// function sayName(name) {
//   console.log(name);
//   return name
// }

// console.log(sayName('brandon'));
//4. brandon brandon
//=============================
// function sayName(name) {
//   return name;
// }
//5. nothing - because we didnt log!


// function test() {
//   return 'hello';
// }

// console.log(test().toUpperCase());

function addTwo(num) {
  console.log(num);
  return num + 2;
}

// console.log(addTwo(4));//6
// console.log(addTwo(4) === 6);//true

//last char of a string

function findLastChar(animal) {
  console.log(animal);//cats
  // console.log(animal[0]);//c
  // console.log(animal[1]);//a
  // console.log(animal[animal.length - 1]);//s
  return animal[animal.length - 1]
};

let word = 'cats'
// console.log(findLastChar(word));
// console.log(findLastChar('rhino'))

//things to note
//if there is no param to represent the argument passed, you will have no access the arguments
//you can store arguments in a variable or pass them directly
//parameters can be names anything, when ever you create a parameter it is essentially saying, hey use this variable to represent the argument passed
