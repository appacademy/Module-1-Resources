/*
  Callbacks!

  We previously learned that functions are first class objects!
  Meaning they can:
    1. Be stored in a variable - Learnt last week
    2. Passed as an argument to a function - Today
    3. Returned from a function - Tomorrow

    What is a callback?
    - A callback is a function we pass to another function as an argument

    Callback vs helper functions
    - helper function helps out another function
    - callback function is alwalys passed as an arg to another function

    Higher order function
    - Function that receives or returns a function

*/

//higher order function, it takes in a callback
let foobar = (cb) => {
  // console.log('!!!!!!!!!',cb)
  console.log("foo");
  cb();
  console.log("bar");
};

//callback function
let sayHello = () => {
  // console.log('Hello')
};

// console.log(sayHello)//[Function: sayHello]
// let name = 'brandon'
//were passing the say hello function as arg to our higher order function - foobar
// foobar(sayHello)//

//omitting the curly braces and the return keyword, makes it implict
//callback function
let addTwo = (num) => num + 2;

//higher order function
let addTwoToArr = (nums, callbackbananble) => {
  console.log(callbackbananble);
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    // console.log('before',num, 'after', callbackbananble(num))
    newArr.push(callbackbananble(num));
  }
  return newArr;
};

// we are passing addTwo as a callback to the addTwoToArr higher order function
//we can pass anonymous function direclty as a callback to another function
// console.log(
//   addTwoToArr([1, 2, 3], function (num) {
//     return num + 2;
//   })
// ); //[ 3, 4, 5 ]
// console.log(addTwoToArr([1, 2, 3], addTwo));

let isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// console.log(isPrime(4))
let numsArr = [1, 2, 3, 4, 5, 6, 7];
console.log(numsArr.filter(isPrime));

let timesTwo = (num) => num * 2;
console.log(numsArr.map(timesTwo));
console.log(numsArr.map((num) => num * 2))
// //[
//   2,  4,  6, 8,
//   10, 12, 14
// ]
