/*

  Rest Parameter

  What is the rest parameter?
    * The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
     ** Represent variadic function
    * The rest parameter will the gather any additional arguments and place them in a an array

  Rest operator
  * Rest operator collects multiple elements and 'condenses' them into a single data type.
  * Can be used outside function parameter

*/

// using rest
// * create a function that takes in a varying amount of words and creates a sentence out of them

function sentenceMaker(word1, ...words) {
  // console.log(word1, words);
  let sentence = word1;

  for (let word of words) {
    sentence += " " + word;
  }

  return sentence;
}

console.log(sentenceMaker("hello", "world")); // hello world
console.log(sentenceMaker("one")); // one undefined
console.log(sentenceMaker("too", "many", "args")); //too many
