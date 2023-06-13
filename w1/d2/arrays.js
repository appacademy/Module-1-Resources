/*



  Arrays!
  - arrays are ordered collections of data!
  - much like strings we learned, arrays have indices, we can access the value at each indices
  - by keying into it with the index
  - arrays are objects, objects that have order


*/

// array literal - [];
let age = 5;
let arr = [1,true,'string', age];
//arrays let us store other data types!

let animal = 'cats';
console.log(animal[0])
console.log(animal[1])
console.log(animal[2])
console.log(animal[1 + 2]);

//can index into an arrays similar to a string
let animalArr = ['c','a','t','s'];
console.log(animalArr[0])
console.log(animalArr[1])
console.log(animalArr[2])
console.log(animalArr[3])
console.log(animalArr[animalArr.length - 1]);//s

let subArr = [1,2,3]
// you can index a nested array
let twoDimensionalArray = [subArr,[4,5,6]];
console.log(twoDimensionalArray[0]);//[ 1, 2, 3 ]
console.log(twoDimensionalArray[0][0])//1

// has a length property
console.log(twoDimensionalArray.length);//2
console.log(animalArr.length);//4

//can also use indexOf method
console.log(animalArr.indexOf('c'));//0
console.log(animalArr.indexOf('a'));//1
console.log(animalArr.indexOf('z'))//-1

//length of sub array
console.log(twoDimensionalArray[0].length);//3

//iterate through array!
let nums = [1,2,3,4,5];
//1 is at index 0
//2 is at index 1
console.log(nums[0])

//iterate through array of numbers
for(let i = 0; i < nums.length; i++) {
  console.log('indexes',i);//we use the index to get the value
  console.log('value', nums[i]);//i dynamically changes
}

//concatenation
let nums1 = [1, 2, 3, 4, 5];
let nums2 = [6, 7, 8, 9, 10];
let nums3 = [11, 12, 13, 14, 15];

console.log(nums1 + nums2 + nums3);//1,2,3,4,56,7,8,9,1011,12,13,14,15
//type casted the entire array into a string

//this is a better way - concat!
console.log(nums1.concat(nums2, nums3));
let spread = [...nums1, ...nums2, ...nums3];
// console.log(spread);
/*
[
   1,  2,  3,  4,  5,  6,
   7,  8,  9, 10, 11, 12,
  13, 14, 15
]
*/
