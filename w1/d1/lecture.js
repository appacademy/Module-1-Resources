/*

  What is Javascript?
    - Javascript is a popular widely used language for building web applications
    - Can also be used on the backend

  Why is javascript is useful?
    - ability to render dynamic content
    - perform asynchronous task

  We want to learn Javascript!!

  What is learning?
    - Gaining skills and applying them in the future
    - Active vs passive
    - Active learning - more engaged, recieve feedback
      - write code, test it, break it, repeat
    - Passive learning - more easy, no feedback, less engaging, harder track

  What is debugging?
    - finding errors in code, and cleaning it up!
    - Identfying and solving an error/proplem

  How to debug?
    - console.log();
    - If you want to see something printed to the terminal, use a console.log!
    - debugger
*/

//Single line code
//This is a single line comment

/*
This
is
a multiline
comment
*/


// console.log('HELLO WORlD')
// console.log(10);
// console.log(true);

// //evaluate the code in the parathensis then print it to the console
// console.log(10 + 10)//20

// let name1 = 'brandon';
// console.log(name1)//brandon
// //console.log are your best friend!! use them often!



/*

  Numbers!
     - Integers
     - Decimals
     - Negative

  What is PEMDAS?
    -The order in which operations will execute
    - Paranethesis, Exponent, Multiplcation, Modulo, Division, Addition,    Subtraction
    - goes left to write
*/


//able to use math operators
// console.log(2 + 10);
// console.log(10 - 5);
// console.log(20 / 2);
// console.log(20 * 2);

//What is modulo?
//Remainder after division

// console.log(13 % 3)// 3 divides into 13 4 times, with a remainder of one

// //if first number is less than the second, modulo will return the first number
// console.log(3 % 7)//3

// //divides evenly
// console.log(15 % 5 === 0)//true


/*

Booleans!
Logical Operators!

! - not(bang);
&& - and
|| - or

*/

console.log(false);//false
console.log(!true);//false

console.log(true || false)//true
console.log(true && false)//false


// DeMorgan's Law
// !(A && B) => !A || !B
// !(A || B) => !A && !B
console.log(!true || !false)//true
console.log(!(true && false))//true


//use variables to store values and compare them

let a = true;
let b = false;

console.log(a || b);//true


