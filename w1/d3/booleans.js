/*


  Booleans
    * Booleans can used to represent true or false
    * We can perform actions based on true/false

  Logical Operators
    !  - not (bang)
    && - and
    || - or

  Order of operations
    * not, and or

  * Logical operators returns a boolean - true/false

*/


// * What will these expression evaluate too?
console.log(false);// false
console.log(!true);// false
console.log(true || false);// true
console.log(true && false);// false

// deMorgan's law
// * distribute the sign, and flip the symbol
// * this is for boolean simplification
console.log(!true || !false);// true
console.log((!(true && false)));// true

// can we store a boolean in a variable
let a = true;
let b = false;

// an expression will be evaluated then printed to the terminal
console.log(a || b);// true
//console.log(true);

