/* 
You have a robot with only two hands, it can only add two numbers
But we need to add 4 numbers... 
1 + 2 + 3 + 4 = 1 + 9 // 10
2 + 3 + 4 = 2 + 7 // 9
3 + 4 = (3) + (4) // 7
4 = 4 //
*/
// recSum(4) = 4
// recSum(3, 4) = 3 + 4
// recSum(2,3,4) = 2 + 7
// recSum(1,2,3,4) = 10

// Base Case
// Recursive Case - while??
// Recursive Step

let recSum = (arr) => {
  if (arr.length === 0) { // Base Case 
    return 0;             // While.... arr.length > 0
  }

  let num = arr[0];
  let restOfArr = arr.slice(1); // Recursive Step
  let restOfArrSum = recSum(restOfArr); // pt2
  let sum = num + restOfArrSum;

  return sum;
};

console.log(recSum([1, 2, 3, 4]));
// console.log(recSum([4])) // 4
// console.log(recSum([3, 4])) // 3 + recSum([4])
