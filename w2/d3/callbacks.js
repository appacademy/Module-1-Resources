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

  Callback vs Helper functions
  * All callbacks are helper functions
  * But not all helper functions are callbacks
    * Callbacks must be explicitly passed as an argument to a function

*/

// callback = cb = function() {}
// numbers = arr = [1,2,3]
function higherOrder(callback, numbers) {
  // console.log('inside higher order',callback);// [Function: cb]
  // console.log(callback());// NaN
  // console.log(callback(10));// 11
  // let result = callback(20);
  // console.log(result);// 21
  // console.log(numbers);
  let array = [];
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    // console.log(number);
    // console.log(callback);//[Function: cb] || [Function: cb] || [Function: cb]
    // console.log(callback());// NaN | NaN | NaN
    // console.log(callback(10));// 11 | 11 | 11
    // console.log(callback(number));// 2 | 3 | 4
    let numPlusOne = callback(number);
    // console.log(numPlusOne);//<---????
    array.push(numPlusOne);
  }

  console.log(array); //<----????
  return array;
}
// let value = true
let cb = function (num) {
  return num + 1;
};

// console.log('before passing to func', cb);
let arr = [1, 2, 3];
// higherOrder(cb, arr)

// console.log(arr.map((num) =>  num + 1));//[ 2, 3, 4 ]

//isPrime
// TY Juan D!
// function isPrime(num) {
//   for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
//       if(num % i === 0) return false;
//   return num > 1;
// }

// let array2 = [1,2,3,4,5,6,7];

// console.log(array2.filter(isPrime));//[ 2, 3, 5, 7 ]

// let res = [];
// for(let i = 0; i < array2.length; i++){
//   let number = array2[i];
//   if(isPrime(number)) res.push(number)
// }
// console.log('==>',res);

function doubleNumbers(numbers, cb) {
  let doubled = [];

  for (let num of numbers) {
    let doubledNum = cb(num);
    doubled.push(doubledNum);
  }

  return doubled;
}

let double = (num) => num * 2;

// passing callback as named function
console.log(doubleNumbers([1,2,3], double))// [ 2, 4, 6 ]

//passing callback as a anon function using function keyword
console.log(
  doubleNumbers([1, 2, 3], function (num) {
    return num * 2;
  })
); // [ 2, 4, 6 ]


//passing callback as anon function using fat arrow explicit
console.log(
  doubleNumbers([1, 2, 3], (num) => {
    return num * 2;
  })
); // [ 2, 4, 6 ]

// passing callback as anon function using fat arrow implicit
console.log(doubleNumbers([1, 2, 3], (num) =>  num * 2)); // [ 2, 4, 6 ]
