/*

 What are Fat arrow functions?
    * Arrow functions, a.k.a. Fat Arrows (=>), are a more concise way of declaring functions.
    * More convenient way to pass callback functions(We will learn about on Wednesday)
    * Arrow functions are the preferred syntax when using an anonymous function as a callback.
      ** [1,2,3].map(num => num * 2);// [2,4,6]

         [1,2,3].map(function(num){
              return num * 2
           });
    * Differences
      ! This - context - we learn in week 4
      * functionally work the same

*/

// Function expression
// * store an anon function into a variable

let hello = function (name) {
    return 'Hello ' + name
}

// console.log(hello("Brandon"))


let arrowHello = (name) => {
    let res = "Hello " + name
    return res;
}

// console.log(arrowHello("Brandon"))

// Implicit return
/*
  Single expression arrow functions
  * Can do Implicit returns
  * Must be a function with a single expression block
    * argument => expression;
    * Expression: a line of code that returns a value
  * Omit the curlys and the return keyword
*/

// singular args do not need to wrapped in parens
let implicit = (name) => "Hello " + name;

// console.log(implicit("maica"))

let addition = (num1, num2) => num1 + num2

// console.log(addition(5,7))


let returnObj = (name) => ({ firstName: name})

// console.log(returnObj("Maica"))

// console.log(returnObj())

/*
 * Multiple statement arrow function
    (parameters, go, here) => {
      statement1;
      statement2;
      return <a value>;
    }
*/
