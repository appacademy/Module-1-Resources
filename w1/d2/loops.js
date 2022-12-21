/*



Loops Demo
  Loops provide us a way to repeat behavior a set number of times. We can use
  that behavior to progress through data structures and take a look at
  individual elements. Loops consist of 3 main components:
    1. Initial Expression
    2. Condition for which we keep looping
    3. Step towards completing the loop

*/

//While loop
//while loop will execute while their condition is met. You'll want to make sure the expression that steps towards completion is embed within the loop

//components of a loop
let i = 0; //Initial Expression

while (i <= 5) {
  //Condition for which we keep looping
  // console.log(i);

  //You'll want to make sure the expression that steps towards completion is embed within the loop
  i++; //Step towards completing the loop
}

//for loop
//uses the for keyword followed the parenthesis
//for keyword signify a loop
//for(Initial Expression;Condition for which we keep looping;Step towards completing the loop )
for (let i = 0; i <= 5; i++) {
  // console.log(i);
}

//iterate through a word
function iterateThroughWord(word) {
  //lets starts at the zero index
  //iterate up the length of the word
  //word.length evaluates to 7, i < 7
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    // console.log(word[2])
    // console.log(word[i]);
    console.log(letter);
  }
}

// console.log(iterateThroughWord('umbrella'))

function evenLogger(number) {
  //number will evaluate to 10
  for (let i = 0; i < number; i += 2) {
    console.log(i);
  }
}

// evenLogger(10)


function logBetween(num1, num2) {

  for(let i = num1; i < num2; i++) {
    console.log(i)
  }
};

// logBetween(5,10)
/*
b r a n d o n
0 1 2 3 4 5 6
*/
function reverseName(name) {

  let reversed = '';
  //start the for loop at the 6th index
  for(let banana = name.length - 1; banana >= 0; banana--) {
    // console.log(name[i]);
    reversed += name[banana]
  }
  return reversed;
};

console.log(reverseName('brandon'))//nodnarb
