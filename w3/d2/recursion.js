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
for (let i = 0; i < 3; i++) {
  console.log("i: ", i);
}

// Recursing an arbitrary amount of times
// * In a way we can control the boundaries
// * we can do so with our
// * Start - a staring value
// * Stop - base case
// * Step - recursive step

// Print numbers from 0 to 3
// * start at number passed in
function recurse(number) {
  console.log("number: ", number);

  // Base case
  // * stop recursing when number hits 0
  if (number === 0) return "Done recursing";
  if(number === 2) return number;

  // Recursive step
  // * subtract 1 from the number and pass the number to the next call to recurse
  // return recurse(number - 1);// only return recursive call if using return value
  // will pass return down call stack
  recurse(number - 1)
  // * each time we return recurse: a function call
  // * we are calling a function and passing it modified arguments
  // * we keep passing arguments recursively till the base case is it met
  // * in this case: when the number is 0
}

console.log(recurse(3)); // Done recursing
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

// Same function as above but with recursive step
// * what keeps us recursing is the condition that number is greater than 0
function recurse2(number) {
  // Recursive case
  // * recurse as long as this condition is true
  if (number > 0) {
    console.log(number);
    // Recursive step
    // * same recursive step
    return recurse2(number - 1); //
  } else {
    // This is where we stop recursing
    return "Done recursing";
  }
}

// * Same call stack as previous example
console.log(recurse2(3));

// Common recursing patten # 1
// * Accessing all elements of a array
// * Good base line to approach accessing all elements
// * Good start with recursive problems is at least getting the elements to print
// * we start with a full array
function recurseArr(arr) {
  // Base case
  // * stop when the array is empty
  if (!arr.length) return "Done recursing";
  // * same thing as
  // if(arr.length < 0) return 'Done recursing';

  // Many ways to work towards base case
  // pick a way to shorten the array
  // * .pop - remove last element
  let popped = arr.pop();
  console.log(popped);

  // * .shift - remove first element
  let shift = arr.shift();
  console.log(shift);

  // * used with .slice
  // console.log(arr[0])
  // * passing an array with first element removed
  return recurseArr(arr.slice(1));

  // ! Any of these approaches work
  // * what matters is we are working towards our base case of an empty array, starting from a full array, removing elements one by one till we hit the base case
}

console.log(recurseArr([1, 2, 3, 4])); // Done recursing
// * slice - 1 2 3 4
// * pop - 4 3 2 1 0
// * shift - 1 2 3 4

// Lets reverse a string
// * access every letter
// ! start with a full string
function reverse(string) {
  // Base case
  // ! stop when string length is 0
  if (!string.length) return ""; //<- return value of top stack frame

  let first = string[0];

  // Recursive Step
  // ! remove the first letter each recurse
  return reverse(string.slice(1)) + first;

  // Alternatively
  // * do not have to return recursive call
  let result = reverse(string.slice(1)) + first;
  return result;

  // ! recursive case below this line
  // if (string.length > 0) {
  //   let first = string[0];

  //   // recursive step - slicing the string till it reaches a length of 0
  //   return reverse(string.slice(1)) + first;
  // } else {
  //   return "";
  // }
}

// reverse call stack
// * were going to keep recursing till we hit a base case
// * once we do, we can use the return values and propagate them back up the stack
console.log(reverse("cat")); //tac

// * In order for me to take reverse('t') and add it to 'a' I first need to call reverse('t') and get its return value; but reverse('t') returns a function call to reverse('') + t so we must wait for reverse('') to evaluate; and so forth until we hit the base case
// reverse('cat') => reverse('at') + c
// reverse('at') => reverse('t') + a
// reverse('t') => reverse('') + t
// reverse('') => return '' <-- At this point we hit the base case; we can start getting the return values
// ! popping off functions from call stack
// * we can now fill in what the functions evaluate too
// reverse('t') => " " + t ==> 't'
// reverse('at') => 't' + a ==> 'ta'
// reverse('cat') => 'ta + c ==> tac

// Lets view this function using the console.logs!
// * notice how its difficult to track the stack frames
function logReverse(string) {
  console.log(string);
  if (!string.length) return "";
  let first = string[0];
  console.log(first, string);
  let result = logReverse(string.slice(1)) + first;
  console.log(result);
  return result;
}

console.log(logReverse("")); // nodarb

// Lets view this function using the debugger!
// * can pause the execution of code
function debuggedReverse(string) {
  debugger;
  if (!string.length) return "";
  let first = string[0];
  debugger;
  let result = debuggedReverse(string.slice(1)) + first;
  debugger;
  return result;
}

// console.log(debuggedReverse("brandon")); // nodarb


/*
  What is our base case?
  What is our recursive step?
*/

// Problem 1
// * sum all numbers up to n
function sumToN(n) {
  // base case
  if (n === 0) return n;

  // * we can have two base cases
  if (n < 0) return null;

  // recursive step
  return n + sumToN(n - 1);
}

console.log(sumToN(3)); // returns 6
// cant add 3 to func(2) till we get a return value
// sumToN(3) => 3 + func(2)
// sumToN(2) => 2 + func(1)
// sumToN(1) => 1 + func(0)
// sumToN(0) => return 0
// sumToN(1) => 1 + 0 => 1
// sumToN(2) => 2 + 1 => 3
// sumToN(3) => 3 + 3 => 6

// console.log(sumToN(1))  // returns 1
// console.log(sumToN(9))  // returns 45
// console.log(sumToN(-8))  // returns null

// Problem 2 w/Slice
// * sum all values of an array
// * removes first element
function sumArray(arr) {
  //base case
  if (arr.length === 0) return 0;

  // recursive step
  // * using slice
  return arr[0] + sumArray(arr.slice(1));
}

// ! slice example
// console.log([1,2,3].slice(1)); => [2,3]
// console.log(sumArray([1, 2, 3])); //  6

//sumArr([1,2,3]) => 1 + func([2,3])
//sumArr([2,3]) => 2 + func([3])
//sumArr([3]) => 3 + func([]);
//sumArr([]) => return 0
//sumArr([3]) => 3 + 0 => 3
//sumArr([2,3]) => 2 + 3 => 5
//sumArr([1,2,3]) => 1 + 5 => 6

// w/pop
// * remove last element
function sumArray(arr) {
  if (arr.length === 0) return 0;
  else {
    let popVal = arr.pop(); //pop to get the last element
    return sumArray(arr) + popVal;
  }
}
// w/shift
// * removes first element
function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr.shift() + sumArray(arr);
}

// w/slice
// * Problem 2 one liner
const sumArr = (arr) => (arr.length === 0 ? 0 : arr[0] + sumArr(arr.slice(1)));

// w/rest
// * destructure out first element
function sumArray(arr) {
  // base case
  if (arr.length === 0) return 0;

  // destruct out the first element
  // and put the rest into and array
  let [first, ...rest] = arr;
  return first + sumArr(rest);
}


// w/Default parameter
// * default parameter - allows us to default a variable to a value if one isnt passed in
// * If a value is passed in; then use that value
function sumArray(arr, sum = 0) {
  if(!arr.length) return sum;

  // add the removed number to the sum
  sum += arr.pop();

  return sumArray(arr, sum)
}

function range(start, end) {
  if (start >= end) return [];

  // console.log(start);

  // return [start].concat(range(start + 1, end))
  // return [start, ...range(start + 1, end)];

  let recurse = range(start, --end);
  recurse.push(end);
  return recurse;
  // let res = range(start + 1, end);
  // console.log(res);
}

function sentenceToArr(string) {
  if (!string.length) return [];

  // let firstLetter = string[0];

  //push
  let letters = [];
  letters.push(firstLetter);
  return letters.concat(sentenceToArr(string.slice(1)));

  return [string[0]].concat(sentenceToArr(string.slice(1)));

  return [string[0], ...sentenceToArr(string.slice(1))];

  let [first, ...rest] = string;
  return [first, ...sentenceToArr(rest)];
}

// console.log(sentenceToArr("hello"));// [h e l l o]

function fibonacci(n) {
  //!!START
  if (n === 1 || n === 2) {
      return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
  //!!END
}
//if we use default param
//sumArray([1,2,3], 0) => sumArr([1,2], 3)
  //sumArr([1,2], 3) => sumArr([1], 5)
    //sumArr([1], 5) => sumArr([], 6)
      //sumArr([], 6) => return sum = 6
    //sumArr([1], 5) => return 6
  //sumArr([1,2], 3) => return 6
//sumArr([1,2,3], 0) => return 6


// Problem 3
function iceCreamShop(flavors, favorite) {

  if(!flavors.length) return false;

  if(flavors[0] === favorite) return true;

  return iceCreamShop(flavors.slice(1), favorite)
}

console.log(iceCreamShop(['vanilla', 'strawberry'], 'blue moon')); // false
console.log(iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')); // true

/*
icecreamshop(['vanilla', 'strawberry'], favorite) => func(['strawberry'], blue moon);
  func(['strawberry'], blue moon) => func([], blue moon)
    func([], blue moon) => return false
*/
