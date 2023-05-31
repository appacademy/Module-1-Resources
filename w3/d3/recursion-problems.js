//sumToN
//to sum every number up to that number
//! base case - if(n === 0) return 0; - stopping point
//! recursive step - return n + sumToN(n - 1)  add the current num but also progress towards our bse case, how we move forward
//start at n, start at 5
//stopping point n === 0
//step of n - 1, where we recursive call sumToN

function sumToN(n) {
  if (n === 0) return 0; //base case - stop when n is 0, cause at that point weve check every number between the num passed in and 0

  if (n < 0) return null; //edge case  to handle if num is less than 0

  let res = n + sumToN(n - 1); //recursive step, n - 1, recursive call sumToN

  return res;
}
//3 + 2
//2 + 1
//1 + 0

// console.log(sumToN(3));//6
/*
sumToN(3) => 3 + func(2) //we cant add 3 to a func(2) until it has returned
  sumToN(2) = 2 + func(1)
    sumToN(1) => 1 + func(0)
      sumToN(0) => returns 0! Now we can start popping functions off the stack to get there values
    sumToN(1) => 1 + 0 = 1
  sumToN(2) = 2 + 1 = 3
sumToN(3) => 3 + 3 = 6
*/
//default params
//default params is just a way to default a value to a parameter if an argument is not passed
//no arg was passed for sum to represent, so lets default it to 0
//if a value is passed, use that value
function sumToN(n, sum = 0) {
  debugger;
  // let sum = 0;

  // let sum = 0;  // variable to store the final sum and end result
  if (n < 0) {
    // edge case for when n is negative... return null
    return null;
  }
  if (n === 0) {
    // base case where recursion stops or ends
    return sum; // the result returned when recursion finally stops
  }

  sum += n; // the work being done by recursion
  return sumToN(n - 1, sum); //recursive step, stepping towards the base case
};

// console.log(sumToN(3));//6
// console.log(sumToN(-8));//null
/*
sumtn(3) => sumToN(2, 3)
  sumton(2,3) => sumton(1, 5)
    sumton(1, 5) => sumton(0, 6)
      sumton(0, 6) => return 6
   sumton(1, 5) => return 6
 sumton(2,3) => return 6
sumtn(3) => return 6
*/




//sumArray
//sum all values of an array passed in
//base case - if(arr.length === 0) return null, if(arr.length > 0) create a variable for firstNum
//recursive step - array.shift() - remove first num from arr firstNum + sumArray()

function sumArr(arr) {
  // if(arr.length === 0) return null;//base case/edge case
  if(arr.length > 0) {//recursive case -  where the recursing happens
    let num = arr[0];//1
    arr.shift();//[2,3]
    let sum = sumArr(arr) + num;
    return sum;
  } else {
    return null
  }
}

//base case
function sumArray(arr) {
  if (arr.length === 0) return 0;
  // console.log(arr);
  let firstEl = arr.shift();
  return firstEl + sumArray(arr);
}

// console.log(sumArr([1,2,3]));//6/
/*
func([1,2,3]) => 1 + func([2,3])
  func([2,3]) => 2 + func([3])
    func([3]) => 3 + func([]);
      func([]) => return 0
    func([3]) => 3 + 0 = 3
  func([2,3]) => 2 + 3 = 5
func([1,2,3]) => 1 + 5 = 6
 */

//using slice
function sumArray(arr) {

  if (arr.length === 0) {
    return 0;
  }else {
    return arr[0] + sumArray(arr.slice(1));
  }

}

//using a default param
function sumArray(arr, i = 0) {

  if(i >= arr.length) return 0;

 return arr[i] + sumArray(arr, ++i);

}

//using pop
function sumArray(arr) {
  if (!arr.length) return 0;

  return arr.pop() + sumArray(arr);
}

//using slice, with default param
function sumArray(arr, sum = 0) {
  if(!arr.length) return sum;
  sum += arr[0];
  return sumArray(arr.slice(1), sum)
};

//rest + destructuring
function sumArray(arr){
  if(!arr.length) return 0

  let [first, ...rest] = arr;

  return first + sumArr(rest);
}

//ternary
let sumArray = arr => !arr.length ? 0 : arr[0] + sumArray(arr.slice(1));

// let subSets = arr => !arr.length ? [[]] : [...subsets(arr.slice(0, -1)), subsets(arr.slice(0, -1)).map(ele => [...[...ele, arr[arr.length - 1]]])];


