/*


  Arrays!
  - ordered collection of data, much like the strings we learned about, arrays have indexes attach to each position in the array.
  we can access the value stored at each index by indexing into the array
  - separated by commas
  - represented by square brackets
  - [] - array literal
  - arrays can contain other data types even other arrays

*/

let arr = [1, true, "hello", [1, 2, 3]];
// console.log(arr);//[ 1, true, 'hello', [ 1, 2, 3 ] ]

let animal = "cats";
// console.log(animal[0]);//c

let animalArr = ["c", "a", "t", "s"];
// console.log(animalArr[0]);//c
// console.log(animalArr[animalArr.length - 1])//s

//matrix -  2d array
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
// console.log(matrix.length)//2
// console.log(matrix[0]);//[ 1, 2, 3 ]
// console.log(matrix[0][0]);//1

// //.indexOf
// console.log(animalArr.indexOf('c'));//0
// console.log(animalArr.indexOf('C'.toLowerCase()))//0
let nested = matrix[0];
// console.log(matrix.indexOf(nested)); // 0 - this works
// console.log(matrix.indexOf([1,2,3]));



//concatenation
let nums1 = [1, 2, 3];
let nums2 = [4, 5, 6];
let nums3 = [7, 8, 9];

console.log(nums1 + nums2 + nums3);//1,2,34,5,67,8,9 not what we want!
//type casted the values of the array into a string and concatenate

//.concat
console.log(nums1.concat(nums2, nums3)); //[
  // 1, 2, 3, 4, 5,
  // 6, 7, 8, 9
// ]
