/*



  IFFE
  - Immediately invoked function expression

  What is an iffe? What does allow us to do?
  - Define and immediately run anonymous function
  - Iffe can only be ran once

  How could iffe be useful?
  - want to run a function once
  - dont want to use the global name space
  - protects function names and variables
  - mostly used in legacy code

*/


//function expression
//storing an anon function in a variable
//as soon as you do that, it is no longer anonymous
let sayHi = function() {
  console.log('hello')
};
// sayHi()

//function expression w fat arrow
let sayHi2 = () => console.log('hello');
// console.log(sayHi2());

//an IFFE, is the anonymous potion wrapped in parenthesis - grouping operator
//once the anon func is wrapped in parenthesis, in order to invoke you just call it like so
// (function() {
//   console.log('hello')
// })();


// //fat arrow syntax
// (() => console.log('only runs once in the fat arrow'))();


// //pass an argument to an iffe
// ((name) => console.log(`hello ${name}`))('brandon');


//prove iffe once
//saying store the return value of the iffe in a variable
// let sayHi3 = (function() {
//   console.log('hello')
//   return 'stored in sayHi3'
// })();

//the console log only showed up once because iffes are only called once
//weve just stored the return value in variable and were just printing it to the screen never running the function again
// console.log(sayHi3);
// console.log(sayHi3);
// console.log(sayHi3);
// console.log(sayHi3);
// console.log(sayHi3);


/*


  Hoisting!
  let, const, var
    - var -  hoist the declaration not the assignment, but has a default value of undefined
    - const/let hoist the declaration but does not have a default value of undefined, therefore throws an error when trying to access before initialization

    Hoisting with Functions
*/


function hoistVar(){
  console.log(name);//undefined is the default value of var declared variables when hoisted
                    // throws no error
  var name = 'brandon'
};

// console.log(hoistVar())

function hoistConstAndLet() {
  console.log(name);//const/let variables do no default to a value when hoisted, therefore throw an error when trying to access before initialization Cannot access 'name' before initialization
  const name =  'brandon';
  // let name = 'brandon'
}

// hoistConstAndLet()

notHoisted();//ReferenceError: Cannot access 'notHoisted' before initialization
var notHoisted = () => console.log('function will not get hoisted')


// hoisted();//will get hoisted
function hoisted() {
  console.log('will get hoisted')
}
