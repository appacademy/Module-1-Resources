// Reverse An Array

// 3 things we need
  // 1. Base Case
  // 2. Recursive Case
  // 3. Recusive Step

// [1, 2, 3] => [3, 2, 1]

const reverseArr = arr => {
  // Base Case
  if (!arr.length) return [];

  // Recursive Case - when the arr has a length
  let lastEle = arr.pop();

  // Recursive Step
  return [lastEle, ...reverseArr(arr)];
}

console.log(reverseArr([])); // []
console.log(reverseArr([1])); // [1, ...reverseArr([])] => [1, ...[]] => [1]
console.log(reverseArr([1, 2])); // [2, ...reverseArr([1])] => [2, ...[1]] => [2, 1]
console.log(reverseArr([1, 2, 3])); // [3, ...reverseArr([1,2])] => [3, ...[2, 1]] => [3, 2, 1]