let balance = 10

//average normal bank transactions: withdraw and deposit
let transaction = function (type, amount) {
  if (type === 'withdraw') {
    balance = withdraw(balance, amount);
  }

  else if (type === 'deposit') {
    balance = deposit(balance, amount);
  }

  else if (type === 'check') {
    return checkBalance();
  }

  return "Balance: " + balance;
}

//sub problem: breaking down the withdrawal functionality
let withdraw = function (initialBalance, amount) {
  if (initialBalance > amount) {
    console.log("Withdrawing:", amount)
    initialBalance -= amount;
  }
  else {
    console.log("Unable to complete transaction: Insufficient funds :(")
  }

  return initialBalance;
}

//handle the deposit functionality
let deposit = function (initialBalance, amount) {
  if (typeof amount != 'number') {
    console.log("Unable to complete transaction: Please see teller :o")
  }
  if (amount < 100000) {
    console.log("Depositing:", amount)
    initialBalance += amount;
  }
  else {
    console.log("Unable to complete transaction: Please see teller :o")
  }

  return initialBalance
}

let checkBalance = function () {
  return 'Your current balance is: ' + balance;
}

// console.log(transaction('withdraw', 9)) //withdrawing 9 \ balance 1
// console.log(transaction('withdraw', 6)) //insufficient funds
// console.log(transaction('deposit', 10000)) //10001
// console.log(transaction('deposit', 1000000)) //no can do
// console.log(transaction('check')) //10001


//====================
/**
 * Polyas
 * 1. Understand the problem
 * 2. Make a plan
 * 3. Execute that plan
 * 4. Refactor
 */

/**
 * Goal: build a function that utilizes helper functions to
 * solve some arithmetic
 * -- Given some inputs (string for operation and two numbers),
 *    perform said operation and return result
 * -- Probably be using conditions (if/else statements)
 */

/**
 * Valid operations
 * -- addition
 * -- subtraction
 * -- multiplication
 * -- division
 * -- error
 */

/**
 * Understand
 * - Input: operation (string) and 2 numbers ==> "add", 10, 5
 * - Output：a number => 15
 * Make a plan
 * - function named 'calc,' that takes in 3 inputs, 1 string (operation), 2 numbers
 * - Conditional based on operation string to lead us to our helper functions
 *   - if its addition
 *     - call a helper func that will add the two numbers, and then return the result of that function
 *   - if its subtraction
 *     - call a function that will subtract the two numbers
 *   - if its multiplication
 *     - call a function that will multiply the two numbers
 *   - if its division
 *     - call a function that will divide the two numbers
 *   - if none of the above
 *     - return a message about wrong input e.g. "data type error"
 */

function calc(operation, num1, num2) {
  if (operation === 'add') {
    return add(num1, num2)
  }

  else if (operation === 'subtract') {
    return subtract(num1, num2)
  }

  else if (operation === 'multiply') return multiply(num1, num2)

  else if (operation === 'divide') {
    return divide(num1, num2);
  }

  return 'Buy a new calculator -Beverly (but Joshua)'
}

function add(num1, num2) {
  return num1 + num2
}

function subtract(cookie, pizza) {
  return cookie - pizza
}

function multiply(jjajang, myun) {
  return jjajang * myun
}

function divideOld(birria, tacos) {
  return birria / tacos
}

function divide(birria, tacos) {
  let wholeNumber = Math.floor(birria/tacos); //rounded integer quotient
  let remainder = birria % tacos;
  let string = wholeNumber + ' with remainder ' + remainder;
  return string
}

// console.log(calc('add', 10, 5)) //15
// console.log(calc('subtract', 9, 62)) //-53
// console.log(calc('multiply', 98, 7)) //686
// console.log(calc('divide', 10, 5)) //2
// console.log(calc('kittycats', 10, 5)) //2
console.log(calc('divide', 30, 18)) //1 with remainder 12 (a string)
console.log(calc('divide', 13, 31)) //0 with remainder 13 (a string)