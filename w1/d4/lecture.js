/**
 * Helper Function
 * 
 * Decompose problems
 * 
 * example: ATM transactions
 * basic functionalities:
 * - withdrawing
 * - depositing
 * 
 * 
 */

let balance = 10


let transaction = function(type, amount) {
  if (type == 'deposit') {
    balance = deposit(balance, amount)
  }
  return 'Balance: ' + balance;
}

let withdraw = function(initialBalance, amount) {}

//only going to handle depositing
let deposit = function(initialBalance, amount) {
  if (amount < 10000) {
    console.log("Depositing: " + amount)
    initialBalance += amount;
  } else {
    console.log("Unable to complete transaction. Please see the teller.")
  }
  return initialBalance;
}

console.log(transaction('deposit', 5))
console.log(transaction('deposit', 50000))