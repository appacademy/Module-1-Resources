/*

  Callbacks!

  We previously learned that functions are first class objects!
    Three reason why!
      1. Be stored in a variable - learnt last week
      2. Passed as an argument to a function - learning today
      3. Returned from a function -  tomorrow

    A callback function is a function we pass to another function as an argument
      - We can pass a anon function directly

    Higher Order functions
      - Function that receives or returns a function
*/

//higher order function
let foobar = (cb) => {
  // console.log('from inside higher order fun', cb)
  console.log("foo");
  console.log(cb);
  cb();
  console.log("bar");
};

//this is a callback function
//we will pass this func as in arg to our higher order func
let sayHello = () => console.log("hello from our callback");
// console.log(sayHello)//[Function: sayHello]
// foobar(sayHello)

//callback function
let addTwo = (num) => num + 2;

//higher order function
let addTwoToArr = (nums, cb) => {
  // console.log(cb(100))102
  let newArr = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    //as we iterate, we create a num variable for nums[i];
    //we pass that nums variable to the callback
    //the callback is a function, a function evaluates to its return
    //so after passing the num to the callback, we will get back the return value of that callback function
    //we can then use that value, to do something, in this case were pushing the value of the number after passing it to the callback, into the new arr as we iterate.
    let resultAfterPassingNumToCB = cb(num);
    // console.log(num, cb(num));
    newArr.push(resultAfterPassingNumToCB);
  }

  return newArr;
};

// console.log(addTwoToArr([1,2,3], addTwo))//[ 3, 4, 5 ]

// we can pass an anonymous callback directly to our function call
// console.log(addTwoToArr([1, 2, 3], (num) => num + 2)); //[ 3, 4, 5 ]

// console.log(addTwoToArr([1, 2, 3], (num) => { return num + 2})); //[ 3, 4, 5 ]
// console.log(
//   addTwoToArr([1, 2, 3], function (num) {
//     return num + 2;
//   })
// ); //[ 3, 4, 5 ]

let add = function (num1, num2, cb) {
  // console.log(cb())
  if (cb === undefined) {
    return num1 + num2;
  } else {
    return cb(num1 + num2);
  }
};

// console.log(add(9, 40));
// console.log(add(9, 40, Math.sqrt));

//array methods take in callbacks

let isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

// console.log(isPrime(12))

let numsArr = [1, 2, 3, 4, 5, 6, 7];

// let res = numsArr.filter(isPrime); //[ 2, 3, 5, 7 ]
// console.log(res);

let timesTwo = (num) => num * 2;

console.log(numsArr.map(timesTwo))
