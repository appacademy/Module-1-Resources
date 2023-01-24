/*


  Variables
  - Like storing a value in a box
  - The variable will evaluate to its value
  - This value could be anything
    - number
    - string
    - boolean
    - function
    - and more

    Example
*/

/*
Variable initialization - both declaring and assigning
variable declaration - declaring the variable
variable assignment - assigning a value to a variable
* uses assignment operator - =
* store right hand value, in the left hand variable name

*/


let variableName;//variable declaration
variableName = 'hello';//variable assignment

let variableName2 = 'hello';//variable initialization

// console.log(variableName)
//use let keyword, then variable name, then value

let myVarName = 'whatever you want!';

// console.log(myVarName)

//store any data type in variable
let firstName = 'brandon';
let age = 27;
let coolGuy = true;

// console.log(age);
// console.log(firstName);
// console.log(coolGuy);


//variable reassignment
//also use the assignment operator - =
// console.log(age);//27
age = 300;//we used the assignment operator to reassign the age variable
// console.log(age);//300

let num = 0;
console.log(num);//0
num++;
console.log(num);//1
//same as
num += 1;//add and reassign
console.log(num)//2
//same as
num = num + 1;
console.log(num);//3

console.log(num + 'hey');//3hey
//+ is the used for concatenations
//important to know your data types
//typecast the number into a string and concatenates them
