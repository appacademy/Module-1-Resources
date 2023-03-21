/*



  Strings!
  - strings delineated with
  "" - double quotes
  '' - single quotes
  `` -  backticks - learn in week 3

*/



//strings can be stored in a variable
let newString = 'Hello';
let newString2 = 'hello 2';

//you can store entire sentence in a variable
let sentence = 'you can have an entire sentence in a string!'


//quotes
//use the quote youre not using when wrapping the string
let sentence2 = '  "Youre great!" said Tony';

let sentence3 =  "  'Youre great!' said Tony"

//what if you need to use both
//use the escape character \ - backslash
let sentence4 =  "  'You\"re great!' said Tony"



//string methods!
//all string have a length property
//tells us how many characters are in a string, this also includes spaces

let name = 'brandon';

// console.log(name.length);//7

//indexing
//strings have indexes
//indexes in programming start at 0

/*
Length of 4
VALUE - C A T S undefined undefined
INDEX - 0 1 2 3     4        5
*/

let animal = 'CATS';
// console.log(animal.length);//4

//indexing we would use [] square brackets
//we are able to index into a string using an index and get the letter at that index
// console.log(animal[0]);//C
// console.log(animal[1]);//A
// console.log(animal[2]);//T
// console.log(animal[3]);//S
// console.log(animal[4]);//undefined - returns undefined because nothing exists at animal at index 4

//we can access the last value of a string using .length - 1
//'CATS'[3];
// console.log(animal[animal.length - 1]);//S
//were basically saying hey whats the length of the animal string, whatever it is subtract 1 and index into the string and give me that value

//string method
//.indexOf - go to mdn
//.indexOf - methods it return first index at which a given element is found, and it return -1 if its not found
//indexOf(searchString)
let animal2 = 'rhino';

// console.log(animal2.indexOf('r'));//0
// console.log(animal2.indexOf('i'));//2
// console.log(animal2.indexOf('z'));// -1 hey z is not in this string!

//concatenation
let firstName = 'brandon';
let lastName = 'laursen';
let fullName = firstName + ' ' + lastName

//two examples are the same, one stores expression in variable, one passes it directly
//plus sign doubles at concatenate
// console.log(firstName + ' ' + lastName);
// console.log(fullName);

//alternative! - .concat
//The concat() method concatenates the string arguments to the calling string and returns a new string.

// console.log(firstName.concat(' ',lastName));//brandon laursen
