/*


First and Last
Define a function firstAndLast that takes in an array of numbers and returns
the sum of the first and last element if there is an even number of elements in
the array. If there is an odd number of elements in the array, then the function
should return the difference between the first and last elements of the array.

  Polya's
  1. Understand the problem
    Input: numbers -> [1, 2, 3, 4]
    Output: number -> 5
    * How do we get from this to this output?
    * arr has even length - add first + last
    * arr has odd length - subtract last from first

  Tools
    - Check some condition?? - if statement/conditional
    - progress through data structure/ count arbitrary amount - loop/iterate
    - create usable chunks of logic - Functions
    - needing store more than one data type - Array

  Syntax
    - Go to straight mdn
  2. Make a plan
    1. define a function firstAndLast takes in array of numbers
    2. check IF array.length is even or odd
      a. How could we check if something is even or odd? - modulus n % 2 === 0
      b. if the arr is even
        a. add the first and last numbers
        b. return the sum
      c. if the arr is odd
        a. subtract the last from the first number
        b. return difference
  3. Execute the plan
  4. Refactor

*/

// your code here...
function firstAndLast(numbers) {

  // this is an edge case that handles empty arrays
  if(numbers.length === 0) {
    return null;
  };

  if(numbers.length === 1) {
    return 0;
  }

  //
  let first = numbers[0];
  let last = numbers[numbers.length - 1];

  // if (numbers.length % 2 === 0) return first + last;
  // else return first - last;

  return numbers.length % 2 === 0 ? first + last : first - last
}


// console.log("return value of", firstAndLast([1, 2, 3, 4])); // 5
console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
// console.log(firstAndLast([12, 5])); // 17
console.log(firstAndLast([12])); // 0
// console.log(firstAndLast([7, 11, 3])); // 4
console.log(firstAndLast([]));// NaN


/*

Three Increasing
Write a function threeIncreasing that accepts an array of numbers as an argument. The function should return a boolean indicating whether or not the array contains three consecutive numbers in consecutive increasing order, like 7, 8, 9.

*/

function threeIncreasing(numbers) {
  // console.log(numbers)
  for(let i = 0; i < numbers.length; i++){
    let number1 = numbers[i];
    let number2 = numbers[i + 1];
    let number3 = numbers[i + 2];
    // console.log(number1, number2, number3);
    if(number1 + 1 === number2 && number2 + 1 === number3) {
      return true;
    }
  };
  return false;
}


// console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
// console.log(threeIncreasing([2, 7, 8, 9]));                 // true
// console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
// console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false
