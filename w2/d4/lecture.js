/*



  What is scope?
    * The general area that js is looking at for variables
    * The part of the program that has access to certain variables depending on where they are declared
    * The scope is current content of execution in which values and expressions are visible or can be referenced

  What are the advantages of scope?
    * Reuse variable names - avoid bugs
    * Reduce name collisions
    * Security - variables can only be accessed by predefined parts of code


  Three types of scope!
    * 1. Global
          * represented by the window/global object
          * will be available to the entire program
          ! avoid creating variables in the global scope
    * 2. local/function
          * the functions arguments
          * any local variables declared inside the function
          * any variables that were already declared when the function was defined
    * 3. block
          * a block of code - {}
          * for() {}
          * if() {}
          * while() {}

    Scope Chaining!
      * Javascript scope chain looks for the nearest variable that has the name that we need
      * A key scoping rule in js; that inner scope can access variables of the outer scope
      * but the outer scope cannot access the variables of the inner scope
      * inwards => outwards

*/

// global scope
// let name = "global scope";

function myFunc() {
  // function/local scope
  // let name = "function/local scope";

  if (true) {
    // block scope 1
    // let name = "block scope 1";

    for (let i = 0; i < 1; i++) {
      // let name = "block scope 2";

      console.log(name);
      // * If were not able to find the variable that we need in the immediate scope; js will scope chain inward outward to find the variable we need
      // * inward -> outward
      // ! not outward -> inward
    }
  };

  // globally declared variable
  // ! dont do this
  x = 'bad';
}

myFunc();
