/*



  What is scope?
    * The part of the program that has access to certain variables
    * The set of variables that are available to use at a given time/location in the execution of the program

  What are the advantages of scope?
    * Dont have to worry about reassigning variable
      ** Reduce name collisions
      ** reuse the variable name
    * Security when dealing with sensitive information.
      ** only have access to variables in predefined parts of code

  Three types of scope!

  1. Function/local
    * the function's arguments/parameters
    * any local variables declared inside the function
    * any variables that were already declared when the function was defined

  2. Global
    * represented by the window/node global object
    * will be available to the entire program
    ! avoid creating variables in the global scope

  3. Block
    * a block of code - {}
    * for(){}
    * if(){}
    * while(){}

  Scope Chaining
    * JS scope chain look for the nearest variable that has the name that we need
    * A key scoping rule in js, than inner scope can access variables of the outer scope
    * but the outer scope cannot access the variables of the inner

*/



// let name = 'global scope'

function myFunc(){
  // let name = 'function/local scope';

  if(true) {
    // let name = 'block scope 1';

    for(let i = 0; i < 1; i++) {
      // let name = 'block scope 2';

      // console.log(name);
      // JS will scope chain to find the variable name that we need
      // * it will go from inner scope to outer
      //! not outward -> inward
    }
  };

  // globally declared variable
  // ! dont do this
   x = 'bad';
};



// myFunc();

// outer scope does not have access to inner scope

function myFunc2(){
  let name = 'brandon';
  // console.log(x);// bad
  // able to access the x variable in a different scope
}

// myFunc2();
// console.log(name);//  ReferenceError: name is not define
// we dont have access to the name variable
// * we cant go outer scope to inner

// we can reassign the values of outer scope variables
function myFunc3(){

  let name = 'initial value';

  for(let i = 0; i < 2; i++){
    name = 'new value';
  };

  // console.log(name);// new value
}


// myFunc3()



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
