/*

	Input: "what a wonderful life"
    Output: wonderful
    * How do we get from our input to our output?

    Understand the problem
    Make a plan
    1. defined a function called mostVowels
    2. Use split to turn our string into array of words
    3. want to store all the vowels in variable
    4. variable for mostVowelWord, mostVowelsCount
    5. itetare the words to acces all the words
    	* we should create a counter variable - track count
    	a. iterate through the word to grab the letters
        b. we can check if the current letter is a vowel - if/statement - .includes
        	a. increment our count
        c. once the inner loop completes; we will have the count of th curren word
        d. mostVowelWord, mostVowelsCount -
        	a. only if the current count is greater than mostVowelsCount
        	reassign these variables to be the currentcount and the word with most vowels
        	b. reset the couter to 0
    6. return mostVowelWord
    Execute the plan
    Refactor

*/

function mostVowels(sentence) {
  // your code here
  // console.log(sentence);// what a wonderful life
  let words = sentence.split(' ');
  console.log(words);// [ 'what', 'a', 'wonderful', 'life' ]
  let vowels = 'aeiouAEIOU';
  let mostVowelWord;// track the current word with the most vowels
  let mostVowelCount = -Infinity;// -Infinity < 2

  for(let i = 0; i < words.length; i++) {
   let word = words[i];

   let count = 0;

   for(let j = 0; j < word.length; j++) {
     let letter = word[j];
     console.log(word, j, word[j])

     if(vowels.includes(letter)) {//
      count++;
     }
   };
    // break;
    // console.log(word, count)
    /*
      word - count
      what - 1 > -Infinity
      wonderful - 3
      life - 2

      mostVowelCount = 3
      mostVowelWord = wonderful
    */
   if(count > mostVowelCount) {
     mostVowelCount = count;
     mostVowelWord = word;
   }

  }

return mostVowelWord
}

console.log(mostVowels("what a wonderful life")); // "wonderful" - 3
