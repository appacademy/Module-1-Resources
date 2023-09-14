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





