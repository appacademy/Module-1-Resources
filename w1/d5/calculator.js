/*

Goal: build a function that utilizes helper function to solve some math problems

  - Given some input string and two nums, perform the correct operation and return the result
  - will likely if statements
  - upon meeting some condition, we wan to invoke the proper function and return its result

  Valid operations
    - addition
    - subtraction
    - multiplication
    - division

  Main Functions - calculator

  Understand the problem?
  - Input: 2 numbers and a operation
  - string => 10 and 2 multiplication
  - Output: a number -> 20
  * operation is multiplication
  * two nums 10 and 2
  * * use helper functions!
*/



// - calculator
function calculator(operator, num1, num2, ){
  // console.log(subtraction(1,2));// -1
  // console.log(subtraction(num1, num2))//
  // let res = subtraction(num1, num2)
  if(operator === '+') {
    return addition(num1, num2);
  } else if(operator === '-') {
    return subtraction(num1, num2);
  } else if(operator === '*') {
    return multiplication(num1, num2)
  } else if(operator === '/') {
    return division(num1, num2);
  } else {
    return 'Invalid Operator';
  }
}

console.log(calculator('+',10, 2));// 12
console.log(calculator('*',10, 2));// 20
console.log(calculator('/',10, 2));// 5
console.log(calculator('-',10, 2));// 8

// - addition
function addition(num1, num2) {
  return num1 + num2;
}
// - subtraction
function subtraction(num1, num2) {
  return num1 - num2
}
// - multiplication
function multiplication(num1, num2) {
  return num1 * num2
}
// - division
function division(num1, num2) {
  return num1 / num2
}

console.log('asdf')

console.log(console.log())//undefined
