/*




  what does it mean for javascript to be a single threaded language?
    - it only does one thing at a time
    - any instance during the program, only one command is being executed!
    - The current command will run to full completion, before the next event is handled

  what is multithreaded?
    - multiple commands can be processed at the same time
    - python

  Synchronous vs asynchronous code

  Synchronous code?
    - runs line by line - its linear
    - Commands executed one after another, only one command a time
    - code that has inherit order
    - order of execution is guaranteed
*/

//synchronous code

let foo2 = function() {
  console.log('two')
};

// console.log('one');
// foo2();
// console.log('three');

//one => two => three


/*

  Asynchronous code?
  - no guaranteed order
  - does not block the execution of the call stack

  Why do we need async code?
    - user clicks a button,
    - have to send a api call
    - perform two things at once,
    - interact with the site we cant predict
      - users have short attention spans
    - more dynamic websites, allowing people to do more things at once
    - the environment in which we run our application is full of uncertainties

*/

console.log('first');

//this does not block the execution of the call stack
//because async code is sent to the message queue
setTimeout(() => {
  console.log('second');
}, 5000);

setTimeout(() => {
  console.log('second 22');
}, 0);


console.log('third')
//first => third => second


/*


  Event Loop! - checking if the call stack is empty, if it is we can move task from the message queue to the call stack
    - consists of the call stack and the message queue

    Call stack -  the track the current task in progress
      - synchronous task
      - Last in first out - first in last out
      - ex: stack of plates
      - add to stack, pushing
      - removing from the stack - popping
      - stack structure

    Message Queue - keep tracks of task that cannot be executed at the moment
      - asynchronous code
      - linear
      - queue structure
      - first in first out - last in last out
      - add to back, enqueue
      - remove from the front - dequeue


      * that task can only be performed one at a time because js is a single threaded language!
*/
