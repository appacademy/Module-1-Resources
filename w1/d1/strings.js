/*
  Strings delinated by
    - ''
    - ""
    - ``
*/


//strings can be stored in a variable
let name = 'brandon';
//strings can letters, sentence, word

//
let newSentence = 'hey this is a sentence';
//how to do quotes
let newSentence2 = '"so this is a quote", - brandon'
//how to do quotes within quotes
let newSentence3 = '"You\'re great!" said Tony'


//string methods!!
//all strings have a length property
//.length - were able to see, how many characters a string has

let firstName = 'brandon';

//what to know how many letter in this string?
//we can use .length
console.log(firstName.length);//7

//index
//strings have indexes!
//in programming, indexes start at 0
//each letter is associated with a specific index

/*
 C A T S
 0 1 2 3
*/

let animal = 'CATS';

// // //we can access index values!
// // //syntax for indexing a string []
// console.log(animal[0])//c
// console.log(animal[1])//a
// console.log(animal[5])//undefined
// // animal.length is evaluating to a number, the length of the string - 1 will give us the last value
// console.log(animal[animal.length - 1]) //s


//string method
//.indexOf();
//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.



/*
 C A T S
 0 1 2 3
*/

let animal2 = 'rhino';
console.log(animal2.indexOf('r'));//0
console.log(animal2.indexOf(1));// - 1


//concatenation
let firstName2 = 'brandon';
let title =  'software engineer';

console.log(firstName2 + title)//brandonsoftware engineer
console.log(firstName2 + ' ' + title);//brandon software engineer

//.concat
//The concat() method concatenates the string arguments to the calling string and returns a new string.
//go to mdn anytime you see a new method

console.log(firstName2.concat(' is a ', title));//brandon is a software engineer
console.log(firstName2.concat(title));

//the order in which you concat matters!
console.log(title[1].concat(firstName2[1]));//software engineerbrandon


// You may have noticed that indexOf returns the first instance of our search
// string. How can we find the index of the second result? indexOf can handle a
// second, optional argument. We can specify an index to begin searching from
// let first = playoffs.indexOf("f");
// console.log(playoffs.indexOf("f", first + 1));
