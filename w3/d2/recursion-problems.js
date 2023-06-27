/*

Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null

*/

function sumToN(n){
  //2 base cases
  // if(n <= 0 || n === 0) return null; handles both in one line
  if(n < 0) return null; //edge case
  if(n === 0) return 0;

  //recursive step - n - 1
  return sumToN(n - 1) + n;
}


// console.log(sumToN(3));//6
//sumToN(3) => sumToN(2) + 3
//sumToN(2) => sumToN(1) + 2
//sumToN(1) => sumToN(0) + 1
//sumToN(0) => Return 0
//sumToN(1) => 0 + 1 = 1
//sumToN(2) => 1 + 2 = 3
//sumToN(3) => 3 + 3 = 6




/*

Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15

*/

function sumArray(arr){
  //recursive case
  if(arr.length > 0) return arr[0] + sumArray(arr.slice(1));
  if(arr.length === 0) return 0;
}

// console.log(sumArray([1,2,3]));//6
//sumArr([1,2,3]) => 1 + sumArr([2,3]);
//sumArr([2,3])   => 2 + sumArr([3]);
//sumArr([3])     => 3 + sumArr([]);
//sumArr([])      => return 0
//sumArr([3])     => 3 + 0 = 3
//sumArr([2,3])   => 2 + 3 = 5
//sumArr([1,2,3]) => 1 + 5 = 6

//Anthony's one liner
const sumArr = arr => arr.length === 0 ? 0 : arr[0] + sumArr(arr.slice(1));


//ty with the reduce, no recursion
function sumArray(arr) {
  if (arr === 0) {
    return 0;
  }
  return arr.reduce((a, b) => a + b, 0);
}

//Hayden with the pop!
function sumArray(arr) {
  if (arr.length === 0) return 0;
  else {
    let popVal = arr.pop();//pop to get the last element
    return sumArray(arr) + popVal;
  }
}

//Elliot with the shift
function sumArray(arr) {
  if(arr.length === 0) return 0;
  return arr.shift() + sumArray(arr);
}

// Derek with the rest
// Default parameter
// so if no argument is provided a parameter will default to whatever you set it to, in this case, if no sum is provided, sum will default its value to 0
//if a sum is provided, then use that sum
function sumArray2(arr, sum = 0) {
  // console.log(sum);
  if(arr.length === 0) return sum;
  let [firstEle, ...rest] = arr;
  //destructuring out the first element, and storing the rest of the elements in an array
  sum += firstEle
  return sumArray2(rest, sum)
}

// console.log(sumArray2([1,2,3]));
//sumArray([1,2,3], 0) -> sumArray([2,3], 1)
//sumArray([2,3], 1)   -> sumArray([3], 3)
//sumArray([3], 3)     -> sumArray([], 6)
//sumArray([])         -> return 6
//sumArray([3], 3)     -> 6
//sumArray([2,3], 1)   -> 6
//sumArray([1,2,3], 0) -> 6



// start at whatever number is passed in
// if youre working with problems that involve numbers
// youll want to follow a similar pattern to this
// try to at least get every number to print
// so the data type were working with, gives us hints as to what we should return,
function logNums(num) {
  //base case - when do we stop?
  if (num === 0) return 0;//stop at 0

  console.log(num);

  //recursive step - how de we reach our base case? 0
  //how do we get from 5 to 0? subtract 1
  //recursive step - subtract 1 till we hit 0
  debugger;
  return logNums(num - 1);
}

//if youre working with arrays
//try to get at least every element to be printed to the screen
function recurseArr(arr){
  if(!arr.length) return;//stop when there is no length

  //get the value we need but also shorten the array
  //can use pop, shift, slice, rest

  // let popped = arr.pop();//3 2 1
  // console.log(popped);
  // return recurseArr(arr);

  // let shifted = arr.shift();
  // console.log(shifted);
  // return recurseArr(arr);//1 2 3

  console.log(arr[0]);
  return recurseArr(arr.slice(1)) + recurseArr(arr.slice(1));
  //can do something LIKE this
}


recurseArr([1,2,3]);
