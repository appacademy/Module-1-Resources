/*

  Call Stack!
  - The call stack is a structure that js uses to keep track of the evaluation of function calls
  - stack data structure
  - first in last out - stack of plates
  - add to a stack, you're pushing to the top of the stack
  - if you remove from the stack, you are popping off!

  Notes about the call stack
  - when a function is called, it is pushed to the top of the call stack
  - when a function is returned, it is popped off the stack
  - function that is at the top of the call stack is the function currently being executed

*/

function foo() {
  console.log("a");
  bar();
  console.log("e");
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

  Recursion!
  - calling a function from within in itself
  - a function call itself!
  - funception!

  Use cases?
  - alt to looping?
  - to deal with nested data structures
  - fibonacci, factorial
  - for issues that can be broken down into smaller pieces, sub problems
  - rm -rf recursively delete sub directories
  - search/sort algorithms

  Two cases: base case and recursive case

  1. Base case - tells our function when to stop recursing, can also be known as the terminating case
    * you can have more than one base case
  ex: if(n === 0);

  2. Recursive case - situation in which function recurses
    * opposite of the base case
    * portion of code where, function recurses
    * does not have to be explicitly written out
  ex: if(n > 0);

  - Recursive step!
  - step towards reaching the base case
  * ask ourselves, how do we get to the base case
  * example: base case - if(arr.length === 0)
    * how do we get to an array length of 0?
    * we should work towards an empty array, we can empty our array by using, slice, splice, pop

  * Usually you'll need a base case/recursive case and a recursive step!

  * If we dont have a base case/recursive case or a recursive step we may end up with a stack overflow!

  * Recursive function risk placing extra load on the call stack

*/

//goal: print out all the number starting from num to 0
//base case -  when should i stop
//recursive step - how do i get to that stopping point
function recurse(num) {
  // console.log(num)
  if (num < 0) return; //second base case
  if (num === 0) return "done recursing"; //base case - we want to stop when the num is 0

  console.log(num); //goal to print each number

  //were saying return the return value of calling the function, but we have to wait for the function to be called and return something
  return recurse(num - 1); //this is the function calling itself, this makes the function recursive
  //were subtracting one, in order to progress us towards our base case of 0
  //taking the num, subtracting one, and passing the new value to the next call to recurse
}

// recurse(-8)
// console.log('function evaluates to',recurse(5));//'done recursing'

//same example with recursive case
function recurse2(num) {
  if (num > 0) {
    console.log(num); //goal to print each number

    return recurse(num - 1);
  } else {
    return "done recursing";
  }
}

// console.log(recurse2(5));

/*
were calling recurse passing 5,
when a function is called, it is added to the call stack, we cant pop off a stack frame until a function has returned

recurse(5) => call the function recurse but pass it 4 => recurse(4)
recurse(5) => return recurse(4) -> we cant return recurse(5) until recurse 4 has returned, but it has been called
  recurse(4) => return recurse(3)
    recurse(3) => return recurse(2)
      recurse(2) => return recurse(1)
        recurse(1) => return recurse(0)
          recurse(0) => we hit our if statement, therefor hit a return value -> 'done recursing'
                        because num is 0, we now hit the base case, we have a return value, we can start popping off the call stack
          recurse(0) => 'done recursing'
          recurse(1) => 'done recursing'
          recurse(2) => 'done recursing'
          recurse(3) => 'done recursing'
          recurse(4) => 'done recursing'
          recurse(5) => 'done recursing'
*/

//goal: reverse a string using recursion
//base case - stop when there is no length in the string, if(!string.length);
//recursive step - how can we get to an empty string? use slice! string.slice(1) - grab everything after the first element
function reverse(string) {
  // console.log(string);//cat
  if (string.length === 0) return ""; //base case -  stop when string length is 0

  let firstLetter = string[0]; //we grabbing the first letter of the passed in word

  let result = reverse(string.slice(1)) + firstLetter; //recursive all to reverse passing the string sliced
  // 'cat'.slice(1) => 'at'; => reverse('at')
  return result; //return a variable, holds a function that must be evaluated
}

//reverse with recursive case
function reverse2(string) {
  if (string.length > 0) {
    //recurse as long as string length > 0
    //recursive case
    let firstLetter = string[0];

    let result = reverse2(string.slice(1)) + firstLetter;
    return result;
  } else {
    return "";
  }
}

// console.log(reverse2("cat"));//tac

// console.log("return value of reverse -", reverse("cat"));//tac

/*
reverse('cat') => reverse('at') + 'c' //were saying i want to add the return value of reverse('at') to 'c', but we cant till we get that return value

reverse('cat') => reverse('at') + 'c';
  reverse('at') => reverse('t') + 'a';
    reverse('t') => reverse('') + 't';
      reverse('') => return '' - we hit our base case!!! we have a return value!
    reverse('t') => '' + 't' = 't'
  reverse('at') => 't' + 'a' = 'ta'
reverse('cat') => 'ta' + 'c' = 'tac' WE HAVE OUR FINAL VALUE
*/

function reverseLogs(string) {
  console.log("1", string);
  if (string.length === 0) return "";

  let firstLetter = string[0];
  console.log("2", firstLetter, string);

  let result = reverseLogs(string.slice(1)) + firstLetter;
  console.log("3", result);//dont hit console.log till we starting popping off the stack, because we are waiting for the return value of reverseLogs
  return result;
}

reverseLogs("cat");


function debuggedReverse(string) {
  debugger
  if (!string.length) return "";
  let first = string[0]
  debugger
  let result = debuggedReverse(string.slice(1)) + first;
  debugger
  return result
}

debuggedReverse('cat');
