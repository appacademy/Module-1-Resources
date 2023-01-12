/*


  What does it mean for javascript to be single threaded?
    - it only does one thing a time
    - any instance during the program, only one command is being executed
    - the current command will run to completion before the next event is handled

  What is multithreaded?
    - multiple commands can be processed at a time
    - Python


  Synchronous vs Asynchronous code

  Synchronous code
    - linear
    - can predict the order in which code will execute
    - commands execute one after another
    - code that inherit order
*/


//example of Synchronous code
//one => two => three
let foo2 = function() {
  console.log('two');
};

// console.log('one');
// foo2();
// console.log('three');



/*


  Asynchronous code
    - no guaranteed order
    - does not block the execution of the call stack

  Why do we need async code?
    - user clicks a button
    - have to send an api call
    - perform two things at one
    - interact with the site in ways we cant predict
    - users have short attention spans, slow internet?
    - more dynamic websites

*/

//async example
//because code is async code is sent to the message queue and doest not block are console.logs
// console.log('first');

setTimeout(() => {
  console.log('second');
}, 0)

setTimeout(() => {
  console.log('third')
}, 0)

// console.log('fourth');
// console.log('fifth')


/*

  Event Loop!
    - check if the call stack is empty, if it is when we can move the task from the message queue into the call stack
    - consists message queue and the call stack

    Call stack -  the track the current task in progress
      - synchronous
      - last in first out - first in last out
      - stack of plates
      - add to stack - push
      - remove from a stack - pop

    Message Queue - keep track of task that cannot be executed at the moment
      - asynchronous
      - first in first out - last in last out
      - add to back - enqueue
      - remove from the front - dequeue
      - queue structure
      * that task can only be performed one at a time because js is single threaded

*/
