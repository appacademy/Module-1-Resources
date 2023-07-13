/*
HELPER FUNCTIONS

What are Helper Functions?
    * Function that we use inside of another function
    * Handles a part of that main function

Why are they important?
    * Helps make the main function look simpler by breaking into smaller pieces
    * Helps keep the code clean
    * Debugging!! - Allows you to isolate where the problem may be coming from
    * Reusability
    * Abstraction - Hides some of the unneeded details

Where do we use them?
    * Nested Loop - Loop through in the main function, and then call the helper for each element
    * When the problem is really complicated

One example: ATM
1) Check our balance - "Check Balance"
2) Withdraw money - "Withdraw"
3) Deposit money - "Deposit"

*/

let balance = 10;

// main function
function ATM(transaction, amount){
    if (transaction === "Check Balance"){

        return checkBalance(balance); // undefined

    } else if (transaction === "Withdraw") {

        return balance = withdraw(balance, amount);

    } else if (transaction === "Deposit") {
        // console.log('balance', balance, 'amount', amount)
        return balance = deposit(balance, amount);

    } else {

        console.log("That ain't it chief")

    }
};

// helper functions

function checkBalance(userBalance){
    console.log('Your balance is $' + userBalance);
};

function withdraw(initialBalance, requestedAmount){
    if (requestedAmount > initialBalance) {
        console.log('Insufficient Funds')
    } else {
        console.log('Withdrawing: ', requestedAmount);
        // balance -= requestedAmount;
        // return balance;
        initialBalance = initialBalance - requestedAmount; // initialBalance -= requestedAmount
        return initialBalance;
    };
};

function deposit(initialBalance, depositAmount){
    // console.log('inside deposit function')
    // console.log('initialBalance', initialBalance, 'depositAmount', depositAmount)
    console.log('Depositing: ', depositAmount);
    initialBalance += depositAmount; // initialBalance = initialBalance + requestedAmount
    return initialBalance;
};

// ATM("Deposit", 2); //?????
// ATM("Check Balance")
// console.log('this is the balance variable =>', balance)





//===================================================================================================

/*

Goal: Build a function that utilizes helper functions to solve some math problems.

    -- Given some input (a string and 2 nums), perform the correct operation and return the result
    -- Will likely be using if statements
    -- Upon meeting some condition, I want to invoke the proper function and return its result

Valid Operations
    --addition
    --subtraction
    --multiplication
    --division

Polyas:

Understand the problem
Make a Plan
Execute the Plan
Refactor

Understand the Problem
    -- Input: a string and 2 nums - string = some kind of operation => 'addition' and 10 and 5
    -- Output: a number => result of calling our operation on the 2 nums => 15
    -- Use Helper Functions!

Make a plan!
    * Create a main function that will call the appropriate helper functions
    * Create a function for each operation - Helper functions
        ** Take in the 2 nums
        ** Return the result of the operation on those nums
    * Use if...else if...else statements (conditional) to check what the operation is
        ** So that we know which helper function to use

*/

// main function
let calculator = function(operation, num1, num2){
    if (operation === "addition") { // addition || "addition"
       return addition(num1, num2);
    } else if (operation === "subtraction") {
        return subtraction(num1, num2);
    } else if (operation === 'multiplication') {
        return multiplication(num1, num2);
    } else if (operation === `division`) {
        return division(num1, num2);
    } else {
        return 'That\'s not a valid operation'
    }
};

// helper functions
function addition(num1, num2) {
    let sum = num1 + num2;
    return sum; // return num1 + num2
};

function subtraction(num1, num2) {
    return num1 - num2;
};

function multiplication(num1, num2) {
    return num1 * num2;
};

function division(num1, num2) {
    return num1 / num2;
};

// console.log(calculator('division', 'banana', 4)); // .25


/*
Write a function twoDimensionalSum(arr) that takes in a 2D array of numbers
and returns the total sum of all numbers.
*/

function twoDimensionalSum(outerArr) {
    let bigSum = 0;
    for (let i = 0; i < outerArr.length; i++) {
        bigSum += addArr(outerArr[i]);
    };

    return bigSum;
};

function addArr(innerArr) {
    let littleSum = 0;
    for (let i = 0; i < innerArr.length; i++) {
        littleSum += innerArr[i];
    };

    return littleSum;
};

let arr1 = [
    [1, 3], // 4
    [-4, 7, 10], // 13
    [2] // 2
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
    [],
    [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6