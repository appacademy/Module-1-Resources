/*

Arrow Functions
  - Arrow function, aka a fat arrow =>, a more concise way to to delcare a function

  - this keyword - learn more about this in week 4
 */

  //function expression
  //storing an anon function in a variable
  //ex

  let sayHello = function(name) {
    return 'hello ' + name
  };

  // console.log(sayHello('brandon'))

  //using a fat arrow
  //replacing the function key word with =>
  //if there is only one param, you can omit the parathesis
  let sayHello2 = name => {
    return 'hello ' + name;
  }

sayHello2('brandon');

//another example
//does not use implict return
let addNums = (num1, num2) => {
  return num1 + num2;
}

// console.log(addNums(10, 5))//15

//with implict return
//implit return this next line
//we can only return one line, we cannot have multiple line statments with a implicit return
//omit the curly braces and the return keyword
let addNums2 = (num1, num2) => {num1 + num2}

console.log(addNums2(10,5))//15

//return an empty object
//object literal = {};
//if we want to return an object literal, we must wrap in parathesis
//we are returning a literal object as oppose to a code block
let returnObj = () => ({})

console.log(returnObj())//undefined, but we want an empty curly
