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
