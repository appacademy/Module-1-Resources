/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/

function range(start, end) {

  // base case
  if(start >= end) return [];

  // return [start].concat(range(start + 1, end));

  // return [start, ...range(start + 1, end)];

  // let recurse = range(start + 1, end);
  // recurse.unshift(start);
  // return recurse;
  
  let recurse = range(start, --end);
  recurse.push(end);
  return recurse;
};

/*
  range(5, 5) => return []
  range(4, 5) => [4].concat( [] );  [4]
  range(3, 5) => [3].concat( [4] ); [3,4]
  range(2, 5) => [2].concat( [3,4] ); [2,3,4]
  range(1, 5) => [1].concat( [2,3,4] ); ; [1,2,3,]
*/

console.log(range(1, 5)); // [1, 2, 3, 4]
// console.log(range(3, 4)); // [3]
// console.log(range(7, 6)); // []
