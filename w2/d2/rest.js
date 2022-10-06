// Write your code for `restSum` here

// function myFunc(param1, param2, ...param3){
//   console.log(param1, param2, param3)
// }

// myFunc("arg1", "arg2", "arg3", "arg4")


// Dynamic Number of Arguments Version
function restSum(...numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
         sum += numbers[i] 
    }
    return sum
  }
  console.log(restSum(3,5,6)); // => 14
  console.log(restSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 45
  console.log(restSum(0)); // => 0
  
  
  // Array Version
  function restSumArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
         sum += numbers[i] 
    }
    return sum
  }
  
  console.log(restSumArray([3,5,6])); // => 14
  console.log(restSumArray([1, 2, 3, 4, 5, 6, 7, 8, 9])); // => 45
  console.log(restSumArray([0])); // => 0
  