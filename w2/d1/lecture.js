// let arr = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//   let el = arr[i];
//   console.log(el);
// }

// forEach method

// the forEach method intake an ENTIRE FUNCTION DECLARATION
// that function can have 3 parameters:
  // 1. element (el)
  // 2. index (i)
  // 3. array (arr)

// arr.forEach(function (el, i, arr) {
//   el *= 2;
//   console.log(el, i, arr)
// });


// let arr = [1,2,3];
// let sum = 0;

// arr.forEach(function (el) {
//   sum += el;
// });

// console.log(sum);


// map Method
// let arr = [1,2,3,4];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   let el = arr[i];
//   el *= 2;
//   newArr.push(el);
// }

// console.log(arr);
// console.log(newArr);


// let arr = [1,2,3,4];

// let newArr = arr.map(function (el, i, arr) {
//   // el *= 2;
//   // return el;
//   return el * 2;
// });

// console.log(arr);

// console.log(newArr);



// filter Method
// let arr = [1, 2, 4, 5, 7, 12, 14, 21, 23];
// // let newArr = [];

// // for (let i = 0; i < arr.length; i++) {
// //   let el = arr[i];
// //   if (el % 2 === 0) newArr.push(el);
// // }

// // console.log(arr);
// // console.log(newArr);


// let newArr = arr.filter(function (el, i, arr) {
//   return el % 2 === 0;
// });

// console.log(arr);
// console.log(newArr);



// // reduce Method
// let arr = [1,2,3,4];

// let sum = function (arr) {
//   // Version 1
//   // let sumTracker = arr[0];
//   // for (let i = 1; i < arr.length; i++) {
//   //   let el = arr[i];
//   //   sumTracker += el;
//   // }
//   // return sumTracker;

//   // Version 2
//   let sumTracker = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let el = arr[i];
//     sumTracker += el;
//   }
//   return sumTracker;
// };

// // console.log(sum(arr));


// let sum1 = function(arr) {
//   let results = arr.reduce(function (accum, el, i, arr) {
//     console.log(accum);
//     return accum + el;
//   });
//   return results;
// }

// let sum2 = function(arr) {
//   let results = arr.reduce(function (accum, el, i, arr) {
//     console.log(accum);
//     return accum + el;
//   }, 0);
//   return results;
// }

// console.log(sum1(arr));
// console.log(sum2(arr));


// let names = ['Jeff', 'Caleb', 'Ryan'];

// let str = "Names: ";

// for (let i = 0; i < names.length; i++) {
//   let name = names[i];

//   str = str + name + ", ";
// }

// // console.log(str);


// let result = names.reduce(function (accum, name) {
//   console.log(accum);
//   return accum + name + ", "
// }, "Names: ");

// console.log(result);



// let arr = [1,2,3] // Index and Element
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// Objects
// Key & Value Pair
let person = {
  name: "Jeff",
  age: 24,
  game: "Legends of Arceus",
};

console.log(person["name"]);
console.log(person["age"]);

// we cannot look for keys based on the value
console.log(person["Jeff"]);