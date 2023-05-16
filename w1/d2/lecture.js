/*



  What is JavaScript?
  - JavaScript is a programming language that was originally developed
   to increase user interactivity with websites, and has grown to become a
   useful programming language in the backend of applications as well.
   JavaScript is now one of the most popular and widely used programming
   languages for building web applications today.

  - Languages used for developing web pages
  - Also javascript for backend as well using node.
  - multi-paradigm

  Why is javascript is so useful?
  - render dynamic content
  - perform asynchronous task!

  We want to learn javascript!

  What is learning?
  - gaining new knowledge and using it later down the line
  - Taking in info and being able to apply it
  - memorizing content and applying that knowledge

  Active learning vs Passive learning

  - Active learning - hands on practice, engaging with the info
      ex: sports - on the field running the drills

  - Passive learning - passive is just listening, watching lecture, videos, reading content
      ex: sports - watching football, watching the practice, studying the plays

*/

/*
  Intro to JavaScript!

  What is debugging?
  - fixing an error
  - troubleshooting errors
  - correcting the code
  - error messages
  - console.log!
  - dev tools
  - breakpoints debugger
  - node
*/

/*
this
is
a
multiline comment
*/

//single line comment
// command + / or ctrl + /

// console.log!
// We use console.logs whenever we want to see something on the screen
// console.log('welcome to App Academy :)');
// use console.log like crazy!

//preview on numbers
// console.log(21 + 78);//99
// inside the console.log were saying evaluate the expression inside then print it the terminal

let name = "brandon";

// console.log('name:', name);//console.log can take an many arguments
//hey i want to log to the terminal whatever the name variable evaluates too

/*


  Numbers and Booleans

  Numbers!
  1. negative
  2. decimals
  3. integer
  4. whole numbers
  5. few other cases

  What is PEMDAS! - parentheses, exponents, multiplication, modulo, division, addition, subtraction

  Order of operations - Please excuse my dear mother aunt sally

*/

// console.log(2 + 3 * 12); //38
// console.log(10 - 8 / 2); //6
// console.log(20 / 2); //10
// console.log(1.11 * 4); //4.44
// console.log((3 + 9) / 3); //4
// console.log(4 + 3 * (3 * 2)); //22



// Modulo
// // returns a remainder
// console.log('====>',13 % 5);// 3
// // hey divide 5 into 13 twice and return the remainder which is 3
// console.log(3 % 7);// 3
// // 3 cant divide by 7, so we return 3


// console.log(12 % 5);// 2
// console.log(25 % 6);// 1
// console.log(5 % 18);// 5
// console.log(12 % 3);// 0

// Modulo can be useful when you need a number is even
// we can check by doing if(n % 2 === 0) its an even number


/*

  Booleans!

  Logical operators
  ! - not(bang)
  && - and
  || - or

  Order of operations
  not and or
   |, &&, ||

  return a boolean - true or false
*/

//what will code evaluate too?
// console.log(false);
// console.log(!true);
// console.log(true || false);
// console.log(true && false);
// //deMorgans law
// console.log(!true || !false); //true
// console.log(!(true && false)); // true
// // DeMorgan's Law
// !(A && B) => !A || !B
// !(A || B) => !A && !B
// https://erikmhsiao.github.io/de-morgans-laws/

//can we store a boolean in a variable
let a = true;
let b = false;

// console.log(a || b);
// console.log(a && a);
// console.log(b && a);


/*

  Variables!
  - like storing a value in a box
  - is pointing a variable at a data type in memory
  - variables evaluates to the value that they are pointing at in memory

  Value could be
    - string
    - number
    - boolean
    - function
    - and more!

*/


/*

Variable initialization - both declaring and assignment
Variable declaration -  declaring the variable
Variable assignment - assignment of a value to a variable

*/


let variableName;// variable declaration
variableName = 'hello';// variable assignment

//variable initialization
//were saying hey, store in the variable names variableName2 the string 'hello 2' using the keyword let
//let keyword, name of variable, followed be the = - assignment operator, followed by the value to save
// the = sign essentially saves the variable in memory
let variableName2 = 'hello 2';

//we can store many data types
let firstName = 'brandon';
let age = 27;
let isSoftwareEngineer = true;

// console.log(firstName); //brandon
// console.log(age); //27
// console.log(isSoftwareEngineer); //true

//we can change the types of our variables
age = '27';
// console.log(age)

// reassignment
// we used the assignment operator - = to reassign age
// were gonna reassign age back to a number
age = 27;// no let keyword - reassign if variable already exists, if it doesn't then it will declare the variable globally
// console.log(age)


let num = 0;
console.log(num);//0
num++;
console.log(num);//1
//num++ is shorthand for
num += 1;
console.log(num);//2
//num += 1 is shorthand for
num = num + 1;
console.log(num);//3
num + 1
console.log(num);//3 because we did not save with the assignment operator - =

console.log(num + 'hey');// 3hey
//it is concatenated! because + sign doubles as a way to concatenation strings
// when using the + sign it will typecase(change the data type) the number into a string and combine with hey
// 3 => '3' + 'hey'

// KNOW ARE DATATYPES!
let number = 1;
// console.log('look here', typeof number)//number
// console.log(typeof 'example')//string


// add birthday of string
// 10-15-1995





