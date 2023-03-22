/*
=======================Nested Loops=======================

  Sometimes a single loop is not enough to access a nested array.
  In that case, you'll write a loop within a loop.

*/
/* Example of a Nested Loop */
for(let m = 0; m < 4; m++){

  for(let n = 0; n < 5; n++){

  }

}

/* outer loops pause until the inner loop can complete */

/* Practical Example */
let matrix = [
  [1,4,10,4,7],
  [2,9,4,5],
  [1,8,10,9],
  [2,3,4,5],
]

for(let i = 0; i < matrix.length; i++){
  let subArray = matrix[i]
  console.log(subArray);
  for(let j = 0; j < subArray.length; j++){
    let num = subArray[j]
    console.log(num);
  }
}

/*
Breaking it down, we can see that our outer loop is going to let us take
a look at the individual sub arrays. The inner loop is letting us look at
the elements inside of each subArray.
*/
