
/*

  Loops

  Loops provide us a way to repeat behavior a set number of times.
  * We can use that behavior to progress through data structures and take a look at individual elements.
  * Loops consist of 3 main components:
    1. Initial Expression
    2. Condition for which we keep looping
    3. Step towards completing the loop/meeting the condition

  With loops we control the boundaries!
  There are may use cases of loops!
    * counting numbers
    * progressing through strings/arrays
      * we loop through these data types to get information
      * arrays can hold user information that we may need to access to print to the string

*/


// While loops
// * When would we use a while loop over a for loop?
// * Whenever we don't know how many times we need to iterate
// * If you want an action to repeat itself until a certain condition is met or while a condition is met

// 1. Initial Expression
let count = 0
let i = 0;
// 2. Condition for which we keep looping
// 1 iteration - 0 <= 5 - true
// 2 iteration - 1 <= 5 - true
// 3 iteration - 2 <= 5 - true
// 3 iteration - 3 <= 5 - true
// 3 iteration - 4 <= 5 - true
// 3 iteration - 5 <= 5 - true
// 3 iteration - 6 <= 5 - false <- exit the loop

// while(i <= 5) {
//   console.log(i);
//   console.log(count, i);
//   count++;
//   // 3. Step towards completing the loop/meeting the condition
//   // make sure embedded within the loop
//   i++;
// }

//cntrl + c to escape an infinite loop



// for loop
// 1. Initial Expression
// 2. Condition for which we keep looping
// 3. Step towards completing the loop/meeting the condition

// for(let i = 0; i < 4; i++){
//   console.log(i);
// }
/*
index - 
value -
*/


function iterateThroughWord(string) {

  // console.log(string.length);
  // console.log(string[0]);// c
  // console.log(string[1]);// a
  // console.log(string[2]);// t
  // console.log(string[3]);// s
  // let i = 0;
  // console.log(string[i]);// c

  for(let i = 0; i < string.length; i++){
    // console.log(i);//
    // console.log('===>',string[i]);
    let letter = string[i];

    // console.log(letter);
    // return letter;
  }


};


// iterateThroughWord('cats');
// console.log(iterateThroughWord('umbrella'));




function reverseString(string){

  // console.log(string[string.length - 1], string.length - 1)
  // console.log(string);
  // for(let i = 0; i < string.length; i++ ){
  //   let letter = string[i];
  //   console.log(letter, i);
  // }
  let reversedName = '';

  for(let i = string.length - 1; i >= 0; i-- ){
    let letter = string[i];
    let char = string[i];
    // console.log(letter, i);
    // reversedName += letter;
    reversedName += string[i]
    console.log('index: ',i, 'letter: ', letter)
  }

  return reversedName;
};


/*
VALUE - d o g s
INDEX - 0 1 2 3
*/
console.log(reverseString('dogs'));//sgod


// let string = '12'
// console.log(typeof string);
// string = Number(string);

// console.log(typeof string);
// string = +string;
