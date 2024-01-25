/*

  What does it mean for javascript to be a single threaded language?
    * Any instance during the program, only one task is being executed!
    * The current task will run to full completion, before the next task is handled


  No. NodeJs is not single threaded.
  The NodeJs event loop operates on a single thread yes,
  but the async blocking operations are delegated to separate
  worker threads.


  What is multithreaded?
    * multiple commands can be processed at the same time
    * python

  Synchronous vs Asynchronous code

  What is Synchronous code?
    * Runs line by line
    * Commands executed one after another, only one command a time
    * Code that has inherit order
    * Order of execution is guaranteed

*/

// Synchronous code
// * We can predict the order of this code!

function synchronous() {
  console.log("two");
}

// console.log("one");
// synchronous();
// console.log("three");

// one => two => three

/*
  Asynchronous code?
    * no guaranteed order
    * does not block the execution of the call stack

  Why do we need async code?
    * user clicks a button,
    * have to send a api call
    * perform two things at once,
    * interact with the site we cant predict
      * users have short attention spans
    * more dynamic websites, allowing people to do more things at once
    * the environment in which we run our application is full of uncertainties

  What is the Event Loop?
    * Consists of the call stack and the message queue
    * Checking if the call stack is empty, if it is we can move task from the message queue to the call stack

  Call stack - the track the current task in progress
    * Synchronous task
    * Last in first out - first in last out
       * ex: stack of plates
    * Add to stack - pushing
    * Removing from the stack - popping
    * Stack structure

  Message Queue - keep tracks of task that cannot be executed at the moment
    * Asynchronous task
    * First in first out - last in last out
      * ex: standing in line
    * add to back - enqueue
    * remove from the front - dequeue
    * queue structure

    * Task can only be performed one at a time because?
    * JS is a single threaded language!

    NodeApi/Web api -  Built using C, interacting with API
      * DOM
      * ajax
      * setTimeout
*/

// console.log("first");

// // This does not block the execution of the call stack
// // * Because async code is sent to the message queue
// setTimeout(() => {
//   console.log("second");
// }, 0);

// setTimeout(() => {
//   console.log("third");
// }, 0);

// console.log("fourth");
// first => fourth => second => third
// * not what we expect

// console.log(global)

/*

  setTimeout

  What is a setTimeout?
    * The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
    * setTimeout(callbackFunction, delayInMilliseconds, param1, param2);
    * you can pass anon callback to a setTimeout

  What does a setTimeout return?
    * The returned timeoutID is a positive integer value which identifies the timer created by the call to setTimeout(). This value can be passed to clearTimeout() to cancel the timeout

*/

// global.setTimeout(console.log, 3000, 'hello world')
// convert from millisecond to seconds divide by 1000

// setTimeout(console.log, 3000, 'hello world')

// setTimeout(() => console.log('anon function'), 4000)

function timesUp(name1, name2) {
  console.log(`hello ${name1} and ${name2}`);
}

// setTimeout(timesUp, 3000, "brandon", "maica");

// clear timeout

// let timerId = setTimeout((name) => {
//   console.log(`hello ${name}`)
// }, 1000, 'Alexi')

// console.log(timerId);
// clearTimeout(timerId);

// fib
let count = 0;
function somethingSlow(n, memo = {}) {
  count++;
  if (n === 1 || n === 2) return 1;
  // console.log('memo =>',memo)
  if (memo[n]) return memo[n];
  memo[n] = somethingSlow(n - 1, memo) + somethingSlow(n - 2, memo);
  return memo[n];
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

// setTimeout(foo, 1500);
// setTimeout(bar, 1000);
// // * tree recursion
console.log(somethingSlow(100)); // 12586269025
console.log(count)
// Predict the output?
// dont worry what fib prints?
//  701408733 -> bark -> bazaar -> food

function delayedPrinter(delaysArr) {
  if (!delaysArr.length) return;

  const currentDelay = delaysArr.shift();
  console.log(currentDelay);

  // delayedPrinter(delaysArr);
  setTimeout(delayedPrinter, currentDelay, delaysArr);
}

// const delaysArr = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];
// delayedPrinter(delaysArr)

// function delayedPrinterIteration(delaysArr) {

//    let totalDelay = 0;
//     delaysArr.forEach((delay) => {
//       totalDelay += delay;
//       setTimeout(console.log, totalDelay, `Waiting for ${delay}ms`)
//     })
// }

// const delaysArr = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];
// delayedPrinterIteration(delaysArr)
