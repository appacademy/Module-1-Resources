/*


  Call stack!
  - The call stack is a structure that js uses to keep track of evaluation of function calls
  - stack data structure
  - first in last out, ex: stack of plates
  - add to stack, youre pushing to the top
  - if you remove from the stack, you are popping off!

  Notes about the call stack
  - when a function is called, it is pushed to the top of the call stack
  - when a function is returned, it is popped of the call stack(if there is no return, function return will default to undefined)
  - function that is at the top of the call stack, is the function currently being executed
  * functions evaluate to there return

*/

function foo() {
  // console.log("a");
  debugger;
  bar();
  // console.log("e");
}

function bar() {
  // console.log("b");
  debugger;
  baz();
  // console.log("d");
}

function baz() {
  debugger;
  // console.log("c");
}

debugger;
// foo(); //a,b,c,d,e


