/*

  Helper functions!

  What is a helper function?
  - function that performs part for the logic of another function
  - functions that are being called within another function


  Why would helper function be useful?
  - help with debugging
  - allows you to have a tool to use in multiple different functions
  - readability and being able to implement different helper functions into a base function
  - decompose problem - which is the process of breaking down a larger problem into smaller sub problems
    - Code chunks that are manageable
  - Use abstraction to manage complexity of program by hiding some of the implementation


    Sometimes we'll need to solve problems that can be broken down into smaller problems.
    Consider the transactions a person may make with their bank account.
    Rather than encapsulating all of the activities within a single
    function, we can instead write some helper functions to handle individual
    actions.

    Example: ATM transactions
    - basic functionalities
    - Withdrawing
    - deposit
    - check balance
*/


let balance = 10;

//sub function that handles withdrawing
let withdraw = function(initialBalance, amount) {
  if(initialBalance >= amount) {
    console.log('Withdrawing: ' + amount);
    initialBalance -= amount;
  } else {
    console.log('You dont have enough money!')
  };

  return initialBalance;
};
// console.log(withdraw(10, 2));//testing helper func
// console.log(withdraw(2, 10));//


//sub function that handles deposit
let deposit = function(initialBalance, amount) {
  if(amount < 10000) {
    console.log('Depositing: ' + amount);
    initialBalance += amount;
  } else {
    console.log('UNABLE TO DEPOSIT, PLEASE WAIT WHILE WE REVIEW THIS ACTIVITY')
  };

  return initialBalance;
};
// console.log(deposit(100, 10));
// console.log(deposit(10, 10000000));


//sub function that checks the balance
let checkBalance = function(){
  console.log('your balance is: ' + balance);
};

// checkBalance()

//main function that handles transactions
//utilize our helper functions
let transaction = function(type, amount) {
  if(type === 'withdraw') {
    balance = withdraw(balance, amount);
  } else if(type === 'deposit') {
    balance = deposit(balance, amount);//function evaluates to return
    //reassign balance to be the return value of passing 10 and 1000 to the deposit function
    //were calling deposit, so will enter the deposit function
  } else if(type === 'check balance') {
    checkBalance();
  } else {
    console.log('Not a value transaction type')
  };

  return 'Balance ' + balance;
};

// console.log(transaction('deposit', 1000));
// console.log(transaction('withdraw', 10));
// console.log(transaction('check balance'))

// Goal: build a function that utilizes helper functions to solve some math problems.

//take a break!!!
//and interpret this code
//type out your own code!
//make sure to git pull!


//paramaters from func to func

/*
      Polyas
      Understand the problem
      Goal: Build a function that utilize helper function to solve some math problems!
        - Input: a string(operation) and two numbers    => addition 10 3
        - Output: the result of calling the operation using the two numbers passed => 13
        * will likely use if statements
        * upon meeting a condition, we want to invoke the proper function according to the operation
        * Valid operations
        *   - addition
        *   - subtraction
        *   - multiplication
        *   - division
        *

      Make a Plan
        1. define a function that takes in a string and two nums
        2. conditionally check what are string is, this determine the operator
          a. depending on the operator
            -if its addition
              - call a function that adds two numbers
            -if its subtract
              - call a func that subtracts two numbers
            -if its multiplication
              - call a func that multiplies two numbers
            -if its division
              - call a func that divides two numbers
            -else console.log something went wrong?


      Refactor

*/

//Execute the plan

//addition function
let add = function(fruit1, fruit2) {
  return fruit1 + fruit2;
};

//subtraction function
let subtract = function(num1, num2) {
  return num1 - num2;
};

// * helper functions
let multiplication = function(num1, num2) {
  return num1 * num2;
}
// / helper func
let division = function(num1, num2) {
  return num1 / num2;
}
//10
//let num1 = 10
//let fruit1 =
//main function
let calculator = function(type, num1, num2) {
  if(type === 'addition') {
    return add(num1, num2);
  } else if(type === 'subtraction') {
    return subtract(num1, num2);
  } else if(type === 'multiplication') {
    return multiplication(num1, num2);
  } else if(type === 'division') {
    return division(num1, num2);
  } else {
    return 'not a valid operation'
  }
};

console.log(calculator('addition', 10, 13));
