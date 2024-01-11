/*

Helper Functions!

Sometimes we'll need to solve problems that can be broken down into smaller problems.
We can do that with Helper functions!

  What is a helper function?
    - function that performs part of the computation of another function
    - can call a function from another function

  Why would helper functions be useful?

    - Decompose problems - That is the process of breaking down a larger problem into its smaller sub-problems.
      - Taking on a complex task, and chunking it down to more manageable pieces.

    - Use abstraction to manage the complexity of a program by hiding some implementation to make code more readable!

    lets build a little program that will handle the transaction that a person can make with their bank account!

    Three basic things that this transaction program will need:

    1.balance

    two different types of transactions:
    2. withdraw
    3. deposit



*/


let balance = 10;

let transaction = function (type, amount) {

    if (type === 'withdraw') {
        balance = withdraw(balance, amount)
    } else if (type === 'deposit') {
        balance = deposit(balance, amount)
    } else {
        console.log('You did not choose a valid transaction type.')
    }
    return `Balance: ${balance}`
}


let withdraw = function(intialBalance, amount) {
    if (intialBalance - amount > 0) {
        console.log(`Withdraw: ${amount}`)
        intialBalance -= amount
    } else {
        console.log(`Unable to complete transaction, not enough funds. 😢`)
    }

    return intialBalance
}

let deposit = function(intialBalance, amount) {
    if (amount < 10000) {
        console.log(`Depositing: ${amount}`)
        intialBalance += amount
    } else {
        console.log(`UNABLE TO COMPLETE TRANSACTION, PLEAS WAIT WHILE WE REVIEW THIS ACTIVITY!!! 👮`)
    }

    return intialBalance;
}

// console.log(transaction("ASDFASD", 100));//You did not choose a valid transaction type
// console.log(transaction('withdraw', 9));//withdrawing 9,  balance of 1
// console.log(transaction('withdraw', 6));//unable to complete transaction, not enough funds
// console.log(transaction('deposit', 96));//depositing 96, balance of 97
// console.log(transaction('deposit', 1000000000000000)); //unable to complete transaction, please wait while we review this activity

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

  Understand the problem?
    - Input: 2 numbers + operations(string) ==> 10 and 5  addition
    - Output: a number ==> result of calling our operation on the two nums ==> 15
    *operation is addition, 10 + 5
    * use helper functions!

  Make a plan:
    1. define a function math, that takes in two nums and a operation
    2. Conditionally check what the operation is, depending on the operation
      -each condition will call a function depending on the operation
      - if its addition
        - call a function that will add the two numbers
      - if its subtraction
        - call a function that will subtract the two numbers
      - if its division
        - call a function that wil divide the two numbers
      - if its multiplication
        - call a function that will multiply the two numbers
      - if its none of these, return 'not sure what you mean???'

    Code out Prompt! 25mins
      - Take a break!
*/

function math(num1,num2, operation){
    if(operation === 'addition') {
        return add(num1,num2)
    } else if (operation === 'subtraction') {
        return subtract(num1,num2)
    } else if (operation === 'multiplication'){
        return multiply(num1,num2)
    } else if (operation === 'division') {
        return divide(num1,num2)
    }

    return `I'm not sure what you mean?`
}

function add(num1,num2){
    return num1+num2
}

function subtract(num1,num2){
    return num1-num2
}

function multiply(num1,num2){
    return num1 * num2
}

function divide(num1,num2){
    return num1 / num2
}

// console.log(math(33,1,'addition'))
console.log(math(50,23, 'subtraction'))

