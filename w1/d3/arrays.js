/*

  Homework Review

  Arrays
    * Arrays are useful when you need to hold more than just value;
    * Arrays are ordered collections of values.
    * Similar to strings; arrays have indices
    * We can access the value by using the index
    * We can use loops to iterate through arrays

*/

// Maybe we want to return more than one value
// * we can do so by using an array
// we can hold more than one value - numbers
let numArr = [1, 2, 3, 4, 5];
// console.log(numArr);

// Arrays can hold strings
let stringArr = ["sunshine", "hope", "light"];
console.log(stringArr);

// arrays can hold different data types at the same time
// * dynamically typed language
let variousData = [1, "two", true, ["no way is that another", "array"]];
console.log(variousData);// [1, "two", true, ["no way is that another", "array"]]

// can index an array like a string
// * remember
let animal3 = "cats";
// console.log(animal3[0]);// c
// console.log(animal3[animal3.length - 1]);// s
// console.log(animal3.length);// 3

// we are accessing the value at a specific index in an array
let animalArr = ["c", "a", "t", "s"];
// console.log(animalArr[0]);// c
// console.log(animalArr[animalArr.length - 1]);// s
// console.log(animalArr.length);// 3

// * you can index a nested array
let twoDimensionalArr = [[0,1,2], [3,4,5], [6,7,8]];
console.log(twoDimensionalArr[0]);// [0,1,2];
// * Expressions!
console.log(twoDimensionalArr[0][0]);// 0;

// * has a length property
console.log(animalArr.length);// 3

// * can also use the .indexOf method
// what does .indexOf return?
console.log(animalArr.indexOf("c"));// 0

// concatenation
let nums1 = [1, 2, 3, 4, 5];
let nums2 = [6, 7, 8, 9, 10];
let nums3 = [11, 12, 13, 14, 15];

// unintended
console.log(nums1 + nums2 + nums3);// 1,2,34,5,67,8,9 typecast array into string, than concatenates as strings

// This is much better
// * use .concat
console.log(nums1.concat(nums2, nums3)); //[1,2,3,4,5,6,7,8,9,10]

// * order matters when concatenating
console.log(nums2.concat(nums1, nums3));

// * know your data types if you ever unsure you can use the typeof operator
// * go to mdn

console.log(typeof 12);// number
console.log(typeof "hello");// string
console.log(typeof true); // boolean
console.log(typeof []); // object???? will learn more about it next week, secretly everything is an object

