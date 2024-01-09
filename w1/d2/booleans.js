/*

  Booleans
    * Booleans can be used to represent true and false
    * We can perform actions based on true/false

  Logical operators
    ! - not (bang) === `
    && - and       === *
    || - or        === +

  Order of operators
    * not, and, or

    * Logical operators return a boolean

*/

// console.log(false);// false
// console.log(!true);// false
// console.log(true || false);// true
// console.log(true && false);// false

// DeMorgan's Law
// !(A && B) => !A || !B
// !(A || B) => !A && !B
// * distribute the sign, and flip the symbol
// console.log(!true || !false);// true
// console.log(!(true && false));//true

//short circuiting
// console.log(true && 12)// 12
// console.log(false || 12)// 12


let a = true;
let b = false;

// console.log(a || b);
// true || false


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
console.log(3 > 12);// false
console.log(23 === '23');// false
console.log(23 == '23');// true
console.log(23 === 23);// true


// console.log(10 === 10);// true
// strict equality - ===
// checking both the value and the data type
// value - 10 datatype - number === value - 10 datatype - number

// console.log(10 === '10');// false
// // checking both the value and the data type
// // value - 10 datatype - number === value - 10 datatype - string

// console.log(10 == '10');// true
// // checks the value does not check data type
// // value 10 == value 10

// //check data type using typeof

// console.log(typeof 10);// number
// console.log(typeof '10');// string
// console.log(10 * '10');// 1010


// console.log(10 + Number('10'));// 20
// console.log('hey' * 2);// NaN
// console.log('+' - '/');
