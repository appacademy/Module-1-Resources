/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// function flatten(arr) {
//   //!!START
//   let newArray = [];

//   arr.forEach(function (contents) {
//       if (Array.isArray(contents)) {
//         newArray.push(...flatten(contents));
//       } else {
//         newArray.push(contents);
//       }
//   });

//   return newArray;
//   //!!END
// }

// function flatten(arr) {
//   if (arr.length === 0) {
//     return [];
//   }

//   const first = arr[0];
//   const rest = arr.slice(1);

//   if (Array.isArray(first)) {
//     return flatten(first).concat(flatten(rest));
//   } else {
//     return [first].concat(flatten(rest));
//   }
// }
function flatten(arr, result = []) {
  if (arr.length === 0) {
    return result;
  }

  const [first, ...rest] = arr;

  if (Array.isArray(first)) {
    return flatten([...first, ...rest], result);
  } else {
    return flatten(rest, [...result, first]);
  }
}

function flatten(arr, result = []) {
  if (arr.length === 0) {
    return result;
  }

  const first = arr.shift();

  if (Array.isArray(first)) {
    arr.unshift(...first);
    return flatten(arr, result);
  } else {
    return flatten(arr, [...result, first]);
  }
}
// console.log(flatten([1, [2, [3]]])); // [1, 2, 3])
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
