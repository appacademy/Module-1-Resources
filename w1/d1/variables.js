/*


  Variables!
  - like storing a value in a box
  - variables evaluate to the value stored in the box

  Values could be:
    - string
    - numbers
    - booleans
    - arrays
    - function
*/

/*
  Variable initialization - both declaring and assignment
  variable declaration - declaring the variable
  variable assignment - assigning a value to a variable
    we use the assignment operator -> =
*/

let variableName; //variable declaration -  weve declared the variableName variable
variableName = 'hello'; //variable assignment - weve assigned the the variable, variableName the string 'hello' using the assignment operator -> =
// console.log(variableName);
variableName = 'goodbye';
// console.log(variableName);

//variable initialization
//both the process of assignment and declaration
let variableName1 = 'hello 2';
// console.log(variableName1);


//we can store many data types in a variable
let firstName = 'brandon';
let age = 27;
let isSoftwareEngineer = true;

//we can use console.log to see what are variables hold
// console.log(firstName);
// console.log(age);
// console.log(isSoftwareEngineer);

//variable assignment
// console.log(age);
age = 300;
// console.log(age)
age + 1;//were not telling js to save the value, we use the assignment operator - = to save it
// console.log(age);


let num = 1;
// console.log(num);
// num++; // this is technically shorthand!
// console.log(num)
// //num++ is shorthand for num += 1
// num += 1;
// console.log(num);
// //num += 1 is shorthand for num = num + 1;
// num = num + 1;
// console.log(num);
// let num1 = 1;
// let string1 = '1';
let num2 = 3
console.log(num  + 'hey' + num2);//4hey
//the  +  sign doubles as concatenation
//typecast this number 1 to '1' and concatenate with hey = 1hey
//we to know our datatypes!
//check our data type is though typeof
console.log(typeof num);//number

let example = '1';
console.log(typeof example);
console.log(Number(example))
// console.log(+example)
// console.log(1 + true);
