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
    - Input: 2 numbers + operation(string) ==> 10 and 5  addition
    - Output: a number ==> result of calling our operation on the 2 nums => 15
  Make a Plan
    1. Define a math function, that takes in two nums and an operation => main function
    2. Conditionally check what the operation is, depending on that operation
        - each condition will call a function based on that operation
        - If it's addition
            - call the function that will add the 2 nums together and return the result
        - If it's subtraction
            - call the function that will subtract the 2 nums and return the result
        - If it's multiplication
            - call the function that will multiply the 2 nums and return the result
        - If it's division
            - call the function that will divide the 2 nums and return the result
        - If it's none of these
            - return 'invalid operation'
  Execute the plan
  Refactor
*/

let math = function(num1, num2, operation) {
    if (operation === 'addition') {
        return addition(num1, num2);
    } else if (operation === 'subtraction') {
        return subtraction(num1, num2);
    } else if (operation === 'multiplication') {
        return multiplication(num1, num2);
    } else if (operation === 'division') {
        return division(num1, num2);
    } else {
        return "I'm not sure what you mean by that..."
    }
};

// Helper functions
let addition = function(num1, num2) {
    let sum = num1 + num2;
    return sum; // same thing as => return num1 + num2
};

function subtraction(num1, num2) {
    return num1 - num2;
};

function multiplication(num1, num2) {
    return num1 * num2;
};

function division(num1, num2) {
    if (num2 === 0) {
        return "What do you think you're doing?!"
    }
    return num1 / num2;
};

// console.log(division(2, 5))
console.log(math(2, 5, 'addition'))