/*


  IFFE!
  - Immediately invoked function expression

  What is an IIFE? What does it allow us to do?
    - Immediately invoked function expression
    - create an anonymous function ran immediately
    - iffe can only be ran once

  Advantages of IIFE
  - protect the global namespace - makes it so that global variables cant be read or overwritten
  - if an iife is assigned to a variable, the variable will hold the return value of the iife
  - legacy code because we didnt have let and const

*/

//function expression
//storing an anon function in a variable
//as soon as you do that, it is no longer anonymous
let sayHi = function () {
  console.log("hello");
};

// sayHi()

//function expression w fat arrow
let sayHi2 = () => console.log("hello");

// sayHi2();

//an IIFE is the anonymous portion wrapped in parenthesis - grouping operator - ()
//once the anon function is wrapped in parenthesis, in order to invoke, you just call like it so
// (function(){
//   console.log('only runs once')
// })();

// // fat arrow syntax
// (() => console.log('only runs once 2'))();

// //pass an argument to iife
// ((name) => console.log(`hello ${name}`))('brandon');

//prove iife runs once
//store the return value of the iife in a variable
let sayHi3 = (function () {
  console.log("only runs once");
  return "stored in sayHi3";
})();

// console.log(sayHi3);//can only run iife once! After this call, we wont be able to run function again
// console.log(sayHi3);
// console.log(sayHi3);
// console.log(sayHi3);

/*


  Hoisting!
  - let, const, var
  - var - hoist the declaration not the assignment, but has a default value of undefined
  - const/let - hoist the declaration, let and const do not have default values of undefined, therefore throws an error when trying to access before initialization

  Hosting with functions!

 */

function hoistVar() {
  console.log(name); //undefined

  // let name = 'brandon';//ReferenceError: Cannot access 'name' before initialization
  // const name = 'brandon';//ReferenceError: Cannot access 'name' before initialization
  var name = "brandon"; //undefined
}

// hoistVar();

// hoisted();//will get hoisted - this will not thrown an error

//function declaration
function hoisted() {
  console.log("will get hoisted");
}

notHoisted1(); //ReferenceError: Cannot access 'notHoisted' before initialization
//undefined() - TypeError: notHoisted is not a function

let notHoisted1 = () => {
  console.log("not hoisted");
};

var notHoisted2 = () => {
  console.log("not hoisted");
};
