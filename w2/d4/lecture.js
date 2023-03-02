/*




  Scope!
  - the part of the program that has access to certain variables depending on where they are declared
  - block of code - {}
  - The scope is current context of execution in which values and expression are visible can referenced

  Advantages of scope
  - Security - variables can only be accessed by predefined parts of code
  - reduced name collisions -  a lot of bugs
  - reuse variable names

  Three types of scope!
  1. Function/Local
    - variables available within a function - function() {}
    - variables declared inside the function
    - variables already declared when the function was defined

  2. Global
    - represented by the window/node object
    - will be available to the entire program
    - avoid create variables in the global scope

  3. Block
    - a block of code
    - for() {};
    - if() {};
    - while() {};

    * Scope chaining
      - javascript scope chain look for the nearest variable that has we need
      - a key scoping rule in js, that inner scope can access variables of the outer scope
      - outer scope cannot access the variables of the inner scope
*/

//global scope
// let name = 'global scope'

function myFunc() {
  //function/local scope
  // let name = 'function/local scope';
  if(true) {
    //block scope 1
    // let name = 'block scope 1';


    for(let i = 0; i < 2; i++) {
      //block scope
      // let name = 'block scope 2';
      // console.log(name);
      //js will scope chain up the scope starting from the inner most till we find name variable
    }
  }
};

// myFunc();

// console.log(name)
//outer scope does not have access to inner scope
function myFunc2(){
  let name = 'brandon';
  return name;
};

myFunc2();
// console.log(name);//ReferenceError: name is not defined
//we get this error because the outer scope cannot access the inner scope



/*
  Three ways to declare variables technically 4

  1. let -  we've been using let up to this point
      - block scoped
      - can be reassigned
      - cannot re declared

  2. const - is constant
      - block scopes
      - cannot be reassigned
      - cannot be re declared
      - but you can mutate the variable it holds if its mutable - objects/arrays

  3. var
      - function scope
      - can be reassigned
      - can be re declared

  4. globally
    - any variable that is declared in the global scope will be available globally no matter what way we declare
    - any variable declared without let, const, or var will be globally available


  * Hoisting!
      - Hoisting is when you have a variable assigned in a scope
        but only the variable declaration is raised
      - were trying to access a variable before its been defined

  Due not that this applies to accessing a variable before its defined
  If you access the variable after its been defined, it will have value of undefined

*/


let variable;//variable declaration
console.log(variable)
variable = 'string'//variable assignment
let var2 = 'string'//variable initialization


//var
// - function scope

// console.log(name);//undefined
//when var is hoisted, the variable declaration is hoisted
//var has a a default value of undefined
//so when its hoisted, the declaration is hoisted and it has a value of undefined, therefore no error would be thrown.

// - can be reassigned
var name = 'brandon';
name = 'krandon';
// console.log(name);//krandon

// - can be re declared
var name = 2;
// console.log(name);//2



//let
// - block scoped

// console.log(name2);//ReferenceError: Cannot access 'name2' before initialization
//when let is hoisted, the variable declaration is hoisted
//let does not have a default value when hoisted, so it will throw an error if you try to access it before it was defined

let name2 = 'mochi';
name2 = 'celebi';
// console.log(name2);//celebi

// - cannot re declared
// let name2 = 'pumpkin';//SyntaxError: Identifier 'name2' has already been declared


// const
// - block scopes

// console.log(name3)//ReferenceError: Cannot access 'name3' before initialization
//because just like let, const does not have default value, so it will throw an error

const name3 = 'brandon';
// - cannot be reassigned
// name3 = 'luke';//TypeError: Assignment to constant variable.
// console.log(name3)

// - cannot be re declared
// const name3 = 'krandon';//SyntaxError: Identifier 'name3' has already been declared

// - but you can mutate the variable it holds if its mutable - objects/arrays
const arr = [1,2];
arr.push(3);
// console.log(arr);//[1,2,3];


// * Temporal dead zone
// where variables exists before they accessed
