
/*

  Callbacks!

  We previously learned that functions are first class objects!
    Three reason why!
      * 1. Be stored in a variable:
        ** Function Expression
      * 2. Passed as an argument to a function:
        ** Callback Functions
      * 3. Returned from a function:
        ** Closures/Recursion

  What is a callback function?
    * A callback function is a function passed into another function as an argument
    * Which is then invoked inside the outer function to complete some kind of routine or action

  What is a higher order function?
    * Function that receives or returns a function

  When passing a anonymous callback function, use a arrow function
    * Much cleaner and shorter
    [1,2,3].map(num => num * 10);// [10,20,30];
    * vs
    [1,2,3].map(function(num){
      return num * 10;
    });
    * Its also MDN's recommended way


  ? Call Stack
  * When a function is called, it is pushed on to the stack
  * When a function is returned, it is popped off the stack
  * Whatever function is currently at the top of the stack, is js focus of attention
  * stack - first in last out

*/

// higher order function
// * when the callback function is passed, its new variable name to reference it by is cb
function higherOrder(cb) {
  console.log("Entering higher order function");
  console.log("1");
  console.log("callback:", cb); // [function:callback]
  //* same function we say when we console.logged the callback outside the function
  cb(); // Hello from callback function
  console.log("2");
  console.log("Exiting higher order function");
}

// callback function
// * an anonymous function stored in a variable
let callback = () => console.log("Hello from callback function");
console.log(callback); // [function:callback];

callback(); // Hello from callback function

// * passing the callback function to the higher order function as an argument
higherOrder(callback);

// * no different than passing any other variable as an argument to the function
let variable = "this is a string";
higherOrder(variable);

/*

  Different ways to pass function as callbacks

  1. Anonymous Implicit Callback
    * Implicit
    * Preferred way
    (name) => name.includes('o')
  2. Anonymous Explicit Callback
    * Explicit
    * Uses return keyword + {}
      (name) => {
        return name.includes('o');
      }
  3. Anonymous Callback Function Keyword
    * Uses function keyword
    function(name) {
      return name.includes('o');
    }

*/

// callback function
let double = (num) => num * 2;

// higher order function
function doubleNumbers(numbers, callback) {
  console.log(callback); // [function];
  console.log(numbers); // [1,2,3];
  console.log(callback(21)); // 23;

  let doubled = [];

  // double number and pass to new array
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    console.log("number before being passed to callback: ", number);

    // pass number to callback function
    let doubledNumber = callback(number);

    console.log("number after being passed to callback: ", doubledNumber);
    // * we are storing the return value of passing the current number to the callback function in a variable called doubledNumber
    // * we will then push the doubled number into the doubledArray

    doubled.push(doubledNumber);
    console.log(doubled);
  }

  return doubled;
}

// passing function stored in variable to higher order function
// * callback is the double function
console.log(doubleNumbers([1, 2, 3], double)); // [2,4,6];

// * no different than passing the array in a variable instead
let array = [1, 2, 3];
console.log(doubleNumbers(array, double)); // [2,4,6];

// we can pass an anonymous callback to our function
// * Implicit return - no curly's or return keyword
// * this is the cleanest way to pass callbacks
console.log(doubleNumbers([10, 20, 30], (num) => num * 2)); // [20,40,60];

// anonymous callback with explicit return
// * uses return keyword and curly's
console.log(
  doubleNumbers([100, 200, 300], (num) => {
    return num * 2;
  })
); // [200,400,600];

// anonymous callback using function keyword
console.log(
  doubleNumbers([1000, 2000, 3000], function (num) {
    return num * 2;
  })
); // [2000,4000,6000];

// can check if callback is undefined
function add(num1, num2, cb) {
  console.log(cb);
  console.log(cb()); // be careful to note your data types to avoid errors

  if (cb === undefined) {
    return num1 + num2;
  } else {
    // return the result of passing the sum of num1 and num2 to the callback function
    return cb(num1 + num2);
  }

  // return cb(num1 + num2);
  // * better to omit else
}

console.log(add(9, 40)); // 49

// * Math.sqrt is a built in method we are passing as a callback function
console.log(add(9, 40, Math.sqrt)); // 7

// array methods takes in callbacks

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(isPrime(11)); // true

let numbers = [1, 2, 3, 4, 5, 6, 7];

// store in the primes variable the result of calling on the numbers array the filter method
// * filter test each element in array against a condition
// * the condition in this case is the logic if the isPrime function
// * only numbers that are prime will be put into the resulting array
let primes = numbers.filter(isPrime);
console.log(primes); // [2,3,5,7];

// above we iterated and pushed elements after doubling them into a new array
// * we could skip the for loop and use .map

let timesTwo = (num) => num * 2;

console.log(numbers.map(timesTwo)); // [2,4,6,8,10,12,14];


// One thing to get out the way
// * The implementation of array methods are abstracted under the hood
// * Iteration is happening under the hood
// * Usually we would have to provide a starting index, condition to keep looping, and a step towards completing the loop.
// * This is however done for us is assumed you want to iterate over every element of what ever array you are calling the method on
// * we are going to see how much is abstracted by created our own methods

// 1. myForEach - .forEach
// * The forEach() method executes a provided function once for each array element.
// * We use forEach when we want a connivent/quick way to write a for loop

let names = ["brandon", "anthony", "anabel", "charles", "trevor"];

names.forEach((name, i, names) => console.log(name, i, names));

function myForEach(names, cb) {
  // * As we iterate; we are passing the name, i, and names array to the callback function
  // * that callback function then takes in those variables as arguments to then print them to the terminal
  // * that is what an array method is doing; passing elements as we iterate to callback functions
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    cb(name, i, names);
  }
}

myForEach(names, (name, i, names) => console.log(name, i, names));

// 2. myMap - .map
// * The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// * we use map whenever we want to return a new array of elements modified in some way

let upperCasedNames = names.map((name) => name.toUpperCase());
console.log(upperCasedNames); //

function myMap(names, cb) {
  let upperCasedNames = [];

  // pass the upper cased names into a new array
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    let upperCasedName = cb(name);
    upperCasedNames.push(upperCasedName);
  }
  return upperCasedNames;
}

console.log(myMap(names, (name) => name.toUpperCase()));


// 3. myFilter - .filter
// * The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
// * we use filter whenever we want to return a new array of elements that meet a condition

let filtered = names.filter(name => name.includes('x'));
console.log(filtered);//

function myFilter(names, cb) {
  let filtered = [];

  // push only names that result in true when passed to the callback function into the filtered array
  for(let i = 0; i < names.length; i++) {
    let name = names[i];
    console.log(cb(name));// returns a boolean
    if(cb(name) === true) {
      filtered.push(name);
    }
  }
}

console.log(myFilter(names, (name) => names.includes('x')));//


// 4. myEvery - .every
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

let boolean = names.every(name => names.includes('o'));
console.log(boolean);//


function myEvery(names, cb){
  for(let i = 0 ; i < names.length; i++) {
    let name = names[i];

    // stop loop as soon as result of passing name to callback is false
    // * aka name does not include the letter o
    if(cb(name) === false) {
      return false;
    }
  };
  // if we complete the iteration without meeting the condition;
  // then its implied that every name includes the letter o
  return true;
}

console.log(myEvery(names, (name) => name.includes("o")));//
