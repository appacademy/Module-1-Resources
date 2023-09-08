/*
Pig Latin - Slice Research
Pig Latin is a fun take on the English language where you move any consonant cluster from the start of the word to the end of the word; when words begin on a vowel, you simply add "-yay". Vowels are "aeiou".

Write a function pigLatinWord that takes in a word string and translates the word into Pig Latin. For this problem use the String's slice() method. The slice() method extracts a section of a string and returns it as a string.

Hint: Remember the String.includes method!

So the two rules for our version of Pig Latin are:

1. For words that start with a vowel, add 'yay' to the end of the word.
2. For words that start with a non-vowel, move all letters that come
**before the first vowel** to the **end of the word** then add 'ay'

  Polya's Framework
  1. Understand the problem
    * Starts with vowel
    Input: a string -> 'apple'
    Output: a string -> appleyay
    * How do we I get from my input to my output?
    * VOWELS - 'AEIOU'
    * Starts with vowel
    * apple + 'yay' => appleyay
    * Starts with Non vowels
    Input: a string -> 'banana'
    Output: a string -> 'ananabay'
    * 'anana' + 'b' + 'ay'
    + anana
    + b
    + ay


  2. Make a plan
    1. Define a function called pigLatinWord, that takes in a string
    2. define a string that holds all the vowels
      * this will be used to check for vowels
    3. Check if the work starts with a vowel
      * use a conditional
      * index into the string to get the first letter
      * check if its a vowel
        * use .includes to check if the first letter is a vowel
        * if it is: return the word + 'yay'
      * logic for words that start with non vowels
      * we need to loop so we can check each letter in the string
      * as we loop we need to check if the current letter is a vowel
        * use a condition to check if the current letter is a vowel
          * use .includes to check if the letter is a vowel
          * when we find a vowel
            * store return in variable -
              * slice everything to up to vowel not including
              * slice everything after the vowel
              * combined back together the new extracted portion of the strings into a work and return it with 'ay'
              *
      * return word - just in case word has no vowels
  3. Carry out the plan
  4. Refactor
*/

const str = "banana";

// console.log(str.slice(0, 1));
// // starting index and include the value
// // not include the last value
// console.log(str.slice(1))
// // replace 1 with the acutal index of the vowel

function pigLatinWord(word) {
  let vowels = "aeiou";
  age = 27;// globally declared variable
  if (vowels.includes(word[0])) {
    return word + "yay";
  }

  for (let i = 0; i < word.length; i++) {
    let letter = word[i];

    if (vowels.includes(letter)) {
      let first = word.slice(i); // anana
      let second = word.slice(0, i); // b

      return first + second + "ay";
    }
  }

  return word;
}

console.log(pigLatinWord("apple")); //=> "appleyay"

function test() {
  console.log(age);//27
}

test();

// console.log(pigLatinWord("banana")); //=> "ananabay"
// These are console.log the return value of the function
// // a function evaluates to its return

// console.log(pigLatinWord("eat")); //=> "eatyay"
// console.log(pigLatinWord("banana")); //=> "ananabay"
// console.log(pigLatinWord("trash")); //=> "ashtray"
