// 3 things we need for recursion 
// 1. Base Case
// 2. recursive Case
// 3. Recursive Step

// Reverse an Array

// [1, 2, 3] => [3, 2, 1]


// const reverseArray = arr => {
//   // Base Case - empty array
//   if (!arr.length) return [];

//   // Recursive Case - array has a length
//   let lastEle = arr.pop();

//   // Recursive Step
//   return [lastEle, ...reverseArray(arr)];
// }

// const reverse = arr => {
//   let newArr = []
//   while (arr.length) {
//     let lastEle = arr.pop()
//     newArr.push(lastEle)
//   }
//   return newArr
// }


// const arr = [1, 2, 3];

// // console.log(reverse(arr))

// console.log(reverseArray([])); // []
// console.log(reverseArray([1])); // [1, ...reverseArray([])] => [1, ...[]] => [1]
// console.log(reverseArray([1, 2])); // [2, ...reverseArray([1])] => [2, ...[1]] => [2, 1]
// console.log(reverseArray([1, 2, 3])); // [3, ...reverseArray([1,2])] => [3, ...[2,1]] => [3, 2, 1]



const printer = (name="Brad") => {
  console.log(name)
}

printer();
printer("Jeff");