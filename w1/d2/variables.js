/*


  Variables!
    - like storing a value in a box
    - variables evaluates to the value/expression stored in them

    * Value could be
    - string
    - number
    - boolean
    - function
    - and more!

    JS - https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript


*/

// Variable initialization - both declaring and assignment
// Variable declaration - declaring the variable
// variable assignment - assigning a value to a variable

// = - is the assignment operator

let variableName; // variable declaration
variableName = 'hello'; // variable assignment

// variable initialization - - both declaring and assignment
let variableName2 = 'hello';
// we use the let keyword to declare our variable
// we use the assignment operator - =, to assign a value to variable

// can store many data types in a variable
let firstName = 'brandon';
let age = 27;
let isSoftwareEngineer = true;

// if we want to see what a variable holds we console.log
console.log(firstName);// brandon
console.log(age);// 27
console.log(isSoftwareEngineer); // true

// variable reassignment
console.log('before',age);// 27
// we reassign age to be a new value using the =
age = 300;
// here we are omitting the let keyword, that tells javascript to reassign that value if its already been declared, if it hasnt been declared it will declare the variable globally

// example = 'dont do this as this will be global';//<- dont want to do
console.log('before',age);// 27
age = 300;
console.log('after',age);

let num = 0;
console.log(num);// 0
num++;
console.log(num);// 1
// num++ is shorthand for num += 1
num += 1;
console.log(num);// 2
// num += 1 shorthand for num = num + 1
num = num + 1;
console.log(num);// 3
num + 1; // <-- this will not save, because there is no assignment operator - =
console.log(num);// 3

console.log(num + 'hey');// 3hey
// plus operator - + doubles as concatenation
// we need to be mindful of our data types

// we can check for data types
// we can use typeof operator to check the data type of a string
// the output is the data type itself
let number = true;

// console.log(number + 2);//12
// console.log(typeof number);//string

console.log(first)
