/*


  Arrays
    * Arrays are useful when you need to hold more than just one value
    * Arrays are ordered collections of values/data
    * Similar to strings; arrays have indices
    * We can access the value using the index
    * We can use loops to iterate through an array

*/

// Maybe we want to return more than one value
// * we can do so by using an array
let numArr = [1,2,3];

// strings array
let stringArr = ['sunshine', 'light', 'hope'];
console.log(numArr, stringArr);// [ 1, 2, 3 ] [ 'sunshine', 'light', 'hope' ]

// arrays can holds different data types at the same time
// * Dynamically typed
let variousDataTypes = [1, 'two', true, ['another array']];

// can index an array like a string
let animalString = 'cats';
console.log(animalString[0]);// c
console.log(animalString[animalString.length - 1]);// s
console.log(animalString.length);// 4


// we can do something similar with an array
// * this is an array of strings
let animalArr = ['c','a','t','s'];
console.log(animalArr[0]);// c
console.log(animalArr[animalArr.length - 1]);// s
console.log(animalArr.length);// 4


// we can index into nested arrays
let twoDArr = [[0,1,2],[3,4,5],[6,7,8]];
console.log(twoDArr);
console.log(twoDArr[0]);// [ 0, 1, 2 ]
console.log(twoDArr[0][0]);// 0
console.log(twoDArr[2][2]);// 8

// Arrays have a length property
console.log(twoDArr.length);// 3


// .indexOf
// return is the index at which the element is found
console.log(animalArr.indexOf('z'));// -1
console.log(animalArr.indexOf('a'));// 1


// concatenation
let nums1 = [1, 2, 3, 4, 5];
let nums2 = [6, 7, 8, 9, 10];
let nums3 = [11, 12, 13, 14, 15];

// Type casting the arrays into a string
console.log(nums1 + nums2 + nums3);// 1,2,3,4,56,7,8,9,1011,12,13,14,15


// use .concat
console.log(nums1.concat(nums2, nums3));
/*
[
   1,  2,  3,  4,  5,  6,
   7,  8,  9, 10, 11, 12,
  13, 14, 15
]
*/

console.log(nums1.concat(nums3, nums2));
/*
[
   1,  2,  3,  4, 5, 11,
  12, 13, 14, 15, 6,  7,
   8,  9, 10
]
*/
