/*



  Helper Functions
  - A function that performs a portion of the task to complete that you can call on later
  - a function called within another function

  - ex:
    main func - will populate an array of prime numbers
    helper func - find the prime numbers itself

  Why helper functions are so useful?
  - Makes code more readable
  - decompose problems, break problems into more manageable chunks
  - helps debug
  - hide implementation, abstract
  - create reusable code
  - decompose problems

  SRP - You want your functions to do one thing and one things - single responsibility

*/


//function expression
//store an anon function in a variable
let myFunc = function(){
  return 'hello from myFunc'
};

// console.log(myFunc);//[Function: myFunc] - myFunc is a variable that holds a function
// console.log(myFunc())//hello from myFunc - a function evaulates to its return value
// we are saying log to the terminal the return value of myFunc


let addTwo = function(num) {
  return num + 2;
};

// console.log(addTwo(10));//12

// console.log('return value of addTwo',addTwo(34));//36
let res = addTwo(34);

// console.log('the return value stored in res variable',res);//36 - because we are storing the return value of a function in variable
let addTwoArray = function(array) {
  let resArr = [];
  // console.log(addTwo(12));//13
  // let test = addTwo(89);
  // console.log(test);//91
  for(let i = 0; i < array.length; i++){
    let number = array[i];
    // console.log('before passing number to helper',number);

    let res = addTwo(number);
    // console.log('after passing number to helper',res);// 3 | 4 | 5
    resArr.push(res);
  }
  return resArr;
}

// console.log('return value of addToArray', addTwoArray([1,2,3]));//[3,4,5]

let capitalize = function(word){
  //let word = 'brandon'
  return word.toUpperCase();
}

// console.log(capitalize('brandon'));

let sayName = function(name){
  //let name = 'brandon'
  // let uppercasedName = capitalize(name);
  return 'HELLO ' + capitalize(name);
  // return 'HELLO ' + uppercasedName;
}

// console.log(sayName('brandon'));//HELLO BRANDON

// draw out the call stack
// a data structure that handles function calls
// when a function is called, it is pushed to the top of this stack
// when a function is returned, it is popped of the stack
// js will focus on whatever is at the top of the stack
// first in last out order
// ex: stack of plates


/*

  ATM Transactions

  Basic functionality
  - withdrawing
  - deposit
  - check balance

*/


let balance = 10;//variable in the global scope! All functions will have access to it

//ATM
//Main functions - transactions
function transactions(type, amount) {
  if(type === 'deposit') {
   balance = deposit(balance, amount);
  } else if(type === 'withdraw') {
  balance = withdraw(balance, amount);
  } else if(type === 'check balance') {
    checkBalance()//all this does is console.log
  } else {
    console.log('Not a valid transaction type')
  };

  return 'Balance: ' + balance;
}

//deposit
console.log(transactions('deposit',100));//110
console.log(transactions('check balance'));//110
//withdraw
console.log(transactions('withdraw', 60));//50
console.log(transactions('check balance'));//110
//check balance
console.log(transactions('check balance'));//50
// console.log(transactions('deposit', 100))


//Withdraw
function withdraw(balance, amount) {//we have a balance, and an amount to withdraw

  if(typeof balance !== 'number' || typeof amount !=='number') {
    return 'Thats not money!'
  };//this will prevent user from submitting something that is not money

  if(balance >= amount) {//check we have to withdraw
    console.log('Withdrawing: ' + amount);
    balance -= amount;//if we do subtract the amount from the balance
  } else {
    console.log('Youre broke!');//if we dont have enough, let them know theyre broke!
  };

  return balance;//return the balance so we can use it our main func
}


// console.log('assdfsdf' - 'asdfas');

// console.log(withdraw(10, 2));//8
// console.log(withdraw(1, 1223));
// console.log(withdraw('assdfsdf', 'asdfas'));

//Deposit
function deposit(balance, amount) {

  if(typeof balance !== 'number' || typeof amount !=='number') {
    return 'Thats not money!'
  };//edge case to handle to non money input

  if(amount < 10000) {//make sure theyre not doing something illegal
    console.log('Deposit: ' + amount);
    balance += amount;//add the amount to the balance
  } else {
    console.log('Please wait while we review your transaction!');//if something suspicious is going on
  }

  return balance;//we use this return in the main func!
}

// console.log(deposit(10, 1000));//1010
// console.log(deposit(10, 100000));//Please wait while we review your transaction!
// console.log(deposit('please', 'im broke'));//Thats not money!

//type of return a string we used to compare
// console.log(typeof 12);
// console.log(typeof 'string')
// console.log(typeof true)


//check balance
function checkBalance(){
  console.log('Your balance is ' + balance);
}
checkBalance()
