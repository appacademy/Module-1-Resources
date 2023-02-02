/*


Scope!
- block of code
- The part of the program that has access to certain variables depending on where there declared

Advantages of scope!
- Preventing unneeded mutation
- reuse variables
- reduce name collision
- security


Three types of scope!
- global
  - represented by the window/node global object
  - will be available to entire program
  - avoid creating variables in the global scope

- function/local
  - variables available within a function
  - variables declared inside the function
  - variables already declared when the function was defined
  - function(){}

- block scope
  - a block of code
  - for(){}
  - while(){}
  - if(){}

  *Scope chaining -
    - javascript scope chains looks for the nearest variable that has the name we need
    - a key scoping rule in js, the inner scope can access the variables of the outer scope
    - outer scope cannot access the variables of the inner scope
*/

//global scope
// let name = 'global';
function myFunc(){

  //function/local scope
  // let name = 'function/local';
  if(true) {
    //block scope

    let name = 'block scope 1';
    var name2 = 'var variable'//we can access this variable from the function scope because its function scope

    for(let i = 0; i < 1; i++) {
      let name = 'block scope 2'
      // console.log(name)
    }
  }

  // console.log(name2)

};


// console.log(name3)
myFunc();


function myFunc2() {
  //inner scope
  let name = 'brandon'
}

myFunc2();
//outer scope - we do not have access to the name variable because were in the outer scope trying to access inner scope
// console.log(name)//ReferenceError: name is not defined



/*


  Three ways to declare variables - technically 4
  1. let - we've using up ot this point
    - block scope
    - can be reassigned
    - cannot redeclare

  2. const
    - is constant
    - block scope
    - cannot reassign
    - cannot redeclare
    - you can mutate the data type it holds

  3. var
    - function scoped
    - can reassign
    - can redeclare
    - dont use it!

  4. globally - no keyword
    - anything declared with any keyword in the global space is available globally
    - anything declared without keyword will be declared globally
    - dont want to do this

  * Hoisting
    - Hoisting is when you have a variable assigned in a scope
    but only the variable declaration is raised

*/

let variable;//variable declaration
variable = 'string';//variable assignment
let var2 = 'string';//variable initialization

//var
//function scoped
//var can be reassigned and redeclare
//when a variable is hoisted,the variable declaration is raised
//var has a default value of undefined
//so when we hoist the variable declaration, we are hoisting undefined,
//therefore no error is thrown

// console.log(name1)//undefined
var name1 = 'brandon';
//can reassign
name1 = 'luke'
//can redeclare
var name1 = 'krandon'//does not throw an error
// console.log(name1)


//let
//does not have a default value when hoisted, will throw an error
//block scoped
//let can reassigned but not redeclare
// console.log(name3)//ReferenceError: Cannot access 'name3' before initialization
let name3 = 'brandon'
//can reassign
name3 = 'krandon';
// console.log(name3)
// let name3 = 'krandon'// cannot redeclare block scoped variable


//const
//does not have a default value when hoisted, will throw an error
//block scoped
//const cannot be redeclare or reassigned
//its a constant
//can be mutated
// console.log(arr) //ReferenceError: Cannot access 'arr' before initialization
const arr = [1,2,3];
//cannot reassign
// arr = [2,3,4];
console.log(arr)//TypeError: Assignment to constant variable.
//cannot redeclare
// const arr = [3,4,5];//this will throw an error, var already declared

//can mutate
arr.push(4);
// console.log(arr)
console.log(result)

// let result;
// console.log(result)

//*Where the values before they are hoisted when using let and const
//Temporal dead zone - When variables exists
