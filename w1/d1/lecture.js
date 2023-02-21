
//you should see this after git pulling
//this is a comment

/*

this is a multiline comment


  What is Javascript?
    - JavaScript is a programming language that was originally developed
   to increase user interactivity with websites, and has grown to become a
   useful programming language in the backend of applications as well.
   JavaScript is now one of the most popular and widely used programming
   languages for building web applications today.

  Why is javascript so useful?
    1. perform asynchronous task
    2. render dynamic content


  We want to learn to javascript!

  What is learning?
    - Process of acquiring knowledge
    - Retaining and applying knowledge
    - comprehend and use the knowledge we gained

  Active vs passive learning
  - Active learning - active - engaging with information, get hands on
  - Passive learning - passive is engaging, harder to track progress, watching lectures, videos, reading

  *Example: sports


*/


/*

  Intro to JavaScript


  What is debugging?
    - finding and fixing errors
    - figuring out what is wrong with our code

  How to debug?
    - console.log
    - read error messages!
    - debugger

*/


//this is a comment
//the code in the console.log will evaluate before printing to the screen
//we use console.log whenever we want to see something on screen
// console.log('hello world');

//preview on numbers
// console.log(1 + 2 + 3)//6

//preview on variables
let name = 'brandon';
// console.log(name);


/*

  Numbers and Booleans!


  Numbers!
    - whole numbers
    - decimals
    - negative numbers
    - few other special cases

    What is pemdas?
      Order of operations
      - parentheses, exponents, multiplication, modulo, division, addition, subtraction


*/


// console.log(2 + 3 * 12)//38
// console.log(10 - 8 / 2);//6
// console.log(20 / 2);//10
// console.log(1.11 * 3);//3.33
// console.log((4 + 5) / 2);//4.5


//Modulo
// returns a remainder

// console.log(13 % 5)//3
// //we divide 5 into 13 twice, there will be 3 as a remainder
// console.log(3 % 7)//3
//3 cant divide by 7, we return 3

// console.log(12 % 5);//2
// console.log(25 % 6);//1
// console.log(5 % 18);//5


/*

  Booleans!
    Logical operators

    ! - not (bang)
    && - and
    || - or

    Order of operators
    not, and, or

    console.log(true || false && false) -> true
    console.log(false && false || true) => true
*/


// console.log(false);//false
// console.log(!true);//false
// console.log(true || false);//true
// console.log(true && false);//false

// //demorgans law
// //distribute the sign, and flip the symbol
console.log(!true || !false);//true

console.log(!(true && false));//true

//can we store a boolean in a variable, YES

let a = true;
let b = false;

// console.log(a || b);//true
