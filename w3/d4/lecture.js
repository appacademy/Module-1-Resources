/*



  What does it mean for javascript to be a single threaded language?
    * Any instance during the program, only one task is being executed!
    * The current task will run to full completion, before the next task is handled

  What is multithreaded?
    * python
    * multiple commands can processed at the same time

  Synchronous vs Asynchronous code

  What is Synchronous code?
    * Runs line by line
    * Commands executed one after another, only one command a time
    * Code that has inherit order
    * Order of execution is guaranteed


*/

// Synchronous code
function synchronous() {
  console.log("two");
}

// console.log('one');
// synchronous();
// console.log('three');
// one -> two -> three

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
*/
// async code
// console.log('first');

// setTimeout(() => {
//   console.log('second');
// }, 5000);

// setTimeout(() => {
//   console.log('third')
// }, 0);

// console.log('fourth');
// first -> fourth -> third -> second

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

// global.setTimeout(console.log, 2000, 'hello world');

// setTimeout(console.log, 2000, 'hello world');

function time() {
  console.log("time is up");
}

// Convert from milliseconds to seconds you divide by 1000
// setTimeout(time, 5000);

// setTimeout(() => {
//   console.log("time is up");
// }, 4000);

// setTimeout(function () {
//   console.log("time is up");
// }, 3000);

function sayHi(name1, name2) {
  console.log(`hello ${name1} and ${name2}`);
}

// setTimeout(sayHi, 3000, 'maica', 'charles');

// setTimeout((name1, name2) => console.log(`hello ${name1} and ${name2}`), 3000, 'brandon', 'trevor');

// clearTimeout
// * this will prevent the function from running at all

// let timer = setTimeout(
//   (name) => {
//     console.log(`hello ${name}`);
//   },
//   2000,
//   "maica"
// );

// clearTimeout(timer);

// console.log(timer);

// fib
function somethingSlow(n) {
  // console.log(n);
  if (n === 1 || n === 2) return 1;

  return somethingSlow(n - 1) + somethingSlow(n - 2);
}

function foo() {
  console.log("food");
}

function bar() {
  console.log("bark");
  // baz();

  setTimeout(baz, 2000);
}

function baz() {
  console.log("bazaar");
}

// setTimeout(foo, 1500);
// setTimeout(bar, 1000);
// // * tree recursion
// console.log(somethingSlow(44));
// // Try to predict the output? dont worry about something slow will return
// console.log(somethingSlow(44));
count = 0;
function delayedPrinter(delaysArr) {
  debugger;
  // if (!delaysArr.length) return;
  count++;
  debugger;
  console.log(count);
  const currentDelay = delaysArr.shift();
  console.log(currentDelay);

  //  delayedPrinter(delaysArr)
  setTimeout(delayedPrinter, currentDelay, delaysArr);
}

const delaysArr = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];

// delayedPrinter(delaysArr);

function delayedPrinter2(delaysArr) {
  let totalDelay = 0;

  delaysArr.forEach((delay) => {
    totalDelay += delay;
    setTimeout(console.log, totalDelay, `Waiting for ${delay}ms`);
  });

}

// console.log(delayedPrinter2(delaysArr));
