/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function(string) {
    //!!START
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = vowels.reduce(function(acc, vowel) {
        if (string.includes(vowel)) {
            acc++;
        }
        return acc;
    }, 0);

    return count >= 3;
    //!!END
};

//!!START
// using forEach
// let hasThreeVowels = function(string) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     vowels.forEach(function(vowel) {
//         if (string.includes(vowel)) {
//             count++;
//         }
//     });

//     return count >= 3;
// };

// using filter
// let hasThreeVowels = function(string) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let vowelWords = vowels.filter(function(vowel) {
//         return (string.includes(vowel));
//     });

//     return vowelWords.length >= 3;
// };
//!!END

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
