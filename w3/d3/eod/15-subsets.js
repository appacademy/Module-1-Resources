/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

const subsets = (arr) => {
  /**
   * 1. take out last element
   * 2. get subsets of remaining subarray (recursively)
   * 3. distribute last element back into subsets
   * 4. combine subsets with last and subsets without last
  */

  if (!arr.length) return [[]]; //base case
  let last = arr[arr.length - 1]
  let subsWithoutLast = subsets(arr.slice(0, arr.length - 1)) //recursive call/step
  let subsWithLast = subsWithoutLast.map((subArray) => subArray.concat(last))
  console.log('without: ', subsWithoutLast)
  console.log('with: ', subsWithLast)
  console.log()
  return subsWithoutLast.concat(subsWithLast)
}


subsets([1, 2]) // [[], [1], [2], [1, 2]]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}