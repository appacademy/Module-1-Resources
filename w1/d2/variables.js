/*


  What is a variable?
    * A variable is a named reference to a value/expression.
    * That way an unpredictable value can be accessed through a predetermined name.
    * Can be used to store the result of an expression
    * Think of it like placing an item in a box
    * That way we do not have to rewrite code over and over

  What values can a variable hold?
    * string
    * numbers
    * boolean
    * function
    * and more!

  Variable naming guide
    * https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript

  Three terms we need to be aware of?

  Variable initialization
    * both declaring and assignment
  Variable declaration
    * declaring the variable
  Variable assignment
    * assigning a value to a variable

  = - is the assignment operator
  * Used to assign and save a value to a variable

  When should you use a variable?
  * When you want to alias data through a specific name
  * Make code more readable
  Cons
  * Uses up the global name space; decide if we want to do that or not

  If we don't assign a variable a value it will default to undefined.

*/

let variableName; // variable declaration
console.log(variableName); // undefined

variableName = "hello"; // variable assignments
// * = assignment operator

let variableName2 = "hello 2"; // variable initialization

// * we can store many data types in a variable
let firstName = "brandon"; // string
let age = 28; // numbers
let isSoftwareEngineer = true;
// if you need to store more than one value - you use an array
let array = [true, 1 , false];
// console.log(array);

// console.log(firstName, age, isSoftwareEngineer); // brandon 28 true

// we can store expressions
// * the variable will the hold the result of the expression being executed
console.log(1 + 2 + 3);
console.log(1 + 2 + 3);
console.log(1 + 2 + 3);

let expression = 1 + 2 + 3;
// let expression = 6

// console.log(expression);// 6
// console.log(expression);// 6
// console.log(expression);// 6


// console.log('hello ' + firstName + '!');
// let greeting = 'hello ' + firstName + '!'
let greeting2 = 'hello ' + "brandon" + '!'

// console.log(greeting);// hello brandon!


let newAge = 28;
// variable reassignment
console.log(newAge);//28
// we can reassign the variable using the assignment operator - =
newAge = 300;
console.log(newAge);// 300

//assignment shorthand
newAge++;
console.log(newAge);// 301

//assignment shorthand
newAge += 1;
console.log(newAge);// 302

newAge = newAge + 1;
console.log(newAge);// 303

newAge + 1;
console.log(newAge);// 303

let num = 0;
num++;
console.log(num);
// num += 2
