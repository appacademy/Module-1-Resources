/*


  Nested Loops
    * Sometimes a single loop is not enough to access a nested array!

*/

  for(let i = 0; i < 3; i++){
    // console.log('i:',i);// outer loop is controlled by i

    for(let j = 0; j < 2; j++){
      // console.log('j: ',j, i);// inner loop is controlled by j

      // for(let k = 0; k < 4; k++) {
      //   console.log('k:   ', k)
      // }
    }
  }
  // outer loop pauses until inner loop can complete
  // since our inner loop is defined within in the bounds of the outer loop the fully cycle of our inner loop is part of each iteration of our outer loop



  let matrix = [
    ["a", "b", "c"],
    ["d", "e", "f"],
  ];

// console.log(matrix);// [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
// console.log(matrix.length);// 2
// console.log(matrix[0]);// [ 'a', 'b', 'c' ]
// console.log(matrix[0].length);// 3
//   console.log(matrix[0][0]);// 'a'
//   console.log(matrix[0][1]);// b
//   console.log(matrix[0][2]);// c
//   console.log(matrix[1][0]);// d
//   let i = 0;
//   let j = 0;
//   console.log(matrix[i][j]);
// [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
for(let i = 0; i < matrix.length; i++){
  let subArr = matrix[i];
  // console.log(subArr);
  // console.table(subArr);
  for(let j = 0; j < subArr.length; j++){
    let banana = subArr[j];
    // console.log(matrix[i][j]);
    console.log('==>',banana);
    // console.log(char === matrix[i][j]);
  }
}
