/*

  Arrow Functions!
    What are arrow functions?
      - Arrow functions aka fat arrow => are more a concise way to declare functions

      Differences?
        - this value - binding context - learn in week 4

*/

//function expression
//storing an anonymous function in a variable
let sayHello = function (name) {
  return "hello " + name;
};

// console.log(sayHello('brandon'))

//with arrow function
//replacing the function keyword with =>
//if we only have one param, we can omit the parenthesis around the parameters
let sayHello2 = (name) => {
  return "hello " + name;
};

// console.log(sayHello2('brandon'))

//another example with two args
//without implicit return
let addNums = (num1, num2) => {
  return num1 + num2;
};

console.log(addNums(10, 21)); //31

//another example with two args
//with implicit return
//we dont need return or curlys if were doing an implicit return
let addNums2 = (num1, num2) => num1 + num2;

// console.log(addNums2(3,5))//8

//return in empty object
//object literal = {}
//tells js this isnt a block of code, but a object literal
let returnObj = () => ({});

console.log(returnObj());//{}
