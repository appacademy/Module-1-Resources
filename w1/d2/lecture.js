/*


  What is Javascript?

  - JavaScript is a programming language that was originally developed
   to increase user interactivity with websites, and has grown to become a
   useful programming language in the backend of applications as well.
   JavaScript is now one of the most popular and widely used programming
   languages for building web applications today.

 Why is javascript so useful?
  - Render dynamic content
  - ability to perform async task

  * We want to learn javascript!

 What is learning?
  - Taking in info, and being able to use it in the future
  - Retaining information for later use
  - acquiring skills and being able to use them

  Active vs passing learning
  - Active learning - learning by engaging and retain the info in a efficient way, not just memorize
  - Involved and challenging
  - gets hands on with it!

  - Passive learning - less engaging, harder to track progress

  *Example - sports - soccer!

  Desirable difficulty?
    - Lit out of reach, nudge towards goal
    - enough to keep engaged without being demoralizing

  Space repetition
    - multiple sessions of studying over a period of time
    - Studying over time and not cramming information in
    - Pomodoro Method
      - Leveraging your time
      - repeating concepts with time between
      - 25min => 5min break => 25min => 5min
      -  HIIT training for the brain


    What is debugging?
      - finding errors in your code and fixing them

    How to debug?
      - check error message
      - console.log()
      - debugger
*/


//comments!!
//comments use double //
//multiple line comments /**/

//console.log();
// console.log("hello mars")

// //anything in a console.log will evaluate first, then be logged to the console
// console.log(1 + 2 + 3);//6

//console.log evaluates the variable then logs it!
let name = 'brandon';
// console.log(name);

//console.log our best friend, use them like crazy!!

/*

  Numbers and Booleans!

  Numbers!
    - Integer
      - whole numbers
      - negative numbers
    - decimals
    - few other cases

  What is pemmdas!
    - Order of operations
    - PEMMDAS
    - parentheses, exponents, multiplication, modulo, division, addition, subtraction
    - left to right


*/

// console.log(2 + 3 * 12);
// console.log(10 - 5 * 3);
// console.log((20 - 2) * 2);
// console.log(1.11 * (3 - 2));

//Modulo
//- returns a remainder
// console.log(3 % 7)//3, 3 cant divide by 7, we return the first num, so we return 3
// console.log(13 % 5)//3 , return the leftover after dividing, 5 divides into 13 2 times with a remainder of 3
// console.log(20 % 6);//2, 6 divides into 20 3 times with a remainder of 2

// //raise to a power
// console.log(5 ** 5);//3125


/*


  Booleans!

  Logical operators
   - and, or, not
   - &&, ||, !

   - ! not(bang)
   - && and
   - || or


// */

// console.log(false);//false
// console.log(!true)//false
// console.log(true || false);//true
// console.log(true && false);//false
// //demorgans law!
// //distribute the sign, flip the symbol
// console.log(!true || !false);//true
// console.log(!(true && false));//true

// DeMorgan's Law
// !(A && B) => !A || !B
// !(A || B) => !A && !B

let a = true;
let b = false;

console.log(a || b)//true
