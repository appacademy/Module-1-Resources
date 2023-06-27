/*

  Call Stack!
  - The call stack is data structure that js uses to keep track of evaluation of function calls
  - stack data structure
  - first in last out
    ex: stack of plates
  - add to stack, you're pushing to the top
  - remove from the stack, you're popping off!

  Note about the call stack
  - when a function is called/invoked, it is pushed to the top of the call stack
  - when a function is returned, it is popped of the call stack(if there is no return, the function will default to undefined, function will still return as there will be no code left to run)
  - function is at the top of the call stack, is the function currently being executed
  * function evaluates to return

*/

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

foo(); //a,b,c,d,e
