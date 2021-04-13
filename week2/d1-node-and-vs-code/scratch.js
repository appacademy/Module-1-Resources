/* 
Write a function called hello that intakes an 
array of names and prints "Hello," plus the name, for
each name. Must use .forEach()

hello(['Mylo', 'Buster']) prints 'Hello, Mylo', 'Hello, Buster'

// I'm gunna make a function that intakes a name and prints 'Hello ' + name
*/

// function printsHello(name) {
//     console.log('Hello ' + name);
// }

// function hello(names) {

//     names.forEach(function (name, i, array) {
//         res.push('hello' + name);
//     });

// }

// let instructors = ['Mylo', 'Javier', 'Warren'];
// console.log(hello(instructors));

/* 
Write a function called timesTwo that intakes an
array of numbers and returns a new array where all 
of the numbers are multiplied by 2. You must use .map()

timesTwo([1, 2, 3]) => [2, 4, 6]
timesTwo([-1, 6, 0]) => [-2, 12, 0]

// Use a map if...
1. you need a new array
2. you need to go through each element in the array
3. you need to change that element to something new
*/

// let timesTwo = function (arr) {
//     return arr.map(function (el) {
//         return el * 2;
//     });
// };
// let arr = [1, 2, 3];

// let arrX2 = timesTwo(arr);
// console.log(arrX2)
// // console.log(timesTwo(arr)); // [2, 4, 6]
// console.log(arr);
// // console.log(timesTwo([-1, 6, 0])); //[-2, 12, 0]

/* 
Write a function called evens that intakes an
array of numbers and returns a new array of only the
even numbers from the original array. You must use
.filter()

evens([1, 2, 3]) => [2]
evens([42, 44, 45]) => [42, 44]
*/
// function evens(nums) {
//     return nums.filter(function (num, i, array) {
//         return num % 2 === 0;
//     });
// }

// console.log(evens([1, 2, 3])); // [2]
// console.log(evens([42, 44, 45])); // [42, 44]

/* 
Write a function called sum that intakes an
array of names and returns a string of "Names: " with
all of the names attached after. Must use the .reduce()

reduce(['Mylo']) => Names: Mylo 
reduce(['Rick', 'Morty']) => Names: Rick Morty 
*/

function sum(names) {
    let res = names.reduce(function (accum, el, i, array) {
        return accum + ' ' + el;
    }, 'Names:');

    return res; // this is the ending accum
}

console.log(sum(['Mylo'])); // Names: Mylo
console.log(sum(['Rick', 'Morty'])); // Names: Rick Morty
