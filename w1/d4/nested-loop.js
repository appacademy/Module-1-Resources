/*


  Nested Loops
  * Sometimes a single loop is not enough to access a nested array
  In that case, you'll write a loop within a loop
  example

    outer loop pauses until inner loop can complete
    Since our inner loop is defined within the bounds of our outer
    loop, the full cycle of our inner loop is part of each individual iteration
    of our outer loop. Let's explore how we can use this a bit more practically
*/

for (let i = 0; i < 3; i++) {
  // console.log('i:',i);// outer loop controlled by i

  for (let j = 0; j < 2; j++) {
    // console.log('j: ',j);// inner loop controlled by j
  }
}

// 2 array or matrix
let matrix = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];

// console.log(matrix.length);// 3
// console.log(matrix[0]);// [ 'a', 'b', 'c' ]
// console.log(matrix[1]);// [ 'd', 'e', 'f' ]
// console.log(matrix[2]);// [ 'g', 'h', 'i' ]
// console.log(matrix[0][0]);// a
// console.log(matrix[0][1]);// b
// console.log(matrix[0][2]);// c
// console.log(matrix[1][0]);// d
// console.log(matrix[1][1]);// e
// let subArr = matrix[2];
// console.log(matrix[2][0]);// g
// console.log(subArr[0]);// g
// let i = 0;
// console.log(matrix[i]);//[ 'a', 'b', 'c' ]
// let j = 0;
// console.log(matrix[i][j]);// a
// console.log(matrix[0][0]);// a

let matrix1 = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];
// can access outer loop variable from inner loop; but not inner loop from outer loop

for (let i = 0; i < matrix1.length; i++) {
  let subArr = matrix1[i];
  // console.log('at index ',i,'there is', subArr);

  for (let j = 0; j < subArr.length; j++) {
    let letter = subArr[j];
    // console.log('outer index ', i,'inner index',j, 'there is', letter);
    // console.log('i ', i,'j',j, 'value', letter, matrix[i][j]);
  }
}

let threeDMatrix = [
  [[1], [4]],
  [[2], [5]],
  [[3], [6]],
];
// console.log(threeDMatrix[0]);//[[1], [ 4 ] ]
// console.log(threeDMatrix[0][0]);
// console.log(threeDMatrix[0][0][0]);
for (let i = 0; i < threeDMatrix.length; i++) {
  // console.log(threeDMatrix[i])
  for(let j = 0; j < threeDMatrix[j].length; j++) {
    // console.log(threeDMatrix[i][j]);
    for(let k = 0; k < threeDMatrix[i][j].length; k++) {
      console.log(threeDMatrix[i][j][k]);
    }
  }
}
