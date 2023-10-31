/*


  Comparison Operators
  * used to compare values, to perform an action

  What are the comparison operators?
    * <, <=, ==, ===, >=, >

  What do they return?
     * A boolean

    < - less than
    > - greater than
    == - loose equality
    === - strict equality
    <= - less than equal too
    >= - greater than equal too


*/


console.log(2 < 3);// true
console.log(10 > 5);// true
// strict equality
console.log(10 === 10);// true - check the value and the data type
// 1st: the value is 10 - Data type - number
// 2nd: the value is 10 - Data type - string
// 10 === 10 - string === number
// loose equality
console.log(10 == '10');// true - check just the value
console.log(10 === '10');// false - check the value and the data type
// string !== number && number === number
// predict the output?


// Lexicographically a < b
// 0 1 2 3 4 5...
// a b c d e f...
// what ever letter appears first is lexicographically smaller
// console.log('=====>','a' < 'b');
// console.log('a' < 'A');//false 97 < 65 - ascii table
