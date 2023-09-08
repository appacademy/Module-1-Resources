/*


  Helper functions!

  What is a helper function?
    * any function that performs part of the computation of another function
    * a function that helps another function

  Why would a helper function be so useful?
    * Make code more readable, more obvious as to what each part does
    * It makes things to easier to debug
    * maintain dry practices
    * Make you're code more modular
    * decompose problems -  help break them down to more manageable chunks!
    * Abstract complexity by hiding implementation

  Sometimes we ll need to solve sub problems that can be broken down into smaller problems

  * consider the transaction a person might make to a bank
  * ATM Function
    * deposit
    * withdraw
    * check balance
    * transfer
    * card declined

*/

// Lets make an ATM

let balance = 10;
// withdraw
function withdraw(initialBalance, amount) {
  if (initialBalance - amount > 0) {
    initialBalance -= amount;
    console.log("your new balance is " + initialBalance);
  } else {
    console.log("Hey you're broke!");
  }
  return initialBalance;
}

// console.log(withdraw(balance, 5));
// console.log(withdraw(balance, 20));

//deposit
function deposit(initialBalance, amount) {
  // console.log(initialBalance, amount); //  10 21
  //
  if (amount >= 10000) {
    console.log("Please see a teller");
  } else {
    initialBalance += amount;
    console.log("your new balance is " + initialBalance);
  }
  return initialBalance;
}

// console.log(deposit(balance, 21));
// console.log(deposit(balance, 12000));

// sub problem
// handle transaction
function transaction(type, amount) {
  // console.log([1,2,3].includes(3));

  if (type === "withdraw") {
    balance = withdraw(balance, amount);
  } else if (type === "deposit") {
    balance = deposit(balance, amount);
  } else {
    console.log('no valid transaction')
  }
  return balance;
}

console.log(transaction("withdraw", 4));
console.log(transaction('deposit', 40));
console.log(transaction('deposit', 400));
console.log(transaction("withdraw", 46));
console.log(transaction('sadfasdfsdf',232323))


// console.log('hello');
// console['log']('hello')
