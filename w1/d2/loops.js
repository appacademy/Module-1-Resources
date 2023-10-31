/*



  Loops

  Loops provide us a way to repeat behavior a set number of times.
  * We can use that behavior to progress through data structures and take a look at individual elements.
  * Loops consist of 3 main components:
    1. Initial Expression
    2. Condition for which we keep looping
    3. Step towards completing the loop/meeting the condition

  With loops we control the boundaries!
  There are may use cases of loops!
    * counting numbers
    * progressing through strings/arrays
      * we loop through these data types to get information

*/


// while loops
// why would we use a while loop over a for loop?
// whenever we dont know how many times we may need to iterate
// if you want an action to repeat itself until certain condition is met

// components of loop
// Initial Expression - 0
let i = 0;

// while(true) {
//   // console.log(i);
//   // Step towards completing the loop
//   // is inside the while loop
//   i++;
// };

//ctrl + c - stop terminal from running infinite loop

// for loop
// start - 0
// condition - i <= 5
// step towards condition - i++;
for(let i = 0; i < 8; i++){
  // block scope
  console.log(i);// 0 1 2 3 4 5
}


/*
VALUE - U M B R E L L A undefined
INDEX - 0 1 2 3 4 5 6 7    8
length - 8
*/


function iterateThroughWord(word) {
  console.log(word);//umbrella
  console.log(word[0]);// u
  console.log(word[1]);// 1
  // console.log(word[word.length - 1])

  for(let i = 0; i < 8; i++){
    // block scope
    console.log(i, word[i]);
  }
}


console.log('===>',iterateThroughWord('umbrella'));
