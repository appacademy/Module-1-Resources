/*



  Callbacks!

  We previously learned that functions first class objects!
  1. be stored in a variable - learnt that last week
  2. passed as an argument to a function -  learn today!
  3. return from a function - learn tomorrow!


  A callback function!
  A callback function is a function that we pass o another function as argument!
    - we can pass anon function as a arg!

  * helper vs callback
    - all callbacks are helper functions but not all helper functions are callbacks
    - a callback is a function passed as an arg!

  * Higher order function
    - function that receives or returns a function

*/

//higher order function
let foobar = (cb) => {
  // console.log(2, cb);
  console.log("foo");
  console.log(cb); //[Function: sayHello] - this holds the function we passed in as a arg
  cb();
  console.log("bar");
};

//callback function
let sayHello = () => console.log("hello from the callback function");
// console.log(1, sayHello); ///[Function: sayHello] this is a function stored in a var

// foobar(sayHello);

//callback function
let addTwo = (num) => num + 2;

//higher order function
let addTwoToArr = (nums, callback) => {
  console.log(callback); //[Function: addTwo]
  // console.log(nums)//[1,2,3];
  // console.log(callback(2))//were logging the return value of passsing 2 to the addTwo callback which is 4
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i])
    let num = nums[i];
    // console.log('before callback:', num);
    let resultAfterPassingNumToCallback = callback(num); //we just stored the return value of passing the current num to the callback function in a variable
    // console.log('after callback:', resultAfterPassingNumToCallback);
    newArr.push(resultAfterPassingNumToCallback);
  }

  return newArr;
};

//passing a function stored in a variable as a callback
// console.log(addTwoToArr([1,2,3], addTwo))

//we can pass an anon function directly to our function call
//with implicit return
// console.log(addTwoToArr([1, 2, 3], (num) => num + 2));

// anon callback with fat arrow non implicit
// console.log(
//   addTwoToArr([1, 2, 3], (num) => {
//     return num + 2;
//   })
// );

// //function keyword
// console.log(
//   addTwoToArr([1, 2, 3], function (num) {
//     return num + 2;
//   })
// );

//another example
let add = (num1, num2, banana) => {
  // console.log(banana)

  if (banana === undefined) {
    return num1 + num2;
  } else {
    return banana(num1 + num2);
  }
};

// console.log(add(9, 40)); //49
// console.log(add(9, 40, Math.sqrt)); //7
// console.log(Math.sqrt(49))//7

//array methods takes in callbacks
let isPrime = (num) => {
  // if (num <= 1) return false;

  // for (let i = 2; i < num; i++) {
  //   if (num % i === 0) return false;
  // }

  // return true;
  return num
};

let numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let res = numsArr.filter(isPrime)

// console.log(res);


let timesTwo = num => num * 2;

console.log(numsArr.map(timesTwo));
