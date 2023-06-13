/*



  Strings!
  - strings delineated with "", '', ``

*/

// console.log('hello world');
// console.log(' we can have an entire sentence ');
//spaces count as characters


//strings can hold words, sentences, letters
let newString = 'what is the most used language in programming?'

// console.log(newString);//profanity

// what if we need to make a sentence with quotes

// if you used single quotes use double quotes
let sentence1 = ' "This is a quote  " '
let sentence2 = " 'this is a quote2 ' "

//quotes within quotes within quotes
let sentence3 = ' "You\'re great!" said Tony    '
// \ escape character
let sentence4 = ` ' " You miss 100% of the shots you don\'t take"' - Wayne Grektsky - Micheal Scott`

//string methods
//all string have a length property
//tell us the length of the string
// console.log('brandon'.length);//7
// let lastName = 'laursen';
// console.log(lastName.length);//7
//'laursen'.length


// strings have indexes
// indexes start at 0 in programming

/*
length of 4
value - C A T S undefined undefined
index - 0 1 2 3     4         5
*/

let animal = 'cats';
console.log(animal.length);//4


//we can index a string to get the value at that index
console.log(animal)
console.log(animal[0]);//c
//hey in the animal variable, i want to access the value at the 0th index
console.log(animal[1])//a
console.log(animal[2])//t
console.log(animal[3])//s
console.log(animal[4])//undefined
//if we try to access an index that is further than strings length, you will get undefined

//we can access the last value of a string using
console.log(animal[animal.length - 1]);//s
// were saying hey whats the length of the animal sting, whatever it is subtract 1 and index and give me that value
//just a dynamic way to get the last value of a string/array no matter the length
//we do - 1 to account for the 0th index
//'cats'[3] => 's'

console.log(animal[animal.length - 2]);//t


//strings have methods
//.indexOf - mdn
//The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring.
//return index of the string found if found, if not return -1

let animal2 = 'rhino';

console.log(animal2.indexOf('r'));//0
console.log(animal2.indexOf('i'))//2
console.log(animal2.indexOf('o'))//4
console.log(animal2.indexOf('z'))//-1
console.log(animal2.indexOf('R'.toLowerCase()));//0


// concatenation - combined into one
// + - also concatenates if used on a string

let word1 = 'Whiteboards';
let word2 = 'remarkable';

let res = word1 + ' are ' + word2
console.log(res);//Whiteboards are remarkable

//.concat
console.log(word1.concat(' are ', word2));//Whiteboards are remarkable

// interpolation
// `` - template literal
// ${} - embedded expressions
let res2 = `${word1} are ${word2}`;

// console.log(res2);
// let names = ['brandon', 'anthony', 'anabel', 'charles', 'trevor']
// for(let i = 0; i < names.length; i++){
//   // console.log('hello' + ' '+ names[i]);
//   console.log(`hello ${names[i]}`)
// }


