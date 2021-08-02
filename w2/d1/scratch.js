// let arr = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//   let el = arr[i];
//   console.log(el);
// }

// for each intakes an ENTIRE FUNCTION DECLARATION
// that function can have three params... el, i, array
// we use forEach for its SIDE EFFECT (maybe console.log, maybe editing outside vars)

// arr.forEach(function (el, i, array) {
//   //what you want to do for each element
//   console.log(el, i, array);
// });

// function printer(el, i, arr) {
//   console.log(el);
// }

// arr.forEach(printer);
// nestArs
// let twoD = [
//   [1, 2],
//   [3, 4],
// ];
// twoD.forEach(function (subArr, i, arr) {
//   subArr.forEach(function (el, i, arr) {
//     console.log(el);
//   });
// });

// let arr = [1, 2, 3];

// // let res = [];

// // for (let i = 0; i < arr.length; i++) {
// //   let el = arr[i];
// //   el = el * 2;
// //   res.push(el);
// // }

// // console.log(arr);
// // console.log(res);

// let res = arr.map(function (el, i, array) {
//   return el * 2; //return what we want pushed into the new array
// });

// console.log(arr);
// console.log(res);

// let arr = [1, 4, 45, 44, 20];

// let res = [];

// for (let i = 0; i < arr.length; i++) {
//   let el = arr[i];
//   if (el % 2 === 0) {
//     res.push(el);
//   }
// }

// console.log(arr);
// console.log(res);

// let res = arr.filter(function (el, i, array) {
//   return el % 2 === 0; // return the condition to push
// })

// NO DEFAULT ACCUM ____________________________________________

// console.log(arr);
// console.log(res);

// let sum = function (arr) {
//   let sum = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     let el = arr[i];
//     sum = sum + el;
//   }
//   return sum;
// };

// let sum = function (arr) {
//   let res = arr.reduce(function (sum, el, i, array) {
//     return sum + el;
//   });
//   return res;
// };

// let arr = [1, 2, 3];
// let arr2 = [2, 3, 4];
// console.log(sum(arr)); //6
// console.log(sum(arr2)); //9

// DEFAULT ACCUM ____________________________________________
/* 
write a function join that intakes an array of names and concats them to a string of "Names: "

join(['Mylo', 'Thanh']) // "Names: Mylo Thanh"
*/
// let join = function (names) {
//   let str = "Names: ";
//   for (let i = 0; i < names.length; i++) {
//     let name = names[i];
//     str = str + name + " ";
//   }
//   return str;
// };

// let join = function (names) {
//   return names.reduce(function (accum, el, i, array) {
//     return accum + el + " "; // Names: Mylo Thanh
//   }, "Names: ");
// };

// console.log(join(["Mylo", "Thanh"])); // "Names: Mylo Thanh"
// console.log(join(["Joe", "Thanh"])); // "Names: Mylo Thanh"
// console.log(join(["Mylo", "Rick"])); // "Names: Mylo Thanh"

// OBJECT 101
let arr = [1, 2, 3]; // INDEX / ELEMENT
let person = { name: "Mylo", age: 1000, game: "Dota" }; // KEY / VALUE

//arr have indices elements
//obj have key and values

console.log(arr[0]); //1
console.log(person["name"]); // "Mylo"
console.log(person["age"]); //1000
console.log(person["Mylo"]); // we don't look for keys based on values
console.log(person["game"]); //we look for values based on keys
// THE KEY GETS THE VALUE
