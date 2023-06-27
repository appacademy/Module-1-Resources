/*



? What is recursion?
- A function calling itself

! Use cases
- when you need access to nested data structure
  ex: json files
      rm -rf recursively deleting sub directories
- solving sub problems, repeat logic over and over
- fib, factorials,
- traversing tree/graph like data structure

Two cases!
- Base case and recursive case

1. Base case - tells our function when to stop recursing, call also be know as the terminating case.
  * you can have more than one base case
ex: if(n === 0); if(array.length === 0), if(!string.length);
  * goal is to work towards the base case, we do this by using the recursive step

2. Recursive case - situation/code in which the function recurses
  * opposite of the base case
  * portion of code, where the function recurses
  * does not have to explicitly be written out, usually using the base case
  * if(n > 0); if(array.length > 0); if(string.length > 0);

3. Recursive step - step towards reaching the base case
* ask ourselves, how do we get to the base case?
  ex: n--(decrement till we hit 0); array.slice(1)(shorten the array till its length is 0)
  * base case - (!arr.length) - stop when array is empty
    * recursive step - array.pop()/array.shift() - any method to shorten the array will work
    * we are shortening the array and working towards empty array

  * Usually youll need a base case/recursive case and a recursive step
  * if we dont have a base/recursive case or a recursive step, we will end up with a stack overflow
  * recursive function risk placing extra load on the call stack

*/

//This function calls itself indefinitely
//no base case no recursive step
function recurse() {
  console.log("hello");
  return recurse();
}

// recurse();
//RangeError: Maximum call stack size exceeded
// a function evaluates to irs return, if a function returns a function call, then that function will be called

// Control boundaries
// start at 0
// end at 10
// go in steps of 1
// for(let i = 0; i < 5; i++){
//   console.log(i);
// }

// We do a similar process with recursion
// lets log some numbers using recursion
// 5 as the starting point
// stop at 0
// go in increments of 1
function logNums(num) {
  //base case - when do we stop?
  if (num === 0) return "done";

  console.log(num);

  //recursive step - how de we reach our base case? 0
  //how do we get from 5 to 0? subtract 1
  //recursive step - subtract 1 till we hit 0
  debugger;
  return logNums(num - 1);
}
//SO we calling functions that have return values that are function calls, we need those function to evaluate so we can start popping functions off the stack
// console.log(logNums(5));//done
//logNums(5) <- original call to logNums passing 5
//logNums(5) -> logNums(4)
//logNums(4) -> logNums(3)
//logNums(3) -> logNums(2)
//logNums(2) -> logNums(1)
//logNums(1) -> logNums(0)
//logNums(0) -> return 'done' - we can start removing functions from the stack
//logNums(0) -> 'done'
//logNums(1) -> 'done'
//logNums(2) -> 'done'
//logNums(3) -> 'done'
//logNums(4) -> 'done'
//logNums(5) -> 'done'

//function with recursive case
function logNums2(num) {
  //recursive case
  //recurse as long as num is greater than 0
  if (num > 0) {
    console.log(num);

    return logNums(num - 1);
  } else {
    //stop recursing when num is not greater then 0
    return "done";
  }
}

// logNums2(3)

// GOAL: reverse a string
// base case: stop when there is no length in the string
// recursive step: how can we get from a full length string to an empty string
// use slice! slice to shorten the string
function reverseString(string) {
  // console.log(string)
  if (string.length === 0) return "";

  let firstLetter = string[0];
  console.log(firstLetter);

  return reverseString(string.slice(1)) + firstLetter;
}

// console.log(reverseString('cat'));//tac
//we need the return value of a function in order to add it to 'c'
// reverseString('cat') -> reverseString('at') + c
//reverse('at') -> reverseString('t') + a ;
//reverse('t') -> reverse('') + t;
//reverse('') -> return ''; <- fulfil the base case
//reverse('t') -> '' + t = 't'
//reverse('at') -> 't' + 'a' = 'ta';
//reverse('cat') -> 'ta' + c = 'tac'

function reverseLogs(string) {
  console.log("1", string);
  if (string.length === 0) return "";

  let firstLetter = string[0];
  console.log("2", firstLetter, string);

  //a function is called
  let res = reverseLogs(string.slice(1)) + firstLetter;
  //we wont make it to this line, until the functions have returned
  console.log("3", res);
  return res;
}

// reverseLogs('cat');

function reverseDebugger(string) {
  if (string.length === 0) return "";

  let firstLetter = string[0];
  let restOfString = string.slice(1);//recursive step
  //were shortening array using slice

  let res = reverseDebugger(restOfString) + firstLetter;

  return res;
}

// reverseDebugger('cat');

// reverse('cat') -> reverse('at') + 'c'
// reverse('at')  -> reverse('t') + 'a'
// reverse('t')   -> reverse('') + 't'
// reverse('')    -> return "";
// reverse('t')   -> "" + 't'  = 't'
// reverse('at')  -> 't' + 'a' = 'ta'
// reverse('cat') -> 'ta' + 'c' = 'tac'
