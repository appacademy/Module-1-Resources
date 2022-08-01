//Number type
/* 
What is the number data type?
pretty much exactly what you would expect -- numbers can be:
    -- Whole numbers (integers)
    -- Decimals
    -- Negative numbers
as well as a few other special cases (we'll learn more as the course goes on)
*/

console.log(12 + 2); // 14
console.log(7 - 9); // -2
console.log(2.02 * 3); // 6
console.log(8 / 2); // 4

// Order of Operations
// PE => MMD => AS 
//Parentheses, Exponents, Multiplication, Modulo, Division, Addition, Subtraction

console.log(1 + 3 * 4); // 13
console.log((1 + 3) * 4); // 16

console.log(5 ** 2); // 25
console.log(2 ** 5); // 32


// Modulo Operator
// A way for us to find the remainder value of a division expression

console.log(15 % 5); // 3r0 => 0
console.log(16 % 5); // 3r1 => 1
console.log(17 % 5); // 3r2 => 2
console.log(18 % 5); // 3r3 => 3
console.log(19 % 5); // 3r4 => 4
console.log(20 % 5); // 4r0 => 0

// What if we try to mod a small number by a large number?
// We'll just get the small number back, 0 with a remainder of small number
console.log(5 % 15); // 0r5 => 5


//Boolean type
console.log(true);
console.log(false);

// Not Operator (!) - bang
console.log(!true);
console.log(!false);


// And Operator (&&)
console.log(true && true);
console.log(false && true);
console.log(false && false);


// Or operator (||) 
console.log(true || true);
console.log(false || true);
console.log(false || false);

// DeMorgan's Law
// !(A && B) => !A || !B
// !(A || B) => !A && !B