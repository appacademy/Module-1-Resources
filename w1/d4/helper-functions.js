/*

Helper Functions!

  What is a helper function?
    - a function you can invoke within another function

  Why would helper functions be useful?
    - breaking down a complex problem into smaller more managable problems
    - makes code more readable by hiding implementations in other functions

*/

let balance = 10;

//main function
function transaction(type, amount) {

    if (type === "withdraw") {
        balance = withdraw(balance, amount);
    } else if (type === "deposit") {
        balance = deposit(balance, amount);
    } else {
        console.log("Transaction type incorrect");
    }

    return "Balance: " + balance
}

// helper function
function withdraw(initialBalance, amount) {

    if ((initialBalance - amount) < 0) {
        console.log("Unable to complete transactions, not enough funds");
    } else {
        console.log("Withdrawing", amount);
        initialBalance -= amount;
    }
    return initialBalance;
}

function deposit(initialBalance, amount) {
    if (amount > 10000) {
        console.log("TOO MANY FUNDS, GO TO YOUR LOCAL BANK");
    } else {
        console.log("Depositing", amount);
        initialBalance += amount;
    }

    return initialBalance;
}

console.log(transaction("withdraw", 5));
console.log('final balance: ', balance);
// console.log(transaction("deposit", 10));

// console.log(transaction("deposit", 500000));
// console.log(transaction("deposip", 10));

// *****************************************************************

/*
 Goal: build a function that utilizes helper functions to solve some math problems

 -- given some input (a string and two nums), perform the correct operation and return the result
 -- will likely if statements
 -- Upon meeting some condition, I want to invoke the proper function and
    return its result

 Valid Operations
 - addition
 - subtraction
 - multiplication
 - division

  Understand the problem
  Make a Plan
  Execute the plan
  Refactor

  Understanding the problem?
    - Input: 2 numbers + operation(string) ===> 10 and 5, "addition"
    - Output: a number  ===> result of calling the operation on the two nums ===> 15
    * use helper functions

    Make a plan:
    1. Define a function math, that takes in two numbers and an operation
    2. Conditionally check what the operation is, depending on the operation,
        perform the operation on the two numbers
        - if it's addition,
            - call helper function to add the two numbers together
        - if it's subtraction,
            - call helper function to subtract second number from first
        - if it's multiplication,
            - call helper function to multiply both numbers
        - it it's division,
            - call helper function to divide first number by second
        - if the operation is invalid, return "I'm not sure what you mean"

    Code out Prompt! 25mins
    - Take a break!

*/
