/*




  ? What does it mean for JavaScript to be a single thread language?
  - to be executed in order
  - only perform one task(function) at a time
  - top to bottom, one line at a time
  - Js using a call stack to track tasks
  - A task must complete before moving on the next task
  - The current function/task at the top of the call stack will run to full completion before the next task is handled
  - ex: One cook in kitchen

  ? What is a multithread language?
  - ex: multiple cooks in the kitchen
  - perform multiple task simultaneously
  - python

  Synchronous code vs asynchronous code

  Synchronous code
  - all the code we've done up to this point
  - line by line
  - guaranteed order of execution
  - synchronous code goes to the call stack
  - we can predict the order of the code

 */

//synchronous code
let foo2 = function () {
  console.log("two");
};

// console.log('one');
// foo2();
// console.log('three');
//one -> two -> three

/*

 Asynchronous code
 - no guaranteed order
 - async code goes to the message queue
 - non-blocking - does not block the execution of the call stack

 ? Why we do need async code?
 - Timed prompts -  execute code after a specific amount of time
 - User interaction
  * can be very unpredictable
  * handle network latency/connection issues
  * the user is clicking all over the place
 - Fetching data from an api
 - Fetching data from a database
  * we want to wait for the data to be fetched, before rendering the data on the screen
 - more responsive - perform other task at the same time, we don't block the call stack
 - JS dynamic sites

*/

// async code does not block the call stack
// async code is sent to the message queue

// console.log('first');

// setTimeout(() => console.log('second'), 0);
// setTimeout(() => console.log('third'), 0);

// console.log('fourth');
// first -> fourth -> third -> second

/*

  Event loop
  - Check if the call stack is empty, if it is we can move the task/function at the front of the message queue to the call stack
  - consist of the call stack and the message queue

  Call stack
  - stack structure
  - tracks the current synchronous task in progress
  - last in first out; first in last out
    *order in which function leave/enter the call stack
    *ex: stack of plates
  - Add to stack - push
  - remove from the stack - pop

  Message queue
  - queue structure
  - tracks the current asynchronous task
  - first in first out, last in last out
    *ex: in line for food
  - add to back - enqueue
  - remove from the front - dequeue

  * That only one task can be performed at a time
*/

/*

  setTimeout
  - The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

  - setTimeout(callbackFunc, delayInMilliseconds, param1, param2, paramN)
    * pass the callback straight into the setTimeout as a argument

  - setTimeout(() -> cb(), delayInMilliseconds, param1, param2, paramN)
   * you can pass anon callback to a setTimeout

  * got from millie to second - divide by 1000
  * 1000 milliseconds = 1 second

*/

let sayHello = function () {
  console.log("hello");
};

// we want to run the sayHello function after 2 seconds
// global.setTimeout(sayHello, 2000)

// console.log(global)

// is we do not have use global.

// i want to run a console.log after 5 seconds passing the argument
// 'sup'
// console.log is a function
// setTimeout(console.log, 5000, 'sup')

//function w/o args

function time() {
  console.log("time is up");
}

// setTimeout(time, 3000);

//function w args
function sayHi(name) {
  console.log(`Hey ${name}`);
}

// setTimeout(sayHi, 2000, 'brandon');

// pass an anon callback syntax
// setTimeout((name) => console.log(`hey ${name}`), 2000, 'anthony' );

// clearTimeout
// clearTimeout takes in a a timer object
// the return value of setTimeout is a timer object
// were store the return value in a variable so we can use it to clear the timeout

// let timeoutObj = setTimeout((name) => {
//   console.log(`hey ${name}`);
// }, 1000, 'charles');

// console.log(timeoutObj);

// prevent/stop the setTimeout from running
// clearTimeout(timeoutObj);//the setTimeout get ran




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

// setTimeout(foo, 1500);
// setTimeout(bar, 1000);
// console.log(somethingSlow(65));//sync code is blocking the call stack from allowing the async code to enter from the message queue

//? try to predict the output??
// big number -> bark -> bazaar -> food



// using setTimeout with recursion
// take in a delays arr = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100]
// goal: print the number, but use the number as the delay
// ? Is this actually recursing?
// this is not recursing
// pseudo recursion
function delayedPrinter(delaysArr) {

  if(!delaysArr.length) return;

  const current = delaysArr.shift();
  console.log(current);

  // return delayedPrinter(delaysArr);
  // setTimeout(callbackFunc, delayInMilliseconds, param1, param2, paramN)
  setTimeout(delayedPrinter, current, delaysArr);

};

let delaysArr = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100]
// delayedPrinter(delaysArr)

// the loop does not care about the order in which we send these values to the node api
// all it cares about is when the timer goes off, so if 1000 and 100 are sent at the same time, 100 would exit first, therefore would be printed before 1000
function delayedPrinter2(delaysArr) {
  let totalDelay = 0;
  delaysArr.forEach(delay => {
    totalDelay += delay;

    setTimeout(console.log, totalDelay, delay);

  })
}


// delayedPrinter2(delaysArr);


