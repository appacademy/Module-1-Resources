/*



  Variables!
    - like storing a value in a box
    - variables evaluates to the value stored in the box

    Values could be:
      - string
      - numbers
      - booleans
      - arrays
      - functions
      - and more!

*/


/*
  Variable initialization - both declaring and assignment
  variable declaration - declaring the variable
  variable assignment - assigning a value to a variable
    we use the assignment operator - =
*/

//camelCase
//want your variables names to be specific
let variableName; //variable declaration - we declared the variableName variable
variableName = 'hello'; //variable assignment - we've assigned to the variableName variable the string of of hello using the =

//Variable initialization
//use the let keyword, followed by variable name, then the assignment operators, then what what you want to assign
let variableName2 = 'hello 2'


//we can store many data types in a variable
let firstName = 'brandon';
let age = 27;
let isSoftwareEngineer = true;

//we want to see what the variable evaluates too
// console.log(firstName);
// console.log(age);
// console.log(isSoftwareEngineer);


//variable assignment
// console.log('old age', age);
//we can use assignment operator - =
age = 300;
age + 1;//this does nothing, we have used the assignment operator to change the value
// age += 1//if you want to change, gotta have that = assignment operator
//reassign the age variable to 300
// console.log('new age', age)

let num = 0;
// console.log(num);
// num++;
// console.log(num);
// //num++ increments the num by one
// //num++ is shorthand for num += 1
// num += 1;
// console.log(num);
// //num += 1 is shorthand for num = num + 1;
// num = num + 1;
// console.log(num);

//num++ only adds one
//num += 2 add two, num += 3, add three


// console.log(num + 'hey');//0hey
//the + signs doubles as the concatenation
//typecast this number 0 to '0' and concatentate it with the string +> 0hey
//KNOW YOUR DATE TYPES!!!
let number = '1'
// console.log(typeof number)//string
// console.log(typeof 'hey')//string
// console.log(typeof 2)//number
