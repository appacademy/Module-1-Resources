/*



  Call Stack
    * The call stack is a structure that js uses to keep track evaluation of function calls
    * The function is at the top of the stack; is the function that js is currently being executed
    * stack data structure
      * Ex: stack of plates
    * first in last out/ last in first out
    * When a function is CALLED/INVOKED it pushed on to the stack
    * When a function is returned, it is popped off the stack
      * If there is no return keyword; if there is no code let to run then the function defaults undefined

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

foo(); //a,b,c,d,e
