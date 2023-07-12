/*

  Nested Loops
  - Sometimes a single loop is not enough to access a nested array
  In that case, you'll write a loop within a loop

*/

// Outer loops pauses until the inner loop can complete
// since our inner loop is defined within the boundaries of the outer loop
// the full cycle of inner loop is part of each individual iteration
// before we move back out to the outer loop

// standard for loops
for (let i = 0; i < 3; i++) {
  // console.log('i',i)

  //nest a second loop
  //because we iterate three times
  //this inner loop will be ran and reset three times
  for (let j = 0; j < 3; j++) {
    // console.log('   j',j);
    // can nest as many loops as you want but will slow your code down
    // for(let k = 0; k < 5; k++) {
    //   console.log('     k', k);
    // };
  }
}

let arr = ["a", "b", "c"];

// console.log(arr[0]); // 'a'

for (let i = 0; i < arr.length; i++) {
  // console.log(i, arr[i]);
}

let matrix = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"]
];

// let arr = [ [1, [a, b, c] ] ]

for(let i = 0; i < matrix.length; i++) {
  // console.log(i, matrix[i]);
  let subArr = matrix[i];
  // console.log('SUB ARRAY',subArr);

  for(let j = 0; j < subArr.length; j++) {
    // matrix[i][j] same as subArr[j];
    let letter = subArr[j];

    console.log('j', j, 'letter', letter);
    // console.log('i:',i, 'j:', j, 'letter:',matrix[i][j]);
  };
}

// // access the element at the first index
// // the elements are subArrays
// console.log(matrix[0]); //[ 'a', 'b', 'c' ]
// console.log(matrix[1]); //[ 'd', 'e', 'f' ]
// console.log(matrix[2]); //[ 'g', 'h', 'i' ]

// // indexing into a nested array
// console.log(matrix[0][0]);// a
// console.log(matrix[0][1]);// b
// console.log(matrix[0][2]);// c

// console.log(matrix[1][1]);//e
// console.log(matrix[1][2]);//f
// console.log(matrix[1][3]);//undefined

// matrix[i][j]


let nested = [[[]]];

// console.log(nested)
// console.log(nested[0])
// console.log(nested[0][0])
