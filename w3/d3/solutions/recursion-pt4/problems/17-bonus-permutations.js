/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

const permutations = (array) => {
  //!!START
  if (array.length <= 1) return [array];

  let first = array.shift();
  let perms = permutations(array);
  let allPerms = [];

  for (let i = 0; i < perms.length; i++) {
    subPerm = perms[i];

    for (let j = 0; j <= subPerm.length; j++) {
      let left = subPerm.slice(0, j);
      let mid = [first];
      let right = subPerm.slice(j);

      allPerms.push(left.concat(mid).concat(right));
    }
  }

  return allPerms;
  //!!END
};

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
