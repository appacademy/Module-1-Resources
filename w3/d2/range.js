/*
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []


*/
// 1 5
// 1 4
// 1 3
// 1 2
// 1 1

function range(start, end, arr = []) {
  console.log(start);

  if(start >= end) return arr;


  // let result = range(start + 1, end);
  // result.unshift(start);
  // return result;

  // return [start].concat(range(start + 1, end));
  // return [start, ...range(start + 1, end)]
  arr.push(start);
  // return range(start + 1, end, arr)
};

/*
range(1, 5) => range(2, 5) 1
range(2, 5) => range(3, 5) 2
range(3, 5) => range(4, 5) 3
range(4, 5) => range(5, 5) 4
range(5, 5) => []
range(4, 5) => [].unshift(4)       [4]
range(3, 5) => [4].unshift(3)      [3,4]
range(2, 5) => [3,4].unshift(2)    [2,3,4]
range(1, 5) =>  [2,3,4].unshift(1) [1,2,3,4]
*/
console.log(range(1, 5)); // [1, 2, 3, 4]
// console.log(range(3, 4)); // [3]
// console.log(range(7, 6)); // []



// function myFunc(){


//   return myFunc() + myFunc();
// }
