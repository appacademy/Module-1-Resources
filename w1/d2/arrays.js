/*

  Array - ordered collection of data. much like the strings we learned earlier
  arrays have indices attached to each position within the array
  we can index arrays
  we can the length property
  this is a array literal [];
  separated by commas

*/

//arrays hold multiple data types, even at the same time
let arr = [1, 2, 3, 4, "6", true, [1, 2, [3]]];
// console.log(arr);

let animal ='cats';

// console.log(animal[0])//c
// console.log(animal[animal.length-1])//s

//we can do the same thing with arrays because they have indexes
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[arr.length - 1]);[1,2,[3]]
// console.log(arr[arr.length - 1][2][0]);//3

// //length property
// console.log(animal.length);//4
// console.log(arr.length);//7

// //can also use .indexOf method
// console.log(animal.indexOf('a'))//1
// console.log(arr.indexOf(6))//-1

//concatenation
let nums1 = [1, 2, 3, 4, 5];
let nums2 = [6, 7, 8, 9, 10];
let nums3 = [11, 12, 13, 14, 15];

///dont concatenate using + sign
//we dont want to use this, it type coerces the arrays into a string
// console.log(nums1 + nums2 + nums3)//1,2,3,4,56,7,8,9,1011,12,13,14,15


//.concat
//order matters in which in you concatenate
console.log(nums1.concat(nums1, nums2))
