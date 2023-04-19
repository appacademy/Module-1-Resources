/*

  Nested Loops!
  - sometimes a single loop is not enough to access every element
  - so youd write a loop within a loop!

*/

//outer loop pauses until inner loop can complete
//since our inner loop is defined within the boundaries of our outer loop
//the full cycle of inner loop is part of each individual iterations of our outer loop
for (let i = 0; i < 4; i++) {//outer loop is controlled by i, i cant increment until j finished
  console.log('outer loop:', i);
  for (let j = 0; j < 3; j++) {//inner loop is controlled by j, j will iterate after each increment of i
    console.log('inner loop:  ', j)
  }
}
