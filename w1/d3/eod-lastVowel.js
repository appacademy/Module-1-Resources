// Write a function removeLastVowel(word) that takes
// in a string and returns the string with its last
// vowel removed.

// 1. Understand the problem
//      a. function that accepts a string
//      b. return that string w/ last vowel removed
//      c. should handle capital letter as well

// 2. Make a plan (pseudo code)
//      a. define vowels
//      b. iterate through the string, backwards
//      c. check to see if char is a vowel
//      d. if vowel, remove it from string
//      e. return the string

// 3. Carry out the plan (write code)

let removeLastVowel = function (word) {
    let vowels = 'aeiouAEIOU';

    let splitWord = word.split('');
    console.log(splitWord);

    for (let i = splitWord.length - 1; i >= 0; i--) {
        let char = splitWord[i];

        if (vowels.includes(char)) {
            splitWord.splice(i, 1);
            break;
        }
    }
    return splitWord.join('');
}



console.log(removeLastVowel('ate'));
console.log(removeLastVowel('towel'));
console.log(removeLastVowel('pumpkin'));
console.log(removeLastVowel('aReaLLyLonGwOrd'));