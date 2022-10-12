/*
IIFE - Immidelty Invoked Function Expression
  What it an iife, what does it allow us to do?
    -Define and immidielty run an anonmyous function
    -A function that can only be run once
  How could IIFE be useful?
    -Want to run a function one time
    -Dont want to use up global name space,
    -Protects function names and variables
*/

//function expression
//function expression can omit the name to create an anonymous function
//storing an anon function in a variable
// let sayHi = () => {console.log('hello')};

function sayHi() {
  console.log('Hello')
}

//syntax of iife
// (function(){staments})();
// (() => {})();

(function(){
  console.log('only ran once')
})();

//fat arrow version
(() => {console.log('fat arrow iife, runs only once')})();

//iife with an argument
((name) => console.log(`hello ${name}`))('brandon');

//proof a iife only runs once, instead stores return value in variable
//only run console.log on first call to the iife
let sayHi2 = (function() {
  console.log('will only run once');
  return 'hello'
})();

console.log(sayHi2);
console.log(sayHi2);
console.log(sayHi2);
