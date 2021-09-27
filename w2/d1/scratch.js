// let arr = [1,2,3];

// for (let i = 0; i < arr.length; i++) {
//     let ele = arr[i];
//     arr[i] *= 2
//     console.log(ele);
// }

// forEach() method

// for each method intakes an ENTIRE FUNCTION DECLARATION
// that function can have 3 parameters:
    // 1. element (ele)
    // 2. index (i)
    // 3. the entire array

// arr.forEach(function (ele, i, arr) {
//     // ele *= 2;
//     // arr[i] *= 2;
//     console.log(ele);
// });


// let printer = function (ele, i, arr) {
//     console.log(ele);
// };

// arr.forEach(printer)

// let twoD = [
//     [1, 2],
//     [3, 4]
// ];

// twoD.forEach(function (subArr, i, arr) {
//     // console.log(subArr);
//     subArr.forEach(function (ele, j, subArray) {
//         console.log(subArr === subArray)
//         // console.log(ele);
//     });
// });


// map Method

// let arr = [1,2,3,4];

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     let ele = arr[i];
//     ele *= 2;
//     newArr.push(ele);
// }

// console.log(arr);
// console.log(newArr);

// let arr = [1,2,3,4];
// let newArr = arr.map(function (ele, i, arr) {
//     return ele * 2;
// });
// console.log(arr);
// console.log(newArr);


// let str = "HI MY NAME IS JEFF";
// // "hi my name is jeff";

// let strArr = str.split(" ");
// // console.log(strArr);

// let newStrArr = strArr.map(function (str) {
//     return str.toLowerCase();
// });

// let newStr = newStrArr.join(" ");
// console.log(newStr);


// let arr = [12, 5, 20, 4];

// let tripler = function (ele) {
//     return ele * 3
// }

// let newArr = arr.map(tripler);
// console.log(arr);
// console.log(newArr);



// let arr = [12, 17, 1, 32];

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     let ele = arr[i];
//     if (ele % 2 === 0) newArr.push(ele);
// }

// console.log(arr);
// console.log(newArr);


// let arr = [12, 17, 1, 32];

// let newArr = arr.filter(function (ele) {
//     return ele % 2 === 0;
// });

// console.log(arr);
// console.log(newArr);