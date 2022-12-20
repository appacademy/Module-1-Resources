/*

  Comparison Operators!
    - <, <=, ==, ===, >=, >

  < - less than
  > - greater than
  == - loose equality
  != - loose not equality
  === - strict equality
  !== - strict not equality
  <= - less than equal too
  >= - greater than equal too

  * You will almost always use ===, == can lead to many bugs

  comparison operators return a boolean
*/

// console.log(2 < 3);//true
// console.log(10 > 5);//true
// //we are strictly comparing the number to the number 10, so we are looking at both the data type and the value when using strict equality
// console.log(10 === 10);//true
// //loosely comparing variables will only check the value, not the type
// console.log(10 == '10');//true

// //comparing the string of 10 to the number 10, they are the same value, but not the same type
// console.log(10 === '10');//false
// console.log(2 !== '2')//true

//0 1 2 3 4 5 6 7
//a b c d e f g h


//link to ascii table https://web.alfredstate.edu/faculty/weimandn/miscellaneous/ascii/ascii_index.html
//comparing ascci values
console.log('a' > 'b')//false
console.log("a" < 'b')//true
console.log('A' > 'a');//false
