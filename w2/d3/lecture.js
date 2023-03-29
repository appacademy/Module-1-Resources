/*



    Callbacks!

    we previously learned that functions are first class objects
    1. Stored in a variable - learnt that last week
    2. Passed as an argument to a function - learn today!
    3. Return from a function - learn tomorrow

    A callback function is a function that we pass to another function as an argument
      - we can pass anon function as a arg!
        * an anonymous function is a function with no name

    Helper functions vs callback!
    - all callbacks are helper function but not all helper functions are callbacks
    - a callback is a function passed as an argument

    () => {} - anon func
    let name = () => {} - not anon

    * Higher order functions
      - a function that receives or returns a function
*/

//higher order function

let foobar = (cb) => {
  console.log("foo");
  console.log(cb); //[Function: sayHello]
  cb();
  console.log("bar");
};

//callback function
let sayHello = () => console.log("hello from the callback");
// console.log(sayHello);//[Function: sayHello] - this is a function stored in a variable
// console.log(sayhello());//undefined - console.log('hello from the callback')
// foobar(sayHello);

//callback function
let addTwo = (num) => num + 2;

//higher order function
let addTwoToArr = (nums, callback) => {
  // console.log(callback);//[Function: addTwo]

  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    console.log("before callback,", num);
    let resultAfterPassingNumToCallback = callback(num); //we are passing the current ele in iteration to the callback funciton an storing the return value in a variable called resultAfterPassingNumToCallback

    console.log("after callback", resultAfterPassingNumToCallback);
    newArr.push(resultAfterPassingNumToCallback);
  }

  return newArr;
};

// various ways to pass function as a callback
// we are passing two args, an array and a variable that holds a function
// console.log(addTwo)//Function: addTwo]

//we are passing a variable that holds a function
console.log(addTwoToArr([1, 2, 3], addTwo));

//we can pass an anonymous function directly to our function call
//with implicit return
console.log(addTwoToArr([1, 2, 3], (num) => num + 2));

//anon callback with fat arrow
//not implicit
console.log(
  addTwoToArr([1, 2, 3], (num) => {
    return num + 2;
  })
);


//function keyword!
console.log(
  addTwoToArr(
    [1, 2, 3], function (num) { return num + 2;}
  )
);

// console.log((('hello')))
