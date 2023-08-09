/*


  Function Expression Syntax!
    * Another way to write a function
    * we learnt about function declaration yesterday
      * use the function keyword - function myFunc(){}
    * storing an anonymous function in a variable therefore giving it a name to alias by
      * Anon function - function(){}

  Function expression syntax useful because:
    * well be able to use fat arrow syntax later the down the road
      * learn monday
      * () => console.log('hello')
    * allows use to write more readable code and give
    * quality of life - dont have to write as much code
    * great for passing to callback

*/


// function declaration
function myFunc(){
  console.log('hello from myfunc');
  return true;
}

// CALL/INVOKE the function
// myFunc();
// console.log(myFunc());// true


let age = 8;
console.log(age);// 8

// we've assigned an anonymous function to a variable
// so now the function is no longer anon
let myFunc2 = function(){
  console.log('hello from myFunc 2');
  return false;
}


myFunc2();


// we can see what the variable holds
console.log(myFunc2);// [Function: myFunc2]
console.log(myFunc);//  [Function: myFunc]
console.log(myFunc2());// false


// Functions are first class objects
// 1. It can be stored in a variable
// 2. it can be passed as an argument to a function (coming up next week!)
// 3. It can be returned from a function (also coming up next week!)


// Hoisting - accessing a variable before its been defined
// function declaration - we can hoist!
// function expression  - we cannot hoist

// We can hoist! This will not throw an error
console.log(hoisted());

function hoisted(){
  return 'function declarations are hoisted'
}


// console.log(name);// ReferenceError: Cannot access 'name' before initialization
let name = 'brandon';

console.log(notHoisted());// ReferenceError: Cannot access 'notHoisted' before initialization

console.log(notHoisted2());// ReferenceError: Cannot access 'notHoisted' before initialization

let notHoisted = function() {
  return 'function expression is not hoisted';
}

let notHoisted2 = () => {
  return 'function expression is not hoisted';
}
