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
  console.log('i:', i);
  for(let j = 0; j < 2; j++){//inner loop controlled by j
    console.log(' j:', j);
    // for(let k = 0; k < 3; k++){//inner loop controlled by k
    //   console.log('   k:', k)
    // }
  }
}
