/*



  ? What is recursion!
  - When a function calls itself
  - funception

  ? Use cases
  - fibonacci, factorial
  - repeat a task over and over
  - solving sub problems
  - nested data structures
  - traversing tree/graph like data structures
  - rm -rf recursively deleting sub directories

  ! Two cases!
  base case and the recursive case

  1. base case - tells our function when to stop recursing, can also be known as the terminating case
   * you can have more than one base case
  ex: if(n === 0), if(array.length === 0), if(!string.length)
  * goal is to work towards the base case, we do this by using the recursive step

  2. recursive case - situation/code in which the function recurses
  * opposite of base the case
  * portion of code, where the function recursive case
  * does not have to be explicitly written out, usually using the base case
  ex: if(n > 0), if(array.length > 0), if(!string.length);

  - Recursive step
  - step towards reaching the base case
  * ask ourselves, how do we get to the base case?
  example: n--(decrement n till we hit 0), array.slice(1)(shorten the array till its length is zero), use something that is shortening the array
  * base case - (!arr.length)
    - how do we get to an array length of 0
    - we should work towards an empty array, we can get there by using slice, splice, pop, shift

  * Usually youll need a base case/recursive case and a recursive step
  * if we dont have a base/recursive case or a recursive step, we may end up with a stack overflow
  * recursive functions risk placing extra load on the extra stack

*/

//no base case or recursive step - so we get a stack overflow
function recurse() {
  console.log("hello");
  return recurse();
}
// recurse();//RangeError: Maximum call stack size exceeded

//this function is just going to log numbers, recursively
function logNums(num) {
  // console.log(num);
  debugger;
  if (num === 0) return "done recursing";

  return logNums(num - 1); //this is what makes our function recursive(the fact function is calling itself)
  //recursive step is num - 1, as it is bringing is closer to our base case
}
//we want to stop when num is zero
//how can we get from a num that is passed in to 0?
//subtracting one each time

// console.log(logNums(5));
/*
were calling logNums passing the value 5
when a function call is called, it is added to the call stack, we cant pop off a stack frame until a function has returned

logNums(5) => logNums taking in 5 return value is a function call, we have to wait for that function to evaluate
logNums(5) => logNums(4) - now were calling a func, we added to the stack, we must complete before evaluating logNums(5);
logNums(5) => logNums(4)
  logNums(4) => logNums(3)
    logNums(3) => logNums(2)
      logNums(2) => logNums(1)
        logNums(1) => logNums(0)
          logNums(0) => hit a return value, we can start popping off the stack - return 'Done recursing;'
        logNums(1) => 'Done recursing;
      logNums(2) => 'Done recursing;'
    logNums(3) => 'Done recursing;'
  logNums(4) => 'Done recursing;'
logNums(5) => 'Done recursing;'

we are just returning function calls until we have a return value at the top of the stack that we can propagate back down
*/

//recursive case
function logNumsRecursiveCase(num) {
  console.log(num);
  if (num > 0) {
    //when do we recurse? when num is greater than 0, thats recursive case
    return logNumsRecursiveCase(num - 1); //we will recurse as long as num is greater than 0
  } else {
    return "Done recursing"; //else stop recursing
  }
}

// logNumsRecursiveCase(7);

//the argument passed in is the start
// function recurseLoop(n){
//   if(n === 0) return 'stop';//base case is the stop

//   console.log(n);

//   return recurseLoop(n - 1);//recursive step - step
// }

//goal: reverse a string
//base case: stop when there is no length in the string, if(!string.length)
//recursive step: how can we get to an empty string? use slice! string.slice(1); this will shorten the string
function reverse(string) {
  if (!string.length) return ""; //base case - stop when string is empty

  let firstLetter = string[0];

  let result = reverse(string.slice(1)) + firstLetter; //recursive step is to slice the string, and we want add the current letter

  // return result;
}

// console.log(reverse('cat'));//tac
/*
reverse('cat')  => reverse('at') + c !we cant add c to the function until we have a return value
  reverse('at') => reverse('t') + a
    reverse('t') => reverse('') + t
      reverse(' ') => we hit our base case we can start popping off! the return is '';
    reverse('t') => '' + t  => 't';
  reverse('at')  => 't' + 'a' => 'ta';
reverse('cat')   => 'ta' + c => 'tac';
*/

function reverseLogs(string) {
  console.log("1", string);
  if (!string.length) return ""; //base case - stop when string is empty

  let firstLetter = string[0];
  console.log("2", firstLetter, string);

  let result = reverseLogs(string.slice(1)) + firstLetter; //recursive step is to slice the string, and we want add the current letter
  //we dont get the logs belows this line until the functions have returned
  console.log("3", result);
  return result;
}

// reverseLogs('cat')


function reverseDebugger(string) {
  debugger;
  if (!string.length) return ""; //base case - stop when string is empty
  let firstLetter = string[0];
  debugger;
  let result = firstLetter + reverseDebugger(string.slice(1))
  debugger;
  return result;
}


console.log(reverseDebugger('cats'));
/*
if we move firstLetter before reverseDebugger
let result = firstLetter + reverseDebugger(string.slice(1))
reverse('cat')  => reverse('at') + c !we cant add c to the function until we have a return value
  reverse('at') => reverse('t') + a
    reverse('t') => reverse('') + t
      reverse(' ') => we hit our base case we can start popping off! the return is '';
    reverse('t') => t + '' => 't';
  reverse('at')  => 'a' + 't'  => 'at';
reverse('cat')   => c+ 'at' => 'cat';
*/
