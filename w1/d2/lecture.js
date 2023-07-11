/*




  Booleans!

  Logical operators!
  ! - not(bang)
  && - and
  || - or

  Order of operations
  - not, and, or

  Logical operator returns?
    true or false

*/

// what will evaluate to?
console.log(false);// false
console.log(!true); //false
console.log(true || false); //true
console.log(true && false); //false
console.log(true && (true || false));// true

//demorgans law
console.log(!(true && false));// true
//we can use deMorgans law to simplify our boolean logic
console.log(!true || !false);// true

// DeMorgan's Law
// !(A && B) => !A || !B
// !(A || B) => !A && !B

// can store booleans in variables
let a = true;
let b = false;

console.log(a || b);// true
