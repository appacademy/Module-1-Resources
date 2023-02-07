/*



  Call stack!
    - Is a stack like data structure that js uses to keep track of evaluation of function calls
    - first in last out or last in first out
    - add to a stack, you're pushing ot the stack
    - remove from the stack, popping off the stack


    Notes about the call stack
    - when a function is called, it is pushed on the call stack
    - when a function is returned, it is popped off the call stack
    - function that is at the top of the call stack, is the function currently being executed

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

  Recursion?
    - a function that calls itself
      Recursion?
        - A function that calls itself

  Use cases for recursion?
    - An alternative to iteration
    - handling large set of data
    - breaking problems into small problems, sub problems
      - fibonacci, factorial, sorting/search algorithms

  Two cases
    - base case - tells our function when to stop recursing
      - can also be called the terminating case
    * you can have more than one base case!

    - recursive case - situation in which the function recurses
      - usually the opposite base case
      - you usually need only the base case OR the recursive case

    - recursive step - step towards reaching the base case

  When you make your recursive functions, you'll want to make sure you have a base case/recursive case and a recursive step/
  If you don't tell the function to stop recursing, you will get a stack over flow

*/

//goal: print out all the numbers starting from num to 0
//base case
//recursive step

//with base
function recurse(num) {
  //base case - tell function to stop recursing
  if(num === 0) return 'hello';

  console.log(num);

  return recurse(num - 1);
  //return recurse() is what makes this function recursive
  //num - 1 - recursive step, we are subtracting 1, and passing that new value to the next function call of recurse

}

//with recursive case
function recurse2(num) {
  //recursive case is, if the base case is stop when num is 0, then the recursive case is recurse as long as num is greater than 0
  if(num > 0) {

  console.log(num);

  return recurse(num - 1);
  //return recurse() is what makes this function recursive
  //num - 1 - recursive step, we are subtracting 1, and passing that new value to the next function call of recurse
  } else {
    return 'hello';
  }

}

// console.log(recurse(5));//0
//recurse(5) => call the recurse function and pass in the value num - 1 => recurse(4)
  //recurse(4) => calls recurse(3)
    //recurse(3) => return recurse(2)
      //recurse(2) => return recurse(1)
        //recurse(1) => return recurse(0)
          //recurse(0) => return undefined - top of the call stack
        //recurse(1) => undefined
      //recurse(2) => undefined
    //recurse(3) => undefined
  //recurse(4) => undefined
//recurse(5) => undefined



//reverse a string recursively
//base case
//recursive step

// function reverseString(string) {
//   if(!string.length) return ""//base case - stop recursing when the string is empty

//   let first = string[0];

//   return reverseString(string.slice(1)) + first;//calling reverse, makes our function recursive,
//   //slicing our word is the recursive step, we will shorten the length of the word each time we recurse until theres no length


// };


function debuggerReverse(string) {
  debugger;
  if(!string.length) return '';
  let first = string[0];
  debugger;
  let res = debuggerReverse(string.slice(1)) + first;
  debugger;
  return res;
}

console.log(debuggerReverse('cat'))
// console.log(reverseString('cat'));//tac
//reverse('cat') => reverse('at') + c      we cant add c to the reverse('at') until this function has returned
  //reverse('at') => reverse('t') + a
    //reverse('t') => reverse('') + t
      //reverse('') => return '' - we finally have a return, we can start popping off the stack
    //reverse('t') => ' ' + t = 't'
  //reverse('at') => 't' + a  = 'ta'
//reverse("cat") =>  'ta' + c = 'tac'
