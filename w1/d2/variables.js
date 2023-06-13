/*


  Variables!
  - like storing value in a box
  - variables evaluates to the value stored in it

  Value could be stored
    - strings
    - numbers
    - booleans
    - functions
    - and more!


    Variable initialization - both declaring and assignment
    Variable declaration - declaring the variable
    Variable assignment - assigning a value to a variable

    = - is the assignment operator
*/


// lets makes some variables
// variable names should be descriptive
// firstName, lastName, number, name, age,
// camelCase
let variableName;// Variable declaration - declaring the variable
variableName = 'hello';//Variable assignment - assigning a value to a variable

//use let the keyword followed by variableName, then assignment operator and what we would like to assign to the variable

// Variable initialization - both declaring and assignment
let variableName2 = 'hello';

// we can store many data types in a variable
let firstName = 'brandon'; // string
let age = 27; //numbers
let isSoftwareEngineer = true; //booleans
let myFunc = function(){ //function
  return 'hey'
};

// we can see what the variable holds using a console.log
// console.log(firstName);//brandon
// console.log(age);//27
// console.log(isSoftwareEngineer);//true
// console.log(myFunc);//[Function: myFunc]

//! do not delcare variables without let/const/var, as the variable will be declared globally

//variable reassignment
// console.log(age);
//we can reassign the value using the = - assignment operator
age = 300;//no let keyword, already been declared-  that means were reassign
// console.log(age);

let num = 0;
console.log(num);//0
num++;
console.log(num);//1
//num++ is shorthand for num += 1;
num += 1;
console.log(num)
//num += 1; is shorthand for num = num + 1
num = num + 1;
console.log(num);
num + 1;//this happens its just not saved
console.log('look here should be 4', num)
//if we do not use the = assignment operator, it will not be save in memory


console.log(num + 'hey');//3hey
// the number is type cased into a string, and then concatenated/combined with the other string

//KNOW YOUR DATA TYPE
let number = '1';
console.log(typeof number);//string - this is a string!
console.log(typeof number === 'number');//false
//were checking the return of calling type of on the number and checking if it triple equals 'number'
// string === number nope!
console.log(12 * 'hey');//NaN
console.log(12 - '1');//11

console.log(typeof (String(1) + String(2)));//'2';
console.log('look',(String(1).concat(String(2))));//'2'
console.log(Number('1') + Number('2'));//3
console.log(+'1' + +'2');//3
