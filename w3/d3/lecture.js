/*



    Immediately invoked function expressions!
    IFFE!
    What is an IFFE?
    - Define and immediately run an anonymous function
    - iffe can be only ran once
    How can iffe be useful?
    -  Want to run a function one time
    - Dont want to pollute the global namespace
      - this was used in a time where all we had was var
      - Protects function names and variables
*/


//function expression
//storing in anon function in a variable
//as soon as you do that, it is no longer anon
let sayHi = function() {
  console.log('hello')
};

// sayHi();

// // function expression with fat arrow
// let sayhI2 = () => console.log('HELLO');

// //an iffe!
// //an anon func wrapped in parenthesis
// (function() {
//   console.log('only runs once')
// })();

// //fat arrow syntax
// (() => console.log('runs once from fat arrow'))();

// //pass an arg to a iffe
// ((name) => console.log(`hello ${name}`))('brandon')


// let runsOnce = (() => {
//   console.log('this func will only run once');
//   return 'hello'
// })();

//iffe will only run the console.log in the function once
//we are just storing the return value in a variable
// console.log(runsOnce);
// console.log(runsOnce);
// console.log(runsOnce);
// console.log(runsOnce);


/*


  Hoisting!
  let, const, var
  - var -  hoise the declaration not the assignment, but var has a default value of undefined
  - const/let - hoist the declaration, but it doest not have a default value, therefore will throw an error, trying to access before initialization
  Hoisting with functions!
*/

// console.log(hoist());

function hoist() {
  console.log(name);
  // const name = 'brandon'ReferenceError: Cannot access 'name' before initialization
  //let name = 'brandon' ReferenceError: Cannot access 'name' before initialization
  var name = 'undefined';
  return name;
};


// console.log(notHoisted());//ReferenceError: Cannot access 'notHoisted' before initialization
let notHoisted = () => console.log('function is not hoisted')


