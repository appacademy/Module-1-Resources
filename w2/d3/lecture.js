/*

  Callback functions!
  We previously leaned that functions are first class objects
  1. Be stored in a variable - last week
  2. Passed as an argument to another function - today
  3. Returned from a function - learn tomorrow

  A callback function is a function we pass to another a function as an argument

  Higher order function
  - function that receives or returns a function

*/

//higher order function
//the function that takes a in a callback
let foobar = (callbackFunction) => {
  console.log("2. cb - not invoked inside of callback:", callbackFunction); //inside of callback: [Function: sayHello]
  console.log("4. cb invoked - inside of callback:", callbackFunction()); //inside of callback: undefined
};

//lets make a callback function
let sayHello = () => console.log("3.hello from the sayhello callback");

// console.log(sayHello);//you can console.log a function and see it in the terminal => [Function: sayHello] =>this variable holds a function
// console.log(sayHello())//hey if you console.log a var and its a function, you can call i

//we invoking are higher order function
//pass as an argument our callback to the higher order function
// console.log('1. before function is called:', sayHello)
// foobar(sayHello)

//callback function
let addTwo = (num) => num + 2;

//higher order function
let addTwoToArr = (nums, callbackFunction) => {
  // console.log('array passed as arg', nums, 'callback function', callbackFunction );

  let newArr = []; //this new arr will hold all the values of the old arr but with 2 added to them

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    // console.log('num:', num)

    let resultAfterPassingNumToCB = callbackFunction(num); //call this function and pass the argument 1
    console.log(
      "before being passed to callback",
      num,
      "result after passing are number to the callback function",
      resultAfterPassingNumToCB
    );
    newArr.push(resultAfterPassingNumToCB);
  }

  return newArr;
};

// console.log(addTwo) //[Function: addTwo]
//passing function stored in a variable
// console.log(addTwoToArr([1, 2, 3], addTwo));

//we can pass an anon callback directly to our function call
//with implicit return
// console.log(addTwoToArr([1, 2, 3], (num) => num + 2));

//anon callback with fat arrow,
//without implicit return
// console.log(
//   addTwoToArr([1, 2, 3], (num) => {
//     return num + 2;
//   })
// );

//using function keyword
// console.log(
//   addTwoToArr([1, 2, 3], function (num) {
//     return num + 2;
//   })
// );

//all callbacks are helper functions, but not all helper functions are callbacks
//what makes a function a callback, is the fact its passed as an argument to another function

//another example
let add = function(num1, num2, cb) {
  // console.log(num1, num2, cb);
  if(cb === undefined) {
    return num1 + num2;
  } else {
    return cb(num1 + num2);
  }
};


// console.log(add(4,9));//13
//Math.sqrt is our callback
//its a built in method in javascript
// console.log(add(9, 40, Math.sqrt))//7


let isPrime = (num) => {
  if(num <= 1) return false;

  for(let i = 2; i < num; i++) {
    if(num % i === 0) return false;
  }

  return true;
}

let numsArr = [1, 2, 3, 4, 5, 6, 7];

let res = numsArr.filter(isPrime)
// console.log(res)


let timesTwo = (num) => num * 2;

console.log(numsArr.map(timesTwo))
