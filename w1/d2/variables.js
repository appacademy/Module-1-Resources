let expression = 2 + 3 + 17
/*

  Variables!
    * A variable is a named reference to a value.
    * That way an unpredictable value can be accessed through a predetermined name.
    * Can be used to store the result of an expression
    * Think of it like placing an item in a box

  Value could be
    * string
    * numbers
    * boolean
    * function
    * and more!

  Variable naming guide
    * https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript

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


// Variable declaration
// * declaring the variable
let variableName;

// Variable assignment
// * assigning a value to a variable
variableName = 'hello';

// Variable initialization
// * both declaring and assignment
let variableName2 = 'hello2';

// use the let keyword,
// * followed by variable name,
// * then assignment operator - =
// * then the value to assign to the variable
// * we can store many data types in a variable

let firstName = 'brandon';
let age = 27;
let isSoftwareEngineer = true;
let myFunc = function() {};
let arrowFunc = () => {};

//find what is to the right if the equal sign
// console.log(firstName, age, isSoftwareEngineer, myFunc);
//'brandon' 27 true  [Function: myFunc]


// we can store expressions as well
let math = 1 + 2 + 3;
// console.log('LOOOK HERE =====>',math);

let sentence = 'hey ' + 'dude';
// console.log(sentence);// hey dude


//variable reassignment
let num = 0;
// console.log('before',num)

num = 100;
// console.log('after',num);


//Assignment shorthand
let number = 0;
number++;

console.log(number);// 1

number += 1;
console.log(number);// 2

number = number + 1;
console.log(number);// 3

number + 1;
console.log(number);// 3

number += 1;
console.log(number);// 4

console.log(number + 1);// 5
console.log(number)// 4

console.log(typeof (number + '1'));// string

/*
+
-
*
=
*/


let ten = 10;
let two = 2;
let expression7 = (ten % 6) * two - 3;

console.log('=>',expression7);// 5

let expression8 = ('ten' % 6) * 'two' - 3;
console.log(expression8);// NaN


// console.log('100')
// console.log(+'100')


let num1 = 10;
num1 + 10;
console.log('string',12, true, () => {}, num1);
// string 12 true [Function (anonymous)] 10


console.log('12' + 4);// 124 - string
let result = '12' + 4;
console.log(+result);// 124 - number
//type casted number into a string

console.log(null + +'10');
console.log(Number('10'))
