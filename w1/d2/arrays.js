/*



  Arrays
  - Ordered collection of data
  - have indexes attached to each position in an array
  - value stored at each index could be any data type
  - access the data of an array, by keying into it

*/

//arrays have index
//index - 0 1 2 3
//value - c a t s

// can index an array
let animalArr = ["c", "a", "t", "s"];
console.log(animalArr); //[ 'c', 'a', 't', 's' ]
console.log(animalArr[0]); //c
console.log(animalArr[1]); //a
console.log(animalArr[2]); //t
console.log(animalArr[3]); //s

console.log(animalArr[animalArr.length - 1]); //s

// arrays have a length property
console.log(animalArr.length); //4

// arrays can have many different data types
let variousData = [1, "two", true, () => "hey", [], {}];
// console.log(variousData);

//you can have nested arrays
let twoDArr = [[1], [2], [3]];
console.log(twoDArr); //[ [ 1 ], [ 2 ], [ 3 ] ]
console.log(twoDArr[0]);//[ 1 ]
console.log(twoDArr[0][0]);// 1

//we also have access to the .indexOf
console.log(animalArr.indexOf('c'));//0
// c is found at the 0th index
console.log(animalArr.indexOf('z'));//-1

// concatenation
let nums1 = [1, 2, 3, 4, 5];
let nums2 = [6, 7, 8, 9, 10];
let nums3 = [11, 12, 13, 14, 15];

console.log(nums2 + nums2 + nums3);
//6,7,8,9,106,7,8,9,1011,12,13,14,15
// all the arrays were type casted into strings, because of the concatenation operator

// we can use .concat
let res = nums1.concat(nums2, nums3)
// console.log(res);
/*
[
   1,  2,  3,  4,  5,  6,
   7,  8,  9, 10, 11, 12,
  13, 14, 15
]
*/


// find the sum of all numbers in an array



function sumArray(numbers) {
  let sum = 0; // use this variable to track the sum and maintain the value between iterations

  for(let i = 0; i < numbers.length; i++){
    // console.log('i',i);
    let number = numbers[i];
    // console.log(numbers,  'i', i, 'number', number);
    sum += number;
    // console.log('sum',sum);
  }

  console.log(sum);
  return sum;
};


console.log('return value', sumArray([1,2,3]));// 6
