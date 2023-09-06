/*


  Variables!
    * A variable is a name reference to a value
    * That way an unpredictable value can be access through a predetermined name
    * Can be used to store the result of an expression
    * Think of like placing in item in a box

  Value could be:
    * string
    * number
    * boolean
    * function
    * and more

  Variable naming guide - https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript

  Variable initialization
    * both declaring and assignment
  Variable declaration
    * declaring the variable
  Variable assignment
    * Assigning a value to a variable

  = - is the assignment operator
  * Used to assign and save a value to a variable

*/

// camelCase
// * variables should be descriptive


let variableName;// Variable declaration
variableName = 'hello';// Variable assignment
let variableName2 = 'hello';// Variable initialization

// use the let keyword
// * followed by the variableName
// * then the assignment operator - =
// * then the value to assign to that variable
// ! dont use var
// * const is used for constants



// * we can store many data types in a variable
let firstName = 'brandon';
let age = 27;
let isSoftwareEngineer = true;

// if you want to see a variables holds you console.log it!
console.log(firstName);
console.log(age);
console.log(isSoftwareEngineer);

// * we can store expression
// * the variable will hold the result of the expression being executed
let math = 1 + 2 + 3;
// math holds the result of the expression -> 6
console.log(math);

// skipping the step of storing in a variable
console.log(1 + 2 + 3);// 6

console.log('hello ' + firstName + '!');// hello brandon!
let expression = 'hello ' + firstName + '!'
console.log(expression);//hello brandon!


console.log('==============')
// Variable reassignment
// * We can reassign variable using assignment operator - =
// console.log(age);// 27
age = 300;
// console.log(age);// 300
age = 35


let num = 0;
console.log(num);
num++;
console.log(num);// 1

// num++ is shorthand for num += 1
num += 1;
console.log(num);// 2

// num += 1 is shorthand for num = num + 1
num = num + 1;
console.log(num);// 3

// nothing was saved no assignment operator - =
num + 1;
console.log(num);// 3

// + sign has double usage
// combining strings
// adding numbers
// if you use string + number, it will typecast the number intro a string
let testType = num + 'hey'
console.log(num + 'hey');// 3hey
console.log(testType);// 3hey
console.log(typeof (num + 'hey'));// string
console.log(typeof testType);// string
