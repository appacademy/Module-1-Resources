/*


  Comparison Operators
  * >, <, ==, >= ,<=, ===
  * They return a boolean value - True or False

  < - less than
  > - greater than
  == - loose equality
  === - strict equality
  <= - less than equal too
  >= - greater than equal too
  != - not loose equality
  !== - not strict equality

*/


// What will these expression evaluate too?
console.log(2 < 3);// true
console.log(10 > 5);// true
console.log(10 === 10);// true
// * Strict equality - compare the value and the data type
// * both value and data type are the same then it will output true
console.log(10 == '10');// true
// * Loose equality - compare the value, not the data type
// * We only care about the value
console.log(10 === '10');// false
// * They are not the same data type, one is a string, one is a number, tho they are the same value


// We can compare letters
console.log('=====>','a' > 'b');// false

// https://www.asciitable.com/
// Lexicographically
// 0 1 2 3 4 5...
// a b c d e f...

console.log('a' > 'A');// true
