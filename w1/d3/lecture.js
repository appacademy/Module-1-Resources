/*

  Function expression syntax
  - Just another to write a function
  - we learned about function declaration yesterday
    * use the function keyword function functionName(){}
  - a function is expression an anonymous function stored in a variable therefore giving it a name, allowing us to alias it
    ? Anonymous function is a function with no name

  Function expression syntax is useful:
    - Well be able to use fat arrow syntax
      - learn next monday
        - () => console.log('hello');
    - allows to write shorted more succinct syntax for our function
      - allows for more readability

*/

//function declaration
function myFunc() {
  console.log("hello from my func"); //hello from my func
  // return true;// if we comment in this return, our function will evaluate to true
}

// the return value of myFunc is undefined, because a return value was not provided
// a function evaluates to its return
console.log(myFunc()); // undefined

//myFunc is a variable that holds a function
console.log(myFunc); // [Function: myFunc]

// we stored 27 in a variable
let age = 27;
// we log what the variables hold to the terminal
console.log(age); //27
console.log(myFunc); //[Function: myFunc]

// Functions are first class objects
// 1. It can be stored in a variable
// 2. it can be passed as an argument to a function (coming up next week!)
// 3. It can be returned from a function (also coming up next week!)

// function expression
// store in a variable
let myFunc2 = function () {
  console.log("hello from our function expression");
};

console.log(myFunc2); // [Function: myFunc2]

console.log("return value of myFunc2", myFunc2()); //undefined

/*

  Anon function
  function() {
  console.log('hello from our function expression');
  };

*/


// HOISTING WITH FUNCTIONS

// trying to call a function declaration from above where its been delcared
// this throws no errors
// function declaration are hoisted - learn wk3
// myFunc();

// function declaration
function myFunc() {
  console.log('my func was called');

}

// call myFunc

// trying to call a function expression before its been defined
// cannot call a variable that does not yet exist
// myFunc(); //ReferenceError: Cannot access 'myFunc2' before initialization
// myFunc3();

let myFunc3 = function() {

  console.log('my func2 was called');
}

// console.log(age);//ReferenceError: Cannot access 'age' before initialization
// let age = 27;
// myFunc3();
