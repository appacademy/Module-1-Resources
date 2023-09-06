

/*

  Arrays
    * Arrays are useful when you need to hold more than just one value;
    * Arrays are ordered collections of values.
    * Similar to strings; arrays have indices
    * We can access the value by using the index
    * We can use loops to iterate through arrays

*/


// arrays can hold more than one value
let numArr = [1,2,3];

// arrays can holds strings
let stringArr = ['cool', 'string'];

// can store different in the same arrays
let variousData = [true, 1, 'string'];

// console.log(numArr, stringArr, variousData)

// can index an array like a string
let animal3 = "cats";
// console.log(animal3[0]);// c
// console.log(animal3[animal3.length - 1]);// s
// console.log(animal3.length);// 4

/*
  length of 4
  VALUE - c a t s undefined undefined
  INDEX - 0 1 2 3     4         5
*/

let animalArr = ['c','a','t','s'];
console.log(animalArr[0]);// c
console.log(animalArr[animalArr.length - 1]);// s
console.log(animalArr.length);// 4


// you can have nested arrays
let twoDArray = [[0,1,2],[3,4,5],[6,7,8]];

console.log(twoDArray)
/*
[ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ] ]
*/


console.log(twoDArray[0]);// [ 0, 1, 2 ]
console.log(twoDArray[1]);// [ 3, 4, 5 ]
console.log(twoDArray[0][0]);// 0


// * has length property
console.log(twoDArray.length);// 3

// * have access to index of method
console.log(animalArr.indexOf('c'));// 0
console.log(animalArr.indexOf('a'));// 1
console.log(animalArr.indexOf('z'));// -1

// concatenation
let nums1 = [1, 2, 3, 4, 5];
let nums2 = [6, 7, 8, 9, 10];
let nums3 = [11, 12, 13, 14, 15];

console.log(nums1 + nums2 + nums3);
//1,2,3,4,56,7,8,9,1011,12,13,14,15
// *  That + type casted the array into a string
// ! know your data type!

// use .concat
console.log(nums1.concat(nums2, nums3));
/*
[
   1,  2,  3,  4,  5,  6,
   7,  8,  9, 10, 11, 12,
  13, 14, 15
]
*/


let twoDArray2 = [[0,1,2],[3,4,5],[6,7,8]];

console.log(twoDArray2)//
/*
[ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ] ]
*/

console.log(twoDArray2[0])//[ 0, 1, 2 ]

console.log(twoDArray2[0].length)// 3
