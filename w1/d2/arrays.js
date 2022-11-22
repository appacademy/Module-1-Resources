/*

  Arrays!
    - Arrays are ordered collections of data seperated by commas, represented by square brackets []
    - Arrays have indices atached to each position within the array, we can access the value stored at each index by keying into it
    - Zero indexed

*/

let arr = [1, 2, 3, 4, 5];

//we cans tore differetn data types
let stringArr = ["wow", "pretty", "cool"];

//arrays can have many differnt types within it, even other arrays!
let arr2 = [1, "two", true, ["no way another array!", ["what?"]]];
// console.log(arr2);

let animal = "cats";
// console.log(animal[0]);//c

//so indexing in an array is simliar to indexing in a string
//we can index into nested arrays
// console.log(arr2[3][1][0]);

let animalArr = ["dog", "cats", "mouses"];
// console.log(animalArr[0][0])// d
// console.log(animalArr[animalArr.length - 1]);//mouses

//KNOW WHAT YOURE INDEXING INTO!

let cakesAndFillings = [
  ["strawberry cake", "strawberry filling"],
  ["ice cream cake", "chocolate filling"],
  ["carrot cake", "pineapple filling"],
  ["chocolate cake", "banana filling"],
];

// console.log(cakesAndFillings[2][1][0])// pineapple filling => p
// console.table(cakesAndFillings)

//strings had a length property, so does array!
// console.log(animalArr.length);//3

//indexOf();
// console.log(animalArr.indexOf('cats'))//1

//concatenation
//The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
let nums1 = [1, 2, 3];
let nums2 = [4, 5, 6];
let nums3 = [7, 8, 9];

// console.log(nums1 + nums2)//1,2,34,5,6

//we have concat so we dont turn arr into a string
//order does matter!
// console.log(nums1.concat(nums3, nums2)); //[ 1, 2, 3, 4, 5, 6 ]


//prompt: SumArray
function sumArray(nums) {
  //declare accumulator to hold our sum
  console.log('nums array', nums)
  let sum = 0;
  for(let i = 0; i < nums.length; i++) {
    console.log('sum at start of loop',sum)
    let num = nums[i];
    console.log('The current index', i);
    console.log('The current number is' , num);
    sum += num;
  }
  return sum;
}


// console.log(sumArray([5, 6, 4])); // => 15
