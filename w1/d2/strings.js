/*


  Strings!
  Strings are delineated by
  '' -  single quotes
  "" -  double quotes
  `` -  backtick - week 3

*/


// console.log('brandon');

//strings can be stored variables
let newString = 'hello';
let newString2 = "hello";
let sentence = 'You can have entire sentence in a string'

//what if we need to use quotes
let sentence2 = 'You can have an entire sentence, you"re awesome';
let sentence3 = "You can have an entire sentence, you're awesome";
//quotes within quotes within quotes

let sentence4 = ' "You\'re great!" said Tony'
// console.log(sentence4)


//strings methods!
//all string have a length property
//tell us how many characters there are

// console.log('brandon'.length);//7
let lastName = 'laursen';
// console.log(lastName.length)//7

//Indexing
//strings have indexes
//indexes start at 0


/*
Length of 4
C A T S
0 1 2 3
*/

let animal = 'cats';
console.log(animal.length);//4


//we can index a string to get the value at the index
console.log(animal[0]);
console.log(animal[1]);
console.log(animal[2]);
console.log(animal[3]);

//we can access the last value of a string using
console.log(animal[animal.length - 1])//s
console.log(animal[animal.length - 3])//a
//Were saying hey whats the length of the animal string, whatever it is, subtract 1 and index and give me that value at that index


//if we try to access a index that does not exists we get undefined
console.log(animal[-3]);//undefined
console.log(animal[4]);//undefined


//string method
//.indexOf - go to mdn
//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

let animal2 = 'rhirno';

console.log(animal2.indexOf('r'));//0
console.log(animal2.indexOf('r', 1));//3 - pass an additional arg
console.log(animal2.indexOf('o'));//4
console.log(animal2.indexOf('z'));//-1

//concatenation
//+
let firstName2 = 'brandon';
let title = 'software engineer';

let res = firstName2 + ' is a ' + title + "!";
console.log(res);


//alternative - concat
console.log(firstName2.concat(" is a ", title))
