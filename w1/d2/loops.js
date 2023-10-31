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


// While loops
// * When would we use a while loop over a for loop?
// * Whenever we don't know how many times we need to iterate
// * If you want an action to repeat itself until a certain condition is met or while a condition is met

// While loops will execute while their condition is true.
// * You'll want to make sure the expression that steps your loop towards completion is embedded within the body of your loop.

// Components of a loop
let i = 0; // A condition where to start
// * we can start anywhere

while (i <= 5) {
  // while this is condition is true, execute the code in this block
  // console.log(i); // print the value to the console
  i++; // step towards meeting the condition
  // increment our i variable by 1 after each iteration
  // same thing as, i += 1, i = i + 1
}

// for loop
// * let i = 0; initial expression, where to start
// * i <= 5; condition to be met
// * i++; increment i by 1, step to completing the loop
// ! remember index's start at 0
// print every number between 0 up to 5 an increments of 1
for (let i = 0; i <= 5; i++) {
  // console.log(i); // 0 1 2 3 4 5
}



/*
VALUE - U M B R E L L A undefined
INDEX - 0 1 2 3 4 5 6 7    8
length - 8
*/


function iterateThroughWord(word) {
  // console.log(word);//umbrella
  // console.log(word[0]);// u
  // console.log(word[1]);// 1
  // console.log(word[word.length - 1])

  // i = 0; i < 4; i++
  for(let i = 0; i < word.length; i++){
    // block scope
    console.log('index: ',i, 'letter: ',word[i], word);
  };
}


// console.log('===>',iterateThroughWord('umbrella'));
// iterateThroughWord('cats')
