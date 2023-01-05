/*


  Callback functions!
  We previously learned that functions are first class objects!
  Three reasons why!
  1. Be stored in a variable - learn in week 1
  2. Passed as an argument to another function - learn today
  3. Returned from a function - learn tomorrow

  A callback function is a function  we pass to another function as an argument
    - we can pass a anonymous function directly

  Higher order functions
   - function that receives or returns a function

*/

//show an example!
//higher order function
let foobar = (cb) => {
  console.log("FOO");
  console.log("cb:", cb); //[Function: sayHello]
  cb(); //when we invoke cb, out callback function, we enter that function and complete it before moving to the next line
  console.log("bar");
};

//callback function
let sayHello = () => console.log("hello from our call back");
// console.log(sayHello)//[Function: sayHello]

//passing function in a variable
// foobar(sayHello);

//pass a function directly
// foobar(() => console.log("hello from our callback 2"));

// //pass a function directly with function keyword
// foobar(function () {
//   console.log("hello from our callback 3");
// });

/*
FOO
[Function: sayHello]
hello from our call back
bar
*/

//callback function
let addTwo = (num) => num + 2;

//higher order function
let addTwoToArr = (nums, cb) => {
  // console.log('callback function', cb);
  // console.log(nums)

  let newArr = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    let resultAfterPassingNumtoCb = cb(num);
    // console.log(
    //   "num before cb:",
    //   num,
    //   "num after cb:",
    //   resultAfterPassingNumtoCb
    // );
    newArr.push(resultAfterPassingNumtoCb)
  }

  return newArr;
};

// console.log(addTwo);
//were calling our higher order function
// console.log(addTwoToArr([1, 2, 3], addTwo));//[ 3, 4, 5 ]
// console.log(addTwoToArr([1, 2, 3], (num) => num + 2));//[ 3, 4, 5 ]
// console.log(addTwoToArr([1, 2, 3], (num) => { return num + 2}));//[ 3, 4, 5 ]
// console.log(addTwoToArr([1, 2, 3], function(num) { return num + 2}));//[ 3, 4, 5 ]


let add = function (num1, num2 , cb) {
  // console.log('cb', cb)
  if(cb === undefined) {
    return num1 + num2;
  } else {
    return cb(num1 + num2)
  }
};

// console.log(add(9, 40));//49
// console.log(add(9, 40, Math.sqrt))//7

let isPrime = (num) => {
  if(num <= 1) return false;

  for(let i = 2; i < num; i++) {
    if(num % i === 0) return false;
  }

  return true;
}

// console.log(isPrime(11))//true

let numsArr = [1,2,3,4,5,6,7,8];

let res = numsArr.filter(isPrime);

console.log(res);//[ 2, 3, 5, 7 ]


let timesTwo = (num) => num * 2;

console.log(numsArr.map(timesTwo))

/*
[
   2,  4,  6,  8,
  10, 12, 14, 16
]
*/
