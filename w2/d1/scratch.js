// let arr = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//     let ele = arr[i];
//     console.log(ele);
// };

// forEach method

// for each method intakes an ENTIRE FUNCTION DECLARATION
// that function can have three parameters:
    // 1. element (ele)
    // 2. index (i)
    // 3. array

// arr.forEach(function (ele, i, arr) {
//     // ele = ele * 2;
//     arr[i] = arr[i] * 2;
//     console.log(ele, i, arr);
// });

// console.log(arr)

// let printer = function(ele, i, arr) {
//     console.log(ele);
// };

// arr.forEach(printer);


// Nested Arrays
// let twoD = [
//     [1, 2], 
//     [3, 4]
// ];

// twoD.forEach(function (subArr, i, arr) {
//     // console.log(arr)
//     subArr.forEach(function (ele, j, subArray) {
//         subArr[j] *= 2;
//         console.log(ele);
//     });
// });

// console.log(twoD);



// map Method

// let arr = [1, 2, 3];

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     let ele = arr[i];
//     ele *= 2;
//     newArr.push(ele);
// }

// console.log(arr);
// console.log(newArr);

// let multiplier = function(ele, i, arr) {
//     return ele * 2
// };

// let newArr = arr.map(multiplier);

// console.log(arr);
// console.log(newArr);



// filter() method

// let arr = [1, 4, 12, 17, 21, 28];

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     let ele = arr[i];
//     if (ele % 2 === 0) newArr.push(ele);
// }

// console.log(arr);
// console.log(newArr);

// let newArr = arr.filter(function (ele, i, array) {
//     return ele % 2 === 0;
// });

// console.log(arr);
// console.log(newArr);




// Reduce 

// let arr = [1,2,3,4];

// let sum = function(arr) {
//     let sum = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         let ele = arr[i];
//         sum += ele;
//     }
//     return sum;
// }

// console.log(sum(arr));

// let sum = function (arr) {
//     let result = arr.reduce(function (sum, ele, i, array) {
//         return sum + ele;
//     }, 0);
//     return result;
// }

// let sum = function (arr) {
//     let result = arr.reduce(function (sum, ele, i, array) {
//         return sum + ele;
//     });
//     return result;
// }

// console.log(sum(arr));


// Pass an array of names into my function
// return a string that says, "Names: name1, name2, name3, ....""

// let names = ['Jeff', 'John', 'Jack'];

// // let str = "Names: "

// // for (let i = 0; i < names.length; i++) {
// //     let name = names[i];
// //     str = str + name + ", ";
// // }

// // console.log(str);


// let str = names.reduce(function (accum, ele, i, array) {
//     return accum + ele + ", "
// }, "Names: ");

// console.log(str);



// let arr = [1,2,3] // Index & Element

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);


// OBJECTS
// KEYS & VALUES
let person = { name: "Jeff", age: 31, game: "Fallen Order", };

console.log(person["name"]); // "Jeff"
console.log(person["age"]); // 31

// We cannot look for keys based on the value
console.log(person["Jeff"]); // undefined 

console.log(person);
