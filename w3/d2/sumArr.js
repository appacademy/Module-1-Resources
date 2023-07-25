/*

Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15

*/

/*
  What is our base case?
    * array.length === 0
  What is our recursive step?
    * shorten the array
    * array.slice(1);
*/

// function sumArray(arr) {
//   // base case
//   if (!arr.length) return 0;

//   // recursive step
//   return arr[0] + sumArray(arr.slice(1));
// }

// console.log(sumArray([0, 1, -3])); //  -2
// console.log(sumArray([1, 2, 3, 4, 5])); // 15
// console.log(sumArray([1, 2, 3])); //  6
// sumArray([1, 2, 3]) => 1 + sumArray([2,3])
// sumArray([2,3]) => 2 + sumArray([3])
// sumArray([3]) => 3 + sumArray([])
// sumArray([]) => return 0
// sumArray([3]) => 3 + 0 = 3
// sumArray([2,3]) => 2 + 3 = 5
// sumArray([1, 2, 3]) => 6

// Arnel's one liner
// const sumArray = (arr) => (!arr.length ? 0 : sumArray(arr.slice(1)) + arr[0]);

// * Note the use of the default param to keep track of the index
function sumArray(arr, i = 0) {
  // Set i as a default parameter = 0
  if (i >= arr.length) {
    // Once i is at least the arr length
    return 0; // return 0
  }
  let num = arr[i]; // Set the current num to a variable
  i++; // Increase i by one
  return num + sumArray(arr, i); // add the current num to the recursive array.
}


// sumArray([1, 2, 3])

// uses shift
function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let firstel = arr[0]

  arr.shift();
  return firstel + sumArray(arr)
}

// uses destructure/rest
function sumArray (arr) {
  if (!arr.length) return 0

  let [first, ...rest] = arr;

  return first + sumArray(rest)
}


// uses pop
function sumArray2(arr, sum = 0) {

  if(arr.length === 0) return sum;

  let num = arr.pop()

  sum += num

  return sumArray2(arr, sum);
}


console.log(sumArray2([1,2,3]));// 6
// sumArray2([1,2,3]) => sumArray2([1,2], 3)
// sumArray2([1,2,3], 3) => sumArray2([1], 5)
// sumArray2([1,2,3], 5) => sumArray2([], 6)
// sumArray2([], 6) => return 6
// sumArray2([1,2,3], 5) => 6
// sumArray2([1,2,3], 3) => 6
// sumArray2([1,2,3]) => 6
