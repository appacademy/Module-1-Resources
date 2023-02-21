/*


  Strings!
  - Strings delineated with
  "" - double quote
  '' - single quote
  `` - backtick - learn week 3

*/


// console.log('hello world');


//strings can be stored in variable
let newString = 'Hello';
let newString2 = 'Hello';

//you can store as many words in a string as youd like
let sentence = 'you can have an entire sentence in a string'

//what if i need to use quotes?
//alternate the quotes
//quotes within quotes
let sentence2 = '  "You\'re great!!" said Krandon!  '
let sentence3 = " 'you\"re great!!' said Krandon"

//string methods!
//all strings have a length property
//tells us how many characters are in that string

let name = 'brandon';

// console.log('brandon'.length)//7
// console.log(name.length);//7


//indexing
//strings have indexes
//indexes in programming at 0

/*
Length of 4
C A T S - LETTER AT A INDEX
0 1 2 3 - INDEX
*/

let animal = 'cats undefined undeifned indefined iundeifnde';
// console.log(animal.length);//4

//we can index a string to get the value at that index
// console.log(animal[0])//c
// console.log(animal[1])//a
// console.log(animal[2])//t
// console.log(animal[3])//s

//were saying hey whats the length of the animal string, whatever it is subtract 1 to account for the 1 off index and give me the value at that index
//just a trick to get the last element of an array/string
// console.log(animal[animal.length - 1])//s

//what happens if we try to index a value that doesnt index
// console.log(animal[10]);//undefined

//string method
//.indexOf - mdn
//.indexof method returns the first index at which a given element is found, and it returns - 1 if it is not present

let animal2 = 'rhino';

// console.log(animal2.indexOf('r'))//0
// console.log(animal2.indexOf('i'))//2
// console.log(animal2.indexOf('z'))// -1
// console.log(animal2.indexOf('R'.toLowerCase()))//0


//concatenation
let firstName = 'brandon';
let lastName = 'laursen';

// console.log(firstName + ' ' + lastName)

//alternative - .concat
console.log(firstName.concat(' ', lastName))

let fullName = firstName.concat(lastName);
console.log(fullName)///brandon laursen

// console.log('fi rst'.length)//6
