



//sum all numbers up to n
//base case - if(n === 0)
//recursive step - n--
//base case 2 - if(n < 0) return null

function sumToN(n) {

  //base case - stop when n is 0
  if(n === 0) return 0;
  //we can have two base cases
  if(n < 0) return null;


  return n + sumToN(n - 1);

}

// console.log(sumToN(3))  // returns 6
//WE CANT ADD 3 TO sumToN(2)till we get its return value
  //sumToN(3) => 3 + sumToN(2)
    //sumToN(2) => 2 + sumToN(1)
      //sumToN(1) => 1 + sumToN(0);
        //sumToN(0) => return 1000
// console.log(sumToN(9))  // returns 45
// console.log(sumToN(-8))  // returns null


//sum all values of an array
//base case - !arr.length
//recursive step - arr.slice(1) - we will shorten the length of the arr as we recurse till we hit our base case


function sumArray(arr) {
  //base case stop when array is empty
  if(!arr.length) return 0;

  //recursive step - slice off elements of the array as we recurse
  return arr[0] + sumArray(arr.slice(1)) + sumArray(arr.slice(1));
}

// console.log(null + 12)//null is treated as 0

// console.log(sumArray([1, 2, 3])); // 6
//sumArr([1,2,3]) => 1 + sumArr([2,3])
  //sumArr([2,3]) => 2 + sumArr([3])
    //sumArr([3]) => 3 + sumArr([]);
      //sumArr([]) => return null
    //sumArr([3]) => 3 + null = 3
  //sumArr([2,3]) => 2 + 3 = 5
//sumArr([1,2,3]) => 1 + 5 = 6 return 6


// console.log(sumArray([]))
// console.log(sumArray([1, 2, 3, 4, 5])); // 15

//default param
//default param, if not passed in argument, will default to the value after the equal sign
//want to preserve a variable through function calls, but not put in the global scope

function sumArr2(arr, sum = 0) {
  if(!arr.length) return sum;

  sum += arr.pop();

  return  sumArr2(arr, sum);
}

 console.log(sumArr2([1,2,3]));
//sumArr([1,2,3], 0) => func([1,2], 3)
  //sumarr([1,2], 3) => func([1], 5)
    //sumarr([1], 5) => func([], 6)
      //sumarr([], 6) => return 6
      //sumarr => return 6
    //sumarr => return 6
  //sumarr => return 6
//sumarr => return 6
