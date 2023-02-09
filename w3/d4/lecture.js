/*



  What does it mean for javascript to be a single threaded language?
    - It only executes one command at a time
    - any instance during the program, only one command is being executed
    - the current command will run to full completion, before the next event is handled

  What is multithreaded?
    - multiple commands can be processed at a time
    - python

  Synchronous vs asynchronous

  Synchronous code
    - runs line by line
    - commands executed one after another
    - code that inherit order
    - we can predict the order of code
    - block the call stack

*/


//synchronous code
//we can look at this, and predict what it will output
let foo2 = function() {
  console.log('two');
}

// console.log('one');
// foo2();
// console.log('three');
//one => two => three

/*


  Asynchronous code
    - No guarantee order
    - does not block the call stack
    - async code is sent to the message queue

  What do we need async code?
    - wait for user input
    - bad connection
    - handle multiple operations that run independently and do not block or wait for each other to finish
    - api calls
    - users are unpredictable
      - users have short attention spans
    - more dynamic website
    - the environment in which we run our applications is full of uncertainty

*/

//async code
console.log('first');

setTimeout(() => {
  console.log('second');
}, 0)

setTimeout(() => {
  console.log('fourth');
},0)

console.log('third');

//first third second
//because setTimeout is async, it does not block the call stack
//async code is sent to the message queue

/*

  Event Loop
    - Check if the call stack is empty, if it is we can move task from the message queue to the call stack
    - consists of the message queue and the call stack

    Call stack! - track the current task in progress
      - synchronous code
      - last in first out, first in last out
      - ex: stack of plates
      - add to stack, pushing
      - removing from the stack, popping
      - stack structure

    Message queue - tracks the task that cannot be executed at the moment
      - asynchronous code
      - first in first out, last in last out
      - add to back, enqueue
      - remove from the front, dequeue
      - queue structure

      * that task can only be performed one at a time because js is a single threaded language


 */
