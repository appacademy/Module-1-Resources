/*


  Helper Functions!
    - break down larger problems into sub problems
    - reusability
    - use abstraction to manage complexity of the program by hiding some of the implementation
    - it's a function you can call to another function to make a big problem easier to solve
    - make codes more readable

    * can call a function from another function


*/

/*
    Sometimes we'll need to solve problems that can be broken down into smaller problems.
    Consider the transactions a person may make with their bank account.
    Rather than encapsulating all of the activities within a single
    function, we can instead write some helper functions to handle individual
    actions.
*/

let balance = 10;

//sub problems
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

//sub problems specific handles only withdraw
let withdraw = function (initialBalance, amount) {
  if (initialBalance - amount > 0) {
    console.log("Withdrawing:", amount);
    initialBalance -= amount;
  } else {
    console.log("Unable to complete transaction, not enough funds");
  }
  return initialBalance;
};

//only handles deposit
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

// console.log(transaction("ASDFASD", 100));//You did not choose a valid transaction type
// console.log(transaction('withdraw', 9));//withdrawing 9,  balance of 1
// console.log(transaction('withdraw', 6));//unable to complete funds
// console.log(transaction('deposit', 96));//depositing 96, balance of 106
// console.log(transaction('deposit', 1000000000000000)); //unable to complete transaction

// Goal: build a function that utilizes helper functions to solve some math
// problems. The function will take in two number and perform the operation passed in.
// Valid Operations
//     -- addition
//     -- subtraction
//     -- multiplication
//     -- division

/*
  Understand the problem
  Make a plan
  Execute the plan
  Refactor

  Understand the problem!
    - Input: 2 numbers + operation ==> 10, 5 addition
    - Output: a number => result of calling our operation on two numbers => 15
    * how do we get from our input to our output?
    * use helper functions


    Make a plan!
      - build the helper functions
        -- addition
          - define a function that takes in two args two nums that returns num1 + num2
        -- subtraction
          - define a function that takes in two args two nums that returns num1 - num2
        -- multiplication
          - define a function that takes in two args two nums that returns num1 * num2
        -- division
          - define a function that takes in two args two nums that returns num1 / num2
      - define the main function that takes in two numbers and a operation
      - conditionally check depending on the operation passed in, perform associated helper function
      - if we don't pass in a valid operation, return a string that says not valid

*/

function addition(number1, number2) {
  return number1 + number2;
}

let subtraction = function (num1, num2) {
  return num1 - num2;
};
let multiplication = function (num1, num2) {
  return num1 * num2;
};
let division = function (num1, num2) {
  return num1 / num2;
};

function math(num1, num2, operation) {
  if (operation === "addition") return addition(num1, num2);
  //return the return value of calling addition passing in num1 and num2 addition(10, 13)
  else if (operation === "subtraction") return subtraction(num1, num2);
  else if (operation === "multiplication") return multiplication(num1, num2);
  else if (operation === "division") return division(num1, num2);
  return "idk what you mean!";
}

let name = "brandon";

if (name === "brandon") console.log("cool");
if (true) console.log("dude");

//can test each individual
// console.log(addition(10, 13)); //23
// console.log(math(10, 11, "addition")); //23
console.log(math(10, 3, "addition")); //7
// console.log(subtraction(10, 3)); //7
// console.log(math(10, 2, "multiplication")); //30
