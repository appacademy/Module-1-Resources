/**
 * Helper Function
 *
 * Decompose problems
 *
 * example: ATM transactions
 * basic functionalities:
 * - withdrawing
 * - depositing
 * - check balance
 *
 */

let balance = 10

let transaction = function (type, amount) {
  if (type === 'deposit') {
    balance = deposit(balance, amount)
  } else if (type == 'withdraw') {
    balance = withdraw(balance, amount)
  } else if (type == 'check balance') {
    checkBalance()
  }

  return 'Balance: ' + balance;
}

//only handle withdrawing
let withdraw = function (initialBalance, amount) {
  if (initialBalance >= amount) {
    console.log("Withdrawing: " + amount);
    initialBalance -= amount
  } else {
    console.log("Unable to complete transaction. This ain't a charity.");
  }

  return initialBalance;
}

//only going to handle depositing
let deposit = function (initialBalance, amount) {
  if (amount < 10000) {
    console.log("Depositing: " + amount);
    initialBalance += amount;
  } else {
    console.log("Unable to complete transaction. Please see the teller.");
  }
  return initialBalance;
}

let checkBalance = function () {
  console.log() //for formatting :)
  console.log('Your current balance is: ')
}

// console.log(transaction('deposit', 5)) // 15
// console.log(transaction('deposit', 50000)) // error
// console.log(transaction('withdraw', 10)) // 5
// console.log(transaction('withdraw', 10)) // error
// console.log(transaction('check balance'))

// **************************

/**
 * Polyas
 * Understand the prob
 * Make a plan
 * Execute the plan
 * Refactor
 * 
 * Goal: build a function that utilizes helper functions to solve some arithmetic.
 * -- Given some input (string and two nums), perform the correct operation and return result
 * -- Likely to if statements
 *
 * Valid operations:
 * -- addition
 * -- subtraction
 * -- multiplication
 * -- division
 * 
 * Bonus：add more than two numbers???
 * -- sum variable
 */

/**
 * Define overarching math function, called "calculator":
 * - general structure: if -operation-, call that operation:
 * -- e.g. if conditional === addition, then call addition helper
 * 
 * Create helper functions:
 * addition:
 * - add the two numbers
 * subtraction:
 * - subtract the two numbers
 * multiplication:
 * - multiply the two numbers
 * division:
 * - divide the two numbers
 * Error message: if operation fails / doesn't return a number
 */

function calculator(operation, num1, num2) {
  if (operation == 'add') {
    return add(num1, num2);
  } else if (operation == 'subtract') {
    return subtract(num1, num2);
  } else if (operation == 'multiply') {
    return multiply(num1, num2);
  } else if (operation == 'divide') {
    return divide(num1, num2)
  }
  return "You have an error :((("
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(pizzas, tacos) {
  return pizzas - tacos;
}

function multiply(dog, cat) {
  return dog * cat;
}

function divide(x, y) {
  if (y != 0) {
    let remainder = modulo(x, y)
    x = x - remainder
    return x / y + " Remainder " + remainder
  } else {
    return "Can't divide by zero :("
  }
}

function modulo(num1, num2) {
  return num1 % num2
}

console.log(calculator('add', 23, 42)) //thanks Makayla!
console.log(calculator('subtract', 66, 77)) //thanks Alexander!
console.log(calculator('multiply', 79, 9)) //thank you Mark~!
console.log(calculator('divide', 115, 0)) //thanks Christopher :)
console.log(calculator('divide', 7, 3)) //tyvm Lucifer + Vjola + Edward
console.log(calculator('HELP', 2, 3))