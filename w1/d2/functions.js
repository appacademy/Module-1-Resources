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
// console.log('Return value from of myFunc =>', myFunc());//

// * We can store the return value of a function in a variable
let returnValue = myFunc();
// console.log(returnValue)

// we can call a function multiple times
// console.log('Return value from of myFunc1 =>', myFunc());//
// console.log('Return value from of myFunc2 =>', myFunc());//
// console.log('Return value from of myFunc3 =>', myFunc());//

// If we console.log a variable and we see something like this [Function: myFunc]
// That means you can invoke it
// console.log('Function itself =>', myFunc);// [Function: myFunc]


// Lets talks parameters and arguments
// *  function myFunc(param1, param2){}
// * () - holds the parameters
// * parameters are used to represent to arguments passed
// * name1 = 'brandon'
// * banana = 'anthony'
function printNames(name1, banana) {
  console.log('1: arguments => ', name1, banana);

  return `Hello ${name1} and ${banana}`;
};


// * This is where we are calling the func and passing args
// * we will pass two arguments
// * The two args -> brandon, anthony
// printNames('brandon', 'anthony');

// If we want to see the output; we need to console.log the function invocation
console.log('2: return value of printNames =>', printNames('brandon', 'anthony'));// Hello brandon and anthony

// We can pass different arguments to the function to get a different output
console.log('3: return value of printNames =>', printNames('anabel', 'charles'));//Hello anabel and charles

// printNames('charles', 'trevor');// charles trevor
// console.log('between functions')
// printNames('brandon', 'anthony');// brandon anthony


// lets do another example
// * this a function that will take in some numbers and add them together
// num1 = 10
// apple = 11


function add(num1, apple) {
  console.log('entering function')
  console.log(num1, apple);
  console.log('==>', num1 + 2);
  console.log(num1 + apple);// 21
  return num1 + apple;
  console.log('will not be reached')

}

console.log('before function call')
let n = 11;
console.log('Add evaluates to ==>',add(10, n));// 21
console.log('Add evaluates to ==>',add(20, n));// 31
console.log('after function call')
// console.log(add());


let returnValueOfAdd = add(2, 7);
console.log(returnValueOfAdd);// 9
console.log(returnValueOfAdd === 9); //true
// * End goal is to use the return value of the function in some way
