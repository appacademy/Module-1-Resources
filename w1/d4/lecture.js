/*

 Nested Loops
  * Sometimes a single loop is not enough to access a nested array
  In that case, you'll write a loop within a loop

*/

for (let i = 0; i < 4; i++) {
  // console.log("i:", i); // outer loop controlled by i

  for (let j = 1; j < 3; j++) {
    // console.log("j: ", j); // inner controlled by j
  }
}

// outer loop pauses until the inner loop can complete
// since out inner loop is defined within the bound of our outer loop
// the full cycle of each our inner loop is prat of each iteration of our outer loop


let matrix = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];


// console.log(matrix[0]);// [ 'a', 'b', 'c' ]
// console.log(matrix[1]);// [ 'd', 'e', 'f' ]
// console.log(matrix[2]);// [ 'g', 'h', 'i' ]
// console.log(matrix[0][0])// a
// console.log(matrix[0][1])// b
// console.log(matrix[0][2])// c
// console.log(matrix[1][0])// d
// let i = 0;
// let j = 0;
// console.log(matrix[i][j]);// a
// cmd + / - mac
// ctrl + / - windows

for(let i = 0; i < matrix.length; i++){
  let subArr = matrix[i];
  console.log(subArr);

  for(let j = 0; j < subArr.length; j++){
    let letter = subArr[j];
    // console.log('i:',i,'j:',j,  letter);
    console.log( matrix[i][j])
  }
}
