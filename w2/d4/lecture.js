/*


    Scope!
    - the part of the program the has access to certain variables depending on where they are declared
    - where are variables are defined
    - It decides who and where access it
    - Essentially whatever is accessible at a given line of code
    - block of code - {};
    - The scope is the current context of execution in which value and expression are visible or can be referenced

    Advantages of scope?
      - security -  variables can only be access predefined parts of code
      - reuse variable name
      - reduced name collision -  leads to a lot of bugs


    Three Type of scopes
    Global, Function, Block

    1. Function/local scope
      - variables available within the function
      - variables declared inside the function
      - variables already declared when the function was defined

    2. Global scope
      - represented by the window/node global object
      - will be available to the entire program
      - avoid creating variables in the global scope
        i = 0; weve declared

    3. Block
      - a block of code - {}
      - for(){}
      - if(){}
      - while(){}

    * Scope chaining -
      - javascript scope chain to look for the nearest variable name that we need
      - A key scoping rule in js, the inner scope can access variables of the outer scope
      - outer scope cannot access the variables of the inner scope
*/

//global scope
// let name = 'global scope';
function myFunc() {
  //function/local scope
  // let name = 'function/local scope';
  // x = 'bad';//anytime you declare variable without a keyword - no let, const, var
  if(true) {
    //block scope 1
    // let name = 'block scope 1'

    for(let i = 0; i < 1; i++) {
      // let name = 'block scope 2';

      // console.log(name);
      //if were not able to find the variable in the hearst scope, js will scope chain inside out, until it find a variable that we need
      //if this is the case, if the name is not found, in the current block scope(for loops scope), we will chain up to the next scope, being the if statement
    }
  }
};


myFunc();


//outer scope does not have access to the inner scope
function myFunc2() {
  let name = 'brandon';
  // console.log(x);//bad

  return name;
}

myFunc2();

// console.log(name);//ReferenceError: name is not defined
//we cannot access the name variable name in myFunc2 because its in a inner scope


/*



  Three ways to declare a variable, technically 4
  1. let - we've using up to this point
    - block scoped
    - can be reassigned
    - cannot be redeclare

  2. const
    - creates a constant
    - cannot be reassigned
    - cannot be redeclare
    - block scope
    - be mutated

  3. var
    - be reassigned and redeclare
    - function scope

  4. global scope
    - any variable that is declared in the global scope will be globally available
    - any variable declared without let, const, or var, will be globally available

    *Hoisting!
      - Hoisting is when, is when you have a variable assigned in a scope, but only the variable declaration is raised

*/


let variable;//variable declaration
variable = 'string';//variable assignment
let var2 = 'string';//variable initialization


//var
//function scoped
//var can reassigned and redeclare
//when var is hoisted, only the variable declaration is raised
//when var is hoisted, it has a default value of undefined
//therefore when we hoist var, we do not get an error we get undefined

// console.log(name);//undefined
//we hoisted var name;
var name = 'brandon';
//var can reassigned
name = 'krandon';
// console.log(name);//krandon
//var can be redeclare
var name = 'brandon';
// console.log(name);//brandon


//let
//let does not have a default value of undefined when hoisted
//therefore when you hoist a variable defined with let, it will throw an error
// console.log(name2);//ReferenceError: Cannot access 'name2' before initialization

//block scope
let name2 = 'brandon';
//can be reassign
name2 = 'krandon';
// console.log(name2);//krandon
//cannot redeclare
// let name2 = 'brandon';
//SyntaxError: Identifier 'name2' has already been declared


//const
//this a constant
//block scoped
//const will throw an error just like let when trying to hoist, because const does not have a default value of undefined
// console.log(name3);//ReferenceError: Cannot access 'name3' before initialization
const name3 = 'brandon';

//you cannot reassign variable with const
// const age2; //this wont work, because we can never reassign this variable
// name3 = 'krandon';
// console.log(name3);//TypeError: Assignment to constant variable.

//cannot redeclare
// const name3 = 'krandon';//SyntaxError: Identifier 'name3' has already been declared

const arr = [];
arr.push(1);
// console.log(arr);
//can mutate!


//can declare variables globally
//if you declare a variable without a keyword, it is global
// if you declare a variable with the keyword, but in the global scope, its global
//if you declare without the keyword in a function, the variable will still be global
name4 = 'brandon';//no keyword
let global = 'global';//in global scope

function example() {
  global2 = 'global 2'//no keyword
}


//never use var
//if you need to reassign use let, if not use const
