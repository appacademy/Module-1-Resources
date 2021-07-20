// let func1 = function () {
//   console.log("hello");
// };

// let func2 = function () {
//   console.log("bye");
// };

// func1();

// // let arr = [1, 2];
// // console.log(arr[0] + arr[1]);

// let funcArr = [func1, func2];
// funcArr[0]();
// funcArr[1]();

// let obj = {
//   someMethod: func1,
//   someMethod2: func2,
// };

// obj.someMethod();
// obj.someMethod2();

// function outerFunc(legitAnyFunction, appacademy) {
//   legitAnyFunction();
//   appacademy();
// }

// function sayHi() {
//   console.log("hello");
// }

// function sayBye() {
//   console.log("bye");
// }

// outerFunc(sayHi, sayBye);

let arr = [1, 2, 3];

// arr.forEach(function (num, i, array) {
//   console.log(num, i, array);
// });



let myForEach = function (arr, cb) {
  //iterates through an array
  for (let i = 0; i < arr.length; i++) {
    //invokes the cb for each element of the array
    cb(arr[i], i, arr)
  }
}

myForEach(arr, function (num, i, array) {
  console.log(num, i, array);
});

