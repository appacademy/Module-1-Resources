/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:

mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

const mirrorArray = (array) => {
  //!!START
  let newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    let el = array[i];
    newArray.push(el);
  }

  for (let i = array.length - 1; i >= 0; i -= 1) {
    let el = array[i];
    newArray.push(el);
  }

  return newArray;
  //!!END
};
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = mirrorArray;
} catch (e) {
  return null;
}
