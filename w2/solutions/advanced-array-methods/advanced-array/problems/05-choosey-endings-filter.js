/*
Write a function `chooseyEndings` that accepts an array of words and a suffix
string as arguments. The function should return a new array containing the words
that end in the given suffix. If the value passed in is not an array, return an
empty array. Solve this using Array's `filter()` method. 

HINT: There are built in JavaScript functions that will help with determining if
a strings ends a certain way. Go see if you can find it on MDN!

Examples:

console.log(chooseyEndings(['family', 'hound', 'catalyst', 'fly', 'timidly', 'bond'], 'ly'));
// [ 'family', 'fly', 'timidly' ]

console.log(chooseyEndings(['family', 'hound', 'catalyst', 'fly', 'timidly', 'bond'], 'nd'));
// [ 'hound', 'bond' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// [ 'simplicity', 'felicity' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
// [ ]

console.log(chooseyEndings(17, 'ily'));
// [ ]
*/

let chooseyEndings = function(words, suffix) {
  //!!START
  if (!Array.isArray(words)) {
    return [];
  }
  return words.filter(function(word) {
    return word.endsWith(suffix);
  });
  //!!END
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = chooseyEndings;
} catch (e) {
  module.exports = null;
}
