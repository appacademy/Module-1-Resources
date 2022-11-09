/*


  Immidietly invoked function expressions
    What is an IIFE? What does it allow us to do?
      - Define and immidietly run anonymous function
      - iife can only be ran once
    How could IFFE be useful?
      - Want to run a function one time
      - Dont want use the global name space
      - Protects function names and variables

*/

//function expression
//storing in anon function in a variable
//as soon as you do that, it is no longer anonynous
let sayhI = function() {
  console.log('hello')
};

// sayhI();

//function expression with fat arrow
// let sayHi2 = () => console.log('hello');

//an iffe is the anon portion wrapped in parathensis
// //IIFE
// (function() {
//   console.log('only runs once')
// })();

// //fat arrow syntax
// (() => console.log('only runs once in fat arrow'))();


// //passing an argument to an iffe
// ((name) => console.log(`Hello ${name}`))('krandon')

//prove an iffe runs once

let sayHi2 = (function() {
  console.log('will only run once');
  return 'hello'
})();

//iffe will only run the console log in the function once!
// console.log(sayHi2);//aftert this call will we be able to run the fucntion again
// console.log(sayHi2);
// console.log(sayHi2);
// console.log(sayHi2);


/*
  Hoisting!
    let, const, and var
      - var - hoist the delcaration not the assigment, but has a default value of undefined
      -const/let - hoist the only declaration but does not have a value, therefore throws an error when trying to acces before initialization

    Hosting with Functions!

*/


function hoistVar(){
  console.log(name); //undefined
  var name = 'brandon'
};

// hoistVar()

function hoistConstAndLet() {
  console.log(name);//Cannot access 'name' before initialization
  let name = 'brandon';
  // const name = 'brandon';
}

// hoistConstAndLet()

//hoist the function declaration but not the assignment
notHoisted(); //Cannot access 'notHoisted' before initialization
let notHoisted = () => console.log('function will not get hoisted')


hoisted();//hoisted!
//function delcaration
function hoisted() {
  console.log('hoisted!')
}
