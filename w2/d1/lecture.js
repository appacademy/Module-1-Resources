// let arr = [1,2,3];

// for (let i = 0; i < arr.length; i++) {
//   let ele = arr[i];
//   console.log(ele);
// }

// forEach Method

// take in an entire function 
// that function can have 3 parameters:
  // 1. element
  // 2. index
  // 3. array

// arr.forEach(function (ele, i, arr) {
//   // ele *= 2;
//   console.log(ele, arr);
// });

// let printer = function (ele, i, arr) {
//   console.log(ele, arr);
// };

// arr.forEach(printer);


// let twoD = [
//   [1,2],
//   [3,4]
// ];

// twoD.forEach(function (subArr, i, arr) {
//   console.log(subArr);
//   subArr.forEach(function (ele, j, subArr) {
//     console.log(ele);
//   });
// });


// map

// let arr = [1, 2, 3];

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   let ele = arr[i];
//   ele *= 2;
//   newArr.push(ele);
// }

// console.log(arr);
// console.log(newArr);


// let multiplier = function (ele, i, arr) {
//   return ele * 2;
// }

// let newArr = arr.map(multiplier);

// console.log(arr);
// console.log(newArr);



// filter()
// let arr = [1, 4, 12, 17, 21, 28];

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   let ele = arr[i];
//   if (ele % 2 === 0) newArr.push(ele);
// }

// console.log(arr);
// console.log(newArr);

// let newArr = arr.filter(function (ele, i, arr) {
//   return ele % 2 ===  0;
// });

// console.log(arr);
// console.log(newArr);




// let arr = [1,2,3,4];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   let ele = arr[i];
//   sum += ele;
// }

// console.log(sum);


// let sum = arr.reduce(function (accum, ele, i, arr) {
//   return accum + ele;
// }, 0);

// console.log(sum);



// let names = ["Jeff", "John", "Jack"];

// // let str = "Names: ";

// // for (let i = 0; i < names.length; i++) {
// //   let name = names[i];
// //   str = str + name + ", ";
// // }

// // console.log(str);

// let str = names.reduce(function (accum, ele) {
//   console.log(accum);
//   return accum + ele + ", ";
// }, "Names: ");

// console.log(str);




// let arr = [1,2,3];

// console.log(arr[0]);

// OBJECTS
// KEY AND VALUE
let person = {
  name: "Jeff",
  age: 31, 
  game: "Diamond"
}

console.log(person["name"]); 
console.log(person["Jeff"]); // will return undefined must look up key