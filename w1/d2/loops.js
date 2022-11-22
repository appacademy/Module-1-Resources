/*

  Loops!
    Loops provide us a way to repeat behavior a set number of times. We can use that behavior to progress through data structures and look at individuals elements.
    Loops consists of 3 main components
      1. Initial expression
      2. Condition for which we keep looping
      3. Step towards completing the loop
*/

//While loop
//while loop will execture while thier condition is true. Youll want to make sure the expression that steps towards your loop towards completion is embedded within the body of your loop

//components of a loop
let i = 0; //inital expression, a condtion where to start

while (i <= 5) {
  //Condition for which we keep looping
  // console.log(i);

  i++; //Step towards completing the loop
}

//curly braces - just a block of code
//use when creating a function, condtional, loop

//for loop
//use the for keyword
/*
      1. Initial expression
      2. Condition for which we keep looping
      3. Step towards completing the loop
*/

for (let i = 0; i <= 5; i++) {
  // console.log(i);
}

///function that takes in a a paramater 'umbrella'
//print out all the letters
function iterateThroughWord(word) {
  //were saying start from the first index
  //iterate as long as i is less than the word.length
  //word.length evaulates to a number which is 8, i < 8
  //so as long as i is less than 8, keep iterating
  //increment by one each time
  // console.log(word[0])//u
  // console.log(word[1])//m
  // for(let i = 0; i < word.length; i++) {
  //   // console.log(i);//this will print the indexes
  //   // console.log(word[i])//this will print the value at a index
  //   //each iteration i is changing
  //   //allowing us to index into a differnt letter each iteration
  //   let letter = word[i];
  //   console.log('letter', letter)
  //   console.log('index', i)
  // }
  i = 0;
  while (i < word.length) {
    console.log(word[i]);
    i++;
  }
}

// console.log(iterateThroughWord('umbrella'))

//example of a function with a loop
// Loop
// Prompt: write a function that accepts some number and logs all even numbers
// from 0 up to and including that number (if its even)
// evenLogger

//you can iterate up to a number, does not have to be a length
function evenLogger(num) {
  //i is a index, but were using as our value
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      // console.log(i);
    }
  }
}

// console.log(evenLogger(10))

// Prompt: Character Logger
// Write a function that accepts a string as an input and logs every character
// in that string.

function characterLogger(string) {
  let end = string.length;
  for (let i = 0; i < end; i++) {
    let letter = string[i];
    // string[1];
    // return;//if you return in a for loop, it will stop iterating!
    console.log(letter);
  }
  return;
}

// console.log(characterLogger("motorcycle"));

//reverse a name
function reverseName(name) {
  let reversedName = '';
  for( i = name.length - 1; i >= 0; i -= 2) {
    // console.log(i)
    let letter = name[i];
    // console.log(letter)

    reversedName += letter
    // console.log(reversedName)
  }

  return reversedName;
}

console.log(reverseName('brandon'))//nodnarb
