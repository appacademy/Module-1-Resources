/*




  Comparison operators!

  What are the comparison operators?
  - >, <, >=, <=, ==, !=, ===, !==

    < - less than
    > - greater than
    == - loose equality
    === - strict equality
    <= - less than equal too
    >= - greater than equal too
    != - loose equality
    !== - strict equality

    What do comparison operators return?
    - A boolean - true or false

    === - strict equality compares both value and data type
    ==  - only compares value
 */

console.log(2 < 3);// t
console.log(10 > 5);// t
// strict equality - check the value and the data type
// the 10 is a number and the value is 10
console.log(10 === 10);// t
// loose equality - check the value and NOT the data type
// where comparing the value 10 to the value and 10, and not checking the type
console.log(10 == '10');// t
// strict equality - we have both the same value and data type, value 10, and theyre both numbers
console.log(10 === '10');// f


// Lexicographically
// 0 1 2 3 4 5...
// a b c d e f...

// 0 > 1
console.log('a' > 'b');// false
console.log('A' > 'a');// false
// 65 not greater than 97 in the ascii table
