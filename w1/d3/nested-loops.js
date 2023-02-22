/*




    Nested Loops!
    - sometimes a single loop is not enough to access every element
    - so you'd write a loop within a loop

*/

//outer loop pauses until inner loop can complete
//since our inner loop is defined withing the boundaries of our outer loop
//the full cycle of inner loop is part of each individual iteration of out outer loop

// for(let i = 0; i < 4; i++) {//outer loop being controlled by i
//   console.log(' I -',i);
//   for(let j = 0; j < 3; j++) {//inner loop being controlled by j
//     console.log(' J --', j)
//   }
// }

let matrix = [
  ["a", "b", "c"],
  ["d", "e", "f"],
];

for (let i = 0; i < matrix.length; i++) {
  let subArr = matrix[i];

  console.log('subArr -',subArr) //[ 'a', 'b', 'c' ]
  
  for (let j = 0; j < subArr.length; j++) {
    let letter = subArr[j];
    console.log('letter --', letter)

  }
}
