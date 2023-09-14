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


// * review
let variable1; // variable declaration
variable1 = 'string';// variable assignment
let variable2 = 'string';// variable initialization

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
// ! no errors with var
function testingVar(){
  // * hoist var
  // ! no error because default value is undefined
  // console.log(test);// undefined
  var test = 1;

  // * var can be reassigned
  test = 2;
  console.log(test);// 2

  // * var can be re declared
  var test = 3;
  console.log(test);// 3

  // ! since var is function scoped
  // * we can access var declared variables from an outer scope
  if(true){
    var access = true;
  }
  // * var is function scope
  // console.log(access);//true
}


// testingVar();


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


function testingLet(){
  // * hoisting let
  // ! error
  // console.log(test);// ReferenceError: Cannot access 'test' before initialization
  let test = 1;

  // * let can be reassigned
  test = 2;
  console.log(test);// 2

  // * let cannot be re declared
  // let test = 3;
  //SyntaxError: Identifier 'test' has already been declared

  // * let is block scoped
  // ! we cannot access inner block from outer
  if(true){
    let access = false;
  };

  // let is block scoped
  // console.log(access);// ReferenceError: access is not defined
};

// testingLet();

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


function testingConst(){

  // * hoisting const
  // ! error
  // console.log(test);// ReferenceError: Cannot access 'test' before initialization
  const test = 1;

  // * const cannot be reassigned
  // test = 2;
  // console.log(test);
  //TypeError: Assignment to constant variable.

  // * const cannot be declared
  // const test = 3;
  // SyntaxError: Identifier 'test' has already been declared

  // ! const is block scoped
  // ! cannot access inner block from outer
  if(true){
    const access = false;
  }
  // console.log(access);// ReferenceError: access is not defined


  // So you can mutate the mutable data types stored in a const declared variable
  const array = [1,2,3];
  array.push(4);
  // CAN MUTATE
  console.log(array);//[ 1, 2, 3, 4 ]
  array = 'something else'
  console.log(array);//TypeError: Assignment to constant variable.
  // this string is forever the string string
  const string = 'string';

};


// testingConst();



/*

   globally
    * any variable that is declared in the global scope will be globally available
    * any variable declared without let, const, or var will be globally available

*/

// variables declared in the global score are variable globally
// * regardless of the keyword
let global1 = 1;
const global2 = 2;
var global3 = 3;

function myFunc4(){
  // we can access them from the function scope
  console.log(global1, global2, global3);// 1 2 3

  // no keyword its a global variable
  global4 = 4;
}

myFunc4();
console.log(global4);// 4
