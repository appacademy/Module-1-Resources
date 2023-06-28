/*


  IIFE - Immediately invoked function expression

  What is an IIFE? What does it allow us to do?
  - Anon function that cannot be invoked more than once, can only ben ran when its defined
  - Define and Immediately run anon function

  How could IIFE be useful?
  - To run a function only once
  - Dont want to use up the global name space
    * reuse variable names
    * not taking up function names
    * Protects variables from being overwritten

  * The reason all this is useful, is because back in the day, js developes did not have access to const and let and only var. Developers had to be mindful of the variables. IIFE were used to emulate block scope. IIFE allows us to create private local scopes so that we can preserve variables names.


*/


// function expression
// storing an anon function in a variable
// as soon as you store the function in a variable, we can now alias the function, making it no longer anonymous
let sayHi = function(){
  console.log('hello');
}

// sayHi()

//function expression with fat arrow, still an anon function stored in a variable
let sayHi2 = () => console.log('hello');
// sayHi2();

//IIFE - anon portion wrapped in parenthesis(grouping operator) - ();
// once the anon function wrapped in parenthesis, in order to invoke you would call it like so

(function(){
  // console.log('only runs once');
})();
// only runs once

//fat arrow syntax
// (() => console.log('only runs once'))();
//only runs once

// Prove that iifes only run once
// Storing the return value of the iife in a variable
// IIFE is only called on the first instance, every other log is just going to give us the return value
let res = (function() {
  console.log('only runs once');
  return 'Will not log more than once'
})();//<-- not having the semicolon here will throw an errors, js automatic semicolon insertion has failed on this legacy code

// console.log(res);
// console.log(res);
// console.log(res);
// console.log(res);
// console.log(res);

// how to pass an argument to an iffe
// params and args go where they normally
// args to where the functions is called
// ((name) => console.log(`hello ${name}`))('brandon');
//hello brandon



/*

  Hoisting
  - let, const, var
  - var - has a default value of undefined when hoisted, therefore will not throw errors
  - let/const do not have default values when hoisted, because of that; they will throw errors when hoisted

  * Hoisting with functions

*/


function hoist(){
  console.log(name);//undefined
  var name = 'brandon';// No error we get undefined
  // let name = 'brandon';//ReferenceError: Cannot access 'name' before initialization
  // const name = 'brandon';//ReferenceError: Cannot access 'name' before initialization
}

hoist();


// apply the same idea to our functions

// function declaration
// does not behave in the same way as the variable keywords
// you can access before its been defined

// hoisted();//this function is hoisted - no errors

function hoisted(){
  console.log('this function is hoisted')
}




// notHoisted();
//ReferenceError: Cannot access 'notHoisted' before initialization
// were not hoisting anything, we dont have access to notHoisted

//let/const both will not allows us to access function before its been defined
const notHoisted = function(){
  console.log('will not be hoisted');
}


notHoisted2();
//undefined() <-- cant invoke undefined
//TypeError: notHoisted2 is not a function
// were trying to invoke undefined
// because when hoisting when var, it has a default value of undefined

console.log(notHoisted2);//string

function notHoisted2(){
  console.log('test');
}


var notHoisted2 = 'string';

// console.log(notHoisted2);//string
