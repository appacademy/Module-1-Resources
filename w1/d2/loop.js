/*



  Loops!!
    - Loop provide us a way to repeat behavior a set number of times. We can use that behavior to progress through strings/arrays and take a look at each individual element.
    Loops consists 3 main components
    1. Initial expression
    2. Condition for which we keep looping
    3. Step towards completing the loop

    * if we miss one of these key pieces, we will end up with a infinite loop!

    While loops vs for loops!
*/

//while loops will execute as long as there condition is true, youll want to make sure the expression that steps towards completing the loop is embedded within the body of you loop
//when we would use a while loop over a for loop?
//Whenever we dont know how many times we need to iterate

//components of the loop
let i = 0; //Initial expression -  this is where were starting;
//Condition for which we keep looping -  we will loop as long as i is less/equal to than 5
while(i <= 5) {
  // console.log(i);//print the values to the console
  i++;//Step towards completing the loop - increment i by one each iteration until the condition is no longer met
}

//for loop
//start at 0
//iterate while i <= 5
//and increment by one each time
for(let i = 0; i <= 5; i++) {
  // console.log(i)
}

//iterate through a word
function iterateThroughWord(word) {
  // console.log(word)//cats
  // console.log(word[0])//C
  // console.log(word[1])//A
  //start at 0
  //increment up to the word.length 4 i < 4
  //saying increment i by one each iteration
  // for(let i = 0; i < word.length; i++) {
  //   let letter = word[i];
  //   console.log('index:', i);
  //   console.log('letter at i:', letter);
  // };

  let i =0;
  while(i < word.length) {
    let letter = word[i];
    console.log('index:', i);
    console.log('letter at i:', letter);
    i++;
  }
};


// console.log(iterateThroughWord('CATS'));
// console.log(iterateThroughWord('umbrella'))

function evenLogger(number) {
  let i = 0;
  while(i < number) {
    // if(i % 2 === 0) {
    //   console.log(i)
    // }
    console.log(i)
    i+=2;
  }
}


// console.log(evenLogger(1100))

//the variables you use in a loop can really be anything, they are just expression to be evaluated
function characterLogger(string) {

  let end = string.length;//10
  // console.log(end)
  //start at 0
  //increment while start = 0, is less then end, = string.length = 10, 0 < 10
  //increment in increments of 1, increment the start variable 1 each iteration
  for(let start = 0; start < end; start++) {
    console.log(string[start]);//index into the string using the start variable which is an index but we use a different name
  }
};

// console.log(characterLogger('motorcycle'))

//reverse a name

function reverse(string) {
  let reversedName = '';
  //let i = 2; 2 >= 0; i--
  for(let i = string.length - 1; i >= 0; i--) {
    let letter = string[i];
    reversedName += letter;
    // console.log(reversedName)
  }

  return reversedName;//nodnarb
};


console.log(reverse('zak'))//kaz
console.log(reverse('brandon'))////nodnarb
