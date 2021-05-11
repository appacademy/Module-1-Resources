/* 
Write a function called hello that intakes an 
array of names and prints "Hello," plus the name, for
each name. Must use .forEach()

hello(['Mylo', 'Buster']) prints 'Hello, Mylo', 'Hello, Buster'
// WHAT DOES IT RETURN?!?!?!!? 

ALWAY UNDEFINED
*/

// function hello(names) {
//   // for (let i = 0; i < names.length; i++) {
//   //     let name = names[i];
//   //     console.log('Hello, ' + name);
//   // }

//   names.forEach(function (name, i, arr) {
//     console.log("Hello, " + name);

//   });
// }

// hello(["Mylo", "Buster"]);

/* 
Write a function called timesTwo that intakes an
array of numbers and returns a new array where all 
of the numbers are multiplied by 2. You must use .map()

timesTwo([1, 2, 3]) => [2, 4, 6]
timesTwo([-1, 6, 0]) => [-2, 12, 0]
*/

// function timesTwo(nums) {
//   // let res = [];

//   // for (let i = 0; i < nums.length; i++) {
//   //   let num = nums[i];
//   //   res.push(num * 2);
//   // }

//   // return res;

//   let res = nums.map(function (num, i, arr) {
//     return num * 2;
//   });

//   return res;
// }

// console.log(timesTwo([1, 2, 3]));
// console.log(timesTwo([-1, 6, 0]));

/* 
Write a function called evens that intakes an
array of numbers and returns a new array of only the
even numbers from the original array. You must use
.filter()

evens([1, 2, 3]) => [2]
evens([42, 44, 45]) => [42, 44]
*/

// function evens(nums) {
//   // let res = [];

//   // for (let i = 0; i < nums.length; i++) {
//   //   let num = nums[i];
//   //   if (num % 2 === 0) {
//   //     res.push(num);
//   //   }
//   // }
//   // return res;
//   let res = nums.filter(function (num, i, arr) {
//     return num % 2 === 0 && num > 10;
//   });

//   return res;
// }

// console.log(evens([1, 2, 3]));
// console.log(evens([42, 44, 45]));

/* 
Write a function called reduceSum that intakes an arr and return the sum of 
the elements must use .reduce() 

*/
// function reduceSum(nums) {
//   // let accum = nums[0];

//   // for (let i = 1; i < nums.length; i++) {
//   //   let num = nums[i];
//   //   accum += num;
//   // }

//   // return accum;

//   let res = nums.reduce(function (accum, num, i, arr) {
//     console.log(i);
//     return accum + num;
//   }, 10);

//   return res;
// }

// console.log(reduceSum([1, 2, 3])); // 6

/* 
Write a function called sum that intakes an
array of names and returns a string of "Names: " with
all of the names attached after. Must use the .reduce()

reduce(['Mylo']) => Names: Mylo 
reduce(['Rick', 'Morty']) => Names: Rick Morty 
*/

// function nameString(names) {
//   let res = names.reduce(function (accum, name, i, arr) {
//     console.log(accum);
//     return accum + " " + name;
//   }, "Names:");

//   return res;
// }

// console.log(nameString(["Mylo"]));
// console.log('_________')
// console.log(nameString(["Rick", "Morty", "dennis", "joanna"]));
