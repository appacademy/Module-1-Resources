/*


  SetTimeout!
    - The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

    - setTimeout(callbackFunc, delayInMilliseconds, param1, param2, paramN);

    - you can pass a anon function to setTimeout

*/

//example with console.log()

// setTimeout(console.log, 2000, 'may the 4th be with you')
//execute the console.log after 2 seconds passing the string

//function w/o args
function time() {
  console.log("time is up");
}

// setTimeout(time, 3000);//milli to seconds / 1000

//example with args
function sayHi(name1, name2) {
  console.log(`hello ${name1} and ${name2}`);
}

// setTimeout(sayHi, 2000, 'luke', 'obi');

//clearTimeout
//this will prevent function from running at all
let name = "brandon";

// let timer = setTimeout(() => {
//   console.log(`hello ${name}`)
// }, 1000);

// console.log(timer);
// clearTimeout(timer);

function somethingSlow(n) {
  if (n === 1 || n === 2) return 1;

  return somethingSlow(n - 1) + somethingSlow(n - 2);
}

function foo() {
  console.log("food");
}

function bar() {
  console.log("bark");
  baz();
}

function baz() {
  console.log("bazaar");
}

// setTimeout(foo, 1000);
// setTimeout(bar, 1000);
// //tree recursion
// console.log(somethingSlow(44)); //think about what this will print out? and why?
// (() => console.log('hello'))();- fib -> hello -> bark -> bazaar -> food
//fib blocked the call stack, its sync, we had to wait for to finish
//fib -> bark -> bazaar -> food

//recursion - using current value as delay
//is this a recursive function?
//nope! not recursing, call stack is not populated, callbacks sent straight to node api then message queue to repeat the process
function delayedPrinter(delaysArr) {
  if (!delaysArr.length) return; //base case- stop when there is no length

  let currentDelay = delaysArr.shift(); //recursive step
  console.log(currentDelay);
  //setTimeout(callbackFunction, delayInMilliseconds, param1)
  setTimeout(delayedPrinter, currentDelay, delaysArr);
}

// delayedPrinter(delaysArr);




const delaysArr = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];

function delayedPrinter2(delaysArr){
  let totalDelay = 0;
  delaysArr.forEach((delay) => {
    totalDelay += delay;
    setTimeout(() => {
      console.log(`waiting for ${delay}`)
    }, totalDelay);
  })
};
//for loop does not care about the settimeout and delays
//all the cb/event pairs enter the node api at the same time

// delayedPrinter2(delaysArr);
