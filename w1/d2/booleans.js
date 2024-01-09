/*

  Booleans
    * Booleans can be used to represent true and false
    * We can perform actions based on true/false

  Logical operators
    ! - not (bang)
    && - and
    || - or

  Order of operators
    * not, and, or

    * Logical operators return a boolean

*/

console.log(false);// false
console.log(!true);// false
console.log(true || false);// true
console.log(true && false);// false

// DeMorgan's Law
// !(A && B) => !A || !B
// !(A || B) => !A && !B
// * distribute the sign, and flip the symbol
console.log(!true || !false);// true
console.log(!(true && false));//true

//short circuiting
console.log(true && 12)// 12
console.log(false || 12)// 12


let a = true;
let b = false;

console.log(a || b);
// true || false
