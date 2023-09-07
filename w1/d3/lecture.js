/*


  Function Expression Syntax
    * another way to write a function
    * we learn the function declaration
    * storing an anonymous function in variable therefore giving it a name we can alias by
    ! An anonymous is a function with no name
    function(){}

*/

// This works!
sayHello1();// hello from sayHello 1

// function declaration
function sayHello1() {
  console.log('hello from sayHello 1');// hello from sayHello1
}




// Function Expression
// * storing an anonymous function in variable therefore giving it a name we can alias by
// * now the function has a name to reference it by - sayHello2

// Function expression are not hoisted
// You cannot access it before its been defined same way you cant access a variable before its been defined
sayHello2();

let sayHello2 = function () {
  console.log('hello from sayHello 2');// hello from sayHello 2
};

sayHello2();

// no different than
let age = 27;
let name = "brandon";
let sayHi = function () {};


// key difference between declaration and expression
// hoisting!
// trying to access a variable before its been defined
// function definition, you can hoist!
// function expression, you cant!


// why would use function expression?
// so we can use fat arrows!
// qol!
let sayHello3 = () => console.log('hello');


// But what does this all mean? This brings us around to the concept of first
// class objects. A first class object is defined as:
// * 1. It can be stored in a variable
// * 2. it can be passed as an argument to a function (coming up next week!)
// * 3. It can be returned from a function (also coming up next week!)
