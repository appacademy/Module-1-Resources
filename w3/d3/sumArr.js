





//base case -
//recursive step -

// function sumArray(arr) {
//   // Your code here
//   if(arr.length === 0) return 0;

//   //recursive step
//   return arr[0] + sumArray(arr.slice(1));
// }

//with default param
function sumArray(arr, sum = 0) {
  if(!arr.length) return sum;

  sum += arr.pop();

  return sumArray(arr, sum)
}
//sumArray([1,2,3], 0) => sumArr([2,3], 3)
  //sumArray([2,3], 3) => sumArr([3], 5)
    //sumArr([3], 5) => sumArr([], )


// console.log([1,2,3].slice(2));
console.log(sumArray([1, 2, 3])); //  6
//sumArr([1,2,3]) => 1 + func([2,3])
  //sumArr([2,3]) => 2 + func([3])
    //sumArr([3]) => 3 + func([]);
      //sumArr([]) => return 0
    //sumArr([3]) => 3 + 0 => 3
  //sumArr([2,3]) => 2 + 3 => 5
//sumArr([1,2,3]) => 1 + 5 => 6

// console.log(sumArray([0, 1, -3])); //  -2
// console.log(sumArray([1, 2, 3, 4, 5])); // 15



function iceCreamShop(flavors, favorite) {
  // Your code here
  if(!flavors.length) return false;

  if(flavors[0] === favorite) return true;

  return iceCreamShop(flavors.slice(1), favorite)
}

console.log(iceCreamShop(['vanilla', 'strawberry'], 'blue moon')); // false
console.log(iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')); // true

/*
icecreamshop(['vanilla', 'strawberry'], favorite) => func(['strawberry'], blue moon);
  func(['strawberry'], blue moon) => func([], blue moon)
    func([], blue moon) => return false
*/
