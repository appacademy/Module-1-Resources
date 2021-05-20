
let recSum = (arr, sum = 0) => {
  // if (!arr.length) {        // Base Case 
  //   return sum;             // While.... arr.length > 0
  // }
  if (arr.length) {
    let num = arr[0];
    sum += num;
    let restOfArr = arr.slice(1); // Recursive Step
    debugger;
    return recSum(restOfArr, sum); // pt2
  }
  return sum;

  
  
};

console.log(recSum([1, 2, 3, 4]));
// console.log(recSum([4])) // 4
// console.log(recSum([3, 4])) // 3 + recSum([4])

