
/*



  Call Stack
    * The call stack is a structure that js uses to keep track of evaluation of function calls
    * function that is at the top of the stack is the function currently being executed
      * first in last out
      * last in first out
    * stack of plates
    * when a function is called - it gets pushed to the top
    * when a function is returned - it gets popped off the stack

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
// count = 0;
// function test(){
//   count++;
//   // return true;
//   if(count === 10) return;
//   console.log(count)
//   return test();
// }


// console.log(test);// [Function: test]
// console.log(test());// true
// console.log(test());// [Function: test]

