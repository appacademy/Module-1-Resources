/*






  Scope!
  - The part of the program where variables are able to accessed, and where they cant
  - It references the current "bubble" that JavaScript is looking at variables in
  - block of code - {};
  - The scope is the current context of execution in which value and expression are visible or can be referenced

  Advantage of scope?
  - prevent namespace collision
    - leads to a lot of bugs
  - security/private - variables can only be accessed from predefined of code

  Three types of scope!

  1.Global
    - represented by the global object
    - will be available to the entire program
    - avoid creating variables in the global scope
    - if you omit let/const/var, the variable will be globally available
      * i = 0

  2.Function/Local
    - variables available within a function
    - variables declared inside the function
    - variables already declared when the function was defined

  3.Block
    - a block of code - {};
    - for(){}
    - while(){}
    - if(){}

  * Scope Chaining!
    - JavaScript scope chain to look for the nearest variable name we need
    - A key scoping rule in js, the inner scope can access variables of the outer scope
    - Outer scope cannot access the variables of the inner scope
*/

// * we can reuse the name variable because we are in different scopes

let name = 'global scope';// variable declared in global scope

function myFunc() {
  let name = "function/local scope"; // this is function/local scope

  if (true) {
    let name = "block scope"; // block scope 1 within the if

    for (let i = 0; i < 1; i++) {
      //block scope 2 within the loop
      let name = "block scope 2";

      //! this is the most inner scope
      // console.log(name);//depends on whats commented out
    }
  }

  console.log(name); //function/local scope
  // we first look in the scope we are currently in
  // we cant go access variables from inner scope from the outer scope
}

// myFunc();

function myFunc() {
  let sum = 0;// declare outside the loop, to 'save' the value
  for (let i = 0; i < 5; i++) {
    // let sum = 0; //this will reinitialize sum to 0 each iteration
    // console.log(sum)
    sum += i;
  };
  // console.log(sum);
}

// myFunc();

// were unable to access the inner scope from the outer scope
function myFunc2(){
  let age = 27;
};

// myFunc2();
console.log(age);//ReferenceError: age is not defined
