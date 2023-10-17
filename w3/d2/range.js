/*


Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than the start, return an empty array.

Examples:

*/

function range(start, end) {
  if (start >= end) return [];

  // console.log(start);

  // return [start].concat(range(start + 1, end))
  // return [start, ...range(start + 1, end)];

  let recurse = range(start, --end);
  recurse.push(end);
  return recurse;
  // let res = range(start + 1, end);
  // console.log(res);
}

console.log(range(1, 5)); // [1, 2, 3, 4]
/*
Top of stack
range(1, 5) => [1].concat(range(2, 5))
range(2, 5) => [2].concat(range(3, 5))
range(3, 5) => [3].concat(range(4, 5))
range(4, 5) => [4].concat(range(5, 5))
range(5, 5) => return [] = top of the stack
range(4, 5) => [4]
range(3, 5) => [3,4]
range(2, 5) => [2,3,4]
range(1, 5) => [1,2,3,4]
Bottom of stack
*/
// range(3, 4); // [3]
// range(7, 6); // []
