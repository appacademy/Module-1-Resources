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
let balance = 10;

let transaction = function(type, amount) {
  if (type === 'withdraw') {
    balance = withdraw(balance, amount);
  } else if (type === 'deposit') {
    balance = deposit(balance, amount);
  } else {
    console.log("You did not choose a valid transaction type");
  }

  return "Balance: "+ balance;
};

//helper function
let withdraw = function(initialBalance, amount) {
  if (initialBalance - amount > 0) {
    console.log("Withdrawing:", amount)
    initialBalance -= amount;
  } else {
      console.log("Unable to complete transaction, not enough funds")
  }
  return initialBalance;
};

//helper function
let deposit = function(initialBalance, amount) {
  if (amount < 10000) {
    console.log("Depositing:", amount)
    initialBalance += amount;
  } else {
      console.log("UNABLE TO COMPLETE TRANSACTION, PLEASE WAIT WHILE WE REVIEW THIS ACTIVITY")
  }
  return initialBalance;
};

console.log(transaction("ASDFASD", 100));
console.log(transaction('withdraw', 9));
// console.log(transaction('withdraw', 6));
// console.log(transaction('deposit', 96));
// console.log(transaction('deposit', 1000000000000000));
