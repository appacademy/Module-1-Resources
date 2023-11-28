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

// predict the output?
console.log(2 < 3);// true
console.log(10 > 5);// true
console.log(10 === 10);// true
// strict equality
// - check the data type and the value
// value - 10
// data type - number
console.log(10 == '10');// true
// loose equality
// only checking the value
// we dont care about the data type
// checking is the value the same
console.log(10 === '10');// false
// value - 10 === 10
// data type - number !== string
console.log('a' > 'b');// false

// Lexicographically 
// 0 1 2 3 4 5...
// a b c d e f...

// console.log(typeof 10);// number
// console.log(typeof '10')// string
