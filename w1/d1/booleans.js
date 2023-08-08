/*



  Booleans
   * Boolean can be used to represent true and false

  Logical Operators
   * ! - not
    - do the opposite '
   * && - and
    - * multiplication
   * || - or
    - + addition

  The return value of a logical operators?
    * true or false - a boolean!

*/


// What will the expression evaluate too?
console.log(false);// false
console.log(!false);// true
console.log(true || false);// true
console.log(true && false);// false
// demorgans law!
// distribute the sign, flip the symbol

console.log(!true || !false);// true
console.log(!(true && false))// true

// DeMorgan's Law
// !(A && B) => !A || !B
// !(A || B) => !A && !B

// can we store a boolean in a variable
let a = true;
let b = false;

// expression will be evaluated then printed to the terminal
console.log(a || b);// true
// variables evaluate to true and false
// then we compare them using ||
// console.log(true || false) // true
