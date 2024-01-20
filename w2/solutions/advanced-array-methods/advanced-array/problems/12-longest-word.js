/*
Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

*/

let longestWord = function(sentence) {
    //!!START
    let words = sentence.split(' ');
    let longestWord = '';

    words.forEach(function(word) {
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord;
    //!!END
};

//!!START
// let longestWord = function(sentence) {
//     let words = sentence.split(' ');

//     return words.reduce(function(acc, word) {
//         if (word.length > acc.length) {
//             acc = word;
//         }
//         return acc;
//     });
// };
//!!END

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = longestWord;
} catch (e) {
    module.exports = null;
}
