/**
 * The number type
 * - Number Operations (+, -, *, etc...)
 * - P.E.M.D.A.S.
 *  -> 3 + 5 - 2 * 1 / 6
 * - Modulo
 * 
 * Boolean type
 * Boolean logic (and, or)
 *
 * Variables with let
 *
 * Comparison Operators
 */


// 1. THE NUMBER TYPE
// console.log() is a function given to you by JS. 
//      it prints out the output of whatever is inside the '()'. 

console.log(1 + 1);   // => console.log(2) => 2
console.log(2.5 - 2); // 0.5
console.log(3 * 4);   // 12 
console.log(10 / 2);  // 5

// Modulo (%) calculates remainder 
console.log( 10 % 2); // 0
console.log( 10 % 3); // 1
console.log( 10 % 4); // 2
console.log( 10 % 5); // 0

// How is a number even or odd?
//  - If a number is EVEN, it is divisible by 2. 





// 2. VARIABLES
// initialization:
//   - declaration, creating the space for the variable
//   - assignment, giving a value to the variable

let state;  // declaration using javascript 'let'
// console.log(state); // undefined
state = 'California'; // assignment
// console.log(state);     // California

let city = 'Sacramento'; // both (i.e. initialized in one line)
// // console.log(city);

// // more assignment
let age = 5;
// console.log(age); // 5
// age + 5;          // **** NO assignment used**** so change NOT permanent
age = age + 5;    // **** assignment IS used**** so change IS permanent
// console.log(age); // 10

// age += 5 is the same (shorthand for) age = age + 5

// // Using ++ and -- 
age++; // => age = age + 1 // IS using assignment
// console.log(age); // 11
age--; // => age = age - 1 // IS using assignment 
// console.log(age); // 10



// 3. BOOLEAN DATA TYPE 
//      - only two possible values (true, false)
//      - NOT (!) - flips the logic
//      - AND (&&) - (*)- returns true ONLY when both sides are true. 
//      - OR (||) - (+) - returns false ONLY when both sides are false. 

console.log(true && true)  // 1 * 1 => 1 => true
console.log(true && false) // 1 * 0 => 0 => false

console.log(true || true)  // 1 + 1 => 2 => true
console.log(true || false) // 1 + 0 => 1 => true
console.log(false || false) // 0 + 0 => 0 => false
console.log(false || true ) // 0 + 1 => 1 => true



// 4. COMPARISON OPPERATORS
//      - return a BOOLEAN as the output 

// Less than/Greater than
let result = 5 < 9 ; 
console.log(result);     // true
console.log('a' > 'b');  // false
console.log('cat' < 'cats'); // (alphabetical order / dictionary order)

// Inclusive comparison
console.log(10 >= 10);   // true

// Equality === and !==
console.log(2 === 2.1);  // false
console.log(2 === 2);    // true
console.log(2 !== 2.1);  // true

Two equality operators, === and ==
console.log(5 === '5'); // false
console.log(5 == '5');  // true (types are coerced)
console.log( [] == 0 ); // true (can be unpredictable)

/**
 * In JS we have many "falsey" values. Emply array, 
 *  empty string, 0, undefined, etc. All of these evaluate to 
 *  the boolean value of false. This is why we say that the 
 *  double equalis is unpredictable, you'll find that an empty array
 *  when compared with a 0 (see line 105) returns true (both falsey vals)
 *  but that might not have been your desired outcome. 
 * 
 */