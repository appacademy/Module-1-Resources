/*





  What is recursion?
    * When a function calls itself from within itself

  What are the use cases for recursion?
    * Traversing Data structure
      * tree/graphs
    * Deep nested loop
      * Elegant and quicker!
    * rm -rf: recursively delete sub directories
    * solve a sub problem that will in turn solve the bigger problem.

  Two cases:
    1. base case: - tells our function when to stop recursing; can also known as the terminating case
      ex: if(n === 0); if(array.length === 0), if(!string.length)
      * goal is to work towards the base case, we do this using the recursive step
      * you can have more than one base case

    2. recursive case - area of code in which the function recurses, usually the opposite of the base case
      * does not have to be explicity written out; usually implied
      ex: if(n > 0); if(array.length > 0); if(string.length > 0)

      if(condition){
        return true
      } else {
        return false
      }

      if(condition){
        return true
      }
        return false


    Recursive step:
      * step towards reaching the base case
      * ask yourself, how do we get to the base case
        * ex: n - 1(decrement till it hits 0)
        * ex: array.slice(1)(shorten the array till it hits an array of zero)
        * We can use any method to shorten the array - pop, shift
        * we are shorting the array and working towards an empty array

    Default params
      * Default function parameters allow parameters to be initialized to a default value if an argument is not passed, if it an argument is passed; it will use that argument
        ex: function name(arr, n = 1){}


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
// * Start - we are starting at the 0
// * Stop - we stop when the condition is no longer true: i < 3
// * Step - we works towards the condition using i++
for (let i = 0; i < 3; i++) {
  // console.log("i: ", i);
}

// Recursing an arbitrary amount of times
// * In a way we can control the boundaries
// * we can do so with our
// * Start - a starting value
// * Stop - base case
// * Step - recursive step

// Print number from 3 to 0
// * start is the number passed in
function recurse(number) {

  console.log('number:', number);

  // base case
  // * stop recursing - when the number hits 0
  if(number === 0) return 'done recursing';

  // recursive step
  // *  subtract 1 from the number and pass the number to the next call to recurse
  return recurse(number - 1)
  // * each time we return recurse: a function call
  // * we are calling a function and passing modified arguments
  // * we keep doing this until we hit the base case - the number being 0
}
console.log(recurse(3));//
// * recurse call stack
// * A function cannot be removed from the call stack unless its returned
// * whenever we return a function call; functionName(args)
// * we need the function call to first evaluate to its return before we can return the value
// * but each function returns a function call
// * we will recurse until a function is not returned
// ! that happens when we hit the base case
//recurse(3) => return a function call -> recurse(2)
//recurse(2) => return a function call -> recurse(1)
//recurse(1) => return a function call -> recurse(0)
//recurse(0) => return -> Done recursing
// ! finally hit a return value instead of calling a function, we can start popping off the stack
//recurse(1) => Done recursing
//recurse(2) => Done recursing
//recurse(3) => Done recursing
/*

  recurse(3) => 'done recursing' <- we the function to evaluate before we can return it, so it must first be called
----------------------
  Global Stack Frame
   Bottom of Stack
*/
