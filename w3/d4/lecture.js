/*


  IIFE - Immediately invoked function expression

  What is an IIFE? What does it allow us to do?
  - Anon function that cannot be invoked more than once, can only be ran when its defined

  Advantages of IIFE
  - Preserve namespace - so variables aren't overwritten and to avoid bugs
  - save memory
  - isolating variables - reuse variable name
  * well thats because iife were more so used when we did not have let or const, absence of block scope

*/

//function expression
//storing an anonymous function in a variable
//as soon you do that, we can now alias the function, so its no longer anonymous
let sayHi = function(){
  console.log('hello')
};
// sayHi();

//function expression with fat arrow, still an anon func stored in a variable
let sayHi2 = () => console.log('hello');
// sayHi2();


//IIFE - anon portion wrapped in parenthesis, the group operator - ();
//once the anon function is wrapped in parenthesis, in order to invoke you would call it like so

// (function(){
//   console.log('only runs once')
// })();

// //fat arrow syntax
// (() => console.log('only runs once'))();

//prove the iife run once
//store the return value of the iife in a variable
//  let sayHi3 = (function() {
//   console.log('only runs once');
//  })();

//  console.log(sayHi3);//iife can only run onces, thats why the console.log only showed up once
//  console.log(sayHi3);
//  console.log(sayHi3);
//  console.log(sayHi3);
//  console.log(sayHi3);

//if we dont have a semicolon here,it will thrown an error because js will be cofnused on what the new line is,
//  ((name) => console.log(`hello ${name}`))('brandon');//hello brandon
//pass an argument to an iife



/*
 Hoisting!
 - let, const, var
 - var - has a default value of undefined when hoisted
 - let and const do not have default value, therefore will throw errors when trying to access before they are defined

 Hoisting with function

*/


function hoistVar(){
  console.log(name);
  // var name = 'brandon';//hoisting with var will not throw an error
  // let name = 'brandon';//ReferenceError: Cannot access 'name' before initialization
  const name = 'brandon';//ReferenceError: Cannot access 'name' before initialization
}


//hoisting is trying to access a variable before defined
// console.log(hoistVar());

hoisted();//will get hoisted

// function declaration
function hoisted() {
  console.log('will get hoisted')
}


notHoisted1();//ReferenceError: Cannot access 'notHoisted' before initialization
notHoisted2()//TypeError: notHoisted is not a function, because we are hoisting undefined with var, so we are technically doing undefined();

let notHoisted1 = () =>{
  console.log('will note get hoisted')
};

var notHoisted2 = () =>{
  console.log('will note get hoisted')
};


