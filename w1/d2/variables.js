/*



  Variables!
    * A variables named reference to value
    * That way an unpredictable value can be accessed through a predetermined name
    * Can be used to store the result of an expression
    * Think of like an item in a box

  Values that variables could hold could be:
    * string
    * numbers
    * booleans
    * function
    * expressions
    * and more!

  Variable Naming guide
    * https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript

  Variable initialization
    * Both declaring and assignment
  Variable declaration
    * declaring the variable name
  Variable assignment
    * assigning a value to a variable

  - = is the assignment operator
    * used to assign and save a value to variable

*/

// camelCase
// * variable name descriptive
let variableName; // variable declaration
variableName = "hello"; // variable assignment

// * variable initialization
// * Both declaring and assignment
let variableName2 = "hello 2";

// we can store many data types in a variable
let firstName = "brandon";
let age = 27;
let isSoftwareEngineer = true;

// if you want to see what a variable holds, use a console.log
// ! use console.logs often!!!
console.log(firstName, age, isSoftwareEngineer); // brandon 27 true

// we can store expressions
// * the variable will hold the result of the expression being executed
let math = 1234 + 234 / 3;
console.log(math); // 1312

// if we want to see a variable holds
// use console.log
console.log(
  "hello my name is " + firstName + " and i am " + math + " years old"
);

// assign globally
// variables declared without the let keyword
// are declared globally and can be accessed by the entire module
// ! Make sure you are using the let keyword
function myFunc(){
    name = 'brandon';
}


// variable reassignment
console.log('old age ===> ',age);
// * we can reassign using the - = assignment operator
age = 300;// not let keyword
// ! if the variable youre trying to reassign doesnt exists, it will declare that variable globally
// console.log('new age ===> ',age);


let num = 0;
console.log('original number =>',num);// 0

num++;
console.log(num);// 1
// num++ is shorthand for num += 1

num += 1;
console.log(num);// 2
// num += 1 is shorthand for num = num + 1

num = num + 1;
console.log(num);// 3

num + 1;
console.log(num);// 3
// we did save the number in memory, we need the assignment operator

console.log(num + 'hey'); //3hey
// Know youre data types
// because some operators have multiple use cases
// + - doubles as concatenation and addition
// The number will be typecasts into a string and concatenated with the other string

// check your data type!
// you can use typeof
// typeof is a operator
let number = '1';
console.log(number + 12);// 112
// typeof - to check data types
console.log(typeof number);// string

console.log(typeof number === 'string');// true
console.log(typeof 2);// number
console.log(typeof 2 == 'string');// false
