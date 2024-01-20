/*
Write a function `shortestWord` that accepts a sentence as an argument.
The function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'

*/

let shortestWord = function(sentence) {
  //!!START
  let words = sentence.split(' ');
  let shortest = words[0];
  words.forEach(function(word) {
    if (word.length <= shortest.length) {
        shortest = word;
    }
  });
  return shortest;
  //!!END
};

//!!START
// using reduce
// let shortestWord = function(sentence) {
//     let words = sentence.split(' ');
//     return words.reduce(function(shortest, word) {
//         if (word.length <= shortest.length) {
//             shortest = word;
//         }
//         return shortest;
//     });
// };
//!!END

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = shortestWord;
} catch (e) {
  module.exports = null;
}
