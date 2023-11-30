
function mostVowels(sentence) {
  // your code here
let vowels = 'aeiouAEIOU';
let words = sentence.split(' ');
// console.log(words);//[ 'what', 'a', 'wonderful', 'life' ]

let mostVowelWord;
let mostVowelCount = -Infinity;

for(let i = 0; i < words.length; i++) {
 let word = words[i];

 let count = 0;

  for(let i = 0; i < word.length; i++) {
    let letter = word[i];
    // console.log(letter)
    if(vowels.includes(letter)) {
      count++;
    }
  };

  // console.log(word, count);
  if(count > mostVowelCount) {
   mostVowelCount = count;
   mostVowelWord = word;
  }

}
return mostVowelWord;
}

console.log(mostVowels("what a wonderful life")); // "wonderful"




// Your code here
/*

	Polyas
    1. Understand the problem
    * Input: 'snakes _ go _ hiss'
    * Output: 'SnakesGoHiss'
    2. Making a plan
    	a. define a function called snake to camel
        b. we need to remove the underscored from the string - could use split - return an array
        	b. create a new array
        c. iterate through the words after splitting them
        	a. create a new word
            	a. snakes -> S nakes
                	we want to seperate the first letter upper case and rejoin it with the res of the word lowercased
            b. push the new word into a new array
        d. once were done iterating well have an array of words that we can rejoin
    3. Executing the plan
    4. Refactor
*/

function snakeToCamel(string){
  // we need to remove the underscored from the string - could use split - return an array
 let words = string.split('_');
 let newArr = [];
 // console.log(words);[ 'snakes', 'go', 'hiss' ]
  // c. iterate through the words after splitting them
 for(let i = 0; i < words.length; i++) {
   let word = words[i];
   // console.log(word)
   // create a new word
   // a. snakes -> S nakes
   // we want to seperate the first letter upper case and rejoin it with the res of the word lowercased
   // console.log(word[0].toUpperCase() + word.slice(1).toLowerCase());
   let newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
   newArr.push(newWord);
   // console.log(newArr)
 }

 return newArr.join(' ')
}

// console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
// console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
// console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
// console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'
