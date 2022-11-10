/*



What does it mean by javacsript is a single threaded language?
  - Can only do one thing at a time
  - any instance during a program, only one command is being excuted
  - the current command will run to full completion, before the the next event is handled
What is multithreaded?
  - multiple commands can be prcoessed at the same time
  - python

  Synchrounous code vs asynchournous javascript
  What is synchrnous code?
    - Commands exuected one after another, only one command at a time
    - code that has an inherit order
    - order of execution is guranteed
*/
//synchrounous code

// let foo2 = function() {
//   console.log('two');
// }

// console.log('one');
// foo2();
// console.log('three');
// //one => two => three


/*

  Asynchrounous code
    - no guranteed order
  Why do we need async code?
    - user clicks a button
    - interact with the site we cant predict
      - trouble executing commands, dont want to hold up the call stack
      - users have short attention spans,
    - more dynamic website, allowing people do more things at once
    - the envirmonent in which we run our application is full of uncertainity, users, unstable connections!
    - making an api call,wait until you get the information to do somethings

    Examples of async code
*/

console.log('first')

//async code does not block the call stack
setTimeout(function() {
  console.log('second')
}, 0)

setTimeout(function() {
  console.log('fourth')
}, 0)

console.log('third');
//first => third => second

/*
  Event Loop -  checking if the call stack is empty, if it we can move task from the message queue to the call stack
    - consists of the call stack and the message queue
    - Call stack - tracks the current task in progress
      - synchrounous task
      - stack structure
      - add to stack, push
      - remove from the stack - pop
      - first in last out, or last in first out

    - Message queue - keep track of tasks that cannot be excuted at the moments
      - asynchronous task
      - queue structure
      - add to back, enqueue
      - remove from the front - dequeue
      - first in first out or last in last out

    *that task can only be performed one at a time because javasript is a single threaded language!
*/
