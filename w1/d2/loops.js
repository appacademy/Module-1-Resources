/*


  Loops

  Loops provide us a way to repeat behavior a set of number times. We can use that behavior to progress through our data structures and take a look at each element
  Loops consists of three main parts
  1. Initial expression
  2. Condition for which we keep looping
  3. Step towards completing the loop


*/

// While loops
// use a while loop when we dont know how many times to iterate

// while loop will execute code while their condition is true
// make sure the expression that step towards completion is embedded within in the loop

//components of a loop
let i = 0; //a condition where to start

//stop when i is equal to 5
while(i <= 5) {
  //while this condition is true, execute the code in this block
  // console.log(i)
  //stepping us towards our Condition for which we keep;
      // looping make sure within loop
      //i = i + 1
      i++;
};

// for loop
// start at 0
// end at 5
// go in increments of 1
for(let i = 1; i <= 5; i++ ) {
  // console.log(i);
}

//we control the boundaries
//we control where to start, where to end, how much to increment by
// we need to think of these three things and how we can fill in the blanks to traverse the data type we need to get element from



// for (i = 0; i<=5; i++) {
//   console.log(i);
// }

// Print out 0,1,2,3,4,5

// But
// console.log('1',i);
// for (i = 0; i <= 5; i++); {
//   console.log(i);
// }

// Prints 0,1,2,3,4,5,6



// function that takes in a word and we want to print every letter
// we need to access every letter in the word
// the first letter is at index 0
// get the last letter is at what index using word.length - 1
// how do we want to get from that start to end?
// because we want every letter we will go one by one
// i++

function iterateThroughWord(word) {
  console.log(word);
  console.log(word[0]);//at index 0 is u
  console.log(word[word.length - 1]);//at the last index is the a
  // console.log('=>',word[7]);//undefined
  // start at 0
  // end at 8
  // let i = 0; i < 8; i++

  //index - 0 1 2 3     4
  //value - c a t s undefined
  //word = cats
  //length 4
  //word[3];

  for(let i = 0; i < word.length; i++ ) {
    console.log(i);
    // let letter = word[i];
    // console.log('index', i, 'letter', letter);
    // dynamic changing i variable that is different each iteration
    // we plug in each time to get the value at that index
    // word[0] - u
    // word[1] - m
    // word[2] - b
  }
};


// console.log('return value',iterateThroughWord('cats')); //undefined


// reverse a string
// reverse a name
function reverseName(name) {

  // where to want to start?
  // start at the end
  // start at 6
  // end at 0
  let res= '';
  for(let i = name.length - 1; i >= 0; i-- ) {
    let letter = name[i];
    console.log('i', i, 'letter', letter);
    res += letter;
    console.log(res);
  };

  return res;
}


// console.log(reverseName('brandon'));//nodnarb


