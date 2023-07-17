/*


  What are fat arrows?
  - () => {};
  - A more concise way to declare our functions

  Differences
  - this value - learn in week4

*/

// function expression
// storing an anon function in a variable
let myFunc = function() {
  console.log('hello from myFunc')
};

// myFunc();

// lets do the same thing with fat arrow
// if you only have one parameter, you may omit the parenthesis
let myFunc2 = name => {
  console.log('hello ' + name)
}

// myFunc2('brandon');


// Implicit vs Explicit return

// Explicit
// we have to explicity use the curly and the return keyword
// we do; whenever our statement can not be done on one line

let addNums = (num1, num2) => {

  let sum = num1 + num2;
  return sum;

}

// console.log(addNums(10, 5)); //15


// Implicit
// we can omit the return keyword and the curly's
// if our statement can be done in one line(terminating statement);

let addNum2 = (num1,  num2) => num1 + num2;

// console.log(addNum2(12, 4));// 16


// Return an object
// object - {};
// code block - {};
// Implicitly return a object

let returnObj = () => ({}) //<- tells js this is an object and not a code block so we can implicitly return

// console.log(returnObj());// {}
