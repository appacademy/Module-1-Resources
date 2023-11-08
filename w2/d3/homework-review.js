// higher order function
// param = callback = function
// callback = function
// param = function

// function higherOrder(param) {
//   // console.log(param);//<--- [Function: callback]
//   // console.log(param());//<--
//   param();
//   return param;
// };

// let string = 'hello';

// let callback = () => {
//   console.log('hello from callback');
//   return true;
// }

// higherOrder(callback);

//higher order function
function doubleNumbers(array, callback) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let number = array[i];

    let doubled = callback(number);
    result.push(doubled);
  }

  return result;
}

let numbers = [1, 2, 3];
let double = (num) => num * 2;

// console.log(doubleNumbers(numbers, double));// [ 2, 4, 6 ]

// console.log(numbers.map((num) => num * 2)); // [ 2, 4, 6 ]

// console.log(doubleNumbers(numbers, (num) => num * 2)); // [ 2, 4, 6 ]

// console.log(
//   doubleNumbers(numbers, (num) => {
//     return num * 2;
//   })
// ); // [ 2, 4, 6 ]

// console.log(
//   doubleNumbers(numbers, function (num) {
//     return num * 2;
//   })
// ); // [ 2, 4, 6 ]

// console.log(
//   doubleNumbers(numbers, function name(num) {
//     return num * 2;
//   })
// ); // [ 2, 4, 6 ]
