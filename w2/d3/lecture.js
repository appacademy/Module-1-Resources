/*



  Callbacks!

  We previously learned that functions are first class objects!

  Three reason why?
  1. Store them in a variable - learnt last week
  2. Passed as an argument to another function - learn today
  3. Returned from a function - tomorrow

  What is a callback function?
  - A callback function is a function that we pass to another function as argument.
  * we can pass anonymous functions as callbacks

  What is a higher order functions?
  - A function that receives or returns a function

  Helper function vs Callback
  - all callbacks are helper functions but not all helper functions are callbacks
  - a callback has to be passed as an argument


*/

//higher order function
let foobar = (callback) => {
  // console.log(callback);//[Function: sayHello]
  // callback();//hello from our callback
  console.log("foo");
  callback();
  console.log("bar");
};

//we can store a number in a variable
let age = 27;
// console.log(age);//27

// we can do the same thing with a function
// this is the callback function
let sayHello = () => console.log("hello from our callback");
// console.log(sayHello);//[Function: sayHello]
// sayHello();//hello from our callback'

// foobar(sayHello);

//higher order function
let addTwoToArr = (nums, cb) => {
  // console.log(nums, cb);// [ 1, 2, 3 ] [Function: addTwo]
  // console.log(cb(5));//[ 1, 2, 3 ] [Function: addTwo]
  console.log(cb);

  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    // console.log('before:', num);// 1 2 3
    let resOfNumAfterPassingToCallback = cb(num);
    // console.log('after:', resOfNumAfterPassingToCallback);//3 4 5
    newArr.push(resOfNumAfterPassingToCallback);
  }
  return newArr;
};

//helper function
let addTwo = (num) => num + 2;
// console.log(addTwo);//[Function: addTwo]
// console.log(addTwo(5));//7

//various ways to pass functions as arguments

//is passing a variable that holds a  function
// console.log(addTwoToArr([1, 2, 3], addTwo)); //[ 3, 4, 5 ]

//we can pass an anon callback directly to a function
//using implict return
// console.log(addTwoToArr([1, 2, 3], (num) => num + 2));

// anon callback with fat arrow non implicit - explicit
// console.log(
//   addTwoToArr([1, 2, 3], (num) => {
//     return num + 2;
//   })
// );

// pass a anon function using the function declaration
// console.log(
//   addTwoToArr([1, 2, 3], function (num) {
//     return num + 2;
//   })
// );


//check if callback is undefined
// higher order function
let add = (num1, num2, cb) => {
  // console.log(num1, num2, cb);
  if(cb === undefined) {
    return num1 + num2;
  } else {
    return cb(num1 + num2);
  }
};

// //callback
// console.log(add(9, 40));//49
// console.log(add(9, 40, Math.sqrt));//7



// array methods take in callbacks
//callback
let isPrime = (num) => {
  if(num <= 1) return false;

  for(let i = 2; i < num; i++){
    if(num % i === 0) return false;
  };

  return true;
};

// console.log(isPrime(10));
let numsArr = [1,2,3,4,5,6,7,8,9,10];

let res = numsArr.filter(isPrime);
console.log(res);//[ 2, 3, 5, 7 ]
//we iterate through the nums array under the hood, and passing the value to the callback -> isPrime, if the number after being passed to the callback results in true, it will be put into the resulting array

// alt example

let timesTwo = num => num * 2;
let res2 = numsArr.map(timesTwo);
console.log(res2);

/*
[
   2,  4,  6,  8, 10,
  12, 14, 16, 18, 20
]
 */
