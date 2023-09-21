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

setTimeout(() => {
  console.log("first");
}, 5000);

setTimeout(() => {
  console.log('second');
},0);

console.log('third');
