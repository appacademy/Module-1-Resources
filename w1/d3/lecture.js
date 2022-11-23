/*

  Helper Functions!

  Why use helper function?
    - Breakdown logic into its own sections
    - Makes code more readable, more obvious what each part does!
    - Seperation of reponsiblities, SRP
    - Breaking down the problem into subproblems, more digestable!
    - contain logic you dont want to repeat
    - Easier to debug

*/

/*
  - Breaking down the problem into sub problems, make it more digestable!
    Sometimes we'll need to solve problems that can be broken down into smaller
    problems.  Consider the transactions a person may make with their bank
    account.  Rather than encapsulating all of the activities within a single
    function, we can instead write some helper functions to handle individual
    actions.

    Important to understand the data flow!
*/

let balance = 10;

let transaction = function (type, amount) {
  if (type === "withdraw") {
    balance = withdraw(balance, amount);
  } else if (type === "deposit") {
    balance = deposit(balance, amount);
  } else {
    console.log("You did not choose a valid transaction type");
  }

  return "Balance: " + balance;
};

//helper function
let withdraw = function (initialBalance, amount) {
  if (initialBalance - amount > 0) {
    console.log("Withdrawing:", amount);
    initialBalance -= amount;
  } else {
    console.log("Unable to complete transaction, not enough funds");
  }
  return initialBalance;
};

//helper function
let deposit = function (initialBalance, amount) {
  if (amount < 10000) {
    console.log("Depositing:", amount);
    initialBalance += amount;
  } else {
    console.log(
      "UNABLE TO COMPLETE TRANSACTION, PLEASE WAIT WHILE WE REVIEW THIS ACTIVITY"
    );
  }
  return initialBalance;
};

// console.log(transaction("ASDFASD", 100));
// console.log(transaction('withdraw', 9));
// console.log(transaction('withdraw', 6));
// console.log(transaction('deposit', 96));
// console.log(transaction('deposit', 1000000000000000));

// Goal: build a function that utilizes helper functions to solve some math
// problems. The function will take in two number and perform the operation passed
// in.
// Valid Operations
//     -- addition
//     -- subtraction
//     -- multiplication
//     -- division

//Polyas Framework!
/*
  Understand the problem!
  Make a plan
  Try it out!
  Refactor!

  Understand the problem!
    * A function that utlizes helper function to solve some math problems, the function will take in three arguments being, two numbers and a operation(string)
    Valid Operations
    -- addition
    -- subtraction
    -- multiplication
    -- division
    * if we have addition, we will add the two numbers

    Input: Two numbers + operation(string) ==> 10, 5, addition
    Output: A number, the result of calling our operation on the nums ==> 15

    Make a plan!
      1. Define a function, call it math, that takes in two nums and a operation(string)
      2. Conditionally check what the operation is, depending on that operation
        - we will call a helper function to perform the operation
        - use return value from our helper function, as our return value in our main function
          - if the operation is addition
            - will create a function, two add two numbers together
          - if the operation is subtraction
            - will create a function, to subtract two numbers
          - if the operation is multiplication
            - will create a funciton, to multiply two numbers
          - if the operation is division
            - will create a function, to divide two nubers
          - if the operation is not valid, will return 'not sure what you mean???'
*/

//execute the plan!

//we refactored this to remove the curlys,
//we dont need the curls if its only one line
//got rid of the else
//idiomatic - everyone does
//remove the if else, because the return stop the function anyways

// let math = function (num1, num2, operation) {
//   if (operation === "addition") {
//     // return num1 + num2;
//     return add(num1, num2);
//   } else if (operation === "multiplication") {
//     return multiply(num1, num2);
//   } else if (operation === "subtraction") {
//     return subtract(num1, num2);
//   } else if (operation === "division") {
//     return divide(num1, num2);
//   } else {
//     return "not sure what you mean???";
//   }
// };

let math = function (operation, num1, num2) {
  if (operation === "addition") return addition(num1, num2);
  if (operation === "subtraction") return subtraction(num1, num2);
  if (operation === "multiplication") return multiplication(num1, num2);
  if (operation === "division") return division(num1, num2);
  return "not sure what you mean???";
};

function division(num1, num2) {
  return num1 / num2;
}

let multiplication = function (num1, num2) {
  return num1 * num2;
};

let subtraction = function (num1, num2) {
  return num1 - num2;
};

//create helper function for add
let addition = function (num1, num2) {
  return num1 + num2;
};

//test your helper function
// console.log(addition(10, 5))//15

console.log(math("divison", 10, 5)); //not sure what you mean???
