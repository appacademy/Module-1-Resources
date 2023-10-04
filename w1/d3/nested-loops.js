/*


  Nested Loops
    * Sometimes a single loop is not enough to access a nested array!

*/

  for(let i = 0; i < 3; i++){
    console.log('i:',i);// outer loop is controlled by i

    for(let j = 0; j < 2; j++){
      console.log('j: ',j, i);// inner loop is controlled by j

      // for(let k = 0; k < 4; k++) {
      //   console.log('k:   ', k)
      // }
    }
  }

  // outer loop pauses until inner loop can complete
  // since our inner loop is defined within in the bounds of the outer loop the fully cycle of our inner loop is part of each iteration of our outer loop
