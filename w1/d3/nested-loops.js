/*

  Nested Loop
  - sometimes a single just is not enough to access a nested array, you may need a nested loop

*/

// while loop - for the most part are interchangeable
// while loop - you use a while loop when youre unsure of how many times you will iterate

// outer loop pauses until the inner loop can complete, then it will resume
// since out inner loop is defined withing the bound of the outer loop, the full cycle of the inner loop must complete

//its like a clock, the minute hand must make an entire cycle before incrementing the hour hand

//for loop
for(let i = 0; i < 3; i++) {//outer loop controlled by i
  // console.log('i:', i);
  for(let j = 0; j < 2; j++){//inner loop controlled by j
    // console.log(' j:', j);
    // for(let k = 0; k < 2; k++){//inner loop controlled by k
    //   console.log('   k:', k)
    // }
  }
}


let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
// let TwoDArr= [[]];

console.log(matrix.length);//3 subarray in the matrix
console.log(matrix);//[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
console.log(matrix[0]);//[ 1, 2, 3 ]
  console.log(matrix[0].length);//3 there are three elements in the sub array
  console.log(matrix[0][0]);//1
  console.log(matrix[0][1]);//2
  console.log(matrix[0][2]);//3
  // console.log(matrix[i][j])
console.log(matrix[0]);//[ 1, 2, 3 ]
console.log(matrix[1]);//[ 4, 5, 6 ]
console.log(matrix[2]);//[ 7, 8, 9 ]

for(let i = 0; i < matrix.length; i++) {//outer loop gains us access to the subarrays
  let subArr = matrix[i];
  console.log('subArray:', subArr);

  for(let j = 0; j < subArr.length; j++) {//inner loop iterate through the subarrays itself to get the values
    let number = subArr[j];//matrix[i][j]
    console.log('i', i, 'j',j)
    console.log('   number:',number);

  }
}

// console.log(matrix[1][2]);
