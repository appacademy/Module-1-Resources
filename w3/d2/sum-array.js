
//sum array -
//goal - sum up all the numbers in the given array
/*
  Polyas
    Understand the problem:
    Input: arr of numbers ==> [1,2,3]
    Output: num - sum of numbers => 6
    1 + 2 + 3 = 6
    *Recursive

    Make a plan
    1. define a function that takes in an arr
    2. base case: if(arr.length === 0) return 0;
    3. recursive step: checking the length of the arr in our base case
      - can use slice to make a copy and remove the first element
        - will give us everyhitng but the first element
    4. store the first num of the arr in a vairable
    5. as we recurse well add the element sliced off to the first element of the arr
    6. recursivly call sumArr passing the sliced version of our arr
*/


// function sumArr(arr) {
//   debugger;
//   if(arr.length === 0) return 0;

//   let first = sumArr(arr.slice(1));
//   debugger;
//   let sec = arr[0];
//   debugger;
//   // console.log(first);
//   // console.log(sec)
//   return first + sec;
//   // return sumArr(arr.slice(1)) + arr[0];
// }

// debugger;
// sumArr([1,2,3])//6
//sumArr([1,2,3]) ==> func([2,3]) + 1
  //sumArr([2,3]) ==> func([3]) + 2
    //sumArr([3]) ==> func([]) + 3
      //sumArr([]) ==> return 0!
    //sumArr([3]) => 0 + 3 = 3
  //sumArr([2,3]) => 2 + 3 = 5
//sumArr([1,2,3]) => 5 + 1 = 6 return 6

//default param, if a value is not provided default it to whatever we assigned the variable too
function sumArr2(arr, sum = 0) {

  if(arr.length === 0) return sum;

  sum += arr.pop();
  //0 + 3
  //[1,2]

  return sumArr2(arr, sum);
}

// console.log(sumArr2([1,2,3]))//6
//sumArr([1,2,3]) => sumArr([1,2], 3);
  //sumArr([1,2]) ==> sumArr([1], 5);
    //sumArr([1]) =>> sumArr([], 6);
      //sumArr([]) ==> return sum ==> 6
    //sumarr() ==> 6
  //==> 6
//==> 6

//gal one liner
const sumArr = arr => arr.length === 0 ? null : arr.pop() + sumArr(arr);
console.log(sumArr([1,2,3]))//6


