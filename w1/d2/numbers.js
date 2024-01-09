/*

  Numbers and Booleans!
  * Use numbers to run math, calculate values, represent an amount

  Numbers!
    * whole numbers
    * decimals
    * negative numbers
    * few other special cases

  What is PEMDAS?
    * Order of operations
    * parentheses, exponents, multiplication, modulo, division, addition, subtraction

    * Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.
    * JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.
    * A number literal like 37 in JavaScript code is a floating-point value, not an integer.
    * There is no separate integer type in common everyday use. (JavaScript also has a BigInt type, but it's not designed to replace Number for everyday uses. 37 is still a number, not a BigInt.)
    * The JavaScript Number type is a double-precision 64-bit binary format IEEE 754

*/


console.log(2 + 4 * 3);// 14
console.log(12 - 6 - 2);// 4
console.log((3 + 2) - 1);// 4
console.log(1.11 + 4);// 5.11
// modulo
console.log(13 % 5);// 3
// how many times does 5 go into 13 and whats the remainder - 3
console.log(5 % 13);// 5

if(10 % 2 === 0) {
  console.log('is even');
}

// null undefined
let name;
console.log(name);// undefined


console.log(null + 12);// 12
console.log(null && true);// null
//null is treated as zero

console.log(10**2);// 100
