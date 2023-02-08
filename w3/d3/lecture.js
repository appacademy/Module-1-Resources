/*



  IIFE's! - Immediately Invoked function expression

  What is an Iffe? What does it allow us to do?
    - Define and immediately run anonymous function
    - IIFE can only be ran once

  How could IIFE be useful?
    - Dont want to use up the global name space
    - Protect function names variables
    - good for executing async code
    - want to run a function just one time

*/

//function expression
//storing an anonymous function in a variable
//as soon as you give a anon function a name, it is no longer anonymous

let sayHi = function() {
  console.log('hello')
};

// sayHi();


//function expression with fat arrow
let sayHi2 = () => console.log('hello');
//sayHi2()


//an iife!
//an iife is just the anon function portion wrapped in parentheses - grouping operator
// (function() {
//   console.log('only runs once')
// })();

//fat arrow
// (() => console.log('only runs once 2'))();

//pass an argument to a iife
// ((name) => console.log(`hello ${name}`))('brandon');


//prove that an iife only runs once
//hey store the return value of this iife in a variable
// let sayHi3 = (function() {
//   console.log('will only run once')
//   return 'hey'
// })()

// console.log('================', sayHi3)
// console.log('================', sayHi3)
// console.log('================', sayHi3)
// console.log('================', sayHi3)
// console.log('================', sayHi3)


/*

  Hoisting
    let, const, and var
      - they all hoist the declaration, not the assignment
      - var when hoisted, has a default value of undefined, therefore does not thrown an error when hoisting
      - const and let, they will thrown an error, as they do not have a default value

    Hoisting with functions!

*/

function hoistVar() {
  console.log(name);//does not throw an error
  var name = 'brandon'
};

// hoistVar()


function hoistConstAndLet() {
  console.log(name);
  let name = 'brandon';//both will thrown an error, no default value when hoisted
  // const name = 'brandon'
}


// hoistConstAndLet()

//hoisting with functions

// console.log(notHoisted)//hoisting the declaration not the assignment, therefore we get an error because let does not have a default value
let notHoisted = () => console.log('function will not get hoisted')

// console.log(notHoisted)//no error, will print undefined, because we hoist the declaration and var has a default value of undefined
// var notHoisted = () => console.log('function will not get hoisted')


hoisted()//this works
function hoisted() {
  console.log('is hoisted')
}

// hoisted()//this works
