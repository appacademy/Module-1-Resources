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

let checkBalance = function() {
  return 'Your current balance is: ' + balance;
}


console.log(transaction('withdraw', 9)) //withdrawing 9 \ balance 1 
console.log(transaction('withdraw', 6)) //insufficient funds
console.log(transaction('deposit', 10000)) //10001
console.log(transaction('deposit', 1000000)) //no can do
console.log(transaction('check')) //10001