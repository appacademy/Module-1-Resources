/*



  What does it mean for Javascript to be a single threaded language?
    * Meaning that at any given time, only one command is being executed.
    * The current task will run to full completion before the next task is handled

  What is multithreaded?
    * multiple commands at the same time
    * python

  Synchronous code vs Asynchronous code


  What is Synchronous code?
    * Run line by line
    * commands execute one after another
    * code that runs in a predictable
    * everything that weve written up to this point
      * Sync code gets sent to the call stack


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

   What is Asynchronous code?
    * No guaranteed order
    * Asynchronous code is sent to the message queue
    * non blocking - does not block the execution of the call stack
    * wont run until the call stack is empty

   Why we do we need async code?
    * User are unpredictable
      * they spam button clicks
      * handle network/connection
    * To handle certain events
    * Fetching data from an api
      * we need to wait for the data to be retrieved before trying to render
    * fetching data from a database

*/

// console.log("first");

// setTimeout(() => {
//   console.log("second");
// }, 0);

// setTimeout(() => {
//   console.log("third");
// }, 0);

// for(let i = 0; i < 20; i++){
//   console.log("fourth");
// }

// first -> fourth -> second -> third

/*

  What is the Event Loop
    * Consists of the call stack and the message queue
    * Event loop checks if the call stack is empty; if it is it'll will dequeue any task within the message queue and push it on to the stack
    * keep tabs on the call stack and message queue to decide what event to handle next

  Call stack - track the current task in progress
    * synchronous task
    * last in first out - first in last out order
      * ex: stack of plates
    * Add to stack - push
    * Remove from the stack - pop
    * stack structure

  Message Queue - keep track of task that cannot be executed at the moment
    * asynchronous task
    * first in first out - last in last out order
      * ex: standing in line
    * add to back - enqueue
    * remove from front - dequeue
    * queue structure

  * Task can only be perform one at a time
  * JS is a single threaded language

  NodeApi/Web Api - built using C interacting with API

*/

/*


  setTimeout

  What is a setTimeout?
    * The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
    * Syntax
      * setTimeout( callbackFunction, delayInMilliseconds, param1, param2, paramN )

    ! If you want to convert from millisecond to seconds
      * just divide by a thousand
        * ex: 5000ms -> 5s

  What does a setTimeout return?
    * The returned timeoutID is a positive integer value which identifies the timer created by the call to setTimeout().
      * This value can be passed to clearTimeout() to cancel the timeout.

*/

// Show global object and all its methods
// console.log(global);

// setTimeout is a method on the global object
// we can access it like so
// but the developers have made it easy for use and we dont need to key into the global object

// * after 5 seconds call the hello function
function hello() {
  console.log("hello");
}

// global.setTimeout(hello, 5000);

// after 1 second i want to pass to the console.log the argument sup
// setTimeout(console.log, 1000, 'sup');

// example w/o args
function time() {
  console.log("time is up");
}

// setTimeout( callbackFunction, delayInMilliseconds, param1, param2, paramN )
// setTimeout(time, 4000);


// example w args
function sayHi(name1, name2) {
  console.log('hello ' + name1 + ' and ' + name2);
}

// * passing variable holding a function
// setTimeout( callbackFunction, delayInMilliseconds, param1, param2, paramN )
setTimeout(sayHi, 3000, 'brandon', 'anthony');// hello brandon and anthony

// * anon callback
setTimeout((name1, name2) => {
  console.log('hello ' + name1 + ' and ' + name2);
}, 4000, 'charles', 'trevor');


// * make sure when passing arguments to a setTimeout you are either passing a function name or anonymous function itself
// * examples above

// ! dont pass a invoked function to a setTimeout
// *  that would be passing the return value of a function to a callback
// setTimeout(sayHi(), 3000, 'brandon', 'anthony');
// [ERR_INVALID_CALLBACK]: Callback must be a function. Received undefined

// clearTimeout
// * this will prvent the function from running at all

let timer = setTimeout((name) => {
  console.log('hello ' + name);
},1000, 'mochi')

// ! we can use this timer variable which holds a timer object to prevent to code from running
console.log(timer);// the setTimeout is not called
