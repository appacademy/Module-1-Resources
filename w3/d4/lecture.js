
/*

  What does it mean for javascript to be a single threaded language?
    * Any instance during the program, only one task is being executed!
    * The current task will run to full completion, before the next task is handled


  No. NodeJs is not single threaded.
  The NodeJs event loop operates on a single thread yes,
  but the async blocking operations are delegated to separate
  worker threads.


  What is multithreaded?
    * multiple commands can be processed at the same time
    * python

  Synchronous vs Asynchronous code

  What is Synchronous code?
    * Runs line by line
    * Commands executed one after another, only one command a time
    * Code that has inherit order
    * Order of execution is guaranteed

*/

function synchronous() {
  console.log("two");
}

console.log("one");
synchronous();
console.log("three");

// one => two => three
