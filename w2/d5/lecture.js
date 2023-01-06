/*


  Scope!
    - the part of the program has access to certain variables depending on where they are declared
    - block of code

    - The scope is current context of execution in which values and expression are visible or can be referenced

    Advantages of scope
      - Security - variables can only be accessed by predefined parts of code
      - reduced name collisions -  a lot of bugs!
      - reuse variables name

    Three types of scope!
    1. Function/local
      - variables available within a function
      - variables declared inside the function
      - variables already declared when the function was defined

    2. Global
      - represented by the window/node global object
      - will be available to the entire program
      - avoid creating variables in the global scope

    3. Block
      - a block of code
      - for() {}
      - if() {}
      - while() {}

    * Scope chaining -
      - javascript scope chain looks for the nearest variable that has the name we need
      - A key scoping rule in js, that inner scope can access variables of outer scope
      - outer scope cannot access the variables of the inner scope


*/

//global scope
// let name = 'global scope';

function myFunc() {
  //function/local scope
  // let name = 'function/local scope';

  if(true) {
    //block scope 1
    // let name = 'block scope 1'

    for(let i = 0; i < 1; i++) {
      //block scope 2
      // let name = 'block scope 2';
      console.log(name);
      //if were not able to find the variable in the nearest scope, js will scope chain inside out, until it finds a variable that we need
      //in this case, if name is not found in the current block scope, we it will chain up to the next scope, being the if statement
    }
  }

}


// myFunc();


//outer scope does not have access to the inner scope
function myFunc2() {
  let name = 'brandon';
};

myFunc2();
//throws an error
// console.log(name)//ReferenceError: name is not defined



/*


  Three ways to declare a variable, technically 4
  1. let - we've using this up to this point
    - block scoped
    - can be reassigned
    - cannot re declared
  2. const
    - is create a constant
    - cannot be reassigned
    - cannot be re declared
    - block scoped
  3. var
    - be reassigned or re declared
    - function scoped

  4. Globally
    - any variable that is declared in the global scope will be globally available
    - any variable declared without let,const, or var will be globally available

    *Hoisting!
      - Hoisting is when, you have a variable assigned in a scope
       but only the variable declaration is raised
*/


let variable; //variable declaration
variable = 'string';//variable assignment
let var2 = 'string';//variable initialization


//var
//function scope
//var can be reassigned and re declared
//when var is hoisted, only the the variable declaration is hoisted
//when var is hoisted, it has a default value of undefined
//therefore when we hoist var, we do not get an error because we get undefined


//we do not get an error when hoisting a var declared with var, because it has a default value
// console.log(name);//undefined

var name = 'brandon';
//var can be reassigned
name = 'krandon';
// console.log(name)
//var can be re declared
// var name = 'brandon';



// console.log(name2) //ReferenceError: Cannot access 'name2' before initialization
//let does not have a default value, therefore when hoisted, an error is thrown
//let
//block scope
let name2 = 'brandon';
//can reassign
name2 = 'brandon2';
// console.log(name2)
//cannot redeclare
// let name2 = 'krandon';//SyntaxError: Identifier 'name2' has already been declared


//const
//this is a constant
//block scoped
//const will throw an error just like let when trying to hoist variables, because const does not have a default value
// console.log(name3);//ReferenceError: Cannot access 'name3' before initialization
const name3 = 'brandon';

// you cannot reassign a variable with const
// name3 = 'krandon'; //TypeError: Assignment to constant variable.
console.log(name3)

//we cannot redeclare with const
// const name3 = 'krandon';// will not work!


//can declare variables globally
//if you declare a variable without a keyword, it will be globally accessible
//if you declare with a keyword in the global scope, the variable will be global
//if you declare without the keyword, outside of the global scope, the variable will be global
name4 = 'brandon'

//where are the values before they are hoisted when using let and const?
//Temporal dead zone! Where variables exist before they are accessed
