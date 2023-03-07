

//sumToN
//to sum all numbers up to n
//base case - if(n < 0) return null
//base case 2 - if(n === 0) return 0;
//recursive step - n--

function sumToN(n){

  if(n < 0) return null;//base case to check our edge case
  // if(n === 0) return 0;//base case 2 - stop recursing when the num is 0

  return n + sumToN(--n)//what makes our function recursive
                    //recursive step - --n(cant use n-- because it happens after passing the value), subtract the number from the starting n, until we hit the base case
}

//n-- post fix operator - subtract the number after passing it to the next function call
//--n prefix operator - subtract the number before passing it the next function call

// console.log(sumToN(3))  // returns 6
//   //sumToN(3) => 3 + func(2) -  we cant add 3 to the return of calling func(2) until it has returned
//     //sumToN(2) => 2 + func(1)
//       //sumToN(1) => 1 + func(0)
//         //sumToN(0) => RETURN 0 we can start popping of the stack and resolving he functions to there return value

// console.log(sumToN(9))  // returns 45
// console.log(sumToN(-8))  // returns null



//goal: was to find the sum off all the values in the arr
//base case: if(!arr.length) - were gonna stop when there is no length in our array
//recursive step: how do i get to the base case? we can arr.slice(1), .pop(), we will slice the array till it has no length

function sumArray(arr) {

  if(!arr.length) return 0;//base case


  return arr[0] + sumArray(arr.slice(1));//recursive step -  arr.slice([1,2,3]) => [2,3]

};

// console.log(sumArray([1,2,3])); // 6
  //sumArray([1,2,3]) => 1 + func([2,3]);
    //sumArr([2,3]) => 2 + func([3]);
      //sumArr([3]) => 3 + func([]);
        //sumArr([]) =>  return 0
      //sumArr([3]) => 3 + 0 => 3
    //sumArr([2,3]) => 2 + 3 = 5
  //sumArr(1,2,3) => 1 + 5 = 6




// console.log(sumArray([0, 1, -3])); //  -2
// console.log(sumArray([1, 2, 3, 4, 5])); // 15

//USE POP DEFAULT PARAMS
//What a default param is, if a argument is not passed, a value will default to its default parameter, if a value is passed, then the function will use that value
function sumArrayWPop(arr, sum = 0) {

  // console.log(sum)
  if(!arr.length) return sum;

  sum += arr.pop();

  return sumArrayWPop(arr, sum);

};

console.log(sumArrayWPop([1,2,3])); // 6
  //sumArr([1,2,3], 0) => sumArr([1,2], 3)
    //sumArr([1,2], 3) => sumArr([1], 5);
      //sumArr([1], 5) => sumArr([], 6);
        //sumArr([], 6) => return sum which is 6
      //sumArr => 6
    //sumArr => 6
  //sumArr => 6
