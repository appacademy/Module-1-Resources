// Comparison Operators
// < > <= >= == ===

// Much like we've seen in math, we can use comparison operators in JavaScript
// to return true and false values
console.log(2 <= 2);
console.log(2 < 1);

// We can also use them to compare strings
console.log('a' < 'b');
console.log('app' < 'apple');
// but note that Z comes before a, so you may want to make sure you're checking
// strings of the same case (upper/lower) when comparing strings
console.log('a' < 'Z');

// 'A' < 'Z' < 'a' < 'z'


// let a = 4;
// let b = 3;

// console.log(a > b); // 4 > 3 => true


// Equality
// Throughout the program, you'll get introduced to a lot of new terminology and
// vocabulary. It might be hard to keep it all straight all the time, but
// try to start thinking in terms of operators. 

// = assignment operator 
// == loose equality operator
// === strict equality operator
// != not loose equality operator
// !== not strict equality operator

// compare the following expressions:
console.log(2 == '2');
console.log(2 === '2');
// When checking if 2 is loosely equal to '2', JavaScript will first attempt to
// type coerce the string of '2' into a number if it can find one. We want to 
// avoid this behavior as much as possible. This removes control of our
// applications from us as developers and puts decision making into JavaScipt's
// hands. We want to make sure that we're always using strict equality so that 
// we can have predictable results
console.log(2 === Number('2'));
