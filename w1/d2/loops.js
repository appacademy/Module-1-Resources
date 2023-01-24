/*


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

//components of a loop
let i = 0; //initial expression - where to start

while(i <= 5) {//while this condition is true - condition for which we keep looping
  // console.log(i);//print the value to the console
  i += 1;//increment our i by 1, i++, i = i + 1, i+=1
}


//for loop
//for keyword
//initial expression is i = 0;
//i <= 5 - Condition for which we keep looping
//i++ - Step towards completing the loop
for(let i = 0; i <= 5; i++) {
  // console.log(i)
}


//lets iterate thorough a word
/*
u m b r e l l a
0 1 2 3 4 5 6 7
*/

//function takes in a parameter 'umbrella' represented by the variable word
function iterateThroughWord(word) {
  //were saying start from the first index
  //iterate as long as i < word.length
  //word.length evaluates to 8
  //so as long as i is less than 8 keep going
  //increment i by one each time
  for (let i = 0; i < word.length; i++) {
    //word[i] changes as i changes
    //each iteration i is changed by 1
    //word[0]
    //word[1]
    //word[2]
    let letter = word[i];
    //for clarities sake, be descriptive in your variable names
    //what is the variable at i?
    console.log(word[i]);
    console.log(letter);
  }
}

function iterateThroughWord(word) {


  for (let banana = 0; banana < word.length; banana++) {

    let letter = word[banana];
    console.log(letter)
  }
}

//call the function
//pass an arguments umbrella
// console.log(iterateThroughWord('umbrella'))

//log numbers between
/*
    1. Initial Expression
    2. Condition for which we keep looping
    3. Step towards completing the loop
*/
function logBetween(num1, num2) {
  // console.log(num1, num2)
  // for(let i = num1; i < num2; i+=2) {
  //   console.log(i)
  // }
  let i = num1 + 1;
  while(i <= num2) {
    console.log(i);
    i++
  }
};

// console.log(logBetween(5, 20))

function reverse(name) {
  let reversedName = '';

  for(let i = name.length - 1; i >= 0; i--) {
    console.log('letter:', name[i],'index:', i, 'reversedName:', reversedName)
    reversedName += name[i]
  }
  return reversedName;
};

/*
letter: n index: 6 reversedName:
letter: o index: 5 reversedName: n
letter: d index: 4 reversedName: no
letter: n index: 3 reversedName: nod
letter: a index: 2 reversedName: nodn
letter: r index: 1 reversedName: nodna
letter: b index: 0 reversedName: nodnar

*/


console.log(reverse('brandon'))//
