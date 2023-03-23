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

console.log(transaction('withdraw', 9))
console.log(transaction('withdraw', 700))
console.log(transaction('deposit', 1600))
console.log(transaction('deposit', 16000))