/*




  Variables declaration

  1. let
    * block scoped
    * can reassigned
    * cannot redeclare
  2. const
    * block scoped
    * cannot be reassign
    * cannot redeclare
    * constant
  3. var
    * function scoped
    * can be reassigned
    * can be redeclare
    ! error prone
  4. global
    * any variable that is declared in the global scope will be available globally
    * any variable declared without let, const, or var will be globally available

  Hoisting!
    * Hoisting is when js tries to move the declaration of a variable to to the top of the current scope
    * Trying to access a variable before its defined

  Temporal Dead Zone
    * Where variables exists before they are accessed
    * let and const
*/


// * review
let variable;// variable declaration
variable = 'string';// variable assignment
let variable2 = 'string';// variable initialization



function testingVar(){

    // * hoisting var
    // * when trying to hoist var; it has a default value of undefined
    // * therefore it will not throw an error when trying to hoist
    console.log(test);// undefined

    var test = 1;

    // * var can be reassigned
    test = 2;
    console.log(test);// 2

    // * var can be redeclare
    var test = 3;
    console.log(test);// 3

    // var is function scope
    // ! we can access var declared variables from an outer scope as long as its in the function


    if(true){
      // entire function has access to this variable
      var access = true;
    };


    console.log(access);// undefined

}

testingVar();
