/*

Helper Functions!

Read/Watch: 20mins
  - Helper Functions Demo


  - Why use Helper Functions?
    - A function you make, to implement functionality in multiple places
    - Makes code more readable, more obvious what each part does, clean!
    - Abstraction, managing complexity
    - Use abstraction to manage complexity of prgram by hiding some implementation to make code more readable!
    - Breaking down the problem into sub problems, make it more digestable!


    Sometimes we'll need to solve problems that can be broken down into smaller
    problems.  Consider the transactions a person may make with their bank
    account.  Rather than encapsulating all of the activities within a single
    function, we can instead write some helper functions to handle individual
    actions.

    Important to understand the data flow!
*/
// let balance = 10;

// let transaction = function (type, amount) {
//   if (type === "withdraw") {
//     balance = withdraw(balance, amount);
//   } else if (type === "deposit") {
//     balance = deposit(balance, amount);
//   } else {
//     console.log("You did not choose a valid transaction type");
//   }

//   return "Balance: " + balance;
// };

// //helper function
// let withdraw = function (initialBalance, amount) {
//   if (initialBalance - amount > 0) {
//     console.log("Withdrawing:", amount);
//     initialBalance -= amount;
//   } else {
//     console.log("Unable to complete transaction, not enough funds");
//   }
//   return initialBalance;
// };

// //helper function
// let deposit = function (initialBalance, amount) {
//   if (amount < 10000) {
//     console.log("Depositing:", amount);
//     initialBalance += amount;
//   } else {
//     console.log(
//       "UNABLE TO COMPLETE TRANSACTION, PLEASE WAIT WHILE WE REVIEW THIS ACTIVITY"
//     );
//   }
//   return initialBalance;
// };

// console.log(transaction("ASDFASD", 100));
// console.log(transaction('withdraw', 9));
// // console.log(transaction('withdraw', 6));
// console.log(transaction('deposit', 96));
// // console.log(transaction('deposit', 1000000000000000));

// Goal: build a function that utilizes helper functions to solve some math
// problems. The function will take in two number and perform the operation passed in.
// Valid Operations
//     -- addition
//     -- subtraction
//     -- multiplication
//     -- division

//polyas
/*
Understand the problem
Make a Plan
Execute the plan
Refactor

  Understand the problem?
    - Input: 2 numbers + operations(string) ==> 10 and 5  addition
    - Output: a number ==> result of calling our operation on the two nums ==> 15
    *operation is addition, 10 + 5
    * use helper functions!

    Make a plan:
    1. define a function math, that takes in two nums and a operation
    2. Condtionallly check what the operation is, depending on the operation
      -each condition will call a function depending on the operation
      - if its addition
        - we will add the two numbers
      - if its subtraction
        - we will subtract the two numbers
      - if its division
        - we wil divide the two numbers
      - if its multiplcation
        - we will multiply the two numbers
      - if its none of these, return 'not sure what you mean???'
*/

let math = function (num1, num2, operation) {
  if (operation === "addition") {
    // return num1 + num2;
    return add(num1, num2);
  } else if (operation === "multiplication") {
    return multiply(num1, num2);
  } else if (operation === "subtraction") {
    return subtract(num1, num2);
  } else if (operation === "division") {
    return divide(num1, num2);
  } else {
    return "not sure what you mean???";
  }
};

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

console.log(math(10, 5, "addition")); //15
console.log(math(20, 4, "division")); //5
console.log(math(3, 3, "multiplication")); //9
console.log(math(20, 10, "subtraction")); //10

let arr = [1,2,3];
console.log(arr.length);//3
for(let i = 0; i < arr.length; i++){

}
