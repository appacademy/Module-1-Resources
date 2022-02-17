let balance = 10;

let transaction = function(type, amount) {
  if (type === 'withdraw') {
    balance = withdraw(balance, amount);
  } else if (type === 'deposit') {
    balance = deposit(balance, amount);
  } else {
    return "You did not choose a valid transaction type";
  }

  return balance;
};

let withdraw = function(initialBalance, amount) {
  if (initialBalance - amount > 0) {
    initialBalance -= amount;
  }
  return initialBalance;
};


let deposit = function(initialBalance, amount) {
  if (amount < 10000) {
    initialBalance += amount;
  }
  return initialBalance;
}

console.log(transaction("ASDFASD", 100));
console.log(transaction('withdraw', 9));
console.log(transaction('withdraw', 6));
console.log(transaction('deposit', 96));
console.log(transaction('deposit', 1000000000000000));