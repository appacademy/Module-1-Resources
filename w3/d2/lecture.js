/*

  Call Stack!
  * The call stack is a structure that js uses to keep track of evaluation of function calls
  * Function is at the top of the stack, is the function currently being executed
  * stack like data structure
    * EX: Stack of plates
  * first in last out
  * when a function is called; it is pushed on to the call stack
  * when a function is returned; it is popped off the call stack

*/

// Observe stack
// * Can watch stack using debugger

function foo() {
  console.log("a");
  debugger;
  bar();
  console.log("e");
}

function bar() {
  console.log("b");
  debugger;
  baz();
  console.log("d");
}

function baz() {
  debugger;
  console.log("c");
}

// foo(); //a,b,c,d,e
