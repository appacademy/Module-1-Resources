/*



  Recursion

  What is recursion?
    * When a function calls itself

  What are the use cases for recursion?
    * For issues tha can be broken down in to several pieces, sub problems
    * Traversing Nested data structures(objects/arrays)
    * traverse tree/graph like data structures
    * ex: rm -rf - recursively delete sub directories
    * search algorithms

  Two cases:
    1. Base case - tells our function when to stop recursing; can also be know as the terminating case
      * ex: if(n === 0); if(array.length === 0);
      * goal is to work towards the base case, we do this by using the recursive step
      * you can have more than one base case

    2. Recursive case - area of code in which the function recurses, usually the opposite of the base case
      * ex: if(n > 0); if(array.length > 0)
      * does not have to be explicity written out, usually just have the base case

    Recursive step
      * step towards reaching the base case
      * ask ourselves, how do we get to the base case?
        * ex: n--;
          * decrementing the number till its hit 0
        * array.pop(), array.slice(1), array.shift()
          * shorting the array till the length is 0
      * Recursive stop towards the base case

    Default params
      * Default parameters allow our variables to have default values if a argument is not passed, if an argument is passed the default is not used

*/

// Iterating an arbitrate number amount of times
// * In a way we control the boundaries
// start - 0
// stop  - i < 3
// step  - in increments of 1 i++

for (let i = 0; i < 3; i++) {
  // console.log('i: ', i)
}

// Recurse an arbitrary amount of times
// In a way we can control the boundaries
// start - starting value - ex: 3; [1,2,3,4]
// stop  - base case - 0; array.length === 0
// step  - n--; array.slice(1), array.pop()

// print numbers between 0 to 3
// start - number passed in
// stop - when the number hits 0
// step - decrement by 1 n--
// * thats how well get from 3 to 0

function recurse(number) {
  console.log("number: ,", number);

  // base case - stop when num is 0
  if (number === 0) return "done recursing";

  // recursive step - decrement by 1
  return recurse(number - 1);
}

// console.log(recurse(3))
// * recurse call stack
// A function cannot be removed from the call stack unless its returned
// whenever a function is called functionName(args)
// we need the return value of that function to evaluate to its return before we can get the return value
// recurse(3) => return a function call -> recurse(2)
// recurse(2) => return a function call -> recurse(1)
// recurse(1) => return a function call -> recurse(0)
// recurse(0) => 'return done recursing'
// ! we finally hit a base case
// recurse(1) => 'return done recursing'
// recurse(2) => 'return done recursing'
// recurse(3) => 'return done recursing'

// recursive case
function recurse2(number) {
  console.log("number: ,", number);

  // recursive case
  // if we stop when number is 0
  // then we will recurse when the number is greater than 0
  if (number > 0) {
    return recurse2(number - 1);
  } else {
    return "done recursing";
  }
}

// recurse(3);
