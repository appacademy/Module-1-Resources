/*
Call Stack!
  - Its a stack like data structure that js uses to keep track of evaluation calls
    - first in last out or last in first out
      - think of a stack of plates

  Notes about the call stack
    - when a function called, it is pushed on the call stack
    - when a function is returned, it is popped off the stack
    - function that is at the top of the call stack is the function currently being executed
*/

function foo() {
  console.log("a");
  bar();
  console.log("e");
  baz();
}

function bar() {
  console.log("b");
  baz();
  console.log("d");
}

function baz() {
  console.log("c");
}

// foo(); //a,b,c,d,e

/*


Recursion!!

Use cases?
  - For issue that can be broken down into several smaller pieces, sub problem // [1,2,[3,4,[4]]]
  - fibonacci, factorial
  - search algorithms
  - rm -rf - recursively delete sub directories

  Two cases: you really only need one a time
  1. Base case - tells our function when to stop recursing, can also be known as the terminating case
    * you can have more than one base case
    * usually either pick a base case OR recursive case
    * ex: if(n === 0)
  2. Recursive case -  situation in which function recurses
    * opposite of the base case
    * ex: if(n > 5)

  - Recursive Step
    - step towards reaching case
    * ex: ask ourselves, how do we get to this base case - if(arr.length === 0) - we should word towards in empty array, that should be our recursive step
    * we can do that by, slice, pop
  * Usually you'll need a base case and a recursive step! don't need both base case and recursive case
  * If we don't tell the function to stop recursing, we will get a stack overflow! Infinite loop! Tho its not a loop
  * Recursive function risk placing extra load on the call stack
*/

//goal: print out all the numbers starting from num to 0
//base case -  when should i stop
//recursive step -  how do i get to that stopping point
function recurse(num) {
  debugger
  if (num === 0) return 0; //base case - we want to stop when the num is zero
  console.log(num); //goal is to print the numbers
  //were saying return the return value of calling the function, but we have to wait for the function to be called and return something
  return recurse(num - 1); //so that function has to call itself in order to be recursive
  //were subtracting one, in order to progress us towards our base case
  //taking num subtracting one, and passing the new value to the next call to recurse
}

// console.log("==", recurse(5));
//were calling recurse passing 5, recurse passed 5, calls a function that passes the number 4
//when a function is called it is added to the stack, we cant finish recurse(5) until recurse(4) is done
//recurse(5) => call a function recurse(4)
//recurse(4) => call a function recurse(3)
//recurse(3) => recurse(2)
//recurse(2) => recurse(1)
//recurse(1) => recurse(0)
//recurse(0) => returns 0       because num is 0, we know hit the base case, because we hit the base case, we have a return value
//recurse(1) => returns 0       when you return a function, you can pop off the stack
//recurse(2) => returns 0
//recurse(3) => returns 0
//recurse(4) => returns 0
//recurse(5) => return 0


// goal: reverse a string using recursion
//base case - stop when there is no length in the string, if(!string.length)
//recursive step - how can we get to an empty string? use slice! string.slice(1) - grab everything after first element

function reverse(string) {
  debugger
  if (!string.length) return ""; //base case -  stop when there is no length in the string

  let firstLetter = string[0]; //grabs the first letter

  let result = reverse(string.slice(1)) + firstLetter; //calling reverse makes this function recursive
  //recursive step - is string.slice(1), we are slicing the string till it has no length
  // 'cat'.slice(1) => 'at
  //i want to call reverse and pass it a modified string, and I want to take the return value of calling reverse, and concatenate it the first letter
  return result;
}

// console.log(reverse('Mimosa Braxton'))


//function reverse but with a recursive case
//opposite of the base case
function reverse2(string) {
  //recursive case - as long as the length is greater than 0 keep recursing else return ''
  debugger
  if (string.length > 0) {
    let firstLetter = string[0];

    let result = reverse2(string.slice(1)) + firstLetter;
    return result;
  } else {
    return "";
  }
}

// console.log(reverse2('Mimosa Braxton'));

//using console.log
function logReverse(string, count = 1) {
  console.log(`stack ${count}`);
  console.log('string - ', string)
  if (!string.length) return "";
  let first = string[0]
  console.log('first, string - ', first, string)
  let result = logReverse(string.slice(1), ++count) + first;
  console.log('result - ', result)//we only see these console.log after we hit our base case and we start popping function off the stack
  return result
}

// console.log(logReverse('cat'))


//using debugger
function debuggedReverse(string) {
  debugger

  if (!string.length) return "";
  let first = string[0]

  let result = debuggedReverse(string.slice(1)) + first;

  return result
}

// console.log(debuggedReverse('cat'))
