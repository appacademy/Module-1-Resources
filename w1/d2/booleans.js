/*


Booleans

  What are booleans and what are they used for?
    * Booleans can be used to represent true and false
    * We can perform actions based on true/false

  What are the logical operators?
    ! - not (bang)
    && - and
    || - or

  What is the order of operation for logical operators?
    * not, and, or

*/

// predict the output?
console.log(false);// false
console.log(true);// true
console.log(true || false);// true
console.log(true && false);// false

// demorgans law
console.log(!true || !false);// true
console.log(!(true && false));// true


// store booleans an a expression
let bool = true || false;
// console.log('===>',bool);
