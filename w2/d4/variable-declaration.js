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

/*
3. var
    * function scoped
    * can be reassigned
    * can be redeclare
    ! error prone
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


    // console.log(access);// undefined

}

// testingVar();


/*
  1. let
    * block scoped
    * can reassigned
    * cannot redeclare
*/


function testingLet(){

  // hoisting let
  // ! error
  // variables declared with let when hoisted do no have a default value of undefined therefore it throws an error
  // console.log(test);// ReferenceError: Cannot access 'test' before initialization

  let test = 1;

  // * let can be reassigned
  test = 2;
  console.log(test);// 2

  // * let cannot be redeclare within in the same scope
  // let test = 3;// SyntaxError: Identifier 'test' has already been declared

  // can redeclare a different variable with same name in a different scope
  // ex:
  if(true){
    // different block scope
    let test = 4;
  }

  // let is block scoped
  // ! we cannot access inner block from outer
  if(true){
    let access = false;
  }

  // we cannot go outwards inwards
  // let is block scoped
  console.log(access);// ReferenceError: access is not defined

};


// testingLet();


/*
2. const
    * block scoped
    * cannot be reassign
    * cannot redeclare
    * constant
*/


function testingConst(){

  // * hoisting with const
  // ! will get an error when trying to hoist const
  // * const does not have a default value

  // console.log(test);// ReferenceError: Cannot access 'test' before initialization

  const test = 1;

  // * cannot reassign
  // test = 2;
  // console.log(test);// TypeError: Assignment to constant variable.

  // * cannot redeclare
  // const test = 3;// SyntaxError: Identifier 'test' has already been declared

  // const is block scope
  // ! we cannot access inner block from outer
  if(true){
    const access = false;
  }

  console.log(access);//ReferenceError: access is not defined

};


// Can mutate!
const array = [1,2,3];
array.push(4);
console.log('===>',array);//  [ 1, 2, 3, 4 ]


// testingConst();



/*
4. global
    * any variable that is declared in the global scope will be available globally
    * any variable declared without let, const, or var will be globally available
*/

// All global - declared in global scope
let global1 = 1;
const global2 = 2;
var global3 = 3;


function myFunc4(){
  // we can access these global variables from the functions scope
  // console.log(global1, global2, global3);// 1 2 3

  // * variable declared globally if no keyword is used
  global4 = 4;
  console.log('===>',global4);
}

myFunc4();

global4 = 3;

console.log('===>',global4);

// * no error is throne, we have access to global declared variables
// * even tho were accessing a variable in the inner scope from the outer scope
// console.log(global4);// 4

// If the variables is already defined
let sum = 0;

// this syntax will reassign the value
sum += 1;

// If the variable isnt defined
// * then its declared globally
product = 0;
