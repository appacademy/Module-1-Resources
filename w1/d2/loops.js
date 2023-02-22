/*


Loops Demo
  Loops provide us a way to repeat behavior a set number of times. We can use
  that behavior to progress through data structures and take a look at
  individual elements. Loops consist of 3 main components:
    1. Initial Expression
    2. Condition for which we keep looping
    3. Step towards completing the loop

*/


// While loops will execute while their condition is true. You'll want to make
// sure the expression that steps your loop towards completion is embedded
// within the body of your loop.

//components of loop
let i = 0; //a condition where to start
//while this condition is true, execute the code in this block {}
while(i <= 5) {
  // console.log(i);//print the values to the console
  i++;//is inside the while loop - Step towards completing the loop
}

//we want to do the same thing with a for loop
// for(let i = 0; i <= 5; i+=1) {
//   console.log(i);
// }


//iterate through a word
function iterateThroughWord(word) {


  //we want to start at the first index being 0
  //iterate up to the word.length which is 8
  //technically were saying while i <= 8
  //increment in steps of 1

  // for(let i = 0; i < word.length; i++) {
  //   console.log('index', i);
  //   console.log('letter at i', word[i]);
  //   let letter = word[i];
  //   console.log('letter variable', letter)
  // }

  let i = 0;
  while(i < word.length) {
    console.log('index', i);
    console.log('letter at i', word[i]);
    let letter = word[i];
    console.log('letter variable', letter);
    i++;
  }

};

// console.log(iterateThroughWord('umbrella'));


function evenLogger(number) {

  let i = 0;
  while(i < number) {
    if(i % 2 === 0) {
      console.log(i);
    }
    i++;
  }
}

// evenLogger(10);


//these variables can be anything
//as long as you know what the evaluate too
function characterLogger(string) {

  let end = string.length
  for(let start = 0; start < end; start++) {
    console.log(string[start])
  }
};


// console.log(characterLogger('motorcycle'))



//iterate backwards
function reverseName(name) {
  let newName = ''
  // console.log(name)
  //stating i at 6
  //while 6 is greater than or equal to 0 do something
  //decrement till we hit zero fulfilling the condition i >= 0;
  for(let i = name.length - 1; i >= 0; i--) {
    let letter = name[i];
    console.log(letter, i);
    newName += letter
  }

  return newName;
}


// console.log(reverseName('BRANDON'))
