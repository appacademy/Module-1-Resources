
/*


  What is Scope?
    * the part of the program that has access to certain variables depending on where they are declared
    * block of code
    * The scope is current context of execution in which values and expression are visible or can be referenced

  What are the advantages of scope?
    * Security - variables can only be accessed by predefined parts of code
    * reduced name collisions - a lot of bugs!
    * reuse variables name

  Three types of scope!

    1. Function/local
      * the function's arguments
      * any local variables declared inside the function
      * any variables that were already declared when the function was defined

    2. Global
      * represented by the window/node global object
      * will be available to the entire program
      ! avoid creating variables in the global scope

    3. Block
      * a block of code - {}
      * for() {}
      * if() {}
      * while() {}

    Scope chaining
      * javascript scope chain looks for the nearest variable that has the name we need
      * A key scoping rule in js, that inner scope can access variables of outer scope
      * but outer scope cannot access the variables of the inner scope

*/

// global scope
let name = "global scope";

function myFunc() {
  // function/local scope
  let name = "function/local scope";

  if (true) {
    // block scope
    let name = "block scope 1";

    for (let i = 0; i < 1; i++) {
      // another block scope
      let name = "block scope 2";
      console.log(name); // block scope 2
      // * if were not able to find the variable we need in the immediate scope, js will scope chain to the outer scopes to find one, in this case, if js did not find name in block scope 2, js will scope chain up and find the name in block scope 1
      // *  we can go inward -> outward
      // ! not outward -> inward
    }
  }

  // global declared variable
  // ! don't do this
  x = "bad";
}

myFunc();

// outer scope does not have access to inner scope
// *  we can go inward -> outward
// ! not outward -> inward
function myFunc2() {
  let name = "brandon";
  // able to access x variable in a different scope
  console.log(x); // "bad"
}

myFunc2();
// console.log(name);//ReferenceError: name is not defined

// * We can reassign the values of outer scope variables
function myFunc3() {
  let name = "initial value";

  for (let i = 0; i < 2; i++) {
    name = "new value";
  }

  console.log(name); // new value
}

myFunc3();

/*

  Variable Declaration

  Three ways to declare a variable, technically 4

  1. let
    * block scoped
    * can be reassigned
    * cannot re declared

  2. const
    * constant
    * block scoped
    * cannot be reassigned
    * cannot be re declared

  3. var
    * function scoped
    * can be reassigned
    * can be re declared
    ! error prone

  4. globally
    * any variable that is declared in the global scope will be globally available
    * any variable declared without let, const, or var will be globally available

  Hoisting!
    * JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
    * JavaScript's process of moving all declarations to the top of the current scope


  Temporal dead zone!
    * Where variables exist before they are accessed
    * let and const


*/

// * review
let variable1; // variable declaration
variable1 = "string"; // variable assignment
let variable2 = "string"; // variable initialization

/*
  var
  * function scoped
  * can be reassigned
  * can be re declared
  ! error prone

  * when var is hoisted
    ** only the the variable declaration is hoisted
    ** when var is hoisted, it has a default value of undefined
    ** therefore when we hoist var, we do not get an error because we get undefined
*/

// * hosting var
// ! no error
// console.log(test1);//undefined

function testingVar() {
  // * hosting var
  // ! no error
  // console.log(test1);// undefined
  var test = 1;

  // * var can be reassigned
  test = 2;
  console.log(test); // 2

  // * var can re declared
  var test = 3;
  console.log(test); // 3

  // ! since var is function scope
  // * we can access var declared variables from an outer scope
  if (true) {
    var access = true;
  }

  // * var is function scoped
  console.log(access); // true
}

testingVar();

/*

  let
    * block scoped
    * can be reassigned
    * cannot re declared

  * when let is hoisted
    ** let does not have a default value
    ** therefore will throw an error when hoisted
    ** as the variable does yet exists

*/

function testingLet() {
  // * hoisting let
  // ! error
  // console.log(test);// ReferenceError: test is not defined
  let test = 1;

  // * let can be reassigned
  test = 2;
  console.log(test); // 2

  // * let cannot be re declared
  // let test = 3; // ERROR

  // ! let is block scope
  // ! we cannot access inner block from outer
  if (true) {
    let access = false;
  }

  // * let is block scopes
  // console.log(access);// ReferenceError: access is not defined
}

testingLet();

/*

  const
    * constant
    * block scoped
    * cannot be reassigned
    * cannot be re declared

  * when const is hoisted
    ** const does not have a default value
    ** therefore will throw an error when hoisted
    ** as the variable does yet exists

*/

function testingConst() {
  // * hoisting const
  // ! error
  // console.log(test);// ReferenceError: test is not defined
  const test = 1;

  // * const cannot be reassigned
  // test = 2;
  // console.log(test);// Cannot reassign a variable declared with const

  // * const cannot be re declared
  // const test = 3; // Cannot re declare a variable declared with const

  // ! const is block scope
  // ! we cannot access inner block from outer
  if (true) {
    const access = false;
  }

  // * const is block scopes
  // console.log(access);// ReferenceError: access is not defined
}

testingConst();

/*

   globally
    * any variable that is declared in the global scope will be globally available
    * any variable declared without let, const, or var will be globally available

*/

console.log("=======");

// variables declared in the global scope are available
// * regardless of keyword
let global1 = 1;
const global2 = 2;
var global3 = 3;

function myFunc4() {
  // we can access these values from the function's scope
  console.log(global1);
  console.log(global2);
  console.log(global3);

  // * variable declared globally if no keyword is used
  global4 = 4;
}

myFunc4();
// * we can access the global4 variable even tho we are going from a outward scope inwards
// ! this is error prone
console.log(global4); // 4
