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
for (let i = 0; i < 3; i += 2) {
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
  if (number === 0) return "DONE RECURSING";
  console.log(number);

  debugger;
  // Recursive step
  // * subtract 1 from the number and pass it to the next call to recurse
  return recurse(number - 1);
  // * each time we return recurse: a function call
  // * we are calling a function and passing it modified arguemnts
  // * we keep passing arguments recursively till the base case is met
  // * in this case: when the number is 0
}

// console.log(recurse(3));// 'DONE RECURSING'
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

// Recursive case
// * condition opposite of base case
function recurse(number) {
  if (number > 0) {
    // *  area of code in which we are recursing
    console.log(number);

    // Recursive step
    // * subtract 1 from the number and pass it to the next call to recurse
    return recurse(number - 1);
  } else {
    return "DONE RECURSING";
  }
}

// * same as example above
// recurse(3); //

// Common recursing pattern
// Accessing all elements of an array
// * good base line to approach to access all elements
// * we start with a full array

function recurseArr(arr) {
  console.log("arr: ", arr);
  // base case
  // * stop when array length is 0
  if (arr.length === 0) return "Done recursing";
  // * same outcome
  // if(!arr.length) return 'Done recursing';

  // Recursive step
  // * how can we shorten the array to meet the base case?
  // * many ways we can work towards the base case
  // .pop - remove last element of array
  // * pop mutated the array shortening it by removing the last element
  // let popped = arr.pop();
  // console.log(popped);

  // .shift
  // * remove the first element
  // let shift = arr.shift();
  // console.log(shift);

  // .slice
  return recurseArr(arr.slice(1));
  // ! Any of these approaches work all the matters is we are working towards our base case
}

// console.log(recurseArr([1,2,3,4]));//

// Reversing a string
// * access every letter
// ! start with a full string
function reverse(string) {
  // base case
  if (string.length === 0) return "";

  let firstLetter = string[0];
  console.log(firstLetter);

  // recursive step
  // use slice
  return reverse(string.slice(1)) + firstLetter;

  // this syntax is fine as well
  let result = reverse(string.slice(1)) + firstLetter;
  return result;
}

// console.log('mochi'.slice(1));// ochi
// console.log(reverse('mochi'));// ihcom
// console.log(reverse('cat'));// tac
// ! we cant add a function call to a variable
// ! we need that function to first evaluate to its return
// reverse('cat') => reverse('at') + c
// reverse('at') =>  reverse('t') + a
// reverse('t') =>  reverse('') + t;
// reverse('') => '' <- we can start popping off the call stack
// reverse('t') =>  '' + t = 't'
// reverse('at') =>  't' + a = 'ta'
// reverse('cat') => 'ta' + c = 'tac'

console.log("========");

function reverseWLog(string) {
  console.log(string);
  // base case
  if (string.length === 0) return "";

  let firstLetter = string[0];
  console.log(string, firstLetter);

  let result = reverse(string.slice(1)) + firstLetter;
  // ! at this point a function is called; we wont move pass this line until the function is ready to popped off the stack
  // ! we dont have the return value yet we have to wait for the function call
  console.log("result", result);
  return result;
}

// console.log(reverseWLog("cat"));

function reverseWDebugger(string) {
  debugger;
  // base case
  if (string.length === 0) return "";

  let firstLetter = string[0];
  debugger;

  let result = reverseWDebugger(string.slice(1)) + firstLetter;
  // ! at this point a function is called; we wont move pass this line until the function is ready to popped off the stack
  // ! we dont have the return value yet we have to wait for the function call
  debugger;
  return result;
}


console.log(reverseWDebugger("cat"));
