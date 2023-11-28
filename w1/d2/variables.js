
/*


  What is a variable?
    * A variable is a named reference to a value.
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


let variableName;// variable declaration
// console.log(variableName);// undefined
variable = 'hello';// variable assignment

let variableName2 = 'hello';// variable initialization

// console.log(variableName2);// hello

// we can store many data types in a variable
let firstName = 'brandon';
let age = 28;
let isSoftwareEngineer = true;

// console.log('===>',firstName, age, isSoftwareEngineer)

// we noted store expressions
let result = variableName2 + ' '+ firstName + ' is ' + age;
//let result = hello + 'brandon' + ' is ' + 28;

// console.log(result);



// assignment shorthand

//reassignment
age = 300;
console.log(age)

age++;
console.log(age);// 301

age += 1;
console.log(age);// 302

age = age + 1;
console.log(age);// 303

age + 1;
console.log(age);// 303
