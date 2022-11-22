/*

  Variables
    - like a storing a value in a box
    - Variable will evaulate to its value
    - Value could be anything
      - string
      - number
      - boolean
      - function
      - and more!

*/

//variable initialization
// both the act of declaring and assigment
let name2 = 'brandon'

//variable declaration
//declaring the variable
let name;

//variable assigment
name = 'brandon';

// console.log(name)

//store anything in a variable
let firstName = 'brandon';
let age = 27;
let isSwe = true;

//take advantage of our console.log
// console.log('firstname!!!!!!!!!!!!!!!!', firstName);
// console.log({age});
// console.log(!isSwe)//false

//variable reasignment
//using the equals sign
// console.log(age)
// age = 300;
// console.log(age)

// let num = 0;
// console.log(num);
// num++; //increment are num value by one
// console.log(num)
// num += 1;
// console.log(num);
// num = num + 1
// console.log(num)


// //know your datatype!!
// console.log(num + firstName)//3brandon

/*

Comparison operators
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
  A comparison operator will return a boolean, true or false
*/

console.log(1 < 10);//true
console.log(10 > 5)//true

//loose equality vs strict equality

//loose equality
//compare two values, not going to check the type
//if we break them down to the same data type, are they the same value?
console.log(2 == '2')//true

//strict equality
//strictly comparing the two values, checking the type
//they need to be the same data type and value
console.log(2 === '2')//false


