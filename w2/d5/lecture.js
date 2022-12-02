/*



  What is Scope!!!
    - what part of the program has access to certain variable depending on where they're declared
    - The scope is current context of execution in which values and expression are visible or can be referenced

  Advantage of scope!
    - Security! - variables can only be access by predefined parts of code
    - Reduce name collision, don't overwrite variables
      - lead to a lot of issues with debugging
      - allow us reuse commonly used variable name

  Three types of scope!
    - Global - represented by the window/node global object
      - will be available to the entire program
      - avoid creating variables in the global scope
    - Function/Local - variables available within a function
      - function arguments
      - variables declared inside the function
      - variables already declared when the function defined
    - Block scope - a block of code - {}
      - loop or a conditional
      - if() {}
      - for() {}

  Scope chaining!
    - javascript scope chain looks for the nearest variable that has the name we need
    - A key scoping rule in js, that the inner scope does have access to variables in the outer scope
    - outer scope cannot access inner scope, inner scope can access outer scope
*/
// let name = 'global'
//global scope
function myFunc() {

//function/local scope
// let name = 'function/local';
// console.log(name)//function/local

  if(true){
    //block scope
    // let name = 'block'
    // console.log(name)//block

    for(let i = 0; i < 1; i++) {
      //this also block scopes
      // let name = 'block 2';
      console.log(name)//block 2
      //if were not able to find the variable we need in the immediate scope, js will scope chain to the outer scopes to find one, in this came, if we did not have name as block 2, js will scope chain up and find the value of block
    }
  }
}

// myFunc();
//outer scope does not have access to inner scope
function myFunc2() {
  let name = 'brandon'
}

myFunc2();
// console.log(name);//ReferenceError: name is not defined

/*

    Three ways to declare a variable! Technically 4!

    - let - weve using it up to this point
      - can be reassigned
      - block scoped
    - const
      - is a constant
      - cannot be reassigned
      - block scoped
    - var
      - be reassigned or redeclare
      - function scope

      *Hoisting!
        - Hoisting is when, you have a variable assigned in a scope,
          but only the variable declaration is raised
*/

let variable; //variable declaration
variable = 'string'//variable assignment
let var2 = 'string';//variable initialization


//var
//function scope!
//when var is hoisted, only the variable declaration is hoisted
//var when hoisted, has a default value of undefined
//therefore when we hoist var, we do not get an error because we get undefined
//var can reassigned and redeclared
//console.log(name)//undefined
var name = 'brandon'
//var can be reassigned
name = 'krandon';
//var can redeclared
var name = 'brandon'
// console.log(name)//brandon


//let
//this will throw an error because, let hoist the variable declaration, but it does not have a default value
// console.log(name2)//Cannot access 'name2' before initialization
let name2 = 'brandon'
//where is the variable before its hoisted?
//temporal dead zone!!
//temporal dead zone is where variables declared with let or const, exist before they are accessed
//let can reassigned but not redeclare
// let name2 = 'brandon2';
// console.log(name2)//SyntaxError: Identifier 'name2' has already been declared
//we can reassign
name2 = 'brandon2';
// console.log(name2);

//const
//block scoped!
//const will thrown an error just like let when trying to hoist, because const doest not have a default value of undefined like var
//const hoist the declaration but there is no default value, therefore an error is thrown
// console.log(name3)//ReferenceError: Cannot access 'name3' before initialization
const name3 = 'krandon'
// let name3 = 'brandon'
//const is constant
//we cannot redeclare
// const name3 = 'brandon';
// console.log(name3)//SyntaxError: Identifier 'name3' has already been declared
//const cannot be reassigned
// name3 = 'brandon'
// console.log(name3)//TypeError: Assignment to constant variable.

console.log(func())
function func() {

}
