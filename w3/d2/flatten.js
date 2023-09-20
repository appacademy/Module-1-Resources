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

// function flatten(arr){

//   let result = [];

//   for(let ele of arr) {
//     // console.log(ele, Array.isArray(ele))

//     if(Array.isArray(ele)){
//       // result = result.concat(flatten(ele))
      // result.push(...flatten(ele))// ...[2] = .push(2) .push([2])
//       return [...result, ...flatten(ele)]
//     } else {
//       result.push(ele);
//     }
//   };
//   return result;
// }

// function flatten(arr){

//   let result = [];

//   for(let ele of arr) {
//     // console.log(ele, Array.isArray(ele))

//     if(Array.isArray(ele)){
//       result = result.concat(flatten(ele))
//     } else {
//       result.push(ele);
//     }
//   };
//   return result;
// }

function flatten(arr) {

  if (arr.length === 0) return [];

  let [first, ...rest] = arr;

  // ! wont enter this if statement till top of the stack
  if (Array.isArray(first)) {
    // return flatten(first).concat(flatten(rest));

    let test = flatten(first);
    debugger;
    return [...test, ...flatten(rest)];
  } else {
    return [first].concat(flatten(rest));
  }
  }


// console.log(flatten([])); // []
// console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
