/*

  Arrow Functions

  What are fat arrow functions?
    * Arrow functions, aka fat arrows (=>) are most concise way of declaring function
    * More convenient way to pass callback functions(learn Wednesday!)
    * Arrow function are preferred syntax when using an anonymous function as a callback
      ** [1,2,3].map(num => num * 2);
      function()

*/

// Function expression
// * storing an anonymous function in a variable
let hello = function (name) {
  return "Hello " + name;
};

// console.log(hello('brandon'));// Hello brandon

// Fat arrow function
// * removal of the function keyword and the addition of the fat arrow after the parameters
// *  if you only have one parameter, you can omit the parenthesis
let arrowHello = name => {
  // statement/expression1
  // statement/expression2
  return "Hello " + name;
};

// console.log(arrowHello('brandon'));// Hello brandon

/*

  Single expression arrow functions
    * can do implicit return
    * Must be a function with a single expression block
      * argument => expression;
      * expression: a line of code that returns a value
*/

let arrowHelloImplicit = (name) => "Hello " + name;

console.log(arrowHelloImplicit('Maica'));// Hello Maica

let arrowHelloImplicit2 = (name) => {
  // statement/expression1
  // statement/expression2
  // * we must get our expression/code down to one line in order to implicit return
  // ! we cannot do that with example because we have more than one expression
  let res = "Hello " + name;// expression 1
  return res;// expression 2
};

/*
 * Multiple statement arrow function
    (parameters, go, here) => {
      statement1;
      statement2;
      return <a value>;
    }
*/

// add function non implicit
// * if youre not doing an implicit return; you need the return and the curlys
let add = (num1, num2) => {
  let sum  = num1 + num2;
  return sum;
}

// console.log(add(3,4));// 7


// add function implicit
// * one expression to be returned
// * can omit parenthesis and return keyword
let implicitAdd = (num1, num2) => num1 + num2;

// console.log(implicitAdd(3,4));// 7


let obj = {};
// in order for us to implicit return an object
// * you need to wrap the object in the grouping operator
let returnObj = (name, age) => ({name, age});
// let res = returnObj('brandon', 27);
console.log(returnObj('brandon', 27))
