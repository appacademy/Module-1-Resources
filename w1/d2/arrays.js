/*


Arrays are ordered collections of data. Much like the strings we learned
about, arrays have indices attached to each position within the array. We can
access the value stored at each index by keying into it with the index
- separated by commas
- represented by square brackets,
- zero indexed
- array literal - [];
*/

//arrays can hold different data types
let arr = [1,true, 'hello', [1]];
// console.log(arr)

let animal = 'cats';
// console.log(animal[1])//a

let animalArr = ['c','a','t','s'];
// console.log(animalArr[0])
// console.log(animalArr[animalArr.length - 1])//s


//lets say you wanted to access a nested arr
let matrix = [[1,2,3],[4,5,6]];
// let nestedArr = matrix[0];
// nestedArr.indexOf(0);
// console.log(matrix[0]);//[1,2,3]
// console.log(matrix[0][0])//1 -  we are indexing into a nested arr, then indexing into the nested arr
// console.log(matrix[1][0])//4
// console.log(matrix[matrix.length - 1][2])//6
// console.log(matrix.length);
// //has a length property
// console.log(animal.length)//4 - string
// console.log(animalArr.length)//4 - array


// //.indexOf
// console.log(animalArr.indexOf('c'))// 0
console.log(animalArr.indexOf('Z'.toLowerCase()))// -1

// console.log([1,2,3] === [1,2,3]);//false

//concatenation
let nums1 = [1,2,3];
let nums2 = [4,5,6];
let nums3 = [7,8,9];

// console.log(nums1 + nums2 + nums3);//type casted our arrays into strings
//.concat
// console.log(nums1.concat(nums2, nums3))//[
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]

//test and see what your data type is
// console.log(typeof [])//object -  this wont work because array is a object
// console.log(Array.isArray(nums1))//true


/*
	Understand the problem
	Input: an array of numbers => [5, 6, 4]
    Output: an number - sum of all the numbers => 16
    How do we get from our input to our output

    Make a plan
    1. define a function called sumArray that takes in a array
    2. delcare a variable to track our sum => sum = 0;
    3. Iterate to access every number
    	a. as we iterate i want to store a in variable the number
        b. add to the sum, our current number
    4. after we finish iterating, return the sum variable

    Execute our plan

*/

function sumArray(array) {
  // console.log(array);//[ 5, 6, 4 ]
  let sum = 0;

  for(let i = 0; i < array.length; i++) {
    // console.log('index', i)
    let number = array[i];
    console.log('number', number)
    console.log('before sum', sum);
    sum += number
    console.log('after adding num', sum);
  }

return sum;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30
