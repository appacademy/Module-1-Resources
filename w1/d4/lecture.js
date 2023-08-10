/*

Helper Function!

    What is a helper function?
    - a function that is called inside of another function
    - function that performs part of the computation of another function

    Why would helper functions be useful?
    - Decomposing problems - the process of breaking down a larger problem into smaller sub-problems
    - Makes code more understandable by limiting the amount of code within a single section
    - Debugging is much easier!
    - Abstraction - Takes the unneeded details and hides them.

    Sometimes we will need to solve problems that can be broken down into smaller problems.
    Consider the transactions a person may make with their bank account.
    Rather than encapsulating all of those activities in a single function,
    we can instead use helper functions to handle individual actions.
*/

// What can an ATM do? Check Balance, Withdraw Money, Deposit Money

let balance = 10;

function checkBalance(initialBalance) {
    console.log(`Your balance is $${initialBalance}.`);
};

function withdraw(initialBalance, amount) {
    if (amount <= initialBalance) {
        console.log(`Withdrawing: $${amount}`);
        initialBalance -= amount; //change the balance variable, not initialBalance
    } else {
        console.log("Unable to complete transaction, insufficient funds.")
    };
    return initialBalance;
};

// withdraw(balance, 2)
// console.log('balance', balance)

function deposit(initialBalance, amount) {
    if (amount < 9000) {
        console.log(`Depositing: $${amount}`);
        initialBalance += amount; //change the balance variable, not initialBalance
    } else {
        console.log("Too much moneys. Please wait.")
    };
    return initialBalance;
};

// deposit(balance, 9000);
// console.log('balance', balance)

function ATM(type, amount) {
    if (type === 'check') {
        checkBalance(balance);
    } else if (type === 'withdraw') {
        balance = withdraw(balance, amount);
    } else if (type === 'deposit') {
        balance = deposit(balance, amount);
    } else {
        console.log('Invalid transaction type.')
    };
}

// ATM('deposit', 100)
// console.log('balance', balance)


/*
Goal: build a function that utilizes helper functions to solve some math
problems.

 -- Given some input (a string and two nums), perform the correct operation
    and return the result
 -- Will likely use if statements
 -- Upon meeting some condition, I want to invoke the proper function and
    return its result

Valid Operations
  -- addition
  -- subtraction
  -- multiplication
  -- division

  Understand the problem
  Make a Plan
  Execute the plan
  Refactor
*/