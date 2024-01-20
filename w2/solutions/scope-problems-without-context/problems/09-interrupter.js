/***********************************************************************
Write a function named interrupter that accepts a single parameter `interruptingWord`: 
  `interrupter(interruptingWord)`
The interrupter function should return a function. 
When the function returned by interrupter is called with a sentence,
the sentence will be returned with the original interruptingWord inserted
between each word in the sentence.

Look below to see how this function is invoked:
let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"


Invoking the interrupter function again: 
let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"


***********************************************************************/

function interrupter(interruptingWord) {
  //!!START
  return function (sentence) {
    let words = sentence.split(" ");
    let newString = "";

    for (let index = 0; index < words.length; index++) {
      let word = words[index];
      if (index === words.length - 1) {
        newString += word;
      } else {
        newString += word + " " + interruptingWord + " ";
      }
    }

    return newString;
  };
  //!!END
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = interrupter;
} catch (e) {
  return null;
}
