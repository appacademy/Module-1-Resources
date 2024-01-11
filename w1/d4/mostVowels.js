/*

    POLYAS FRAMEWORK
    UNDERSTAND THE PROBLEM
    input: "what a wonderful life"
    output: "wonderful"

    MAKE A PLAN
    define a func called mostVowels
    define a variable to hold the vowels
    define a variable that tracks the word with the most vowels and most vowels count
    split the string into an array get each word
    iterate through array of words
    define vowelCounter variable
    iterate through the words to get the letter
    check if the letter is a vowel, if it increment vowelCounter
    after we check the entire word, compare the count versus the most vowels count
    if its bigger we have our new most vowel
    once done iterating return the most common vowel variable



    EXECUTE THE PLAN
    REFACTOR
*/
// define a func called mostVowels
function mostVowels(sentence) {

  // define a variable to hold the vowels
let vowels = 'aeiou'
  // define a variable that tracks the word with the most vowels and most vowels count
let mostVowelWord;
let mostVowelCount = -Infinity

  // split the string into an array get each word
let words = sentence.split(' ');// [ 'what', 'a', 'wonderful', 'life' ]
  // iterate through array of words

for(let word of words) {

// define vowelCounter variable
let vowelCounter = 0;
// console.log(word, vowelCounter);
// iterate through the words to get the letter
for(let i = 0; i < word.length; i++) {
 let letter = word[i];
// check if the letter is a vowel, if it increment vowelCounter
if(vowels.includes(letter)) {
    // console.log(letter)
    vowelCounter++;
  }
}
  // console.log(word, vowelCounter)
// after we check the entire word, compare the count versus the most vowels count
  // if its bigger we have our new most vowel
  if(vowelCounter > mostVowelCount) {
   mostVowelCount = vowelCounter// 3
   mostVowelWord  = word//  wonderful
  }
}

  // once done iterating return the most common vowel variable
  return mostVowelWord

}

console.log(mostVowels("what a wonderful life")); // "wonderful"


function test(){
  return 1;
 }
 console.log(test())

 for(let i = test(); i<3; i+= test()) {
   console.log(i)
 }
 // console.log(mostVowels("what a wonderful life")); // "wonderful

 // for(let letter of word) {}
 // for(let i = 0; i < word.length; i++) {
 //    let letter = word[i];

 // }
 //   // check if the letter is a
