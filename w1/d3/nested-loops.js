/*

  Nested Loops!
  * Sometimes a single loop is not enough to access a nested array
  * In that case you write a loop within a loop

*/



let array = ['a','b','c'];

for(let i = 0; i < array.length; i++){
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


