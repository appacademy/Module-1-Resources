/*


  - Arrays are ordered collections of data. Much like the strings we learned
  about, arrays have indices attached to each position within the array. We can
  access the value stored at each index by keying into it with the index separated by commas represented by square brackets, zero indexed


*/

//array literal - [];
let age = 5;
//arrays let us store data types!
let arr = [1, true, "brandon", [1, 2]];

let animal = "cats";
// console.log(animal[0]);
// console.log(animal[1]);
// console.log(animal[2]);
// console.log(animal[3]);

//can index a array just like a string
let animalArr = ["c", "a", "t", "s"];
// console.log(animalArr[0])
// console.log(animalArr[1])
// console.log(animalArr[2])
// console.log(animalArr[3])
// console.log(animalArr[animalArr.length - 1]);//s

let twoDimensionalArray = [
  [0, 1, 2],
  [3, 4, 5],
];

// console.log(twoDimensionalArray);
// console.log(twoDimensionalArray[0]);
// console.log(twoDimensionalArray[0][0]);//indexed into first value of first array
// console.log(twoDimensionalArray[1][2]);//5



// has a length property just like a string
// console.log(twoDimensionalArray.length);//2
// console.log(twoDimensionalArray[0].length);//3

// can also use .indexOf
// console.log(animalArr);
// console.log(animalArr.indexOf('c'));// 0
// console.log(animalArr.indexOf('a'));// 1
// console.log(animalArr.indexOf('z'));// -1

// console.log(twoDimensionalArray);//[ [ 0, 1, 2 ], [ 3, 4, 5 ] ]
// console.log(twoDimensionalArray.indexOf([0, 1, 2]));// -1
// arrays are reference data types, meaning we cannot compare arrays to other arrays
// arrays are reference data type, they are stored differently in memory, they use a reference, for them to be the same they have to be the same reference
// [1] === [1]
// console.log([1] === [1]);//false



//concatenation

let nums1 = [1, 2, 3, 4, 5];
let nums2 = [6, 7, 8, 9, 10];
let nums3 = [11, 12, 13, 14, 15];

// console.log(nums1 + nums2 + nums3);// 1,2,3,4,56,7,8,9,1011,12,13,14,15
//typecase this array into a string and concatenate them

//this is much better
// console.log(nums1.concat(nums2, nums3, nums1, nums1, nums1));
// console.log(nums1.concat(nums3, nums2))
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


// sum an array!
// lets make a function that sums all elements of an array
// [1,2,3,4,5]

function sumArr(arr) {
  let sum = 0;
  console.log('the input arr is', arr);

  for(let i = 0; i < arr.length; i++) {
    // sum = arr[i] + sum;
    console.log('sum at the start of loop', sum);
    console.log('current number', arr[i]);
    sum += arr[i];
    console.log('sum end of loop', sum);
  };
  return sum;
}

console.log('the return value of sumArr',sumArr([1,2,3,4,5]));//15


// function sum2(){
//   sum += 100
// }
// sum2();
// console.log(sum);
