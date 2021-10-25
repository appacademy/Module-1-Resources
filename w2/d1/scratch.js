// let arr = [1,2,3];

// for (let i = 0; i < arr.length; i++) {
//   let ele = arr[i];
//   console.log(ele);
// }

// Array.forEach()

// for each method intakes an ENTIRE FUNCTION DECLARATION 
// this function can have three parameters:
  // 1. element (ele)
  // 2. index (i)
  // 3. array

// let arr = [1,2,3]
// // arr.forEach(function (ele, i, arr) {
// //   console.log(ele)
// // });

// let printer = function(ele, i, arr) {
//   console.log(ele);
// }

// arr.forEach(printer);


// let twoD = [
//   [1, 2],
//   [3, 4]
// ];

// twoD.forEach(function (subArr, i, arr) {
//   subArr.forEach(function (ele, j, subArray) {
//     console.log(subArray);
//   });
// });


// Array.map()

// let arr = [1,2,3];

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   let ele = arr[i];
//   ele *= 2;
//   newArr.push(ele);
// }

// console.log(arr);
// console.log(newArr);

// let multiplier = function(ele, i, arr) {
//   return ele * 2;
// }

// let newArr = arr.map(multiplier);

// console.log(arr);
// console.log(newArr);



// Array.filter()

// let arr = [1, 4, 12, 17, 21, 28];

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   let ele = arr[i];
//   if (ele % 2 === 0) newArr.push(ele);
// }

// console.log(arr);
// console.log(newArr);

// let even = function (ele, i, arr) {
//   return ele % 2 === 0;
// }

// let newArr = arr.filter(even);

// console.log(arr);
// console.log(newArr);



// Array.reduce()

// let arr = [1,2,3,4];

// let sum = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   let ele = arr[i];
//   sum += ele;
// }

// console.log(sum);

// let arrSum = function(sum, ele, i, arr) {
//   return sum + ele;
// }

// // let sum = arr.reduce(arrSum, 0);
// let sum = arr.reduce(arrSum)

// console.log(sum);

// let names = ["John", "Jack", "Jim"];

// // 'Names: John, Jack, Jim'

// let str = names.reduce(function (accum, ele) {
//   console.log(accum);
//   return accum + ele + ", ";
// }, "Names: ");

// console.log(str);


// let arr = [1,2,3]; // Index & Element

// console.log(arr[0]);
// console.log(arr[1]);


// Objects => KEY/VALUE PAIRS

let person = {
  name: "Jeff",
  age: 26,
  tvShow: "Stranger Things",
}

console.log(person["name"]);
console.log(person["age"]);

// We cannot look for keys based on the value
console.log(person["Stranger Things"]);

console.log(person);