/*




  Three ways to declare a variable, technically 4

  1. let - weve using up to this point
    - block scoped - anything declared with let is available withing a block scope
    - can be reassigned
    - cannot be redeclare

  2. Const -
    - create a constant
    - block scoped - anything declared with const is available withing a block scope
    - cannot be reassigned
    - cannot be redeclare
    - can mutate the reference data types it holds - object/array
    * we use const, when we know we wont change the variable
    * helps notify us of potential bugs

  3. var
    - be reassign and redeclare
    - function scoped - anything declared within the function will have access to the variable
    * avoid declaring with var, as it can lead hard to solve bugs
    * get NO ERRORS when trying to redefined or redeclare

  4. global
   - any variable that is declared in the global scope, will be globally available regardless of the keyword used, let/const/var
   - any variable declared without let, const, or var will be global

  * Hoisting
   - when trying to access a variable before its been defined, not after!
   - when you have a variable assigned in a scope, only the variable declaration is raised

*/



//variable declaration
let variable;
// variable assignment
variable = 5;
// variable initialization
let variable2 = 5;


// ? VAR
// function scoped
// can be redeclare and reassigned
// when hoisting with var, only the declaration is raised
// var has a default value of undefined
// so if you try to access it before its been defined, you will not get an error

function myVar(){

  var pet = 'mochi';
  // console.log(pet);//mochi

  var pet = 'celebi';//! we can redeclare
  // console.log(pet);//celebi

  pet = 'pumpkin';//! we can reassign
  // console.log(pet);//pumpkin

  // we are trying the age variable
  // when we hoist declared variable, hoist the declaration only
  // ! var age; - undefined - default value when hoisting var
  console.log(age);//undefined

  if(true) {
    var age = 27;//variable available to entire function
  };

  console.log(age);//27 - we have access because var is function scoped

};

// myVar();


function myLet(){

  let pet = 'mochi';
  // console.log(pet);//mochi
  //! we cannot redeclare with let
  // let pet = 'celebi';//throws an error, pet already defined

  //! we can reassign
  pet = 'pumpkin';
  // console.log(pet);//pumpkin

  //block scoped
  if(true){

    //? TRYING TO HOIST THE AGE VARIABLE
    // we are hoisting just the declaration - let age;
    // ! but, let does NOT have a default value of undefined like var
    // ! so it will throw an error
    console.log(age);//ReferenceError: Cannot access 'age' before initialization
    let age = 27;
  };

  console.log(age);//ReferenceError: age is not defined age is block scoped, we cant from outer scope
}

// myLet();


// Const

function myConst(){

  const pet = 'mochi';
  console.log(pet);

  //! we cannot redeclare with const
  // const pet = 'celebi';
  // console.log(pet);//SyntaxError: Identifier 'pet' has already been declared

  //! we cannot reassign
  // pet = 'pumpkin';
  // console.log(pet);//TypeError: Assignment to constant variable.

  //? Hoisting with Const
  // const when hoisted, hoist the declaration
  // but const does not have a default value
  // therefore it will throw an error
  // console.log(age);//ReferenceError: age is not defined

  if(true) {
    const age = 27;//! block scoped
  };

  // console.log(age);//ReferenceError: age is not defined
  // Cannot access age variable from outer scope to inner,
  // age is only available within that block

};

myConst();


//mutating with const
//can still mutate reference data types
const arr = [];
console.log(arr);
arr.push(1,2,3);
console.log(arr);//[ 1, 2, 3 ]


//global defined variables
// these are global variables because they were defined in the global scope
let car1 = 'challenger';
const car2 = 'challenger';
var car3 = 'challenger';


function myFunc3(){
  color = 'red';//global variable because we are not using a keyword - const/let/var
};

myFunc3();//red

console.log(color);


//this is dangerous!
//avoid var!
var myFunc3 = () => console.log('hey!');
// var myFunc3 = 25;

//====

// let name = 'cat';

function myFunc() {
  name ='tory';
  // console.log(name);//tory
}
// myFunc();

//weve reassign the name variable
// console.log(name);//tory

console.log('-====-');

let name = 'cat';

function myFunc() {
  let name ='tory';

  console.log('before if: ' + name);
  
  if (true) {
    name = 'tony';//reassigning the closest variable within the nearest scope
    console.log('   after if: ' + name)
  }
  console.log(' same bubble as before if, but after if: ' + name)
}
myFunc();

console.log('       after function: ' + name);
//we are grabbing the closest name variable
//we log in name variable in global scope, we grab the value from the global scope
// instead of going into the inner scope
