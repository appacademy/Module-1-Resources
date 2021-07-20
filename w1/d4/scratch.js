/* 
Special Words

Write a function that will intake an array of words. Call it specialWords

A Special word is...
   A word that is less than 6 letter
   Must begin with a vowel
   Has to have an odd amount of letters
   
return a new array with all of the special words.

Plan: 

Define a function intakes an array
Create an empty arr call it result
Iterate over the array
  take array[i] and assign it to word
  Use a helper function to check to see if the word is..........
    < 6 length
    if word[0] is a vowel
    if length % 2 !== 0
    IF ALL are truthy
      push it onto the result
return my result

*/
function isSpecial(word) {
  let vowels = "aeiouAEIOU";
  return word.length < 6 && vowels.includes(word[0]) && word.length % 2 !== 0;
}

function specialWords(words) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let bool = isSpecial(word);
    console.log(bool);
    if (bool) {
      result.push(word);
    }
  }
  return result;
}

console.log(
  specialWords(["elephant", "ore", "easy", "pizza", "apple", "egg", "elf"])
); // [ore, apple, egg, elf]
