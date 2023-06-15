/*


  Polya's
  Goal: Build a function that utilize helper functions to solve math problems
  * Understand the problem
    - Input:  a string(operation) and two numbers => 'addition' , 10, 12
    - Output: the result of calling the operation on the two numbers => 22
    * will likely use if statements
    * upon meeting a condition; invoke the proper helper function according the operation
    * Valid operation
    *   Addition
    *   Subtraction
    *   Multiplication
    *   Division

  * Make a plan
  * Execute the plan
  * Refactor

*/

// take 15min to create this calculator
// console.log everything!
// the main function will be the calculator


// helper functions
let addition = function(num1, num2){
  return num1 + num2;
};

function subtraction(num1, num2){
  return num1 - num2;
};

//parameters can be named anything
function multiplication(banana, apple){
  return banana * apple;
};

function division(n1, n2){
  return n1 / n2;
};

// main functions
function calculator(operation, num1, num2){

  if(typeof num1 !== 'number' || typeof num2 !=='number') {
    return 'either num1 or num2 is not a number';
  };

  if(operation === 'addition') {
    return addition(num1, num2);
  } else if(operation === 'subtraction') {
    return subtraction(num1, num2);
  } else if(operation === 'multiplication') {
    return multiplication(num1, num2);
  } else if(operation === 'division') {
    return division(num1, num2);
  } else {
    return 'Not a valid calculations!'
  };
}

console.log(calculator('addition', 12,  24));//46
// console.log(calculator('subtraction', 100, 34));//66
// console.log(calculator('multiplication', 100, 3));//300
// console.log(calculator('division', 100, 25));//4
// console.log(calculator('asdadsasdasd', 100, 25));//Not a valid calculations!
// console.log(calculator('division', '123123', '123123'));//1 - but now we have an edge case
// console.log(calculator('subtraction', '100', 25));//75
