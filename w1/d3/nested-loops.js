/*



  Nested Loops!

  Sometimes a single just isn't enough to access a nested array, you may need a nested loop!

*/

// outer loop pauses until the inner loop can complete, then it will resume
// since our inner loop is defined within the bounds of our outer loop, the full cycle of inner loop must complete

// for (let i = 0; i < 4; i++) {
//   //outer loop is controlled by i
//   console.log("i:", i);
//   for (let j = 0; j < 3; j++) {
//     //inner loop is controlled by j
//     console.log("j:   ", j);
//   }
// }

let matrix = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];

console.log(matrix);
for (let i = 0; i < matrix.length; i++) {
  let subArr = matrix[i];
  // console.log("subArr:", subArr);

  for (let j = 0; j < subArr.length; j++) {
    let letter = matrix[i][j]
    console.log(letter)
    // let letter2 = matrix[i][j]; // same thing as above
    // console.log(i, j)
    // console.log("letter:  ", letter);
  }
}
