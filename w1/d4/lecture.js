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

console.log(transaction('deposit', 5)) // 15
console.log(transaction('deposit', 50000)) // error
console.log(transaction('withdraw', 10)) // 5
console.log(transaction('withdraw', 10)) // error
console.log(transaction('check balance'))