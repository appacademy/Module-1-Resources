/*


  Scope!
  - The part of the program that has access to certain variables depending on where they're declared
  - block of code - {}
  - where the variables are defined
  - Essentially wherever accessible at a given a line of code
  - The scope is the current context of execution in which value and expression are visible or can be referenced

  Advantage of scope?
  - security/privacy - variables can only be access from predefined areas of code
  - reuse variable names
  - reduce name collision - leads to lots of bugs

  Three types of scopes
  1. Global
    - represented by the global object - node/window
    - will be available to the entire program
    - avoid creating variables in the global scope
      i = 0;
  2. Function/local
    - variables available within in the function
    - variables declared inside the function
    - variables already declared when the function was defined
  3. Block
    - a block of code - {}
    - for(){
    - if(){}
    - while(){}


    * Scope Chaining!
     - Javascript scope chain to look for the nearest variable name we need
     - A key scoping rule in js, the inner scope can access variables of the outer scope
     - Outer scope cannot access the variables of the inner scope

*/
// inner has access to outer
let name = 'global scope'
function myFunc(){
  // let name = 'function/local scope';
  if(true){
    x = 5// been declared globally
    // let name = 'block scope 1';

    for(let i = 0; i < 1; i++){
      // let name = 'block scope 2';
      console.log(name);
      //if were not able to find the variable in the nearest scope, js scope chain inside out until it finds a variable
      //if the variable is not found it will thrown an error
    }
  }
}

// myFunc();
// console.log(x);//we cant go outwards inwards, but because its a global variable, its available

//outer does not have access to the inner scope

function myFunc2(){
  console.log(name);// we can access the name var in global scope, because its inwards outwards
  // console.log(x);// we have access to this global variable
  let age = 27;
  return age;
}

// myFunc2();
// console.log(age);//ReferenceError: age is not defined
// were in the global scope, we cant go inwards into the functions scope
// Like diggin out a cave, you can dig out but you can't dig in  -Ty C


/*


  Three ways to declare a variable, technically 4
  1. let - we've been using it up this point
   - block scoped -  anything declared with let, is available within a block scope
   - can be reassign
   - cannot redeclare

  2. const
    - create a constant
    - block scoped - anything declared with const, is available within a block scope
    - cannot be reassigned
    - cannot be redeclare
    - can mutate the reference data types it holds - object/array
    * we use const when we know we wont change this variable
    * helps notify us potential bugs, if we try to redeclare/reassign a const

  3. var
    - be reassign and redeclare
    - function scope -  the entire function will have access to that variables
    * avoid declaring with var, as it can lead to some hard to solve bugs,
    * get no errors when trying to redefined or redeclare

  4. global
    - any variable that is declared in the global scope will be global regardless of the keyword
    - any variable declared without let, const, or var will be global

  * Hoisting!
    - When you're accessing a variable declared below from above
    - when you have a variable assigned in a scope, but only the variable declaration is raised

*/
//name variable
//variable declaration
// let variable;
// //variable assignment
// variable = 5;
// //variable initialization
// let variable2 = 6;


//var
//! function scoped
//! can be reassigned and redeclare
//! when hoisting with var, only the declaration raised
//! when var is hoisted, it has a default undefined
//! therefore when we hoist var, we do not get an error

//?  trying to access variable before defined using hoisting
// were hoisting the declaration => var pet;
// but vars default is undefined so when we hoist var = undefined;
// console.log(pet);//undefined

var pet = 'mochi';
// * can be reassigned
pet = 'pumpkin';
// * var can be also redeclare
var pet = 'celebi';//throw now error, just does it
// console.log(pet);//celebi


//let
//! block scoped
//! let does not have a default value when hoisted
//! therefore it will throw an error
//! let can be reassigned but not redeclare

//? hoisting with let
//? we are hoisting when using let only the declaration which is => let pet1;
// console.log(pet1);//ReferenceError: Cannot access 'pet1' before initialization

let pet1 = 'mochi';
// * can be reassgined
pet1 = 'pumpkin';
// * cannot redeclare it
// let pet1 = 'celebi'//SyntaxError: Identifier 'pet1' has already been declared
// console.log(pet1);

//const
//! this is a constant
//! block scoped
//! const does not have a default value when hoisted
//! therefore it will throw an error
//! cannot redeclare or reassign

//? hoisting
//? we are hoisting when using const only the declaration which is => const pet1;
//? no default value for const
// console.log(pet3);//ReferenceError: Cannot access 'pet3' before initialization

const pet3 = 'mochi';
// * cannot reassign
// pet3 = 'pumpkin';//TypeError: Assignment to constant variable.
// *  cannot redeclare
// const pet3 = 'mochi';//SyntaxError: Identifier 'pet3' has already been declared
// console.log(pet3);

//that you can mutate
const arr = [];
arr.push(1,2,3);
console.log(arr);//mutate the array but reassign or redeclare -> [ 1, 2, 3 ]

//global - no keyword
// console.log(global);
// global = 'global';//in global scope
