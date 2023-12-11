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

// Iterating an arbitrary amount of time
// * we control the boundaries of a loop
// * Start - we are starting at the 0th index
// * Stop - we stop when the condition is no longer true: i < 3
// * Step - we works towards the condition using i++
// for(let i = 0; i < 5; i++){
//   // console.log(i);
// }

// Recursing an arbitrary amount of times
// * In a way we can control the boundaries
// * we can do so with our
// * Start - a staring value
// * Stop - base case
// * Step - recursive step

function recurse(num) {
  if (num === 10) return true;

  console.log(num);

  recurse(num + 1); // num - 1 === --num  (num-- wont work) passing value before changed
}
// console.log(recurse(0));

/*
recurse(5) => recurse(4)
recurse(4) => recurse(3)
recurse(3) => recurse(2)
recurse(2) => recurse(1)
recurse(1) => recurse(0)
recurse(0) => return undefined
recurse(1) => undefined
recurse(2) => undefined
recurse(3) => undefined
recurse(4) => undefined
recurse(5) => undefined
*/

// starting  - 'cat'
// base case - str.length === 0 -> ''
// recursive step - slice - string.slice()
// console.log("cat".slice(1)); // 'at'

function reverse(string) {
  console.log(string);
  if (string.length === 0) return string;
  let first = string[0];
  console.log(first, string);

  let result = reverse(string.slice(1)) + first;
  console.log("==>", result);
  return result;
}
// console.log(reverse("cat"));//tac
/*
Bottom Of Stack
reverse('cat') => reverse('at') + 'c';
reverse('at')  => reverse('t') + 'a';
reverse('t')   => reverse('') + 't';
reverse('')    => '' <- we hit the base case!!
Top Of Stack
reverse('t')   => '' + 't' = 't'
reverse('at')  => 't' + 'a' = 'ta';
reverse('cat') => 'ta' + 'c' = 'tac';

Bottom of Stack
*/


// console.log(ex() + 'world');

function reverseDebugger(string) {
  debugger;
  if (string.length === 0) return string;
  let first = string[0];
  debugger;
  let result = reverseDebugger(string.slice(1));
  debugger;
  return result + first;
}

console.log(reverseDebugger('cat'));
