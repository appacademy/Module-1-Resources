/*


  Loops!

  Loops provide us a way to repeat behavior a set number of times. We can use that behavior progress through data structures and take a look at each element.

  Loop consists of these 3 main components
  1. Initial Expression
  2. Condition for which we keep looping
  3. Step towards completing that loop

*/

// While loop
// when would we use a while loop over a for loop?
// whenever you dont know how many times we need to iterate

// While loops will execute while there condition is true, you'll want to make sure Step towards completing that loop is embedded within in your loop

let i = 0; //Initial Expression
while (i <= 5) {
  //Condition for which we keep looping
  // console.log(i);
  i += 1;//Step towards completing that loop
};

// console.log('done with loop');

//for loop!
//Initial Expression
//Condition for which we keep looping
//Step towards completing that loop
for(let i = 0; i <= 5; i++) {
  // console.log(i);
}

// lets iterate through a word
// function that takes in a parameter 'umbrella' represented by the variable world
function iterateThroughWord(word){
  // console.log(word);
  // console.log(word[0]);//u
  // console.log(word[word.length - 1]);//a
  //start at 0, 1 < 8; 1++;
  // for(let i = 0; i < word.length; i++) {
  //   console.log('index', i);
  //   console.log('word   ', word[i]);
  //   let letter = word[i];
  //   // console.log(letter);//same as word[i]
  // }
  let i = 0;
  while(i < word.length) {
    console.log('index', i);
    console.log('word   ', word[i]);
    i++;
  }

};

// console.log('The return value of iterateThroughWord is =>',iterateThroughWord('umbrella'))

function characterLogger(string) {
  // console.log(string);

  let end = string.length;//10
  for(let start = 0; start < end; start++) {
    let letter = string[start];//motorcycle[2]
    console.log(letter)
  }
};

// console.log('return value of character logger', characterLogger('motorcycle'))


//iterate backwards
function reverseName(name){
  console.log(name);//brandon
  //'brandon'.length - 1 = 6
  // 6 >= 0
  // i--
  let reversed = '';
  for(let i = name.length - 1; i >= 0; i--) {
    console.log('index', i);
    console.log('letter ', name[i]);
    reversed += name[i];
    console.log('reversed', reversed);
  }

  return reversed;
};

// console.log('return value of reverseName', reverseName('brandon'));

