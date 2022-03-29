// Recursion 
// 1. Base Case
// 2. Recursive Case
// 3. Recursive Step/Call

// [1, 2, 3] => [3, 2, 1]

// Iter Solution
// let arr = [1,2,3]
// let reversed = [];
// while (arr.length) {
//   let lastEle = arr.pop()
//   reversed.push(lastEle)
// }
// console.log(reversed)

// Recur Solution
const reverseArray = arr => {
  // Base Case - empty array
  if (!arr.length) return [];

  // Recursive Case - arr has a length and step
  let lastEle = arr.pop();

  // Recursive Call
  return [lastEle, ...reverseArray(arr)];
};

// console.log(reverseArray([])); // []
// console.log(reverseArray([1])); // [1, ...reverseArray([])] => [1, ...[]] => [1]
// console.log(reverseArray([1, 2])); // [2, ...reverseArray([1])] => [2, ...[1]] => [2, 1]
// console.log(reverseArray([1, 2, 3])); // [3, ...reverseArray([1,2])] => [3, ...[2, 1]] => [3, 2, 1]