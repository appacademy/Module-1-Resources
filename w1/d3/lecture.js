/*

  Function expression syntax!
  - just another way to write a function
  - we learnt about functions declaration yesterday
  - storing an anonymous function in a variable therefore giving it a name
    * anonymous function is a function with no name

*/

// main difference
// hoisting

// sayHello();// with a function declaration you can call the function above where its been defined

// function declaration
function sayHello() {
  console.log("hello from say hello");
}

let age = 27;
//storing in a variable

// sayHello2()//cannot access before its defined
// ReferenceError: Cannot access 'sayHello2' before initialization

//function expression
let sayHello2 = function () {
  console.log("hello from say hello 2");
};

// console.log(sayHello2);//[Function: sayHello2]
// sayHello2()//can call after its been defined

//function expressions allow us to do are fat arrows
// let sayHello3 = () => console.log('hello from say hello 3');

// console.log(sayHello);//[Function: sayHello]
// console.log(sayHello2);//[Function: sayHello2]

// console.log(first)

// But what does this all mean? This brings us around to the concept of first
// class objects. A first class object is defined as:
// 1. It can be stored in a variable - learn today
// 2. it can be passed as an argument to a function (coming up next week!)
// 3. It can be returned from a function (also coming up next week!)

/*

  Polya's Framework!
  - Problem solving technique

  1. Understand the problem
  2. Make a plan
  3. Execute the plan
  4. Refactor

*/

/*


Pig Latin is a fun take on the English language where you move any consonant cluster from the start of the word to the end of the word; when words begin on a vowel, you simply add "-yay". Vowels are "aeiou".

Write a function pigLatinWord that takes in a word string and translates the word into Pig Latin. For this problem use the String's slice() method. The slice() method extracts a section of a string and returns it as a string.


// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'


Hint: Remember the String.includes method!

// console.log(pigLatinWord("eat")); //=> "eatyay"
// console.log(pigLatinWord("banana")); //=> "ananabay"

  1. Understand the problem
    * For words that start with a vowel, add 'yay' to the end of the word.
    * For words that start with a non-vowel, move all letters that come before the first vowel** to the **end of the word** then add 'ay'
    Input: a string -> eat
           a string -> banana
    Output: a string -> eat yay
            a string -> anana b ay
      * how do we get from our input to our output?

  2. Make a plan
    a. define a function pigLatinWord take a word
    b. declare vowels - check if letter is a vowel
    c. check if first letter in word, is a vowel - index to get first letter, we have string of vowels, use.includes!
      a. if it return word + 'yay'
    b. we have to find the next vowel in the word
      a. iterate through the word
        a. as we iterate, let create a variable for letter
        b. well check if that letter is a vowel, using .includes
          a. if it a vowel
            a. we need everything up to a but not including the a and store in a variable =>    b use slice
            b. we need everything after the a including a to the end =>      anana    use slice!
            c. combine our anana with our b and the 'ay' => ananabay
              a. return our new word
    c. return word

  3. Execute the plan
  4. Refactor
*/
let pigLatinWord = function (word) {
  // console.log(word);//banana
  let vowels = "aeiou";
  if (vowels.includes(word[0])) return word + "yay";

  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    // console.log("letter:", letter, i); b  a n a n a
    if (vowels.includes(letter)) {
      // console.log(letter) a a a
      //slice with out an ending index, it takes everything from that index to the end
      let first = word.slice(i); //anana
      // console.log(first)
      //use slice, give it a start index, and it will slice from that index to the endIndex not including
      let second = word.slice(0, i); //b
      // console.log(first, second);
      return first + second + "ay";
      // return word.slice(i) + word.slice(0, i) + 'ay';//the return is what is prematurely stopping the loop
    }
  }
  return word;
};

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"
