let balance = 10

//problem ATM transactions
//include both withdrawals and deposits

function transaction(type, amount) {
  if (type === 'withdraw') {
    balance = withdraw(balance, amount);
  } else if (type === 'deposit') {
    balance = deposit(balance, amount);
  }
  return "Balance: $" + balance;
}

//return post withdrawal amount
function withdraw(initialBalance, amount) {
  if (initialBalance >= amount) {
    console.log("Withdrawing: $", amount)
    initialBalance -= amount;
  } else {
    console.log("Unable to complete transaction. Insufficient funds. RIP")
  }
  return initialBalance
}

//return post deposit amount
function deposit(initialBalance, amount) {
  if (amount > 10000) {
    console.log("Too much money. IRS is coming for you")
  } else {
    console.log("Depositing: $", amount)
    initialBalance += amount;
  }

  return initialBalance
}

// console.log(transaction('withdraw', 9))
// console.log(transaction('withdraw', 700))
// console.log(transaction('deposit', 1600))
// console.log(transaction('deposit', 16000))

//===================================
/**
 * Polyas
 * Understand problem
 * Make plan
 * Execute plan
 * Refactor code
 */

/**
 * Goal: Build a function that utilizes helper functions to solve some arithmetic
 * --Given some input (a string and two numbers), perform the correct operation and return the result
 * --Likely to use if statements
 * ---Upon meeting condition, invoke proper helper function/operation and return result
 *
 *
 * Valid Operations:
 * --addition
 * --subtraction
 * --multiplication
 * --division
 */

/**
 * Understanding the problem
 * - Input: operation (string) + 2 numbers ==> 'add', 10, 5
 * - Output: a number => 15
 *
 * Make a plan:
 * 1. Define a function called "math" that takes in a string and two numbers
 * 2. Check which operation to do via conditionals
 *    - for each operation, call its own helper function
 *    -- e.g. if addition, call addition with the two numbers
 *    -- if not one of the four operations, then error message
 */

function math(operation, num1, num2) {
  if (operation === 'addition' || operation === 'add') {
    return addition(num1, num2);
  } else if (operation === 'subtraction') {
    return subtraction(num1, num2);
  } else if (operation === 'multiplication') {
    return multiplication(num1, num2);
  } else if (operation === 'division') {
    return division(num1, num2);
  } else {
    return "Invalid Operation";
  }
}

function addition(banana, apple) {
  return banana + apple;
}

function subtraction(ghost1, ghost2) {
  return ghost1 - ghost2;
}

function multiplication(car, plane) {
  return car * plane;
}

function division(dog, cat) {
  if (cat === 0) {
    return "Error: Dividing by Zero"
  }
  return Math.floor(dog / cat) + ' remainder ' + dog % cat;
}

// console.log(math('addition', 7, 12)) //=> 19
// console.log(math('add', 77, 9)) //=> 86
// console.log(math('subtraction', 2, 6)) //=> -4
// console.log(math('multiplication', 10, 10)) //=> 100
// console.log(math('division', 14, 7)) //=> 2
// console.log(math('division', 35, 0)) //=> cant divide by zero
// console.log(math('division', 0, 35)) //=> 0
console.log(math('division', 23, 7)) //=> 3.28? 3 remainder 2
// console.log(math(6, 'subtraction', 2)) //=> Invalid Operation