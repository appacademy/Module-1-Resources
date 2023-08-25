/*

      * Node GitHub Repo: https://github.com/libuv/libuv

      * https://nodejs.org/en/docs/guides/timers-in-node/
      * The node api since all the methods are available globally to emulate browser JavaScript API.

      * https://gist.github.com/thinker3197/473ea38daaec4f6b5d7783e0ffc57a21

      * c++ api like threads, file systems

      * setTimeout() can be used to schedule code execution after a designated amount of milliseconds. This function is similar to window.setTimeout() from the browser JavaScript API, however a string of code cannot be passed to be executed.

*/

/*

  What does it mean for javascript to be a single threaded language?
    * Any instance during the program, only one task is being executed!
    * The current task will run to full completion, before the next task is handled

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

console.log("one");
synchronous();
console.log("three");

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
*/

console.log("first");

// This does not block the execution of the call stack
// * Because async code is sent to the message queue
setTimeout(() => {
  console.log("third");
}, 5000);

setTimeout(() => {
  console.log("second");
}, 0);

console.log("third");
// first => third => second
// * not what we expect

/*

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

/*

  setTimeout

  What is a setTimeout?
    * The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
    * setTimeout(callbackFunction, delayInMilliseconds, param1, param2);
    * you can pass anon callback to a setTimeout

  What does a setTimeout return?
    * The returned timeoutID is a positive integer value which identifies the timer created by the call to setTimeout(). This value can be passed to clearTimeout() to cancel the timeout

*/

console.log(global); // shows global object

// global. is a method of the global object!
global.setTimeout(hello, 5000); // waits 5 seconds then prints "hello!"

// example passing a console.log
setTimeout(console.log, 1000, "sup");

// example w/o args
function time() {
  console.log("time is up");
}

setTimeout(time, 1000);

// example w args
function sayHi(name1, name2) {
  console.log(`hello ${name1} and ${name2}`);
}

setTimeout(sayHi, 2000, "brandon", "anthony");

// clearTimeout
// * this will prevent the function from running at all
let name = "brandon";

// timer variable holds a timer id object
let timer = setTimeout(() => {
  console.log(`hello ${name}`);
}, 1000);

// clearTimeout(timer)

/*

  Why do foo and bar occur after the specific time we asked them to run?
    * async code is stored in the message queue

  Why does doesn't baz have to enter the message queue?
    * it is not async

  What prints to the console in order?

  something slow done
  bark
  bazaar
  food

*/

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
// * sync code blocks the call stack from emptying
// * which means async code must wait for the sync code to complete

//recursion example
//not actually recursing can recurse with async code
//you can if you use async/await keyword will learn down the road
//how can you populate call stack if async code goes straight the node api/message queue

function delayedPrinter(delaysArr) {
  if (!delays.length) return;

  const currentDelay = delaysArr.shift();

  console.log(currentDelay);

  // setTimeout(callbackFunction, delayInMilliseconds, param1)
  setTimeout(delayedPrinter, currentDelay, delaysArr);

  // * alt way
  // setTimeout(function () {
  //   delayedPrinter();
  // }, delaysArr);
}

const delaysArr = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];

delayedPrinter(delaysArr);

// setTimeout with iteration
// * this wont work
// * for each doesn't care about when the setTimeout is sent to the node api
function delayedPrinter(delays) {
  delays.forEach((delay) => {
    setTimeout(
      () => {
        console.log(`Waiting for ${delay}ms`);
      },
      delay
    );
  });
}


// This works
// * Adding a buffer so all the delays are sent to the node api at the appropriate time
function delayedPrinter(delays) {
  let totalDelay = 0;// added

  delays.forEach((delay) => {
    totalDelay += delay;// added

    setTimeout(() => {
      console.log(`Waiting for ${delay}ms`);
    }, totalDelay);// change to totalDelay
    // delay)
  });

}


/*

  What is setInterval!
    * The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call
    * Very similar to setTimeout
    * Takes in the same args
    * setInterval(callbackfFn, delayInMilliseconds, param1, param2);
    * executes a function repeatedly after specified delay

    What does a setInterval return?
    * The returned intervalID is a numeric, non-zero value which identifies the timer created by the call to setInterval(); this value can be passed to clearInterval() to cancel the interval.

*/

// * execute the foo function every 1 second passing in these arguments
function foo(food1, food2) {
  console.log(` I ate ${food1} and ${food2}`);
}

setInterval(foo, 1000, "chicken", "pizza");


// * can use the TimerId returned from setInterval to cancel the timer
// * similar to setTimeout
function timeMaker(count) {
  // store timer id in a variable
  let timer = setInterval(() => {
    count--;
    console.log(count);
    if (count === 0) {
      // pass timer id to clearInterval to stop when count hits 0
      return clearInterval(timer);
    }
  }, 1000);
}

timeMaker(5);

