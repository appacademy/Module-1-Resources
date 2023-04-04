/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/


const range = (start, end, res = []) => {
  if (start >= end) return res;
  res.push(start);
  return range(++start, end, res);
}

// const range = (start, end) => end <= start ? [] : [start].concat(range(start + 1, end));
// const range = (start, end) => start >= end ? [] : [start, ...range(start + 1, end)];

// const range = (start, end)  => {
//   let arr = [];
//   if (end < start) return arr;

//   if (start === end) return arr;

//   arr.push(start)

//   return arr.concat(range(start + 1, end))
// }
// console.log(range(1, 5)); // [1, 2, 3, 4]
// console.log(range(3, 4)); // [3]
// console.log(range(7, 6)); // []

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
