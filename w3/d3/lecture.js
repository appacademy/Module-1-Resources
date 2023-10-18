
/*
  Immediately invoked function expressions

    What is an IIFE? What does it allow us to do?
      - Define and immediately run anonymous function
      - iife can only be ran once

    How could IFFE be useful?
      - Want to run a function one time
      - Don't want use the global name space
      - Protects function names and variables
*/

// function expression
// storing an anon function in a variable
// as soon as you do that its no longer anonymous
// because we can alias by the variable name

let sayHi = function() {
  console.log('hello');
}

// console.log(sayHi);// [Function: sayHi]
// sayHi();


// function expression with fat arrow
let sayHi2 = () => console.log('hello');
// console.log(sayHi2);// [Function: sayHi2]
sayHi2();


// An iffe is just the anon portion wrapped in parenthesis - grouping operator

(function() {
  console.log('only runs once');
})();// only runs once

// fat arrow syntax
(() => console.log('only runs once'))();// only runs once

// pass an argument to iffe
((name) => console.log(`hello ${name}`))('brandon');//hello brandon

// prove an iife runs once
// * store the return value of the iffe in a variable
let IIFE = (function() {
  console.log('this will run only once');
  return false;
})();


// console.log(IIFE)
// console.log(IIFE)
// console.log(IIFE)
// console.log(IIFE)
