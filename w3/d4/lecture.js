/*





  What does it mean for javascript to be a single threaded language?
    * Only one command/task/function can be executed at a time
    * The current task with run to full completion before the next task is handled

  What is a multithreaded language?
    * multiple commands can be processed at the same time
    * python

  Synchronous vs asynchronous code

  What is synchronous code?
    * run line by line
    * guaranteed order of execution
    * commands ran one after another running one at a time

*/

// Synchronous code

function synchronous() {
  console.log("two");
}

// console.log('one');
// synchronous();
// console.log('three');

// one => two => three

/*


  What is asynchronous code?
    * no guaranteed order of execution
    * does NOT block the execution of the call stack

  Why do we need async code?
    * perform two things at once
    * account for user input
     * users have short attention span
    * Prevents websites from being non responsive
    * have to send an api call
      * retrieving user information
    * more dynamic websites
    * the environment in which we run out application is full of uncertainty

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

// this does not block the execution of the call stack
// *  because async code is sent to the message queue

// setTimeout(() => {
//   console.log("first")
// }, 0);

// setTimeout(() => {
//   console.log('second');
// }, 2000);

// console.log('third');

/*

  setTimeout

  What is a setTimeout?
    * The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
    * setTimeout(callbackFunction, delayInMilliseconds, param1, param2);
    * you can pass anon callback to a setTimeout

  What does a setTimeout return?
    * The returned timeoutID is a positive integer value which identifies the timer created by the call to setTimeout(). This value can be passed to clearTimeout() to cancel the timeout

*/

// console.log(global);

// setTimeout(console.log, 2000, 'hello');

function time() {
  console.log("time is up");
}

// setTimeout(time, 5000)

function sayHi(name1, name2) {
  console.log(`hello ${name1} and ${name2}`);
}

// setTimeout(sayHi, 2000, "brandon", "maica");

// setTimeout(
//   (name1, name2) => console.log(`hello ${name1} and ${name2}`),
//   2000,
//   "brandon",
//   "maica"
// );

// clear timeout
// *  this will prevent the function from running at all

// let timer = setTimeout(
//   (name) => {
//     console.log("hello " + name);
//   },
//   1000,
//   "charles"
// );

// the timer variable holds the time object
// console.log(timer);
// this prevents the setTimeout for running
// clearTimeout(timer);




// fib
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


setTimeout(foo, 1500);
setTimeout(bar, 1000);
// * tree recursion
console.log(somethingSlow(44));
// Predict the output of the code????
