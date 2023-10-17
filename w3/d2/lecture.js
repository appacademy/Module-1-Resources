/*

    Call Stack!
    * The call stack is a structure that js uses to keep track of evaluation of function calls
    * function is at the top stack, it is the function currently being executed
    * stack data structure
      * EX: Stack of plates
    * first in last out
    * when a function is called, it is pushed on the call stack
    * when a function is returned, it is popped off the call stack

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

/*



  Recursion

  What is recursion?
    * recursion is when a function calls itself
      * recursion is when a function calls itself
        * recursion is when a function calls itself

  What are the use cases for recursion?
    * For issues that can be broken down into several, smaller pieces, sub problems
      * fibonacci, factorial
      * search algorithms
      * rm -rf: recursively delete sub directories
      * traversing tree/graph like data structures

  Two cases:
    1. base case - tells our function when to stop recursing; can also be known as terminating case
      * ex: if(n === 0); if(array.length === 0), if(!string.length);
      * goal is to work towards the base case, we do this by using the recursive step
      * you can have more than one base case!

    2. recursive case - area of code in which the function recurses, usually the opposite of the base case
      * does not have to explicitly be written out, usually just use the base case
      * if(n > 0); if(array.length > 0); if(string.length > 0);


  Recursive step:
    * step towards reaching the base case
    * ask ourselves, how do we get to the base case?
      ex: n--(decrement till we hit 0); array.slice(1)(shorten the array till its length is 0)
    * base case - (!arr.length) - stop when array is empty
    * recursive step - array.pop()/array.shift() - any method to shorten the array will work
    * we are shortening the array and working towards empty array

  Default params
    * Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed

  Lets see what happens when a function calls itself in relation to the call stack
    * If we don't tell the function to stop recursing, we will get a stack overflow! Infinite Loop
    * Recursive functions risk placing extra load on the call stack.


  Helpful for students
  * Visualizers
    https://recursion.vercel.app/
    https://pythontutor.com/visualize.html#mode=edit
    https://ui.dev/javascript-visualizer
  * Extra Recursion problems
    https://github.com/JS-Challenges/recursion-prompts
  * Helpful videos
    https://www.youtube.com/watch?v=FVZ-A_Akros&list=PL7mu5NfYICcGphu5CaYj52Ex2nrcCUFZV&index=1&t=110s

*/

// default parameter
function example(param1, param2 = "world") {
  return param1 + " " + param2;
}

// use default param value if no arg is passed
// console.log(example('hello'));
// is arg is passed use the argument
// console.log(example('hello', 'mars'));

// Loops
// * we control the boundaries of the loops
// start - 0
// stop - 3
// step - += 1
for (let i = 0; i < 3; i++) {
  // console.log(i);
}

// Recursing an arbitrary amount of times
// in a way we can control our boundaries
// print every number from 3 to 0
// start - 3;
// stop - 0;
// step - -= 1
function recurse(number) {
  console.log(number);
  if (number === 0) return;
  return recurse(number - 1);
}

// recursive case
function recursiveCase(number) {
  // recursive case - condition in which to keep recursing
  if (number > 0) {
    return recurse(number - 1);
  } else {
    return;
  }
}
recursiveCase(3)
/*

recurse(0) => return undefined <-- top of the stack where we hit a return value instead of a function call
recurse(1) => undefined
recurse(2) => recurse(1)
recurse(3) => recurse(2);
return the return value of calling recurse passing the value 2
*/
// console.log(recurse(3));
