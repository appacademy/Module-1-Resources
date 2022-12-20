/*


  Strings!
    - Strings are delineated by
    '' - single quotes
    "" - double quotes
    `` - back ticks -learn about in week3
*/


//print to the console a string
// console.log('jello world')


//string can be stored in a variable
let newString = 'Hello';
// console.log(newString)

let sentence = 'You can have entire sentence! WOW!';

//quote withing a sentence
//use the quote that youre not using if you need to quote in a sentence
let sentence2 = 'You"re awesome'
let sentence3 = "you're awesome"
//quotes withing quotes
let sentence4 = '"you\'re great!", said Tony!'

//Strings methods
//all string have a length property
//contents of console.log evaluates to 7 before logged to the console
// console.log('brandon'.length);//7
let lastName = 'laursen';
//'laursen'.length
// console.log(lastName.length);//7

//indexing
//string have indexes
//indexes in programming start at 0

/*
length of 4

 C A T S
 0 1 2 3

*/

let animal = 'cats';
// // console.log(animal.length);//4
// //the variable to index, followed by square brackets, and the index you want to access
// console.log('cats'[0])//c
// console.log(animal[0])//c
// console.log(animal[1])//a
// console.log(animal[2])//t
// console.log(animal[3])//s
// //we went further than the length of the string
// console.log(animal[4]);//undefined cant index a value that doesnt exists

// //trick to get last element of string/array
// //animal.length evaluates to 4, we subtract 1 to count for the one off error because indexes start at 0
// //we are able to index into the string to grab the last value using [animal.length - 1]
// //animal[3] === animal[animal.length - 1]
// // console.log(animal[animal.length - 1]);//s


// //string method
//.indexof
// /The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
//variable to use method on, followed by the method, then the method takes in a element
let animal2 = 'rhino';
// console.log(animal2.indexOf("r"))//0
// console.log(animal2.indexOf("n"))//3
// console.log(animal2.indexOf("h"))//1
// //z is not present in our animal2 variable therefore return -1
// console.log(animal2.indexOf("z"))//-1


//concatenation
let firstName = 'BRANDON';
let title = 'software engineer';

let res = firstName + ' is a ' + title;
console.log(res)//BRANDON is a software engineer

//alternative
//.concat
//The concat() method concatenates the string arguments to the calling string and returns a new string.
console.log(firstName.concat(' is a ', title));//BRANDON is a software engineer
