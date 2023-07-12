// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

/*
	Polya's Framework

  	Understand the Problem
    * If word starts with vowel, add yay to end
    	* apple => appleyay
    * If word starts non vowel, move cluster, add ay
    	* tr ash => ash tr ay
    Input: string => apple
    Output: string => appleyay
    * how do we get from our input to our output

  	Make a plan
    1. Define a function called pigLatinWord takes in a word string
    2. create a string that holds all the vowels
    3. check if the word starts with a vowel - .includes, .indexOf, ===
    	a. if the word starts with a vowel return the word + 'yay'
    4. Iterate to gain access to all letters in the string
    	a. create a variable for each letter
        b. check the letter and see if its a vowel
        	1. if letter is a vowel;
            	a. extract every letter up to vowel, and move it the end of the word
                b. add 'ay' to the word
    			c. return the modified word
    5. return unmodified word if there are no vowels

  	Carry out the plan
  	Look back and improve your solution

*/
function pigLatinWord(word) {
  // console.log(word); // apple
  // were use this string to check for vowels
  let vowels = 'aeiouAEIOU';
  // console.log(word[0]); // a

  // if first letter in word is a vowell, add yay to the end of the word
  if (vowels.includes(word[0])) {
    return word + 'yay'
  }

  // lets try and get at least all the letters to print
  for(let i = 0; i < word.length; i++){
    let letter = word[i];
    // console.log('The index is: ', i, 'The value at that index is: ', letter);
    if(vowels.includes(letter)) {
     // console.log('This should output only letters:', letter);
     let first = word.slice(i);
      // we sliced off everything from index of the vowel, to the end of the word
     // console.log(first);//anana

     // this variable holds the extracted string of everything from the starting
     // index to the index of the vowel not including the vowel
     let second = word.slice(0, 1);//b
     // console.log(first, second)
     return first + second + 'ay'
    //  console.log('loook here =====>',first + second + 'ay');
    }
  }

  // return original word if no vowel is found within in the word
  return word;
};

// console.log('return value ==>', pigLatinWord("apple")); //=> "appleyay"
// console.log('return value', pigLatinWord("eat")); //=> "eatyay"
// console.log('return value', pigLatinWord("banana")); //=> "ananabay"
// console.log('return value', pigLatinWord("trash")); //=> "ashtray"
console.log(pigLatinWord('sky'));
//^ edge case
