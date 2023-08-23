/*



  Immediately Invoked Function expression

  What is an IIFE? What does it allow us to do?
    * define and Immediately run anonymous function
      * an anon function is a function that does not have a name
    * IIFE can only be ran once

  How could IIFE be useful?
    * Run some code when a page loads
    * Protect the global name space
    * useful when const and let were around as there was no block scope
    * privacy

*/


// function expression
// storing in anon function in a variable
// as soon as you do that; it is no longer anonymous
// we can alias it by the variable name
let sayHi = function() {
  console.log('hello');
}

// console.log(sayHi());

// function expression with fat arrow
let sayHi2 = () => console.log('hello');

// console.log(sayHi2());


// An IIFE is the anon portion wrapped in the grouping operator


(function() {
  console.log('only runs once');
})();// only runs once


// fat arrow syntax
(() => console.log('only runs once'))();

// pass an argument to an IIFE
((name) => console.log(name))('brandon');

console.log('------')

// prove an IIFE runs once
// * all weve done is store the return value of an iffe an in a variable
// *  only gets called the first time its ran
let sayHi3 = (function(){
  console.log('will only run once!!')
  return true
})();

console.log(sayHi3);
console.log(sayHi3);
console.log(sayHi3);
console.log(sayHi3);
console.log(sayHi3);
