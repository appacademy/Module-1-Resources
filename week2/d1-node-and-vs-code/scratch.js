// Callback 101
// let num = 1;

// function sum(num1, num2) {
//   return num1 + num2;
// }

// function printer(something) {
//   console.log(something(3, 8));
// }

// // printer(num);
// printer(sum);

//forEach
/* 
Write a function called hello that intakes an 
array of names and prints "Hello," plus the name, for
each name. Must use .forEach()

hello(['Mylo', 'Buster']) prints 'Hello, Mylo', 'Hello, Buster'

Plan
Make a function called hello intakes an array
iterate over the array
  define the name as array at i
  print "Hello, " + name
*/

// function hello(names) {
//   for (let i = 0; i < names.length; i++) {
//     let name = names[i];
//     console.log("Hello, " + name);
//   }
// }

// function hello(names) {
//   names.forEach(function (name, i, array) {
//     console.log("Hello, " + name);
//   });
// }

// console.log(hello(["Mylo", "Buster"])); //prints 'Hello, Mylo', 'Hello, Buster'

// let nums = [1, 2, 3];
// function sum(nums) {
//   let sum = 0;

//   nums.forEach(function (num) {
//     sum += num;
//   });
//   return sum;
// }
// console.log(sum(nums)); // 6

//map
/* 
Write a function called timesTwo that intakes an
array of numbers and returns a new array where all 
of the numbers are multiplied by 2. You must use .map()

timesTwo([1, 2, 3]) => [2, 4, 6]
timesTwo([-1, 6, 0]) => [-2, 12, 0]
Plan
Define a function called timesTwo intakes an arr of nums
define a result arr
iterate over the array
  define a variable for the ele called num
  I will num * 2 and push it onto the res array
return my result 
*/

// function timesTwo(nums) {
//   let res = [];
//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];
//     res.push(num * 2);
//   }
//   return res;
// }

// function timesTwo(nums) {
//   let res = nums.map(function (num, i, array) {
//     return num * 2;
//   });

//   return res;
// }

// console.log(timesTwo([1, 2, 3, 4, 5])); //[2, 3, 4, 5, 10]

//filter

/* 
Write a function called evens that intakes an
array of numbers and returns a new array of only the
even numbers from the original array. You must use
.filter()

evens([1, 2, 3]) //[2]
evens([42, 44, 45]) // [42, 44]
Plan
Define a function intakes an array of nums
define a new array
Iterate over the array
  if the number is even
    push it onto the array
return the res
*/

// function evens(nums) {
//   let res = [];
//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];
//     if (num % 2 === 0) {
//       res.push(num);
//     }
//   }
//   return res;
// }

// function evens(nums) {
//   let res = nums.filter(function (num, i, array) {
//     return num % 2 === 0;
//   });

//   return res;
// }

// console.log(evens([1, 2, 3])); //[2]
// console.log(evens([42, 44, 45])); // [42, 44]

// let nums = [1, 2, 3];
// function sum(nums) {
//   let sum = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];
//     sum += num;
//   }

//   return sum;
// }

// function sum(nums) {
//   let res = nums.reduce(function (sum, num) {
//     return sum + num;
//   });
//   return res;
// }
// console.log(sum(nums)); // 6

/* 
Write a function called list that intakes an
array of names and returns a string of "Names: " with
all of the names attached after. Must use the .reduce()

list(['Mylo']) => Names: Mylo 
list(['Rick', 'Morty']) => Names: Rick Morty 
*/

// function list(names) {
//   let res = names.reduce(function (resString, name) {
//     return resString + " " + name;
//   }, "Names:");
//   return res;
// }

// console.log(list(["Rick", "Morty"])); // Names: Rick Morty

let arr = ["a", "b", "c"]; //index - element
let obj = { firstLetter: "a", secondLetter: "b", thirdLetter: "c" }; //keys - values

console.log(arr[0]);
console.log(obj["firstLetter"]);

arr[3] = "d";
console.log(arr);
obj["fourthLetter"] = "d";
console.log(obj);
