/*

  Function expression syntax!
    * another a way to write a function
    * we learn about function declaration yesterday
    * storing an anonymous function in a variable therefore giving it a name to alias it by
      * anon function with no name

*/

// function declaration
function sayHello() {
  console.log("hello from say hello");
}

// sayHello();

// function expression

let sayHello2 = function () {
  console.log("hello from sayHello 2");
};

let sayHello3 = () => console.log("hello from sayHello 3");

let name = "brandon";
let age = 27;
let bool = true;
let myFunc = function () {};

console.log("==>", name, age, bool, myFunc);

myFunc();

sayHello2();
// But what does this all mean? This brings us around to the concept of first
// class objects. A first class object is defined as:
// * 1. It can be stored in a variable
// * 2. it can be passed as an argument to a function (coming up next week!)
// * 3. It can be returned from a function (also coming up next week!)

// console.log(sayHello2);// [Function: sayHello2]
// console.log(sayHello);// [Function: sayHello]
// sayHello2();

console.log(math1(10, 20)); // 30
// ! ReferenceError: Cannot access 'math' before initialization

// function expression
// will thrown error when hoisting
let math1 = function (num1, num2) {
  return num1 + num2;
};

console.log(math2(10, 20)); // 30
// function declaration will not thrown an error when hoisted
// hoisting - to access a variable before its been defined
function math2(num1, num2) {
  return num1 + num2;
}

// function callback() {}

function higherOrder(callback) {


}

higherOrder(() => {});
