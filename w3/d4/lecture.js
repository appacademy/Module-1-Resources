/*





  What does it mean for javascript to be a single threaded language?
    * Only one command/task/function can be executed at a time
    * The current task with run to full completion before the next task is handled

  What is a multithreaded language?
    * multiple commands can be processed at the same time
    * python

  Synchronous vs asynchronous code

  What is synchronous code?
    * run line by line
    * guaranteed order of execution
    * commands ran one after another running one at a time

*/

// Synchronous code

function synchronous(){
  console.log('two');
};

console.log('one');
synchronous();
console.log('three');
// one => two => three

