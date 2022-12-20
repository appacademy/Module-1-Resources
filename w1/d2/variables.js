/*


  Variables!
  - storing something in a box
  Values that could be stores in a variable
    - strings
    - numbers
    - boolean
    - functions
    - NaN
    - null


    example
*/

/*
variable initialization - both declaring and assignment
variable declaration - declaring the variable
variable assignment - assign a value to a variable
store right hand value, in left hand variable name
*/

let variableName;//variable declaration
variableName = 'hello';//variable assignment
//= equal sign , is the assignment operator

//variable initialization
let variableName2 = 'hello2';

//do not do this, because you are declaring a variable globally
// variableName3 = 'hello3';

let firstName = 'brandon';
let age = 27;
let coolGuy = true;

// console.log(firstName);
// console.log(age);
// console.log(coolGuy);

//variable reassignment
let num = 0;
console.log(num);
//postfix operator
//this is short hand
num++;
console.log(num);
//same as
num += 1;
console.log(num);
//short hand for
//num = 2 + 1
//num 3
num = num + 1;
console.log(num)

//num--, num-=1, num = num - 1

//can we add a number to string
//know your date types!
//concat
//type coerced num into a string and concatenated with our the other string
//.concat() + 
console.log(num + 'hey');//3hey
