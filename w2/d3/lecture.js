/*


  Callbacks!

  We previously learned that functions are first class objects!
    Three reasons why!
    1. Be stored in a variable - learnt last week
    2. Passed as an argument to a function - learning today
    3. Returned from a function - tomorrow

  What is a callback function?
    A callback function is a function that we pass to another function as an argument
    - we can pass an anonymous function as a argument
    * an anonymous function is a function with no name

  () => {} - anon function
  let name = () => {} - non anon function

  Helper function vs callback!
  - all callbacks are helper functions but not all helper functions are callbacks
  - a callback is a function that passes as an argument

  * Higher order function
  - a function that receives another function

*/

// higher order function
let foobar = (callback) => {
  console.log("inside our higher order functions", callback);
  console.log("foo");
  callback(); // we are calling the func
  console.log("bar");
};

// this is a callback function
let sayHello = () => console.log("Hello from our sayHello callback");
//storing a function in a variable is no different than storing other data types
let name = "brandon";
// console.log(name);//brandon
// what does the sayHello variable hold, a function
// console.log(sayHello);//[Function: sayHello]

// foobar(sayHello);

// callback function
let addTwo = (num) => num + 2;

let age = 27;
// higher order function
let addTwoToArr = (nums, cb) => {
  // console.log(nums, cb);//[ 1, 2, 3 ] [Function: addTwo]
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    // console.log(num);
    console.log("before callback num:", num);
    let resultOfNumAfterPassingToCallback = cb(num); //we are storing the return value of passing the current num to the callback function in a variable called resultOfNumAfterPassingToCallback
    console.log("after callback num:", resultOfNumAfterPassingToCallback);
    newArr.push(resultOfNumAfterPassingToCallback);
  }
  return newArr;
};

// console.log(addTwo);//[Function: addTwo]
// console.log(addTwo(10));//12

// passing function stored in a variable
// console.log("the return value of addTwoToArr", addTwoToArr([1, 2, 3], addTwo)); //[ 3, 4, 5 ]

// // we can pass an anon callback directly to our function call with implicit
// addTwoToArr([1, 2, 3], (num) => num + 2);

// // anon callback with fat arrow with non implicit
// addTwoToArr([1, 2, 3], (num) => {
//   return num + 2;
// });

// // pass a function with the function keyword
// addTwoToArr([1,2,3], function(num) {
//   return num + 2
// });


// can check if callback function is undefined
let add = function(num1, num2, cb) {
  // console.log(num1, num2, cb);
  if(cb === undefined) {
    return num1 + num2
  } else {
    return cb(num1 + num2);
  }
};

// console.log(add(9, 40));//49
// console.log(add(9, 40, Math.sqrt));//7



// array methods take in call backs
let isPrime = (num) => {
  if(num <= 1) return false;

  for(let i = 2; i < num; i++){
    if(num % i === 0) return false;
  };
  return true;
}

// console.log(isPrime(11))

let numsArr = [1,2,3,4,5,6,7,8,8,10,11];
let res = numsArr.filter(isPrime);// as we iterate through the nums array, pass the current num to the callback function
// that args are passed to the func under the hood, just like we don't see the iteration
// console.log(res);//[ 2, 3, 5, 7, 11 ]

// alt example


let timesTwo = num => num * 2;

// console.log(numsArr.map(timesTwo));// iteration and passing of args happen under the hood
/*
[
   2,  4,  6,  8, 10,
  12, 14, 16, 16, 20,
  22
]
*/
