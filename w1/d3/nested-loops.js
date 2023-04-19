/*

  Nested Loops!
  - sometimes a single loop is not enough to access every element
  - so youd write a loop within a loop!

*/

//outer loop pauses until inner loop can complete
//since our inner loop is defined within the boundaries of our outer loop
//the full cycle of inner loop is part of each individual iterations of our outer loop
// for (let i = 0; i < 4; i++) {//outer loop is controlled by i, i cant increment until j finished
//   console.log('outer loop:', i);
//   for (let j = 0; j < 3; j++) {//inner loop is controlled by j, j will iterate after each increment of i
//     console.log('inner loop:  ', j);
//   }
// }

//matrix is another name for 2d array
let matrix = [
  ["a", "b", "c"],
  ["d", "e", "f"],
];

/*
i = 0
matrix[0] = [ 'a', 'b', 'c' ]
*/

//gain access to every letter
for(let i = 0; i < matrix.length; i++) {
  let subArr = matrix[i];//["d", "e", "f"]
  console.log('subArr', subArr);

  for(let j = 0; j < subArr.length; j++) {
    let letter = subArr[j]; 
    console.log('letter   ',letter);
  }
}
