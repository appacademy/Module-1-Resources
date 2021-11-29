// Callbacks

// let math = function (num1, num2, cb) {
//   let res = cb(num1, num2);
//   return res;
// };

// let multiply = function (num1, num2) {
//   return num1 * num2;
// };

// let exponent = function (base, exponent) {
//   return base ** exponent;
// };

// console.log(math(2,6,multiply));
// console.log(math(2,3,exponent));




// forEach
// let holyTrinity = ["Bruce", "Diana", "Kal"];

// // Regular forEach
// holyTrinity.forEach(function (el, i, arr) {
//   console.log(el + ' is at idx ' + i, arr);
// });


// // Custom forEach
// let myForEach = function(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     let el = arr[i];
//     cb(el, i, arr);
//   }
// }

// let func = function(el, i, arr) {
//   console.log(el + ' is at idx ' + i, arr);
// };

// myForEach(holyTrinity, func);


// custom reduce
let arr = [1,2,3,4];

console.log(arr.reduce(function(accum, el, i, arr) {
  return accum + el;
}, 0));

let myReduce = function(arr, cb, initialAccum) {
  let accum;
  let startIndex;

  if (initialAccum !== undefined) {
    accum = initialAccum;
    startIndex = 0;
  } else {
    accum = arr[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < arr.length; i++) {
    let el = arr[i];
    accum = cb(accum, el, i, arr);
  }

  return accum;
};

let func = function(accum, el) {
  return accum + el;
};

console.log(myReduce(arr, func));