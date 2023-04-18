/*

  Arrays!
  - ordered collection of data, much like strings we learned about, arrays have indexes attach each position in the array
  we can access the value stored at each index by indexing into the array
  - separated by commas
  - represented a square brackets
  - array literal - [];
  - arrays can contain other data types even other arrays

*/

let arr = [1, true, "hello", [1, 2, 3]];
// console.log(arr);

let animal = "cats";
// console.log(animal[0]);//c
// console.log(animal[animal.length - 1]);//s
// console.log(animal.length);

let animalArr = ["c", "a", "t", "s"];
// console.log(animalArr[0]);
// console.log(animalArr[animalArr.length - 1]);
// console.log(animalArr.length);

//matrix -  2d array
let matrix = [[1, 2, 3], [4, 5, 6], ["string"]];

// console.log(matrix.length);//2
// console.log(matrix[0]);//[ 1, 2, 3 ]
// console.log(matrix[0].length);//3
// console.log(matrix[0][0]);//1
// console.log(matrix[2][0][0])

//.indexOf
console.log(animalArr.indexOf("c")); //0
console.log(animalArr.indexOf("z")); //-1
console.log(matrix.indexOf([1, 2, 3])); //-1
// console.log([1,2,3] == [1,2,3])
// console.log(matrix.indexOf(matrix[0]));//0

//concatenation
let nums1 = [1, 2, 3];
let nums2 = [4, 5, 6];
let nums3 = [7, 8, 9];

console.log(nums1 + nums2 + nums3); //1,2,34,5,67,8,9 typecast array into string, than concatenate

//.concat!
console.log(nums1.concat(nums2, nums3)); //[
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]
