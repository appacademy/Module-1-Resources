// Reversing an Array

// 3 things we need
  // 1. Base Case
  // 2. Recursive case, move towards the base case
  // 3. Recrursive Step

// [1,2,3] => [3,2,1]

const reverseArray = arr => {
  // Base Case
  if (!arr.length) return [];

  // Recursive Case - arr has a length
  let lastEle = arr.pop();

  // Recursive Step
  return [lastEle, ...reverseArray(arr)];
}

const arr = [1,2,3];

console.log(reverseArray([])); // []
console.log(reverseArray([1])); // [1, ...reverseArray([])] => [1, ...[]] => [1]
console.log(reverseArray([1,2])); // [2, ...reverseArray([1])] => [2, ...[1]] => [2,1]
console.log(reverseArray([1,2,3])); // [3, ...reverseArray([1,2])] => [3, ...[2,1]] => [3,2,1]