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
