let func1 = function () {
  console.log("I'm stored in a variable");
};

// let arr = [
//   function () {
//     console.log("I'm stored in an array");
//   },
//   1,
//   "hello",
// ];

let obj = {
  func: function () {
    console.log("I'm stored in an object");
  },
};

// console.log(func1());
// console.log(arr[0]());
// console.log(obj.func());

let higherOrderFunction = function (callback) {
  callback();
};

let intoAFunction = function () {
  console.log("I'm being passed into a function");
};

let intoAFunctionPt2 = function () {
  console.log("I'm ALSO being passed into a function");
};

// higherOrderFunction(intoAFunction); // I'm being passed into a function
// higherOrderFunction(intoAFunctionPt2); // I'm ALSO being passed into a function

function HOF() {
  return function () {
    console.log("I'm being returned from a function");
  };
}

// console.log(HOF()); // this will be the inner function

// HOF()(); // this will invoke the inner function

// let returnFromFunc = HOF(); // we could also save it to a variable

// console.log(returnFromFunc); // this will be the inner function

// returnFromFunc(); // then call the variable

/* 
is called on an array // not going to be able to do this yet
we'll change the first arg to an array

intakes a function
  that function can be called with ele, i, origArr

it iterates over the array and calls the callback forEach ele
of the array

doesn't return anything
*/
function myForEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    cb(ele, i, arr);
  }
}

let arr = [1, 2, 3];

arr.forEach(function (ele, i, arr) {
  console.log(ele, i, arr);
});

myForEach(arr, function (ele) {
  console.log(ele);
});

myForEach(arr, function (ele, i, arr) {
  console.log(ele, i, arr);
});
