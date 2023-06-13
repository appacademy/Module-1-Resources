/*


  Loops!
  - loops provide a way to repeat behavior a set number of times, we can use that behavior to progress through data structures

  Loops consists of 3 main components
  1. initial expression
  2. condition for which we keep looping
  3. step towards the completing the loop

*/

// while loop
// when would we use it over a for loop?
// whenever you don't how many times you need to iterate
// while loops will execute while there condition is true, youll want to make sure the step towards completing that loop is embedded withing your loop

let i = 0; //initial expression

while (i <= 5) {
  // 5 <= 5
  //condition in which we keep looping

  // console.log(i);
  i++; //step towards completing the loop, increment
  // i+= 1, i = i + 1
}

// i will be forever 0 if we put increment in the wrong spot

//for loop!

// 1. initial expression - let i = 0
// 2. condition for which we keep looping - i <= 100
// 3. step towards the completing the loop - i++

// for(let i = 0; i <= 100; i+=1){
//   console.log(i);
// }

//iterate through word
function iterateThroughWord(word) {
  console.log(word.length);
  // console.log(word[0]);
  // console.log(word[1]);
  // console.log(word[2]);
  for (let i = 0; i < word.length; i++) {
    console.log("index", i);
    let letter = word[i];
    console.log("letter:  ", letter, word[i]);
  }
}

// iterateThroughWord('umbrella');
// iterateThroughWord('cats');

function evenLogger(number) {
  // console.log(number)
  for (let i = 0; i < number; i += 2) {
    //you do not have to increment by 1 everytime
    console.log(i);
    // if(i % 2 === 0 ) console.log(i)
  }
}

// evenLogger(10);

function logBetween(num1, num2) {
  //start at 20, iterate while less than 30, in increments of 1
  for (let i = num1; i <= num2; i++) {
    console.log(i);
  }
}

// logBetween(20, 30);

//reverse a string
function reverseString(name) {
  let reversedName = '';
  //start i at 6; i >= 0; i--
  for (let i = name.length - 1; i >= 0; i--){
    // console.log(i)
    let letter = name[i];
    console.log('letter', letter, 'i', i);
    reversedName += letter;
    console.log(reversedName);
  };

  return reversedName;
}

console.log(reverseString("brandon"));
