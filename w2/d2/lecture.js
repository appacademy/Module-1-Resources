/*


  Arrow functions!
    - Arrow function, a more concise way to declare our functions

*/

//storing in anon function in a variable
//function expression
let sayHello = function(name) {
  return 'hello ' + name;
}

console.log(sayHello('brandon'))

//fat arrow
//replacing the function keyword with => and move the arrow after the parameter
//if we only have one parameter, we can omit the parenthesis
let sayHello2 = name => {
  return 'hello ' + name;
}

// console.log(sayHello2('krandon'))


//another example with two args
let addNums = (num1, num2) => {
  let sum = num1 + num2
  //cannot do implicit return because it is no a one line statement
  return sum;
}

// console.log(addNums(10, 3))//13

//implicit return
//if you omit the curlys, you do not need the return keyword, but your statement must be only one line
let addNums2 = (num1, num2) => num1 + num2
console.log(addNums2(10, 13))
