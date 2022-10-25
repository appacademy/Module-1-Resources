/*
Loops!
  Loops provide us a way to repeat behavior a set number of times. We can use
  that behavior to progress through data structures and take a look at
  individual elements. Loops consist of 3 main components:
    1. Initial Expression
    2. Condition for which we keep looping
    3. Step towards completing the loop
*/

//while loop
// While loops will execute while their condition is true. You'll want to make
// sure the expression that steps your loop towards completion is embedded
// within the body of your loop.

// 1. Initial Expression
let i = 0;

//2. Condition for which we keep looping
while (i <= 5) {
  // console.log(i);
  // i++;
  // i += 1

  // 3. Step towards completing the loop
  i = i + 1;
}

//for loop - similar to a while loop
for (let i = 0; i <= 5; i++) {
  // console.log(i)
}

//lets iterate through a word
//we want to see all the letter of a word
function iterateThroughWord(word) {
  // console.log(word)
  // console.log(word[0]); j
  // console.log(word[1])//a
  for (let i = 0; i < word.length; i++) {
    // console.log(i)//know the difference between indexes and eh value at a index
    // console.log(word[i]);
    let letter = word[i];
    console.log(letter);
  }
}

// iterateThroughWord('javascript')

//even logger, log all the even numbers
//you can name the variables used in a loop, anything bananable
// function evenLogger(number) {

//   for(let banana = 0; banana < number; banana++) {
//     // console.log(banana);
//     if(banana % 2 === 0) {
//       console.log(banana)
//     }
//   }
// }

// evenLogger(10)

//lets write a function that reverses a string
//you can iterate backwards, you dont have to start from 0

function reverseName(name) {
  let result = "";
  //i will start at 5
  // for(let i = name.length - 1; i >= 0; i--){
  //   // console.log(i)///gives us indexes
  //   // console.log(name[i]);
  //   let letter = name[i];
  //   result += letter
  //   //''
  //   //'n'
  //   //'no'
  //   //'noh'
  // }
  //implemented with a while loop
  let i = name.length - 1;
  while (i >= 0) {
    let letter = name[i];
    // result += letter;
    result = result + letter
    i--
    //   //''
    //   //'n'
    //   //'no'
    //   //'noh'
  }
  return result;
}

console.log(reverseName("python")); //nohtyp
