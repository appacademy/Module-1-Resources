
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

//function expression
//storing in anon function in a variable
//as soon as you do that, it is no longer anonymous
//because we can alias the function with the variable we've stored it within
let sayhI = function() {
  console.log('hello')
};

// sayhI();

// function expression with fat arrow
// let sayHi2 = () => console.log('hello 2');

// an iffe is the anon portion wrapped in parenthesis
// IIFE
(function() {
  console.log('only runs once')
})();

// fat arrow syntax
(() => console.log('only runs once in fat arrow'))();


// passing an argument to an iffe
((name) => console.log(`Hello ${name}`))('krandon')

// prove an iffe runs once

let sayHi2 = (function() {
  console.log('will only run once');
  return 'hello'
})();

//iffe will only run the console log in the function once!
// console.log(sayHi2);//after this call will we be able to run the function again
// console.log(sayHi2);
// console.log(sayHi2);
// console.log(sayHi2);

