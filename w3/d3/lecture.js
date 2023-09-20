/*



  Immediately invoked function expressions

  What is an IIFE? What does it allow us to do?
    * Define and Immediately run anonymous function
    * IIFE can only be run once

  How could IIFE be useful?
    * makes sure the global scope isn't polluted
    * Save namespace
    * protects function names and variables
      * don't want to overwrite

  Why use IIFE's?
    *  Part of why folks figured out IIFEs was to emulate this idea of block scoping before let/const existed. Those variable declarations were late additions to JS -- I think we had 20 years of JavaScript before they were added.
    * useful during a time where we had no let and const and had to be mindful of our global namespace

*/

// function expression
// * storing an anonymous function in a variable
// * as soon as you do that, the function is no longer anon as you can reference it by the variable name
let sayHi = function () {
  console.log("hello");
};

// sayHi();

// function expression
let saHi2 = () => console.log("hello");

// IIFE
// * an iffe in the anon portion wrapped in parenthesis also know as the grouping operator - ()

(function () {
  console.log("only runs once"); // only runs onc
})()

// fat arrow syntax
;(() => console.log("only runs once in fat arrow"))();


// passing an argument to an iife
((name) => console.log(name))('brandon');// brandon


// prove an iife once
let sayHi3 = (function() {
    console.log('will only run once');
    return 'hello'
})();

//
// console.log(sayHi3());
// TypeError: sayHi3 is not a function

// the sayHi3 variable is not a function it is the return value of calling the IIFE

console.log(sayHi3);
console.log(sayHi3);
console.log(sayHi3);
console.log(sayHi3);
console.log(sayHi3);
