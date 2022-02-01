// 3 things for Recursion
  // 1. Base Case
  // 2. Recursive Case, move towards the base case
  // 3. Recursive Step

// Reverse an Array

// [1, 2, 3] => [3, 2, 1]

const reverseArray = arr => {
  // Base Case
  if (!arr.length) return [];

  // Recursive Case - arr has a length
  let lastEl = arr.pop();

  // Recursive Step
  return [lastEl, ...reverseArray(arr)];
};

console.log(reverseArray([])); // []
console.log(reverseArray([1])); // [1,  ...reverseArray([])] => [1, ...[]] => [1]
console.log(reverseArray([1,2])); // [2, ...reverseArray([1])] => [2, ...[1]] => [2, 1]
console.log(reverseArray([1,2,3])); // [3, ...reverseArray([1,2])] => [3, ...[2,1]] => [3, 2, 1]