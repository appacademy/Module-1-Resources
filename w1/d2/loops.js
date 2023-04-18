/*

  Loops!
   -  Loops provide us a way to repeat behavior a set number of times, we can use that behavior to progress through strings/arrays and take a look at each element

   Loops consists of 3 main component
   1. Initial expression
   2. Condition for which we keep looping
   3. Step towards completing the loop

   * if we miss a key piece, we will end up with a infinite loop

   While loops vs for loops
*/

//while loops will execute as long as there condition is true, youll make sure the expression that steps towards the loops is embedded within the the while loop
//when would we use a while loop over a for loop?
//whenever we dont know how many times we need to iterate\

//components
// let i = 0; //Initial expression
// //Condition for which we keep looping - we will loop as long as i is less/equal to 5
// let res = true;
// let i = 0;
// while(res) {
//   console.log(res);
//  if(i === 10) {
//   res = false
//  }
//  i++;
// }


/*
   1. Initial expression
   2. Condition for which we keep looping
   3. Step towards completing the loop
*/
//for loop
//start at 0,
//run the code in the curly's as long as is less than/equal 5
//increment in increment of 1
// for(let i = 0; i <= 5; i++) {
//   console.log(i);
// }

//iterate through a word
function iterateThroughWord(word) {
  // console.log(word);//cats
  // console.log(word[0])//c
  // console.log(word[1])//a

  console.log('word', word);
  // for(let i = 0; i < word.length; i++) {
  //   // console.log(word[i]);//same as let letter = word[i];
  //   let letter = word[i];
  //   console.log('index: ', i)
  //   console.log('letter',letter);

  // }

  //translate into while loop
  i = 0;
  while(i < word.length) {
    let letter = word[i];
    console.log('index: ', i)
    console.log('letter',letter);
    i++;
  }
};

// console.log('return value',iterateThroughWord('cats'));

function evenLogger(number) {
  let i = 0;
  while(i < number) {
    // console.log(i);
    if(i % 2 === 0) {
      console.log(i);
    }
    // i+=2;
    i++;
  }
};

// console.log('return value',evenLogger(10))

//characterLogger
//the variables in a loop can be named really be anything
function characterLogger(string) {

  let end = string.length;

  for(let start = 0; start < end; start++) {
    let letter = string[start];
    console.log(letter)
  }
};

// console.log(characterLogger('umbrella'))

function reverse(string) {
  let reversedName = '';

  console.log('string', string);
  for(let i = string.length - 1; i >= 0; i--) {
    let letter = string[i];
    console.log('index', i);
    console.log('letter', letter)
    reversedName += letter;
    console.log('reversedName', reversedName);
  }
  return reversedName;
};

console.log(reverse('Erica'));
