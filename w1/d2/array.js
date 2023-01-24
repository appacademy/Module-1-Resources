/*
Arrays are ordered collections of data. Much like the strings we learned
about, arrays have indices attached to each position within the array. We can
access the value stored at each index by keying into it with the index separated by commas
represented by square brackets, zero indexed
this is array literal - [];
have access to the length property
we can index arrays
*/

//arrays are separated by commas, and contain any data type
let arr = [1, true, "hello", [1]];

// // console.log(arr);
// //index arrays
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// //here we can index into nested arrays
// console.log(arr[3][0])

// //can grab last value of array
// console.log(arr[arr.length - 1]);//[1]

// //we have access to length property
// console.log(arr.length);//4

//.indexOf
// console.log(arr.indexOf(1)); //0
// console.log(arr.indexOf('x'))//-1
// console.log(arr.indexOf([1]))//-1

//concat
let nums1 = [1, 2, 3];
let nums2 = [4, 5, 6];
let nums3 = [7, 8, 9];
// console.log(nums1 + nums2)

// console.log(nums1.concat(nums3, nums2));


function sumArray(array) {
  console.log('the input array is:', array);
  let sum = 0;
  
  for(let i = 0; i < array.length; i++) {
    console.log('Sum at start of loop', sum);
    let currentNum = array[i];
    console.log('The current index is:', i);
    console.log('the current number is:', currentNum);
    sum = sum + currentNum;
    // sum += currentNum //same thing
    console.log('sum at the end of the loop:', sum);
  }

  return sum;

};

// let arr2 = [1,2,3]
console.log(sumArray([1,2,3]))
