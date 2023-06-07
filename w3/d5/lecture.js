/*


  ? what does it mean for javascript to be a single threaded language?
  - top to bottom, execute line by line
  - only performs one task(functions) at a time
  - call stack is fifo
  - A task must completely, before moving on the next task
  - the current function at the top will run to full completion before the next even is handled, unless a function is called from within that function, that that function/task must first complete
  - one cook in kitchen

  ? What is a multithreaded language?
  - multiple chef in the kitchen
  - perform multiple task simultaneously
  - python

  Synchronous code vs asynchronous code

  Synchronous code
  - all the code we've done up to this point
  - line by line
  - guarantee order of execution
  - sync code goes to the call stack
  - we can predict the order of the code
*/


//synchronous code
let foo2 = function(){
  console.log('two');
}

// console.log('one');
// foo2();
// console.log('three');
//one => two => three


/*

  Asynchronous code
  - no guaranteed order
  - async codes go to the message queue
  - non-blocking - does not block the execution of the call stack

  ? Why do we need async code?
  - Improves user experience, we can handle unpredictably
  - handle network latency
  - the user is clicking all over the place,
  - fetching data from api
  - more responsive - perform other tas at the same time, we don't block the call stack
  - JS is dynamic/dynamic sites

*/

//async code does not block the call stack
//async code is sent to the message queue

console.log('first');

setTimeout(() => console.log('second'), 1000);
setTimeout(() => console.log('third'), 0);

console.log('fourth');
// First, fourth, third, second
// not what we expect!
/*
  Event Loop
  - check if the call stack is empty, if it is we can move the task at the front of the message queue to the call stack
  - consist of call stack and message queue

  - Call stack!
  - stack structure
  - tracks the current synchronous task in progress
  - last in first out, first in last out
  - ex: stack of plates
  - add to stack - pushing
  - removing from the stack - popping

  - Message queue
  - queue structure
  - tracks current async task
  - first in first out, last in last out
  - ex: in line for food
  - add to back - enqueue
  - remove from the front - dequeue

  * That only one task can be performed at a time because js is a single threaded language
*/
