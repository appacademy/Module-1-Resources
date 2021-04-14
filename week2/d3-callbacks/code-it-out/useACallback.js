/* 
Instructions:

Write a callback called 'upper' that:
  1. Intakes a string
  2. Returns the string in uppercase

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

};

let concat = function (str1, str2, cb) {
    
};

console.log(upper('YeS!!! '));
console.log(concat('YeS!!! ', 'I dId iT!', upper));
console.log(concat('YeS!!! ', 'I dId iT!'));
