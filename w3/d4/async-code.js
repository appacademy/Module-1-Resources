

/*
  Asynchronous code?
    * no guaranteed order
    * does not block the execution of the call stack

  Why do we need async code?
    * user clicks a button,
    * have to send a api call
    * perform two things at once,
    * interact with the site we cant predict
      * users have short attention spans
    * more dynamic websites, allowing people to do more things at once
    * the environment in which we run our application is full of uncertainties
*/


/*


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
      *
*/

console.log('first');

setTimeout(() => {
  console.log('second')
}, 5000);
// 5000 / 1000 = 5seconds
// milliseconds to seconds

setTimeout(() => {
  console.log('third');
},0)

console.log('fourth');
// first -> fourth -> third -> second
// console.log(global);//
