/*


  What is recursion?
   * When a function calls itself

  When are the use cases for recursion?
   * We can use recursion to break down problems into sub problems
    * smaller chunks that are more digestible
    * repeating behavior
   * Whenever we need to traverse a deeply nested objects or array
   * Create different algorithms
    * searching algos
   * rm -rf: recursively deleting sub directories
   * traversing tree/graphs like data structures

  Two cases:
  1. base case - tells our function when to stop recursing; can also be known as the terminating case
    * ex: if(n === 0), if(array.length === 0), if(!string.length)
    * goal: is to work towards the base case; we do this using the recursive step
    * you can have more than one base case

  2. recursive case - area of code in which the function recurses, usually the opposite of the base case
    * does not have to be explicitly written out, usually just use the base case
    * ex: if(n > 0), if(array.length > 0), if(string.length > 0)

  Recursive step:
    * step towards reaching the base case
    * ask ourselves; how do we get to the base case?
      * ex: n--(decrement a number till its 0)
      * array.slice(1) shorten the array till the length is 0

  Default Params
    * allows us to default a parameters value if a arguments is not passed
    * if an argument is passed, then js will use the argument

  Lets code it out!
  * What happens when a functions calls itself in relation to the call stack
  * Recursive problems risk place extra load on the call stack

*/


// Iterating an arbitrary
// * we control the boundaries
// * start - we starting at the 0
// * stop - we stop when a condition is met
// * step - we word towards the condition using i++
for(let i = 0; i < 3; i+=2){
  // console.log(i);
}


// Recurse an arbitrary amount of times
// * in a way we can control our boundaries like a loop
// * start - starting value
// * stop - base case
// * step - recursive step

// Print numbers from 0 to 3
// * start at the number passed in
function recurse(number) {
  debugger;
  // Base case
  // * stop recursing
  if(number === 0) return 'DONE RECURSING'
  console.log(number);

  debugger;
  // Recursive step
  // * subtract 1 from the number and pass it to the next call to recurse
  return recurse(number - 1);
  // * each time we return recurse: a function call
  // * we are calling a function and passing it modified arguemnts
  // * we keep passing arguments recursively till the base case is met
  // * in this case: when the number is 0
};


console.log(recurse(3));// 'DONE RECURSING'
// * we need to evaluate the function call before trying to return its value
// * we never hit a return till we hit the base case
// recurse call stack
// recurse(3) => return recurse(2)
// recurse(2) => return recurse(1)
// recurse(1) => return recurse(0)
// recurse(0) =>  'DONE RECURSING' <- we hit a return value; now we can start popping functions off the stack
// recurse(1) => return 'DONE RECURSING
// recurse(2) => return 'DONE RECURSING
// recurse(3) => return 'DONE RECURSING
