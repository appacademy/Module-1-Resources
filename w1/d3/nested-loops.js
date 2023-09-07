/*


  Nested Loops!
    * Sometimes a single loop is not enough to access a nested array
    * You would write a loop withing a loop!


*/

for (let i = 0; i < 5; i++) {
  // console.log("outer loop ===>", i); // outer loop is controlled by i
  for (let j = 0; j < 5; j++) {
    // console.log("inner loop =====> ", j); // inner loop is controlled by j
  }
}

// outer loop pauses until inner loop can complete
// since out inner loop is defined within the bounds of our outer loop
// the full cycle of our inner loop is part of each individual iteration
// of outer outer loop

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.length); // 3 there are 3 sub arrays within the array

// console.log(matrix);
/*
[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
*/
console.log(matrix[0]); // [ 1, 2, 3 ]
console.log(matrix[1]); // [ 4, 5, 6 ]
console.log(matrix[0].length); // 3
console.log(matrix[0][0]); // 1
console.log(matrix[0][1]); // 2
console.log(matrix[0][2]); // 3
console.log(matrix[1][0]); // 4
let i = 0;
let j = 2;
console.log(matrix[i][j]); // 1

// console.table(matrix);

for (let i = 0; i < matrix.length; i++) {
  let subArr = matrix[i];
  console.table(subArr);
  // console.log('sub array: ', subArr);
  // console.log('at index 0 in the sub arr: ', subArr[1]);
  for (let j = 0; j < subArr.length; j++) {
    let number = subArr[j];
    // console.log('number: ', number, 'j:', j);
    console.log(matrix[i][j]); // number === matrix[i][j]
  }
}

for (let i = 0; i < matrix.length; i++) {
  let subArr = matrix[i];

  for (let j = 0; j < subArr.length; j++) {
    let number = subArr[j];
  }
}
