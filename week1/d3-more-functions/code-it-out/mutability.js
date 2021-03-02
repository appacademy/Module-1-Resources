// Immutable vs Mutable

// Strings are IMMUTABLE
let str = 'abc';
str[1] = 'x'
// console.log(str); // => 'abc'





// We can reassign a variable to another string
beforeStr = str;

str += 'def' // str = str + 'def'

// console.log(str) // 'abcdef'

// console.log(str === beforeStr); // false

const anotherStr = 'abcdef';
// console.log(str === anotherStr); // true







// Arrays are MUTABLE
let arr = ['a', 'b', 'c'];

let beforeArr = arr;

arr[1] = 'x';

console.log(arr); // ['a', 'x', 'c']
console.log(beforeArr); // ['a', 'x', 'c']
console.log(arr === beforeArr) // true

let anotherArr = ['a', 'b', 'c']; // same contents, but different array
console.log(arr === anotherArr); // false

let dupArr = arr.slice() // duplicate of the array
console.log(dupArr); // ['a', 'b', c']
console.log(arr === dupArr); // false




let str = 'abc';

let upperCase = str.toUpperCase();

console.log(str);
console.log(upperCase);
console.log(str === upperCase);

console.log('abc'.toUpperCase());