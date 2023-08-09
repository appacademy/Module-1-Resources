/*

  Nested Loops!
  * Sometimes a single loop is not enough to access a nested array
  * In that case you write a loop within a loop

*/

let array = ["a", "b", "c"];

for (let i = 0; i < array.length; i++) {
  let letter = array[i];
  // console.log('index: ', i);
  // console.log('value at that index: ', array[i]);
}

// outer loop pauses until the inner loop can complete
// since our inner loop is defined within the bounds of our outer loop
// the full cycle of our inner loop is part of each individual iteration
// of outer loop

for(let i = 0; i < 3; i++){
  // outer loop controlled by i
  console.log('i:',i);
  for(let j = 0; j < 2; j++) {
    // inner loop controlled by j
    console.log('j: ',j);
    // for(let k = 0; k < 2; k++){
    //   console.log('k:   ', k)
    // }
  }
}

let matrix = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"]
];

// console.table(matrix);
// console.table(matrix[0])
/*
[ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ], ["g", "h", "i"] ]
*/
// console.log(matrix);//


console.log(matrix.length);// 3
console.log(matrix[0]);// ["a", "b", "c"]
console.log(matrix[1]);// [ 'd', 'e', 'f' ]
console.log(matrix[2]);// [ 'g', 'h', 'i' ]

console.log(matrix[0]);//[ 'a', 'b', 'c' ]
console.log(matrix[0][0])// a
console.log(matrix[0][1]);// b
console.log(matrix[0][2]);// c

console.log(matrix[1][0]);// d
console.log(matrix[1][1]);// b
console.log(matrix[1][2]);// b



for(let i = 0; i < matrix.length; i++) {
  // console.log('i: ', i, matrix[i]);
  let subArr = matrix[i];
  console.log('subArr: ',subArr);

  for(let j = 0; j < subArr.length; j++){
    console.log('j: ', j, 'value: ', subArr[j]);
    // console.log(matrix[i][j] == subArr[j]);
  }
  
}
