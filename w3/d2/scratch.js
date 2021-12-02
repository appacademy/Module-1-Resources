// 3 Things Needed
// 1. Base Case
// 2. Recursive Case, moving towards the base case
// 3. Recursive Step

// [1,2,3] => [3,2,1]

const reverseArray = arr => {
  // Base Case - arr does not have a length
  if (!arr.length) {
    return [];
  }

  // Recursive Case & move towards the base case
  // Recursive Case: arr has a length
  let lastEle = arr.pop();

  // Recursive Step
  return [lastEle, ...reverseArray(arr)];

  // let newArr = [];

  // while(arr.length) {
  //   let last = arr.pop()
  //   newArr.push(last)
  // }

  // return newArr;
}


console.log(reverseArray([])); // []
console.log(reverseArray([1])); // [1, ...reverseArray([])] => [1, ...[]] => [1]
console.log(reverseArray([1,2])); // [2, ...reverseArray([1])] =>  [2, ...[1]] => [2,1]
console.log(reverseArray([1,2,3])); // [3, ...reverseArray([1,2])] => [3, ...[2,1]] => [3,2,1]

