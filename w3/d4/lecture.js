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
    -



*/
