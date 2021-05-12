/* 
Instructions:

Write a callback called 'upper' that:
  1. Intakes a string
  2. Returns the string in uppercase

  Write a callback called 'lower' that:
  1. Intakes a string
  2. Returns the string in lowercase

Write a higher order function called 'concat' that: 
  1. Intakes three parameters 
    1. A string
    2. Another string
    3. An optional callback
  2. Concatenates the strings
  3. If the callback is not defined
    1. Return the concatenated string
  4. If the callback is defined
    1. Return the result of the callback
       passing in the concatenated string 
  

*/

let upper = function (str) {
  return str.toUpperCase();
};

let lower = function (str) {
  return str.toLowerCase();
};

let concat = function (str1, str2, cb) {
  let strings = str1.concat(str2);
  if (cb === undefined) {
    return strings;
  } else {
    return cb(strings)
  }
};

console.log(upper('YeS!!! ')); // YES!!!
console.log(lower('YeS!!! ')) // yes!!! 
console.log(concat('YeS!!! ', 'I dId iT!', upper)); // YES!!! I DID IT!
console.log(concat('YeS!!! ', 'I dId iT!', lower)); // yes!!! i did it!
console.log(concat('YeS!!! ', 'I dId iT!')); // YeS!!! I dId iT!
