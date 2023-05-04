/*




  What does it mean for javascript to be a single threaded language?
  - One cook in the kitchen
  - execute line by line
  - one command is processed at a time
  - A task must entirely complete, including all its function calls, before a new task can begin on the call stack
  - we say this with the call stack, can only process one function/task at a time
  - the current command/function at the top of the call stack will to run full completion before the next event is handled

  What is multithreaded?
  -  multi chefs working on different dishes at the same time
  -  python
  -  run multiple commands at the same time

  Synchronous vs Asynchronous code

  Synchronous code
  - all the code we've done up to this point
  - executes in order, line by line
  - order of execution is guaranteed
  - block the call stack
  - we can predict the order of the code

*/

//synchronous code
// we can predict the order of this code

let foo2 = function () {
  console.log("two");
};

// console.log("one");
// foo2();
// console.log("three");
// one -> two -> three

/*

  Asynchronous code
  - no guaranteed order
  - does not block the execution of the call stack

  Why do we need async code?
  - waiting for user input
  - requesting data from a backend database/API, dont know when info will be received
  - user unpredictable as well as there machine and there network
  - dynamic websites! allow users to do more than one thing at once
https://nodejs.org/en/docs/guides/timers-in-node/
https://gist.github.com/thinker3197/473ea38daaec4f6b5d7783e0ffc57a21
*/

// console.log('first');

// setTimeout(() => {
//   console.log('second')
// }, 0);

// setTimeout(() => {
//   console.log('third');
// }, 0);

// console.log('fourth');
//first fourth second third

/*



Event Loop!
- Check if the call stack is empty, if it is we can move the task at the front of the message queue to the call stack
- consist of the call stack and the message queue

Call stack!
- stack structure
- tracks the current task in progress
- last in first out, first in last out
- ex: stack of plates
- add to stack - pushing
- remove from the stack - popping

Message Queue
- queue structure
- tracks the current task/function that cannot be executed at the moment
- asynchronous code
- first in first out, last in last out
- add to back - enqueue
- remove from the front - dequeue

* That only one task/function can be performed at a time because js is single threaded language!

      nodeApi/web api - built using c++
      - DOM
      - ajax
      - setTimeout

*/
