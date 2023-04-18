/*


  Strings
  - strings delineated with
  "" - double quotes
  '' - single quotes
  `` - backticks - learn in week 3

*/

//strings can be stored in a variable
let newString = "hello";
let newString2 = "hello 2"; //spaced do count as characters

//you can stored entire sentence in a variable
let sentence = " you can have an entire sentence! ";

//quotes!
//use the quotes youre not using when wrapping the string
let sentence2 = '  "Youre great!", said Tony     '
let sentence3 = "  'youre great!', said Tony     "

//what if you need to both
//use the escape character
//use the escape character - \ - backslash - tells js to ignore the character after the backslash
let sentence4 = "  'You\"re great!' said Tony       "


// console.log(sentence4);


//all strings have a length property
// .length, how many characters are in a string, includes spaces

let name = 'brandon';

// console.log(name.length);//7


//indexing
//strings have indexes
//indexes in programming starts at 0;

/*
length of 4
VALUE - C A T S undefined undefined
INDEX - 0 1 2 3     4         5
*/

let animal = 'cats';
// console.log(animal.length)

//index into a string using square brackets - [];
//we are able to index into a string using an index to get the letter at that index

// console.log(animal[0]);//c
// console.log(animal[1]);//a
// console.log(animal[2]);//t
// console.log(animal[3]);//s
// console.log(animal[4]);//undefined - return undefined because nothing exists at animal at index 4

//we can access the last value of a string using .length - 1
//just a trick, to guaranteed the last character in a string
//were basically saying hey whats the length of the animal string, whatever it is subtract 1, to account for the 0 index, an d give me the value

// console.log(animal[animal.length - 1]);//s
// //'cats'[3] //s

// //
// console.log(animal[animal.length - 3]);//a
//'cats'[1]

//string methods!
//.indexOf - go to mdn!!!
//.indexOf - methods it return first index at which a given element is found, and it returns -1 if its not found

let animal2 = 'rhino';

console.log(animal2.indexOf('r'));//0 -  were saying log to the terminal the return value of calling .indexof ON animal2 passing the value 'r'
let res = animal2.indexOf('r');//0
console.log(res) // 0 - hey store the return value in this res variable

console.log(animal2.indexOf('i'));//2
console.log(animal2.indexOf('z'));//-1

console.log(animal2.indexOf('R'));// -1
console.log(animal2.indexOf('R'.toLowerCase()));//0

// console.log(res)

//concatenation - +
let firstName = 'brandon'
let lastName = 'laursen';
let fullName = firstName + ' ' + lastName;
// console.log(fullName);//brandon laursen
// console.log(firstName + ' ' + lastName);

//alternative
//.concat!
//The concat() method concatenates the string arguments to the calling string and returns a new string
console.log(firstName.concat(' ',lastName));//brandon laursen
