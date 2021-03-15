// function sum(num1, num2) {
//     return num1 + num2;
// }

// console.log(sum(1, 2));

/* 
Write a function called hello that intakes an 
array of names and prints "Hello," plus the name, for
each name. Must use .forEach()

hello(['Mylo', 'Buster']) prints 'Hello, Mylo', 'Hello, Buster'
*/

// function hello(arr) {
//     arr.forEach(function (_el, i, arr) {
//         console.log(i);
//     });
// }
// hello(['Mylo', 'Buster']);

/* 
  Write a function called timesTwo that intakes an
  array of numbers and returns a new array where all 
  of the numbers are multiplied by 2. You must use .map()

  timesTwo([1, 2, 3]) => [2, 4, 6]
  timesTwo([-1, 6, 0]) => [-2, 12, 0]
  */

// function timesTwo(arr) {
//     let result = arr.map(function (num, i, array) {
//         return num * 2;
//     });
//     return result;
// }

// function timesTwo2(arr) {
//     let result = [];
//     arr.forEach(function (num) {
//         result.push(num * 2);
//     });
//     return result;
// }

// console.log(timesTwo([1, 2, 3])); // [2, 4, 6]
// console.log(timesTwo2([1, 2, 3])); // [2, 4, 6]

/* 
  Write a function called evens that intakes an
  array of numbers and returns a new array of only the
  even numbers from the original array. You must use
  .filter()

  evens([1, 2, 3]) => [2]
  events([42, 44, 45]) => [42, 44]
  */

// function evens(arr) {
//     let result = arr.filter(function (num, i, array) {
//         return num % 2 === 0;
//     });
//     return result;
// }

// console.log(evens([1, 2, 3]));

// let nums = [3, 7, 5, 9];

// let sum = nums.reduce(function (accum, num) {
//     if (num % 3 === 0) {
//         return accum + num;
//     } else {
//         return accum;
//     }
// });

// console.log(sum);

let sumAt100 = nums.reduce(function (accum, num) {
    return accum + num;
}, 100);

console.log(sumAt100);

/* 
  Write a function called returnNames that intakes an
  array of names and returns a string of "Names: " with
  all of the names attached after. Must use the .reduce()

  returnNames(['Mylo']) => Names: Mylo 
  returnNames(['Rick', 'Morty']) => Names: Rick Morty 
  */

let returnNames = function (names) {
    return names.reduce(function (accum, name) {
        return accum + ' ' + name;
    }, 'Names:');
};

console.log(returnNames(['Mylo']));
console.log(returnNames(["Rick", "Morty"]));
