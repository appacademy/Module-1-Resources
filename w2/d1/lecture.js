/*


  Arrow Functions!

  What are arrow functions?
    * Arrow function, aka Fat Arrows(=>) are a more concise way of declaring functions
    * More convenient way to pass callback functions(which we learn wednesday)
    * Arrow functions are preferred syntax when using anon functions as callbacks
      * [1,2,3].map(num => num * 2);

  Differences
    * This value!

*/

// function expression
// * storing an anon function in a variable
let hello = function (name) {
  return "Hello " + name;
};

// console.log(hello('brandon'));// brandon

/*
 * Multiple statement arrow function
    (parameters, go, here) => {
      statement1;
      statement2;
      return <a value>;
    }
*/

// Fat arrow function
// * remove function keyword, and replace it with the fat arrow =>
// * move the fat arrow after the parameter
// * can omit the parenthesis if there is only one parameter
let arrowHello = (name) => {
  // statement 1
  // statement 2
  return "Hello " + name;
};

// console.log(arrowHello('Anthony'));// Hello Anthony

/*
  Single expression arrow function
    * can do is implicit returns
    * Must be a function with a single expression block
      * argument => expression
      * Expression: a line of code that returns a value
*/

// Implicit return
// * if we only have one expression to return
// * we can do implicit return
// * omit the curly's and the return keyword
let implicitHello = (name) => {
  // * this wont work because there is two expression
  // * we can however get it down to one
  let res = "Hello " + name; // 1 expression
  return res; // 2 expression

  // return 'Hello ' + name;// 1 expression
};

// this works!
let implicitHello2 = (name) => "Hello " + name; // 1 expression

// console.log(implicitHello2('Anabel'));//Hello Anabel

// Implicitly Return an object
// * use the grouping operator
// * tell js, we are not returning a code block

// an object
// let obj = {};

let returnObj = (name, age) => ({ name: name, age: age });

console.log(returnObj('brandon', '27'));// { name: 'brandon', age: '27' }
