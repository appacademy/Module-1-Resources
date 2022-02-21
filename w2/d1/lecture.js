// let arr = [1,2,3];

// for (let i = 0; i < arr.length; i++) {
//   let ele = arr[i];
//   // console.log(ele);
//   printer(ele, i, arr);
// }

// forEach method

// for each method intakes an ENTIRE FUNCTION DECLARATION
// that function has three parameters:
  // 1. element (ele)
  // 2. index (i)
  // 3. array

//   let printer = function(ele, i, arr) {
//     ele *= 2;
//     // arr[i] *= 2; // DONT DO
//     console.log(ele, i, arr);
//   }

// arr.forEach(printer);


// let twoD = [
//   [1, 2],
//   [3, 4]
// ];

// twoD.forEach(function (subArr, i, twoD) {
//   console.log(subArr, i, twoD)
//   subArr.forEach(function (ele, j, subArr) {
//     console.log(ele, j, subArr);
//   });
// });


// let arr = [1,2,3];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   let ele = arr[i];
//   ele *= 2;
//   newArr.push(ele);
// }

// console.log(arr);
// console.log(newArr);

// let doubler = function(ele, i, arr) {
//   return ele * 2;
// };

// let arr = [1,2,3];
// let newArr = arr.map(doubler);
// console.log(arr);
// console.log(newArr);


// let arr = [1, 3, 4, 6, 13, 16, 21, 24, 32];

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   let ele = arr[i];
//   if (ele % 2 === 0) newArr.push(ele)
// }

// let newArr = arr.filter(function (ele, i, arr) {
//   return ele % 2 === 0;
// });

// console.log(arr);
// console.log(newArr);


// reduce

// let arr = [1,2,3,4];
// // let sum = arr[0];
// // for (let i = 1; i < arr.length; i++) {
// //   let ele = arr[i];
// //   sum += ele;
// // }
// // console.log(sum)

// let sum = arr.reduce(function (accum, ele, i, arr) {
//   console.log('ACCUM: ' + accum);
//   console.log('ELE: ' + ele);
//   return accum + ele;
// });

// console.log(sum);
// console.log('---------------------------------')

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
  //   let ele = arr[i];
  //   sum += ele;
  // }
  // console.log(sum)
  
//   let arr2 = [1,2,3,4];
// let sum2 = arr2.reduce(function (accum, ele, i, arr) {
//   console.log('ACCUM: ' + accum);
//   console.log('ELE: ' + ele);
//   return accum + ele;
// }, 0);

// console.log(sum2);

// let names = ["jeff", "caleb", "wes", "colton", "jojo"];

// "Names: name1, name2, name3"

// let str = "Names: "
// for (let i = 0; i < names.length; i++) {
//   let name = names[i];
//   str = str + name + ", ";
// }
// console.log(str);


// let str = names.reduce(function (accum, name) {
//   console.log('ACCUM: ' + accum);
//   console.log('NAME: ' + name);
//   return accum + name + ", "
// }, "Names: ");
// console.log(str);


// let arr = [1,2,3] // Index & Element
// console.log(arr[2]);


// Objects
// KEY & VALUE PAIRS
let person = {
  name: "jeff",
  age: 26,
  game: "Arceus"
};

console.log(person["game"]);
console.log(person["jeff"]);

