// let arr = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//   let ele = arr[i];
//   console.log(ele);
// };


// forEach Method

// for each intakes an ENTIRE FUNCTION DECLATRATION
// that function can have three parameters:
  // 1. Element (ele) - not optional
  // 2. Index (i) - optional
  // 3. Array (arr) - optional

// arr.forEach(function (ele, i, arr) {
//   ele++;
//   console.log(ele, i, arr);
// });

// let printer = function (ele, i, arr) {
//   console.log(ele);
// }

// arr.forEach(printer);


// let arr = [1, 2, 3];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   let ele = arr[i];
//   ele *= 2;
//   newArr.push(ele);
// };

// console.log(arr);
// console.log(newArr);

// let multiplier = function (ele, i, arr) {
//   return ele * 2;
// }

// let newArr = arr.map(multiplier);


// console.log(arr);
// console.log(newArr);


// filter
// let arr = [1, 4, 12, 17, 21, 28];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   let ele = arr[i];
//   if (ele % 2 === 0) newArr.push(ele);
// }

// console.log(arr);
// console.log(newArr);

// let newArr = arr.filter(function (ele) {
//   return ele % 2 === 0;
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

// let result = arr.reduce(function (sum, ele) {
//   console.log(sum, ele);
//   return sum + ele;
// }, 0);

// console.log(result);

// Names: name1, name2, name3,

// let names = ["Jeff", "Caleb", "Shane"];
// // let str = "Names: ";

// // for (let i = 0; i < names.length; i++) {
// //   let name = names[i];
// //   str = str + name + ", ";
// // }

// // console.log(str);

// let str = names.reduce(function (accum, ele) {
//   console.log(accum, "-------", ele);
//   return accum + ele + ", ";
// }, "Names: ");

// console.log(str);




// let arr = [1,2,3]

// console.log(0, arr[0]);
// console.log(1, arr[1]);
// console.log(2, arr[2]);

// INDEX AND ELEMENT



// OBJECTS
// KEYS & VALUES
let person = {
  name: "Jeff",
  age: 26,
  game: "Elden Ring"
};
console.log(person['name']);


let arr = {
  0: 1,
  1: 2,
  2: 3
}