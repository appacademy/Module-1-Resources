/*

  Helper Functions!

  ? What is a helper function?
   - a function that you defined can reuse in another function to solve a sub problem
   - a function called within another function


  ? Why would helper functions be useful?
   - helps readable
   - hide implementation, abstract
   - compartmentalize, helps with debugging!
   - create reusable code
   - decompose problems
   - break problems down to more manageable chunks!

   Sometimes we'll need to solve problems that can be broken down into smaller problems.
    Consider the transactions a person may make with their bank account.
    Rather than encapsulating all of the activities within a single
    function, we can instead write some helper functions to handle individual
    actions.

    Example: ATM Transactions

    Basic functionalities
    - withdrawing
    - deposit
    - check balance

    - go ahead create a main transaction function to handle what helper function use

*/

//ATM
// balance is in global scope, so we dont have to pass from function,
//global variable all functions all have access too
let balance = 10;

//== check just value
// === check value and data type
// console.log(balance);
// sub problem of handing withdraws
function withdraw(balance, amount) {
  // console.log(balance, amount);
  // ? what if my user, inputs something that is not a number?
  // edge case to handle not taking a in non number
  if (typeof balance !== "number" || typeof amount !== "number")
    return "Thats not money!";
  // ? when you return in a function, it exits the function

  // ? do we have the money to withdraw?
  if (balance >= amount) {
    console.log("Withdrawing: " + amount);
    balance -= amount; // initial = initial - 8
  } else {
    // what if we don't have enough money
    console.log("You're broke!");
  }
  return balance;
}

// console.log(withdraw(10, 2));// 8
// console.log(withdraw(10, 15));
// console.log(withdraw('asd', 2));

// sub function that handles deposits
function deposit(balance, amount) {
  // console.log(balance, amount);// ! use console.logs!
  if (typeof balance !== "number" || typeof amount !== "number")
    return "Thats not money!";

  // ? what if the bank has a limit in which you can deposit
  if (amount < 10000) {
    console.log("Depositing: " + amount);
    balance += amount;
  } else {
    console.log(
      "Unable to deposit, please wait while we review your transaction"
    );
  }

  return balance;
}

// console.log('log the return value of deposit',deposit(10, 1000));// 1010
// console.log(deposit(10, 20000));//Unable to deposit, please wait while we review your transaction
// console.log(deposit('asd'))

// helper func to log the balance
function checkBalance() {
  console.log("your balance is " + balance);
}

// console.log(checkBalance());

// main function
// ? what function is supposed to do?
// facilitate the helper function, to determine which helper function to use
function transaction(type, amount) {
  // ? how can we decide what transaction to use?
  // we can check the type/action, and decide what helper function to call

  if (type === "deposit") {
    // console.log('the return value of deposit called from transaction',deposit(balance, amount));
    // is reassign the balance to the return of deposit
    // a function evaluates to its return
    balance = deposit(balance, amount);
    // console.log('!!!!!!',balance)
  } else if (type === "withdraw") {
    balance = withdraw(balance, amount);
    // console.log('return value of calling balance from withdraw',balance);
  } else if (type === "check balance") {
    checkBalance(); //were not using the return, so only call
  } else {
    console.log("Not a valid transaction type");
  }

  return "Balance: " + balance;
}

// console.log(transaction('deposit', 10 ));
// console.log(transaction('withdraw', 5));
// console.log('return of transactions',transaction('check balance'));

// let brandonTransaction = transaction('deposit', 10);
// console.log('return of brandonTransaction',brandonTransaction);

/*


  Polya's
  Goal: Build a function that utilize helper function to solve some math problems!
  * Understand the problem!
  - Input: a string(operation) and two numbers => addition 2 and 8    functionName('addition', 12, 12)
  - Output: the result of calling the operation using the two numbers => 10
  * will likely use if statements
  * upon meeting a condition, invoke the proper helper functions according to the operation
  * Valid operations
  *   - addition
  *   - subtraction
  *   - multiplication
  *   - division

  ! console.log everything!!!!
  ! start with helpers?
  ! add to main function -  calculator
*/

//Execute the plan

// add
// can only can be used on function expression
let addition = (num1, num2) => num1 + num2;

//subtraction
//parameters are bananable, can be named anything
function subtraction(banana, apple) {
  // let banana = 90, let apple = 100
  return banana - apple;//-10
}
//division
function division(num1, num2) {
  // console.log(num1, num2, num1 / num2);
  return num1 / num2;
}

// calculator
// main function
function calculator(operator, num1, num2) {
  // let num1 = 90, let num2 = 100
  if (operator === "+") return addition(num1, num2);
  else if (operator === "-") return subtraction(num1, num2);
  else if (operator === "*") return multiplication(num1, num2);
  else if (operator === "/") return division(num1, num2);
  else return "That is not a valid calculations";
}

console.log(calculator("*", 12, 15)); //27
// console.log('look here!',calculator('-', 90, 100));

function multiplication(num1, num2) {
  return num1 * num2;
};

// call stack
// a data structure that handles function calls
// when a function is called it is push up to top of stack
// when a function is returned it is pop from the stack
// js will focus on whatever is at the top of the stack
// first in last out order

// multiplication
// function declaration, can be referenced before they are defined

// console.log(calculator("-", 20, 16)); //4
// console.log(calculator("*", 10, 9)); //90
// console.log(calculator("/", 100, 10)); //10
// console.log(calculator("asdjklfasdfasdf", 100, 10)); // what will happen? => That is not a valid calculations
