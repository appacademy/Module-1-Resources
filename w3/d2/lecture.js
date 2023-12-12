
/*



  Call Stack
    * The call stack is a structure that js uses to keep track of evaluation of function calls
    * function that is at the top of the stack is the function currently being executed
      * first in last out
      * last in first out
    * stack of plates
    * when a function is called - it gets pushed to the top
    * when a function is returned - it gets popped off the stack
      * if a function does not have a return, it will still return and just to default its value to undefined

*/

// Observe stack
// * Can watch stack using debugger

function foo() {
  console.log("a");
  debugger;
  bar();
  console.log("e");
  return 'foo function popped off stack'
}

function bar() {
  console.log("b");
  debugger;
  baz();
  console.log("d");
  return 'bar function popped off stack'
}

function baz() {
  debugger;
  console.log("c");
  return 'baz function popped off stack'
}

// foo();


// function evaluates to return
// passing return values down the stack

function myFunc(){
  console.log('whats happening?')

  return myFunc();
  // return 'return value of myFunc'
  // return true;
  // return 12;

};

