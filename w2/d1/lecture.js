/*


  Arrow functions!
  What are arrow functions?
    - Arrow function, aka fat arrows (=>)
    - are more concise way of declaring of function

    Differences?
      - this value - learn more in week 4

*/

//function expression
//storing an anonymous function in variable
let sayHello = function (name) {
  return "hello " + name;
};

// console.log(sayHello('brandon'));

//use fat arrow
//replace the function keyword with the =>,  move the arrow after the parameters
//omit the parenthesis, if there is only one parameter
let sayHello2 = (name) => {
  return "hello " + name;
};

// console.log(sayHello2('brandon'));//hello brandon

//a one liner using implicit return
//we can implicit return, when the statement is only one line
let sayHello3 = (name) => "hello " + name;
// console.log(sayHello3('brandon'));

//with implicit return
//if you have two args, you cannot omit the parenthesis around the parameters
let addNums = (num1, num2) => num1 + num2;
// console.log(addNums(10, 13));//23

//cant implicit return this
let addNums1 = (num1, num2) => {
  let res = num1 + num2;
  return res;
};

console.log(addNums1(10, 12));

//function declaration vs expression/fat arrow
//where you can access the function
//function expression - ReferenceError: Cannot access 'addNums1' before initialization
//cannot access function if function call is above the function
//function declaration - can be accessed before initialization
//can access function if function call is above, due to hoisting which we learn in week 3

//return an object implicitly
// let obj = {}
// a codeblock - {};
//youll use thr grouping operator to groupe the object, so wrap object like so -> ( { key: value } )
let returnObj = () => ({name: "brandon"});
// console.log(returnObj());//{name: "brandon"}
