/*

Pig Latin - Slice Research
Pig Latin is a fun take on the English language where you move any consonant cluster from the start of the word to the end of the word; when words begin on a vowel, you simply add "-yay". Vowels are "aeiou".

Write a function pigLatinWord that takes in a word string and translates the word into Pig Latin. For this problem use the String's slice() method. The slice() method extracts a section of a string and returns it as a string.

Hint: Remember the String.includes method!

*/

// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

/*

	Polya's Framework - Solving Problems

    Understand the problem

      Start - vowel
      Input: apple
      Output: apple + yay

      Start - non-vowel
      Input: b anana
      Output: anana + b + ay


     * How do we get from our input to our output?
    Make a plan
     1. define a function called pig latin taking in a string
     2. store the vowels in a string/array
     3. we need to check if a word starts with a vowel - conditional
        a. if it does; return the string + yay
     4. find a way to get access to every single letter - iterate/loop
        a. as we iterate; we need to check if the current letter is a vowel
        b. check if letter is vowel - conditional
        HINT: use .includes?
        c. if the letter is a vowel
          a. we need take that letter before the vowel and move after the word, but also remove everything up to the vowel
          b. then add 'ay'
          HINT: use .slice?
          c. one we make the changes; return the word
      5. return the word
    Execute the plan
    Refactor

*/

function pigLatinWord(word) {
  // console.log(word);
  // let vowels = ['a','e','i','o','u'];
  let vowels = 'aeiouAEIOU';

  // console.log(word[0]);
  // aeiou.includes(a)
  // .includes
  // you call it on what you want to search within
  // you pass to it, what you want to look for
  if(vowels.includes(word[0])){
     return word + 'yay';
  }

  //start - 0
  //stop - 5 word.length
  //step - 1
  for(let i = 0; i < word.length; i++) {
    let letter = word[i];
    // console.log('index: ', i);
    // console.log('letter:  ', letter);

    if(vowels.includes(letter)){
      // we need everything up to the vowel
      let second = word.slice(0, i);
      // console.log('==>',first);

      // we need everything after the vowel including the vowel
      let first = word.slice(i);
      // console.log('=>',second);// ash
      // console.log(first, second, 'ay');
      // return word.slice(i) + word.slice(0, i) + 'ay';
      return `${word.slice(i)}${word.slice(0, i)}ay`
    }
  }

  return word;
};

// const str = 'trash';

// console.log(str.slice(0, 2));
// // Expected output: "tr"

// console.log(str.slice(2));
// // Expected output: "ash"


console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"
