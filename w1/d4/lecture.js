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

console.log(transaction('deposit', 1000));
console.log(transaction('withdraw', 10));
console.log(transaction('check balance'))

// Goal: build a function that utilizes helper functions to solve some math problems.
