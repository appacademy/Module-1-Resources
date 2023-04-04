/*
Call Stack!
  - Its a stack like data structure that js uses to keep track of evaluation calls
    - first in last out or last in first out
      - think of a stack of plates

  Notes about the call stack
    - when a function called, it is pushed on the call stack
    - when a function is returned, it is popped off the stack
    - function that is at the top of the call stack is the function currently being executed
*/

function foo() {
  console.log("a");
  bar();
  console.log("e");
  baz();
}

function bar() {
  console.log("b");
  baz();
  console.log("d");
}

function baz() {
  console.log("c");
}

foo(); //a,b,c,d,e

/*


Recursion!!

Use cases?
  - For issue that can be broken down into several smaller pieces, sub problem // [1,2,[3,4,[4]]]
  - fibonacci, factorial
  - search algorithms
  - rm -rf - recursively delete sub directories

  Two cases: you really only need one a time
  1. Base case - tells our function when to stop recursing, can also be known as the terminating case
    * you can have more than one base case
    * usually either pick a base case OR recursive case
    * ex: if(n === 0)
  2. Recursive case -  situation in which function recurses
    * opposite of the base case
    * ex: if(n > 0)

  - Recursive Step
    - step towards reaching case
    * ex: ask ourselves, how do we get to this base case - if(arr.length === 0) - we should word towards in empty array, that should be our recursive step
    * we can do that by, slice, pop
  * Usually you'll need a base case and a recursive step! don't need both base case and recursive case
  * If we don't tell the function to stop recursing, we will get a stack overflow! Infinite loop! Tho its not a loop
  * Recursive function risk placing extra load on the call stack
*/
