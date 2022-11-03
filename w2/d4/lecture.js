/*

  Scope!!
    What is scope?
      - What part of the part the program has access to certain variables,
        depending on where theyre declared
      - The scope is current context of execution in which values and expressions are 'visible'
        or can be refernced.

    Advantages of scopes
      - Security - variables can only be accessed by predefined parts of code
      - Reduce name collision, dont want to overwrite variables
        - leads to alot of issues with debugging
        - allows us to reuse commonly used variable names

    Three types of scope?
      - Global - represented by the window object/ node global object
        - will be available to the entire program
        - avoid creating variables in the global scope

      - Function/Local - variables available within a function
        - functions arguments
        - variables declared inside the function
        - variables already declared when function was defined

      - Block - a block of code - usually delinated by {}
        - block of code
        - loop, conditional
        - if(){

        }
        -for(){}

      Scope chaining?
        - javascript scope chain looks for the nearest variable that has the name we need,
        - A key scoping rule in JavaScript is the fact that an inner scope does have access to variables in the outer scope.

      examples!
*/

//inner scope can access outer variables
//outer scope canot access inner scope

//will scope chain if js cant find a variable within its immiediet scope
//global scope
let name = 'global';
// console.log(name)
function myFunc() {
  //function scope/local scope
  let name = 'function/scope';
  // console.log(name)
  if(true) {//block scope - we open up some curlys
    let name = 'block';
    // console.log(name)
    for(let i = 0; i < 2; i++) {
      let name = 'block2';
      // console.log(name)
    }
  }
}

myFunc();

//outer scope does not have access to inner scope
function myFunc2() {
  let name = 'brandon';
  console.log(name);
}
console.log(name);//ReferenceError: name is not defined
