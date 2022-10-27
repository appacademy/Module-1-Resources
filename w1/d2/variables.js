/*


Variables
  -Like storing a value in a box
  -Variable evaluate to its value
  -value could be anything
    -string
    -number
    -boolean
    -function
    -and more!
*/


//variable declaration
//declaring the variable
let name;
//use let when declaring a new varaible
//variable assignment
//assign a value to a variable
name = 'brandon';

//what is variable initialzation?
//both declaring and assignment in one
let name2 = 'brandon';

//store anything a variable
let firstName = 'brandon';
let age = 27;
let isSoftwareEngineer = true;

//take advantage of our console.log
console.log('firstName:', firstName);
console.log(age);
console.log(isSoftwareEngineer);


//variable reassginment
// console.log('age', age)//27
// age = 300;
// console.log(age)
// age = 27
// console.log(age)

//maninpulate variables
let num = 0;
console.log(num);//0
num++;//increment are num value by one
console.log(num)//1
num += 1;
console.log(num)//2
num = num + 1
console.log(num)//3
num--
console.log(num)//2

//know your date types!!
//unexpected behavior! concatenates number + string
console.log(num + ' ' + firstName)//2brandon

/*
Comparision Operators!

What are comparison operators?
  - compare variables to another
  - <, >, <=, >=, ==, ===, !=, !==

  < - less than
  > - greater than
  <= - less than or equal to
  >= - greater than or equal to
  == - loose equality
  === - strict equality
  != - not equals using loose equality
  !== - not equals using strict equality

  A comparison opertator will return a boolean

  examples
*/

console.log(1 < 10)//true
console.log(10 > 5)//true
console.log(10 < 5)//false

//loose equality
//compares two values, not going to check the type
//if we breakthem down to the same data type, are the the same value?
console.log(2 == '2')//true

//strictly comparing the two values, with checking the type
//they need to be same type and value
console.log(2 === '2')//false
//comparing a number to a string therefor they are not strictyl equal

//when we use aplhanumeric characters, we are comparing there ascii values
//

console.log('a' < 'b')//true
console.log('a' < 'A')//false
// 0 1 2 3 4 5 ascii
// a b c d e f
console.log(0 < 1)//true;
