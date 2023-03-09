/*



  What does it mean for javascript to be a single threaded language?
  - It only executes one command at a time
  - any instance during the program, only one command is being executed
  - we say this with the call stack, can only process one function/task at a time
  - the current command/the function as the top of the call stack will run to full completion, before the next event is handled


  What is multithreaded?
  - multiple commands be processed a time
  - python

  Synchronous vs Asynchronous code

  Synchronous code
  - inherit order among the commands that guarantee the order of execution
  - we predict the order of the code
  - block the call stack



*/

//synchronous code
//we can predict the order of this code
let foo2 = function () {
  console.log("two");
};

// console.log('one');
// foo2();
// console.log('three');
//one => two => three

/*


  Asynchronous code
  - no guaranteed order
  - does not block the execution of the call stack


  Why do we need async code?
  - requesting info from an backend database/API, don't know when info will be received
  - user unpredictability
  - more dynamic websites, allowing users to do more things at once


*/

//async code
console.log("first");

setTimeout(() => {
  console.log("second");
}, 0);

setTimeout(() => {
  console.log("third");
}, 2000);

console.log('fourth')
console.log('fifth')
//first => fourth =>  second => third
/*


  Event Loop
  - Check if the call stack is empty, if it is we can move the task as the front of the message queue to the call task
  - consists of the call stack and the message queue

  Call Stack!
  - tracks the current task in progress
  - last in first out, first in last out
  - ex: stack of plates
  - add to stack - pushing
  - remove the the stack - popping
  - stack structure

  Message queue!
  - tracks the current task/function that cannot be executed at the moment
  - asynchronous code
  - first in first out, last in last out
  - add to back - enqueue
  - remove from the front - dequeue
  - queue structure

  *That only one task can be performed at a time because js because its a single threaded language

  async/await
  

*/
