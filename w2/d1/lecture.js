/*

 What are Fat arrow functions?
    * Arrow functions, a.k.a. Fat Arrows (=>), are a more concise way of declaring functions.
    * More convenient way to pass callback functions(We will learn about on Wednesday)
    * Arrow functions are the preferred syntax when using an anonymous function as a callback.
      ** [1,2,3].map(num => num * 2);// [2,4,6]

*/


// Function expression
// * store an anon function in a variable

let hello = function(name) {
  return 'Hello ' + name;
}

// console.log(hello('brandon'));

/*
 * Multiple statement arrow function
    (parameters, go, here) => {
      statement1;
      statement2;
      return <a value>;
    }
*/

// Fat arrow function
let arrowHello = (name) => {
  let res = 'Hello ' + name;// statement 1
  return res;// statement 2
};

// console.log(arrowHello('Maica'))

// Implicit return
/*
  Single expression arrow functions
  * Can do Implicit returns
  * Must be a function with a single expression block
    * argument => expression;
    * Expression: a line of code that returns a value
  * Omit the curlys and the return keyword
*/


let implicitHello = (name) => 'Hello ' + name;// statement 1
// console.log(implicitHello('Charles'));

let addition = (num1, num2) => num1 + num2;;

// console.log(addition(10, 20));//

// Return an object using an implicit return
// let obj = { name: 'brandon'};

let returnObj = (name) => ({ firstName: name })

console.log(returnObj('Trevor'));// { firstName: 'Trevor' }
