//sumToN
//base case - check if num < 0
//recursive step - n = 0 or is n < 0

function sumToN(n) {
  if (n < 0) return null; //base case - check if num < 0
  if (n <= 1) return n; //2nd base case -  n = 0 or is n < 0

  return n + sumToN(n - 1); //recursive step - n - 1
}

// console.log(sumToN(3));//6
/*
sumToN(3) => 3 + sumToN(2)
  sumToN(2) => 2  + sumToN(1)
    sumToN(1) => return 1 - now we have a return value
  sumToN(2) => 2 + 1 = 3
sumToN(3) => 3 + 3 = 6;
*/

//sumArr
//recursive case
function sumArr(arr) {
  if (arr.length > 0) {
    let num = arr[0];

    arr.shift(); //recursive step
    let sum = sumArr(arr) + num;
    return sum;
  } else {
    return null;
  }
}

// console.log(sumArr([1, 2, 3])); //6
/*
sumArr([1, 2, 3]) => sumArr([2,3]) + 1
  sumArr([2, 3]) => sumArr([3]) + 2
    sumArr([3]) => sumArr([]) + 3
      sumArr([]) => return null - 0 - we have a return value, we can start popping off that stack!
    sumArr([3]) => 0 + 3 = 3
  sumArr([2,3]) => 3 + 2 = 5
sumArr([1,2,3]) => 5 + 1 = 6
*/

// console.log(null + 1)

//base case
// function sumArr(arr) {
//   if (arr.length === 0) return null;
//   let num = arr[0];

//   arr.shift(); //recursive step
//   let sum = sumArr(arr) + num;
//   return sum;
// }

// console.log(sumArr([1, 2, 3])); //6


// function sumArr(arr) {
//   if (!arr.length) return null;

//   return arr[0] + sumArr(arr.slice(1));
// }

// let sumArr2 = arr => !arr.length ? null : arr[0] + sumArr2(arr.slice(1));

// console.log(sumArr2([1, 2, 3])); //6

//with default with default param
//what a default param is, if argument is not passed, a value will default to its default parameters
//if a value is passed, then the function will use that value passed
function sumArr3(arr, sum = 0) {
  // console.log(sum);
  if(!arr.length) return sum;

  sum += arr.pop();

  return sumArr3(arr, sum);
}

// console.log(sumArr3([1,2,3]));//default param will be 0, no arg was passed
// console.log(sumArr3([1,2,3], 200));//default param will be 200, cause 200 was passed
//6
/*
sumArr([1,2,3], 0) => sumArr([1,2], 3)
  sumArr([1,2], 3) => sumArr([1], 5)
    sumArr([1], 5) => sumArr([[], 6)
      sumArr([], 6) => return 6 - we hit a return value
    sumArr([1], 5) => 6
  sumArr([1,2], 3) => 6
sumArr([1,2,3], 0) => 6
*/
