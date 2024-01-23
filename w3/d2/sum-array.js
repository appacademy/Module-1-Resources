/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

function sumArray(arr) {
  if(!arr.length) {
    return 0;
  } else {


  // find a way to shorten the array
  // let popped = arr.pop();
  let shifted = arr.shift();
  // let [first, ...rest] = arr;

  return sumArray(arr) + shifted;
  }
  // return arr[0] + sumArray(arr.slice(1));
}

// console.log(sumArray([1, 2, 3])); //  6
/*
sumArray([])        => 0
sumArray([3])       => 3
sumArray([2, 3])    => 5

sumArray([1, 2, 3]) => 6
*/


// console.log(sumArray([0, 1, -3])); //  -2
// console.log(sumArray([1, 2, 3, 4, 5])); // 15


function sumArrayWDefault(arr, sum = 0) {
  if(!arr.length) return sum;

  let shifted = arr.shift();
  sum += shifted;

  return sumArrayWDefault(arr, sum);
}

/*
sumArrayWDefault([], 6)     => 6

sumArrayWDefault([3], 3)    => 6

sumArrayWDefault([2, 3], 1) => 6

sumArrayWDefault([1, 2, 3]) => 6
*/
console.log(sumArrayWDefault([1, 2, 3])); //  6
